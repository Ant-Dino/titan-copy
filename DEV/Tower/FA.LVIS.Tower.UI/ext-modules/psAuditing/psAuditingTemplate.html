import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Spinner, Alert } from 'react-bootstrap';
const PsAuditing = () => {
  const [fromDate, setFromDate] = useState(new Date().toLocaleDateString('en-US'));
  const [throughDate, setThroughDate] = useState(new Date().toLocaleDateString('en-US'));
  const [filterSection, setFilterSection] = useState('7');
  const [disableDate, setDisableDate] = useState(true);
  const [busy, setBusy] = useState(false);
  const [validateError, setValidateError] = useState(false);
  const [auditDetails, setAuditDetails] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const getAuditDetailsFilter = async (filter) => {
    try {
      setBusy(true);
      const response = await axios.get(`/AuditController/GetAuditDetailsFilter/${filter}`);
      setAuditDetails(response.data);
    } catch (error) {
      setErrorMessage(error.message || 'Error fetching audit details');
    } finally {
      setBusy(false);
    }
  };
  const getAuditDetails = async (fromDate, throughDate) => {
    try {
      setBusy(true);
      const response = await axios.post('api/audit/GetAuditDetails', { fromdate: fromDate, ThroughDate: throughDate });
      setAuditDetails(response.data);
    } catch (error) {
      setErrorMessage(error.message || 'Error fetching audit details');
    } finally {
      setBusy(false);
    }
  };
  const validateDate = () => {
    const start = new Date(fromDate);
    const end = new Date(throughDate);
    return end >= start;
  };
  const search = () => {
    if(filterSection === "1") {
      if(!validateDate()) {
        setValidateError(true);
        setErrorMessage('End date cannot be earlier than the Start date');
        return;
      }
      getAuditDetails(fromDate, throughDate);
    } else {
      getAuditDetailsFilter(filterSection);
    }
  };
  useEffect(() => {
    if (filterSection !== "1") {
      setDisableDate(true);
      search();
    } else {
      setDisableDate(false);
    }
  }, [filterSection]);
  return (
    <div className="ps-dashboard-header">
      <div className="wrapper">
        <div className="form-group">
          <label>Start Date: </label>
          <input disabled={disableDate} value={fromDate} onChange={(e) => setFromDate(e.target.value)} type="date" />
          <label> End Date: </label>
          <input disabled={disableDate} value={throughDate} onChange={(e) => setThroughDate(e.target.value)} type="date" />
          <label>Date Filter:</label>
          <select onChange={(e) => setFilterSection(e.target.value)} value={filterSection}>
            {/* Options could be dynamically generated */}
          </select>
          {busy ? (<Spinner animation="border" />) : (<i className="fa fa-search" onClick={search}></i>)}
          {validateError && <Alert variant="danger">End date cannot be earlier than the Start date</Alert>}
          {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
        </div>
      </div>
    </div>
  );
};
export default PsAuditing;