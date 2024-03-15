import React, { useState, useEffect, useContext, useCallback } from 'react';
import axios from 'axios';
import { Modal, Button, Alert } from 'react-bootstrap';
import { confirmAlert } from 'react-confirm-alert'; // Import confirm alert
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UserInfoContext from '../contexts/UserInfoContext'; // Assume we have a context that provides user info
interface ReportDetails {
    Fromdate: string;
    ThroughDate: string;
    ReferenceNoType?: string;
    ReferenceNo?: string;
}
interface Order {
    ServiceRequestId: string;
    InternalRefNum: string | null;
    // Other properties
}
interface ServiceGridData {
    // Define the structure as per your need
}
interface ReportRow {
    ServiceRequestId: string;
    // Other row properties
}
toast.configure();

const PsReportingComponent: React.FC = () => {
    const userInfo = useContext(UserInfoContext);
    const [orderToInvalidate, setOrderToInvalidate] = useState<Order[]>([]);
    const [isValidBtnEnabled, setIsValidBtnEnabled] = useState(true);
    const [tenant, setTenant] = useState(userInfo.tenantname);
    const [dateFilter, setDateFilter] = useState('7');
    const [referenceNoFilter, setReferenceNoFilter] = useState('0');
    const [fromDate, setFromDate] = useState(new Date().toLocaleDateString());
    const [throughDate, setThroughDate] = useState(new Date().toLocaleDateString());
    const [serviceGridData, setServiceGridData] = useState<ServiceGridData[]>([]);
    const [isBusy, setIsBusy] = useState(false);
    const [referenceNo, setReferenceNo] = useState('');
    const [isReferenceNoDisabled, setIsReferenceNoDisabled] = useState(true);
    const [validateError, setValidateError] = useState(false);

    useEffect(() => {
        // On mount, fetch tenant and other initialization if required
        fetchTenant();
    }, []);

    const fetchTenant = async () => {
        try {
            const response = await axios.get(`/Security/GetTenant`);
            setTenant(response.data);
        } catch (error) {
            console.error('Error fetching tenant', error);
        }
    };

    const inValidateConfirm = () => {
        confirmAlert({
            title: 'Confirm to invalidate',
            message: 'Are you sure you want to Invalidate selected order(s)?',
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => inValidateProcess()
                },
                {
                    label: 'No',
                    onClick: () => {}
                }
            ]
        });
    };

    const inValidateProcess = async () => {
        console.log("entered invalidate process method.");
        try {
            const response = await axios.post(`/ReportingController/InvalidateOrderData`, orderToInvalidate);
            const failedOrders = response.data;
            if (!failedOrders.length) {
                toast.success('Record(s) Invalidated Successfully');
                search(); // Refresh the data
            } else {
                toast.error(`Failed to Invalidate following Service Request ID: ${failedOrders.join(', ')}`);
            }
            setOrderToInvalidate([]);
            setIsValidBtnEnabled(true);
        } catch (error) {
            console.error('Error in invalidation process', error);
        }
    };

    const search = useCallback(async () => {
        setIsBusy(true);
        const Details: ReportDetails = dateFilter === "1" ? {
            Fromdate: fromDate,
            ThroughDate: throughDate
        } : {};

        try {
            const response = await axios.post(`/ReportingController/GetReportDetails/${tenant}`, Details);
            setServiceGridData(response.data);
        } catch (error) {
            toast.error('Failed to fetch report details');
        } finally {
            setIsBusy(false);
        }
    }, [dateFilter, fromDate, throughDate, tenant]);

    // Call the search function on mount or when dependencies change, if required
    useEffect(() => {
        search();
    }, [search]);

    // Other methods like editReportRow, loadRFOrder, switchGridInfo, columnToggle could be similarly translated into methods or effects based on dependencies and use cases.

    const handleRowSelectionChange = (row: Order, isSelected: boolean) => {
        if (isSelected) {
            setOrderToInvalidate(prev => [...prev, row]);
            setIsValidBtnEnabled(false);
        } else {
            setOrderToInvalidate(prev => prev.filter(i => i.ServiceRequestId !== row.ServiceRequestId));
            if (orderToInvalidate.length === 1) setIsValidBtnEnabled(true);
        }
    };

    return (
        <div>
            {/* Your UI components and bindings here */}
        </div>
    );
};

export default PsReportingComponent;