import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Modal, Button } from 'react-bootstrap';
import { useCookies } from 'react-cookie';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
function AuditingComponent() {
  const [activityRight, setActivityRight] = useState('');
  const [hasAccess, setHasAccess] = useState(false);
  const [fromDate, setFromDate] = useState(new Date());
  const [throughDate, setThroughDate] = useState(new Date());
  const [dateFilterSelection, setDateFilterSelection] = useState('7');
  const [disableDate, setDisableDate] = useState(true);
  const [validateError, setValidateError] = useState(false);
  const [serviceGridData, setServiceGridData] = useState([]);
  const [busy, setBusy] = useState(false);
  const [cookies] = useCookies(['activityright']);
  useEffect(() => {
    const userActivityRight = cookies.activityright || activityRight;
    setActivityRight(userActivityRight);
    checkAccessRights(userActivityRight);
    fetchAuditDetails();
  }, [activityRight, dateFilterSelection, fromDate, throughDate]);
  function checkAccessRights(userActivityRight) {
    if (userActivityRight === 'Admin' || userActivityRight === 'SuperAdmin') {
      setHasAccess(true);
    } else {
      setHasAccess(false);
      // Redirect logic or modal showing no access might go here
    }
  }
  function handleDateChange(dates) {
    const [start, end] = dates;
    setFromDate(start);
    setThroughDate(end);
    validateDate(start, end);
  }
  function validateDate(start, end) {
    if (end < start) {
      setValidateError(true);
    } else {
      setValidateError(false);
    }
  }
  function changeSelect(item) {
    if (item === '1') {
      setDisableDate(false);
    } else {
      setDisableDate(true);
    }
  }
  function fetchAuditDetails() {
    setBusy(true);
    let apiUrl = 'api/audit/GetAuditDetails/';
    if (dateFilterSelection === "1") {
      if (!fromDate || !throughDate || validateError) {
        alert("Please enter a valid Start/End date or correct the date range");
        setBusy(false);
        return;
      }
      apiUrl += `?fromDate=${fromDate}&toDate=${throughDate}`;
    } else {
      apiUrl += dateFilterSelection;
    }
    axios.get(apiUrl)
      .then(response => {
        setServiceGridData(response.data);
        setBusy(false);
      })
      .catch(error => {
        console.error("There was an error!", error);
        setBusy(false);
      });
  }
  return (
    <div>
      {hasAccess ? (
        <>
          <DatePicker
            selected={fromDate}
            onChange={date => setFromDate(date)}
            selectsStart
            startDate={fromDate}
            endDate={throughDate}
          />
          <DatePicker
            selected={throughDate}
            onChange={date => setThroughDate(date)}
            selectsEnd
            startDate={fromDate}
            endDate={throughDate}
            minDate={fromDate}
          />
          <button disabled={busy} onClick={() => fetchAuditDetails()}>
            {busy ? 'Loading...' : 'Fetch Audit Details'}
          </button>
          {/* Display the grid or serviceGridData here */}
        </>
      ) : (
        <div>You are not authorized to view this page.</div>
      )}
    </div>
  );
}
export default AuditingComponent;