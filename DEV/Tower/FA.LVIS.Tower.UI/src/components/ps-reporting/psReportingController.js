import React, { useState, useEffect } from 'react';
import { Modal } from 'react-modal';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import { toast } from 'react-toastify';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
const PsReportingComponent = () => {
    const [orderToInvalidate, setOrderToInvalidate] = useState([]);
    const [inValidBtnEnable, setInValidBtnEnable] = useState(true);
    const [loggedTenant, setLoggedTenant] = useState('');
    const [togglingTenant, setTogglingTenant] = useState('');
    const [activityRight, setActivityRight] = useState('');
    const [canManageTEQ, setCanManageTEQ] = useState(false);
    const [canManageBEQ, setCanManageBEQ] = useState(false);
    const [hasAccess, setHasAccess] = useState(false);
    const [hasSuperAccess, setHasSuperAccess] = useState(false);
    const [fromDate, setFromDate] = useState(new Date());
    const [throughDate, setThroughDate] = useState(new Date());
    const [isBusy, setIsBusy] = useState(false);
    const [filterSection, setFilterSection] = useState('7');
    const [disableDate, setDisableDate] = useState(true);
    const [validateError, setValidateError] = useState(false);
    const [cookies, setCookie] = useCookies(['activityright']);
    const [serviceGridData, setServiceGridData] = useState([]);
    useEffect(() => {
        setLoggedTenant('YourTenant');
        setTogglingTenant('YourTenant');
        const right = cookies['activityright'];
        if (right) {
            setActivityRight(right);
            const isAdminOrSuperAdmin = ['Admin', 'SuperAdmin'].includes(right);
            setHasAccess(isAdminOrSuperAdmin);
            setHasSuperAccess(right === 'SuperAdmin');
        } else {
            // Placeholder for UserInfo API call
        }
    }, [cookies]);
    const inValidateConfirm = () => {
        // Placeholder for confirmation action
    };

    const inValidateProcess = () => {
        setIsBusy(true);
        axios.post('/ReportingController/InvalidateOrderData', orderToInvalidate)
            .then(response => {
                setOrderToInvalidate([]);
                setInValidBtnEnable(true);
                setIsBusy(false);
                const data = response.data;
                if (data.length > 0) {
                    toast.error(`Failed to Invalidate following Service Request ID: ${data.join(',')}`);
                } else {
                    toast.success('Record(s) Invalidated Successfully');
                    search(); // Refresh data
                }
            }).catch(err => {
                console.error('Error during invalidate process: ', err);
                setIsBusy(false);
            });
    };

    const search = () => {
        setIsBusy(true);
        // Placeholder for Search API call
        setIsBusy(false);
    };

    const validateDate = () => {
        const start = new Date(fromDate);
        const end = new Date(throughDate);
        setValidateError(end < start);
    };

    const handleFromDateChange = (date) => {
        setFromDate(date);
        validateDate();
    };

    const handleThroughDateChange = (date) => {
        setThroughDate(date);
        validateDate();
    };

    return (
        <div>
            {/* UI elements and data grid goes here */}
            {/* Example UI element */}
            <DatePicker selected={fromDate} onChange={handleFromDateChange} />
            <DatePicker selected={throughDate} onChange={handleThroughDateChange} />
            <button onClick={inValidateConfirm} disabled={!inValidBtnEnable}>
                Invalidate Selected
            </button>
        </div>
    );
};

export default PsReportingComponent;