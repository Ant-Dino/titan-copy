 
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BusinessExceptionComponent = () => {
  const [activityRight, setActivityRight] = useState();
  const [canManageBeq, setCanManageBeq] = useState(false);
  const [tenantName, setTenantName] = useState('');
  const [fromDate, setFromDate] = useState(new Date().toLocaleDateString('en-US'));
  const [throughDate, setThroughDate] = useState(new Date().toLocaleDateString('en-US'));
  const [dateFilterSelection, setDateFilterSelection] = useState([
    { title: 'Custom', value: '1' },
    { title: 'All', value: '19' },
    { title: 'Last 365 Days', value: '2' },
    { title: 'Last 90 Days', value: '90' },
    { title: 'Last 60 Days', value: '60' },
    { title: 'Last 30 Days', value: '30' },
    { title: 'Last 15 Days', value: '15' },
    { title: 'Last 7 Days', value: '7' },
    { title: '24 hrs', value: '24' },
    { title: 'Today', value: '0' },
  ]);
  const [exceptionType, setExceptionType] = useState('');
  const [disableDate, setDisableDate] = useState(true);
  const [isBusy, setIsBusy] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    // Here you should call your API to get user info and update state accordingly
    axios.get('/path-to-get-user-info').then((response) => {
      const { ActivityRight, CanManageBEQ, TenantName } = response.data;
      setActivityRight(ActivityRight);
      setCanManageBeq(CanManageBEQ);
      setTenantName(TenantName);
      // Depending on your logic, you might want to set other states here as well
    }).catch((error) => {
      console.error("Error fetching user info: ", error);
    });
  }, []);

  const handleDateChange = (newDate) => {
    setFromDate(newDate);
  };

  // You will need to add more event handlers and API calls as per your previous code's logic

  return (
    <div>
      <h1>Business Exception Management</h1>
      <div>
        <label>From Date:</label>
        <input 
          type="date" 
          value={fromDate} 
          onChange={(e) => handleDateChange(e.target.value)} 
        />
        <label>Through Date:</label>
        <input 
          type="date" 
          value={throughDate}
          onChange={(e) => setThroughDate(e.target.value)} 
        />
      </div>
      <div>
        {/* Render your filtered data here */}
      </div>
    </div>
  );
}

export default BusinessExceptionComponent;
