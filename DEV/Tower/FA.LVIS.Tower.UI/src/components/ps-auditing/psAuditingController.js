import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Modal, Button } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { toast } from 'react-toastify';
const psAuditingComponent = () => {
  const [activityRight, setActivityRight] = useState('');
  const [canManageTEQ, setCanManageTEQ] = useState(false);
  const [canManageBEQ, setCanManageBEQ] = useState(false);
  const [hasAccess, setHasAccess] = useState(false);
  const [fromDate, setFromDate] = useState(new Date());
  const [throughDate, setThroughDate] = useState(new Date());
  const [filterSelection, setFilterSelection] = useState('7');
  const [disableDate, setDisableDate] = useState(true);
  const [validateError, setValidateError] = useState(false);
  const [auditData, setAuditData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const getUserInfo = async () => {
    try {
      const response = await axios.get('/getUserInfo');
      setActivityRight(response.data.ActivityRight);
      setCanManageTEQ(response.data.CanManageTEQ);
      setCanManageBEQ(response.data.CanManageBEQ);
      checkAccess(response.data.ActivityRight);
    } catch (error) {
      console.error('Error fetching user info:', error);
    }
  };
  const checkAccess = (right) => {
    if (right === 'Admin' || right === 'SuperAdmin') {
      setHasAccess(true);
    } else {
      toast.error('You are not authorized to view this page.');
      // Redirecting logic here
    }
  };
  const validateDate = () => {
    setValidateError(throughDate < fromDate);
  };
  const search = async () => {
    if (filterSelection === '1') {
      if (!fromDate || !throughDate || validateError) {
        toast.error("Please enter a valid Start/End date");
        return;
      }
    }
    setIsLoading(true);
    try {
      const response = await axios.post('/api/audit/GetAuditDetails', {
        search: '', // Replace with actual search query if applicable
        Fromdate: fromDate.toString(),
        ThroughDate: throughDate.toString(),
      });
      setAuditData(response.data);
    } catch (error) {
      console.error('Error fetching audit data:', error);
      toast.error('Error fetching audit data');
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getUserInfo();
  }, []);
  useEffect(() => {
    search();
  }, [filterSelection, fromDate, throughDate]);
  return (
    <div>
      {hasAccess ? (
        <div>
          {/* UI components for displaying audit data and related controls */}
          <DatePicker selected={fromDate} onChange={(date) => setFromDate(date)} />
          <DatePicker selected={throughDate} onChange={(date) => setThroughDate(date)} />
          {validateError && <div>Please select a valid date range</div>}
          <button onClick={search}>Search</button>
          {isLoading ? (
            <div>Loading...</div>
          ) : (
            <div>
              {/* Display audit data */}
            </div>
          )}
        </div>
      ) : (
        <div>You do not have access to this page.</div>
      )}
    </div>
  );
};
export default psAuditingComponent;