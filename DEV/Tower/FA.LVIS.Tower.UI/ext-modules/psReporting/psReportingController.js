import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { format } from 'date-fns';
import Modal from './Modal'; // Assuming this is the modal component to be used for edit and confirm operations
import { useGrowl } from './useGrowl'; // Assuming a custom hook for handling growl notifications
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
const PsReporting = () => {
    const [orderToInvalidate, setOrderToInvalidate] = useState([]);
    const [inValidBtnEnable, setInValidBtnEnable] = useState(true);
    const [tenantName, setTenantName] = useState('');
    const [activityRight, setActivityRight] = useState('');
    const [hasAccess, setHasAccess] = useState(false);
    const [hasSuperAccess, setHasSuperAccess] = useState(false);
    const [fromDate, setFromDate] = useState(new Date());
    const [throughDate, setThroughDate] = useState(new Date());
    const [dateFilterSelection, setDateFilterSelection] = useState('7');
    const [disableDate, setDisableDate] = useState(true);
    const [validateError, setValidateError] = useState(false);
    const [serviceGridData, setServiceGridData] = useState([]);
    const [filterReferenceNoSection, setFilterReferenceNoSection] = useState('0');
    const [referenceNo, setReferenceNo] = useState('');
    const [busyRef, setBusyRef] = useState(false);
    const [toggleTenant, setToggleTenant] = useState('');
    const [showRefNum, setShowRefNum] = useState(false);
    const [showDates, setShowDates] = useState(true);
    const { growlError, growlSuccess } = useGrowl();
    useEffect(() => {
        const fetchTenant = async () => {
            try {
                const response = await axios.get('Security/GetTenant');
                setTenantName(response.data);
                setToggleTenant(response.data);
            } catch (error) {
                console.error("Error fetching tenant", error);
            }
        }
        fetchTenant();
    }, []);
    const validateDate = () => {
        if (throughDate < fromDate) {
            setValidateError(true);
        } else {
            setValidateError(false);
        }
    };
    const inValidateConfirm = () => {
        // Modal confirmation logic here
    };
    const inValidateProcess = async () => {
        try {
            const response = await axios.post('ReportingController/InvalidateOrderData', orderToInvalidate);
            setOrderToInvalidate([]);
            if (response.data.length > 0) {
                growlError('Failed to Invalidate following Service Request ID:' + response.data.join(','));
            } else {
                growlSuccess('Record(s) Invalidated Successfully');
                fetchData(); // Refetch data
            }
        } catch (error) {
            console.error("Error in invalidation", error);
        }
    };
    const fetchData = async () => {
        // Fetch data logic here based on conditions, similar to search()
    };
    const handleChangeFromDate = (date) => {
        setFromDate(date);
        validateDate();
    };
    const handleChangeThroughDate = (date) => {
        setThroughDate(date);
        validateDate();
    };
    return (
        <div>
            {/* Date Selectors */}
            <DatePicker selected={fromDate} onChange={handleChangeFromDate} />
            <DatePicker selected={throughDate} onChange={handleChangeThroughDate} />
            {/* Other UI Components */}
            <button disabled={inValidBtnEnable} onClick={inValidateConfirm}>Invalidate Orders</button>
            {/* Implement other functionalities and UI Components as per requirement */}
        </div>
    );
};
export default PsReporting;