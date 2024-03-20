import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Modal, Button, Form } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { Growl } from 'primereact/growl';

const PsExceptionComponent = () => {
    const [hasResubmitAccess, setHasResubmitAccess] = useState(false);
    const [showMenuLogInfo, setShowMenuLogInfo] = useState(true);
    const [showMenuLogInfoFastWebOrders, setShowMenuLogInfoFastWebOrders] = useState(false);
    const [fromDate, setFromDate] = useState(new Date());
    const [throughDate, setThroughDate] = useState(new Date());
    const [dateFilterSelection, setDateFilterSelection] = useState('24');
    const [disableDate, setDisableDate] = useState(true);
    const [busy, setBusy] = useState(false);
    const [typeCodeStatus, setTypeCodeStatus] = useState(false);
    const [exceptionData, setExceptionData] = useState([]);
    const [filterReferenceNoSection, setFilterReferenceNoSection] = useState('0');
    const [referenceNo, setReferenceNo] = useState('');
    const [busyRef, setBusyRef] = useState(false);
    const [disableReferenceNo, setDisableReferenceNo] = useState(true);
    const [validateError, setValidateError] = useState(false);
    const [growl, setGrowl] = useState();

    useEffect(() => {
        // Simulate $rootScope logic for access control
        const activityRight = localStorage.getItem('activityright') || 'User';
        const canManageTeq = localStorage.getItem('canmanageteq') || false;
        setHasResubmitAccess(canManageTeq);
        setShowMenuLogInfo(localStorage.getItem('tenantname') === 'LVIS');
        setShowMenuLogInfoFastWebOrders((localStorage.getItem('tenantname') === 'LVIS' || localStorage.getItem('tenantname') === 'Air Traffic Control') && activityRight === 'SuperAdmin');
    }, []);

    const validateDate = () => {
        setValidateError(throughDate < fromDate);
    };

    const handleSearch = async () => {
        setBusy(true);
        validateDate();
        if (validateError) {
            growl.show({severity: 'error', summary: 'Date Validation', detail: 'End date cannot be earlier than the start date.'});
            return;
        }

        try {
            const response = await axios.post('api/ExceptionController/GetTEQExceptions', {
                fromDate: fromDate.toString(),
                throughDate: throughDate.toString(),
                statusId: 0,
                typeCodeStatus,
            });
            setExceptionData(response.data);
            setBusy(false);
        } catch (error) {
            growl.show({severity: 'error', summary: 'API Error', detail: 'There was an error Loading exceptions'});
            setBusy(false);
        }
    };

    return (
        <div>
            {/* Growl for messages */}
            <Growl ref={(el) => setGrowl(el)} />

            <DatePicker selected={fromDate} onChange={date => setFromDate(date)} />
            <DatePicker selected={throughDate} onChange={date => setThroughDate(date)} />
            <Button onClick={handleSearch}>Search</Button>

            {busy && <p>Loading...</p>}

            {/* Add more UI logic as per the requirements */}
        </div>
    );
};

export default PsExceptionComponent;
