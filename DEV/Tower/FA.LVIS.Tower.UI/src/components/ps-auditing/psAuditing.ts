 
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Modal, Button, Form } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { growl } from 'growl-alert';
import 'growl-alert/dist/growl-alert.css';

const PsAuditingComponent = () => {
  const [activityRight, setActivityRight] = useState('');
  const [canManageTEQ, setCanManageTEQ] = useState(false);
  const [canManageBEQ, setCanManageBEQ] = useState(false);
  const [fromDate, setFromDate] = useState(new Date());
  const [throughDate, setThroughDate] = useState(new Date());
  const [dateFilterSelection, setDateFilterSelection] = useState('7');
  const [disableDate, setDisableDate] = useState(true);
  const [auditDetails, setAuditDetails] = useState([]);
  const [busy, setBusy] = useState(false);
  const [validateError, setValidateError] = useState(false);

  useEffect(() => {
    // Fetch user info on mount
    fetchUserInfo();
  }, []);

  const fetchUserInfo = async () => {
    try {
      const response = await axios.get('/api/user/info'); // Adjust URL as needed
      const { ActivityRight, CanManageTEQ, CanManageBEQ } = response.data;
      setActivityRight(ActivityRight);
      setCanManageTEQ(CanManageTEQ);
      setCanManageBEQ(CanManageBEQ);
    } catch (error) {
      console.error('Error fetching user info:', error);
    }
  };

  const validateDate = () => {
    setValidateError(throughDate < fromDate);
  };

  const changeSelect = (selection) => {
    const isCustom = selection === '1';
    setDisableDate(!isCustom);
  };

  const search = async () => {
    if (!fromDate || !throughDate) {
      growl.error("Please enter a valid Start/End date");
      return;
    }
    validateDate();
    if (validateError) return growl.error("End date cannot be earlier than the Start date");

    setBusy(true);
    try {
      const response = await axios.post('/api/audit/GetAuditDetails', {
        search: '', // Adjust as needed
        Fromdate: fromDate.toString(),
        ThroughDate: throughDate.toString(),
      });
      setAuditDetails(response.data);
    } catch (error) {
      growl.error(error.message);
    } finally {
      setBusy(false);
    }
  };

  return (
    <div>
      <h2>Audit Information</h2>
      {activityRight === 'SuperAdmin' || activityRight === 'Admin' ? (
        <>
          {/* Date selection and filtering UI here */}
          <DatePicker selected={fromDate} onChange={date => setFromDate(date)} />
          <DatePicker selected={throughDate} onChange={date => setThroughDate(date)} />
          <Button onClick={search}>Search</Button>
          {auditDetails.map(detail => (
            <div key={detail.id}>{/* Display audit information here */}</div>
          ))}
        </>
      ) : (
        <div>You do not have access to view this page</div>
      )}
    </div>
  );
};

export default PsAuditingComponent;
