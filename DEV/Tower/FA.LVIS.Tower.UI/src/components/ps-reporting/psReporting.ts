 
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { growl } from 'growl-alert';
import 'growl-alert/dist/growl-alert.css';

const PsReportingComponent = () => {
    const [orderToInvalidate, setOrderToInvalidate] = useState([]);
    const [inValidBtnEnable, setInValidBtnEnable] = useState(true);
    const [loggedTenant, setLoggedTenant] = useState('');
    const [togglingTenant, setTogglingTenant] = useState('');
    const [hasAccess, setHasAccess] = useState(false);
    const [hasSuperAccess, setHasSuperAccess] = useState(false);
    const [fromDate, setFromDate] = useState(new Date());
    const [throughDate, setThroughDate] = useState(new Date());
    const [busy, setBusy] = useState(false);
    const [disableDate, setDisableDate] = useState(true);
    const [validateError, setValidateError] = useState(false);
    const [filterSection, setFilterSection] = useState('7');
    const [filterReferenceNoSection, setFilterReferenceNoSection] = useState('0');
    const [referenceNo, setReferenceNo] = useState('');
    const [busyRef, setBusyRef] = useState(false);
    const [disableReferenceNo, setDisableReferenceNo] = useState(true);
    const [tenant, setTenant] = useState('');
    const [serviceGridData, setServiceGridData] = useState([]);

    // Assuming getUserRights is a method to get user rights
    useEffect(() => {
        axios.get('/getUserRights').then(response => {
            const { ActivityRight, CanManageTEQ, CanManageBEQ } = response.data;
            if (['Admin', 'SuperAdmin'].includes(ActivityRight)) {
                setHasAccess(true);
            }
            if (ActivityRight === 'SuperAdmin') {
                setHasSuperAccess(true);
            }
        });
    }, []);

    const validateDate = () => {
        if (throughDate < fromDate) {
            setValidateError(true);
        } else {
            setValidateError(false);
        }
    };

    const search = () => {
        setBusy(true);
        let url = '/ReportingController/GetReportDetailsFilter/' + filterSection + '/' + togglingTenant;
        if (filterSection === "1") {
            url = '/ReportingController/GetReportDetails/' + togglingTenant;
        }
        axios.get(url).then(response => {
            setServiceGridData(response.data);
            setBusy(false);
        });
    };

    const inValidateProcess = () => {
        axios.post('/ReportingController/InvalidateOrderData', orderToInvalidate)
            .then(response => {
                if (response.data.length > 0) {
                    growl.error('Failed to Invalidate following Service Request ID:' + response.data.join(','));
                } else {
                    growl.success('Record(s) Invalidated Successfully');
                    search(); // Re-fetch the data
                }
                setOrderToInvalidate([]);
                setInValidBtnEnable(true);
            });
    };

    const handleChangeFilterSection = (event) => {
        setFilterSection(event.target.value);
        setDisableDate(event.target.value !== '1');
    };

    return (
        <div>
            {/* Render UI based on the state */}
            {/* DatePickers and other inputs */}
            <DatePicker selected={fromDate} onChange={date => setFromDate(date)} />
            <DatePicker selected={throughDate} onChange={date => setThroughDate(date)} />
            <button disabled={inValidBtnEnable} onClick={inValidateProcess}>Invalidate Order</button>
            <div>
                {/* Map through serviceGridData and display it */}
                {serviceGridData.map((data, index) => (
                    <div key={index}>
                        {/* Custom data display */}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PsReportingComponent;
