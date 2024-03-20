 
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Modal, Button } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import {useCookies} from 'react-cookie';

function AuditingComponent() {
  const [activityRight, setActivityRight] = useState('');
  const [canManageTEQ, setCanManageTEQ] = useState(false);
  const [canManageBEQ, setCanManageBEQ] = useState(false);
  const [hasAccess, setHasAccess] = useState(false);
  const [fromDate, setFromDate] = useState(new Date());
  const [throughDate, setThroughDate] = useState(new Date());
  const [dateFilterSelection, setDateFilterSelection] = useState('7');
  const [disableDate, setDisableDate] = useState(true);
  const [validateError, setValidateError] = useState(false);
  const [auditDetails, setAuditDetails] = useState([]);
  const [busy, setBusy] = useState(false);
  const [cookies, setCookie] = useCookies(['activityright']);

  useEffect(() => {
    const fetchUserRights = async () => {
      try {
        const response = await axios.get('/path/to/user-info');
        setActivityRight(response.data.ActivityRight);
        setCanManageTEQ(response.data.CanManageTEQ);
        setCanManageBEQ(response.data.CanManageBEQ);
        checkAccessRights(response.data.ActivityRight);
      } catch (error) {
        console.log(error);
      }
    };

    fetchUserRights();
  }, []);

  const checkAccessRights = (activityRight) => {
    if (activityRight === 'Admin' || activityRight === 'SuperAdmin') {
      setHasAccess(true);
    } else {
      setHasAccess(false);
      alert('You are not authorized to view this page.');
      // Redirect to dashboard or display modal
    }
  };

  const handleDateChange = (dates) => {
    const [start, end] = dates;
    setFromDate(start);
    setThroughDate(end);
  };

  const validateDate = () => {
    setValidateError(throughDate < fromDate);
  };

  const changeSelect = (item) => {
    setDisableDate(item === '1' ? false : true);
  };

  const search = async () => {
    validateDate();
    if (validateError) return;

    setBusy(true);
    try {
      const response = await axios.get(`/AuditController/GetAuditDetailsFilter/${dateFilterSelection}`);
      setAuditDetails(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setBusy(false);
    }
  };

  return (
    <div>
      {hasAccess ? (
        <div>
          {/* UI Components and logic here */}
          <DatePicker
            selected={fromDate}
            onChange={handleDateChange}
            startDate={fromDate}
            endDate={throughDate}
            selectsRange
            inline
          />
          <button onClick={search}>Search</button>
        </div>
      ) : (
        <div>You do not have access to this page.</div>
      )}
    </div>
  );
}

export default AuditingComponent;
