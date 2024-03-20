import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Modal, Button } from 'react-bootstrap';
import { useCookies } from 'react-cookie';
import { format, subDays } from 'date-fns';

const AuditingComponent = () => {
  const [cookies, setCookie] = useCookies(['activityright']);
  const [activityRight, setActivityRight] = useState(cookies.activityright || '');
  const [hasAccess, setHasAccess] = useState(false);
  const [fromDate, setFromDate] = useState(format(new Date(), 'MM/dd/yyyy'));
  const [throughDate, setThroughDate] = useState(format(new Date(), 'MM/dd/yyyy'));
  const [dateFilterSelection, setDateFilterSelection] = useState('7');
  const [disableDate, setDisableDate] = useState(true);
  const [auditData, setAuditData] = useState([]);
  const [validateError, setValidateError] = useState(false);
  const [busy, setBusy] = useState(false);

  // Date filter options
  const dateOptions = [
    { title: 'Custom', value: '1' },
    { title: 'Last 90 Days', value: '90' },
    { title: 'Last 60 Days', value: '60' },
    { title: 'Last 30 Days', value: '30' },
    { title: 'Last 15 Days', value: '15' },
    { title: 'Last 7 Days', value: '7' },
    { title: '24 hrs', value: '24' },
    { title: 'Today', value: '0' }
  ];

  useEffect(() => {
    // Simulating getUser event response
    const fetchUserData = async () => {
      try {
        const response = await axios.get('/api/user/info'); // Adjust the API endpoint as needed
        setActivityRight(response.data.ActivityRight);
        setUserAccessRights(response.data);
      } catch (error) {
        console.error('Error fetching user info:', error);
      }
    };

    if (!activityRight) {
      fetchUserData();
    } else {
      setUserAccessRights({ ActivityRight: activityRight });
    }
  }, [activityRight]);

  const setUserAccessRights = (userInfo) => {
    const { ActivityRight } = userInfo;
    if (['Admin', 'SuperAdmin'].includes(ActivityRight)) {
      setHasAccess(true);
    } else {
      setHasAccess(false);
      // Redirect user or show unauthorized access UI
    }
    setCookie('activityright', ActivityRight, { path: '/' });
  };

  const validateDate = () => {
    const start = new Date(fromDate);
    const end = new Date(throughDate);
    setValidateError(end < start);
  };

  const changeDateFilter = (event) => {
    const { value } = event.target;
    setDisableDate(value !== '1');
    setDateFilterSelection(value);
  };

  const searchAudits = async () => {
    validateDate();
    if (validateError) return;
    setBusy(true);
    try {
      const response = await axios.post('/api/audit/GetAuditDetails', {
        search: '', // Assuming there's a search input to pass along
        Fromdate: fromDate,
        ThroughDate: throughDate,
      });
      setAuditData(response.data);
    } catch (error) {
      console.error('Failed to load audit data:', error);
    } finally {
      setBusy(false);
    }
  };

  useEffect(() => {
    searchAudits();
  }, [dateFilterSelection, fromDate, throughDate]);

  return (
    <div>
      {/* Access check UI */}
      {!hasAccess && <div>You are not authorized to view this page.</div>}

      {/* Example of date filter and search UI */}
      <div>
        <select value={dateFilterSelection} onChange={changeDateFilter}>
          {dateOptions.map(option => (
            <option key={option.value} value={option.value}>{option.title}</option>
          ))}
        </select>
        <button onClick={searchAudits}>Search</button>
      </div>

      {/* List or table of audit data */}
      <div>
        {busy ? (
          <div>Loading...</div>
        ) : (
          <table>
            {/* Table rows for audit data should be rendered here */}
          </table>
        )}
      </div>
    </div>
  );
};

export default AuditingComponent;