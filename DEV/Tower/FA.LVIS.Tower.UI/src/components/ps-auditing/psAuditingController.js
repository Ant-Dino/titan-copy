import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Modal, Button } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useCookies } from 'react-cookie';
const PsAuditingComponent = () => {
    const [userRights, setUserRights] = useState({ activityright: '', canmanageteq: false, canmanagebeq: false });
    const [hasAccess, setHasAccess] = useState(false);
    const [fromDate, setFromDate] = useState(new Date());
    const [throughDate, setThroughDate] = useState(new Date());
    const [filterSection, setFilterSection] = useState('7');
    const [disableDate, setDisableDate] = useState(true);
    const [validateError, setValidateError] = useState(false);
    const [gridData, setGridData] = useState([]);
    const [busy, setBusy] = useState(false);
    const [cookies] = useCookies(['activityright']);
    useEffect(() => {
        const activityright = cookies.activityright ? cookies.activityright : 'User';
        setUserRights(prevState => ({ ...prevState, activityright }));
        if (activityright === 'SuperAdmin' || activityright === 'Admin') {
            setHasAccess(true);
        } else {
            alert('You are not authorized to view this page.');
            // Ideally, redirect to dashboard or appropriate page
        }
    }, [cookies.activityright]);
    const validateDate = () => {
        setValidateError(fromDate > throughDate);
    };
    const changeSelect = (itemValue) => {
        setDisableDate(itemValue === '1');
    };
    const search = () => {
        if (filterSection === "1") {
            if (!fromDate || !throughDate || validateError) {
                alert("Please enter a valid Start/End date or ensure that the End date is not earlier than the Start date");
                return;
            }

            const Details = {
                search: '', // Assuming there's a search text state e.g., search
                Fromdate: fromDate.toString(),
                ThroughDate: throughDate.toString()
            };
            setBusy(true);
            axios.post('api/audit/GetAuditDetails/', Details)
                .then(response => {
                    setBusy(false);
                    setGridData(response.data);
                }).catch(error => {
                    alert(error.response.data);
                    setBusy(false);
                });
        } else {
            setBusy(true);
            axios.get('AuditController/GetAuditDetailsFilter/' + filterSection)
                .then(response => {
                    setBusy(false);
                    setGridData(response.data);
                }).catch(error => {
                    alert(error.response.data);
                    setBusy(false);
                });
        }
    };
    return (
        <div>
            {hasAccess ? (
                <div>
                    {/* Component content */}
                    <DatePicker selected={fromDate} onChange={date => setFromDate(date)} />
                    <DatePicker selected={throughDate} onChange={date => setThroughDate(date)} />
                    <button onClick={search}>Search</button>
                    {busy && <p>Loading...</p>}
                    {gridData.map((data, index) => (
                        <div key={index}>
                            {/* Render your grid data */}
                        </div>
                    ))}
                </div>
            ) : (
                <div>You do not have permission to view this content.</div>
            )}
        </div>
    );
};
export default PsAuditingComponent;