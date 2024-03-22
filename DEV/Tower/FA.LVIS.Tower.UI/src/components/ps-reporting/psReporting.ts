import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { DatePicker, Select, Button, notification } from 'antd';
import moment from 'moment';
// Assuming `axios` API calls are exported from services directory as follows
import { InvalidateOrderData, GetReportDetails, GetReportDetailsFilter, GetReportDetailsbyReferenceFilter, GetTenant } from './services/reportingService';
const { RangePicker } = DatePicker;
const { Option } = Select;
function ReportingComponent() {
  const [orderToInvalidate, setOrderToInvalidate] = useState([]);
  const [inValidBtnEnable, setInValidBtnEnable] = useState(true); //Invalidate Button to be disabled.
  const [tenantName, setTenantName] = useState('');
  const [accessRights, setAccessRights] = useState('');
  const [dateRange, setDateRange] = useState([moment(), moment()]);
  const [filterSection, setFilterSection] = useState('7');
  const [disableDate, setDisableDate] = useState(true);
  const [reportData, setReportData] = useState([]);
  const [isBusy, setIsBusy] = useState(false);
  const [validateError, setValidateError] = useState(false);
  useEffect(() => {
    getUserInfo();
    fetchTenant();
  }, []);
  const getUserInfo = () => {
    // Mocking the UserInfo API response
    // This should be replaced with actual UserInfo API call implementation if available
    const userInfo = {
      ActivityRight: 'Admin',
      CanManageTEQ: true,
      CanManageBEQ: true,
    };
    setAccessRights(userInfo.ActivityRight);
    setTenantName('MockTenant');
  };
  const fetchTenant = async () => {
    try {
      const response = await GetTenant();
      setTenantName(response.data);
    } catch (error) {
      console.error('Error fetching tenant info', error);
    }
  };
  const handleDateChange = (dates) => {
    setDateRange(dates);
  };
  const searchReport = async () => {
    setIsBusy(true);
    try {
      if (filterSection === "1") {
        const details = {
          Fromdate: dateRange[0].toString(),
          ThroughDate: dateRange[1].toString(),
        };
        const response = await GetReportDetails(tenantName, details);
        setReportData(response.data);
      } else { 
        const response = await GetReportDetailsFilter(filterSection, tenantName);
        setReportData(response.data);
      }
      setIsBusy(false);
    } catch (error) {
      console.error("Failed to fetch report data", error);
      setIsBusy(false);
    }
  };
  const handleFilterChange = (value) => {
    setFilterSection(value);
    setDisableDate(value !== '1');
  };
  
  const inValidateSelectedOrders = async () => {
    if (inValidBtnEnable) return;
    try {
      await InvalidateOrderData(orderToInvalidate);
      setOrderToInvalidate([]);
      setInValidBtnEnable(true);
      notification.success({
        message: 'Order(s) invalidated successfully',
      });
      searchReport(); // Refresh the report to reflect the changes
    } catch (error) {
      console.error('Failed to invalidate orders', error);
      notification.error({
        message: 'Failed to invalidate orders',
      });
    }
  };
  return (
    <div>
      <RangePicker onChange={handleDateChange} value={dateRange} />
      <Select defaultValue="7" style={{ width: 120 }} onChange={handleFilterChange}>
        <Option value="1">Custom</Option>
        {/* Other options */}
      </Select>
      <Button onClick={searchReport} loading={isBusy}>Search</Button>
      <Button onClick={inValidateSelectedOrders} disabled={inValidBtnEnable}>Invalidate</Button>
      {/* List or table to display reportData */}
    </div>
  );
}
export default ReportingComponent;