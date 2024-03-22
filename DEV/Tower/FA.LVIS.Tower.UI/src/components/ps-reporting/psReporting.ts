 
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { DatePicker, Space } from 'antd';
import { NotificationManager } from 'react-notifications';
import Modal from './Modal'; // Assuming Modal is a component for modalProvider equivalent
import 'antd/dist/antd.css'; // Importing Ant Design CSS for Date Picker

const ReportingComponent = () => {
  const [orderToInvalidate, setOrderToInvalidate] = useState([]);
  const [inValidBtnEnable, setInValidBtnEnable] = useState(true);
  const [loggedTenant, setLoggedTenant] = useState('');
  const [togglingTenant, setTogglingTenant] = useState('');
  const [hasAccess, setHasAccess] = useState(false);
  const [hasSuperAccess, setHasSuperAccess] = useState(false);
  const [fromDate, setFromDate] = useState(null);
  const [throughDate, setThroughDate] = useState(null);
  const [busy, setBusy] = useState(false);
  const [dateFilterSelection, setDateFilterSelection] = useState([
    { 'title': 'Custom', 'value': '1' },
    { 'title': 'Last 90 Days', 'value': '90' },
    { 'title': 'Last 60 Days', 'value': '60' },
    { 'title': 'Last 30 Days', 'value': '30' },
    { 'title': 'Last 15 Days', 'value': '15' },
    { 'title': 'Last 7 Days', 'value': '7' },
    { 'title': '24 hrs', 'value': '24' },
    { 'title': 'Today', 'value': '0' },
  ]);
  const [filterSection, setFilterSection] = useState('7');
  const [disableDate, setDisableDate] = useState(true);
  const [serviceGridData, setServiceGridData] = useState([]);

  useEffect(() => {
    // Assuming to fetch tenant name initially or from global state
    const tenantName = 'SampleTenant'; // Placeholder, replace with actual fetching logic
    setLoggedTenant(tenantName);
    setTogglingTenant(tenantName);
    // Replace with actual permission fetching logic
    fetchUserPermissions();
  }, []);

  const fetchUserPermissions = async () => {
    const { data: userInfo } = await axios.get('/path-to-get-user-info'); // Adjust path accordingly
    const { ActivityRight, CanManageTEQ, CanManageBEQ } = userInfo;
    const activityright = ActivityRight || localStorage.getItem('activityright');
    let access = false;
    let superAccess = false;
    if (activityright === 'Admin' || activityright === 'SuperAdmin') {
      access = true;
    }
    if (activityright === 'SuperAdmin') {
      superAccess = true;
    }
    setHasAccess(access);
    setHasSuperAccess(superAccess);
  };

  const handleDateChange = (dates) => {
    setFromDate(dates[0]);
    setThroughDate(dates[1]);
  };

  const validateDates = () => {
    if (throughDate < fromDate) {
      NotificationManager.error('End date cannot be earlier than the start date');
      return false;
    }
    return true;
  };

  const search = async () => {
    if (!validateDates()) return;
    try {
      setBusy(true);
      const response = await axios.get(`/ReportingController/GetReportDetailsFilter/${filterSection}/${loggedTenant}`);
      setServiceGridData(response.data);
    } catch (error) {
      NotificationManager.error('Error fetching report details');
    } finally {
      setBusy(false);
    }
  };

  const invalidateOrders = async () => {
    if (orderToInvalidate.length === 0) {
      NotificationManager.warning('No orders selected for invalidation.');
      return;
    }
    try {
      await axios.post('ReportingController/InvalidateOrderData', orderToInvalidate);
      NotificationManager.success('Orders invalidated successfully.');
      setOrderToInvalidate([]);
      setInValidBtnEnable(true);
      search(); // Refresh data after invalidation
    } catch (error) {
      NotificationManager.error('Failed to invalidate orders.');
    }
  };

  return (
    <div>
      <Space direction="vertical" size={12}>
        <DatePicker.RangePicker onChange={handleDateChange} />
      </Space>
      {/* Assuming here comes your grid or table component to display serviceGridData */}
      <button disabled={inValidBtnEnable} onClick={invalidateOrders}>Invalidate Orders</button>
    </div>
  );
};

export default ReportingComponent;

