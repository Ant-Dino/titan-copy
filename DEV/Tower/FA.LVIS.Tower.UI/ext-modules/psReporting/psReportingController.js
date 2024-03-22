 
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { toast } from 'react-toastify';
// Import Axios API calls from the services directory
import { invalidateOrder, getReportDetails, getReportDetailsFilter, getReportDetailsByReferenceFilter, getTenant, editReportRow } from './services/psReportingService';

const PsReportingComponent = () => {
    const [orderToInvalidate, setOrderToInvalidate] = useState([]);
    const [inValidBtnEnable, setInValidBtnEnable] = useState(true);
    const [loggedTenant, setLoggedTenant] = useState('');
    const [togglingTenant, setTogglingTenant] = useState('');
    const [hasAccess, setHasAccess] = useState(false);
    const [hasSuperAccess, setHasSuperAccess] = useState(false);
    const [fromDate, setFromDate] = useState(new Date());
    const [throughDate, setThroughDate] = useState(new Date());
    const [dateFilterSelection, setDateFilterSelection] = useState([
        { 'title': 'Custom', 'value': '1' },
        { 'title': 'Last 90 Days', 'value': '90' },
        { 'title': 'Last 60 Days', 'value': '60' },
        { 'title': 'Last 30 Days', 'value': '30' },
        { 'title': 'Last 15 Days', 'value': '15' },
        { 'title': 'Last 7 Days', 'value': '7' },
        { 'title': '24 hrs', 'value': '24' },
        { 'title': 'Today', 'value': '0' }
    ]);
    const [filterSection, setFilterSection] = useState('7');
    const [disableDate, setDisableDate] = useState(true);
    const [serviceGridData, setServiceGridData] = useState([]);
    const [filterReferenceNoSection, setFilterReferenceNoSection] = useState('0');
    const [referenceNo, setReferenceNo] = useState('');
    const [busyRef, setBusyRef] = useState(false);
    const [disableReferenceNo, setDisableReferenceNo] = useState(true);
    const [tenant, setTenant] = useState('');
    const [validateError, setValidateError] = useState(false);

    useEffect(() => {
        getTenantInfo();
    }, []);

    const getTenantInfo = async () => {
        try {
            const response = await getTenant();
            setTenant(response.data);
            setLoggedTenant(response.data);
            setTogglingTenant(response.data);
        } catch (error) {
            console.error('Failed to fetch tenant info', error);
        }
    };

    const inValidateConfirm = () => {
        if (window.confirm('Are you sure you want to Invalidate selected order(s)?')) {
            inValidateProcess();
        }
    };

    const inValidateProcess = async () => {
        try {
            const response = await invalidateOrder(orderToInvalidate);
            setOrderToInvalidate([]);
            if (response.data.length > 0) {
                toast.error(`Failed to Invalidate following Service Request ID: ${response.data.join(',')}`);
                setInValidBtnEnable(true);
            } else {
                toast.success('Record(s) Invalidated Successfully');
                fetchReportDetails();
            }
        } catch (error) {
            console.error('Invalidate process failed', error);
        }
    };

    const fetchReportDetails = async () => {
        try {
            if (filterSection === "1") {
                const response = await getReportDetails(togglingTenant, { Fromdate: fromDate.toString(), ThroughDate: throughDate.toString() });
                setServiceGridData(response.data);
            } else {
                const response = await getReportDetailsFilter(filterSection, togglingTenant);
                setServiceGridData(response.data);
            }
        } catch (error) {
            console.error('Failed to fetch report details', error);
        }
    };

    const searchByReferenceNo = async () => {
        if (referenceNo) {
            try {
                const response = await getReportDetailsByReferenceFilter(togglingTenant, {
                    ReferenceNoType: filterReferenceNoSection,
                    ReferenceNo: referenceNo
                });
                setServiceGridData(response.data);
                setBusyRef(false);
            } catch (error) {
                console.error('Search by reference no failed', error);
            }
        }
    };

    const validateDate = () => {
        const StartDate = new Date(fromDate);
        const EndDate = new Date(throughDate);
        setValidateError(EndDate < StartDate);
    };

    return (
        <div>
            {/* Display components and bind them accordingly */}
        </div>
    );
};

export default PsReportingComponent;
