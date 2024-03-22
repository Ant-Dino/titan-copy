 
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { confirmAlert } from 'react-confirm-alert'; // Import confirm alert 
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import alert css
import DatePicker from "react-datepicker"; // A date picker component
import "react-datepicker/dist/react-datepicker.css";
import { growl } from '@crystallize/react-growl';
import moment from 'moment'; // Date library 

const PsReportingComponent = () => {
  const [orderToInvalidate, setOrderToInvalidate] = useState([]);
  const [inValidBtnEnable, setInValidBtnEnable] = useState(true);
  const [loggedTenant, setLoggedTenant] = useState('');
  const [togglingTenant, setTogglingTenant] = useState('');
  const [hasAccess, setHasAccess] = useState(false);
  const [hasSuperAccess, setHasSuperAccess] = useState(false);
  const [fromDate, setFromDate] = useState(new Date());
  const [throughDate, setThroughDate] = useState(new Date());
  const [busy, setBusy] = useState(false);
  const [dateFilterSelection, setDateFilterSelection] = useState([
    { title: 'Custom', value: '1' },
    { title: 'Last 90 Days', value: '90' },
    { title: 'Last 60 Days', value: '60' },
    { title: 'Last 30 Days', value: '30' },
    { title: 'Last 15 Days', value: '15' },
    { title: 'Last 7 Days', value: '7' },
    { title: '24 hrs', value: '24' },
    { title: 'Today', value: '0' }
  ]);
  const [referenceNoFilterSelection, setReferenceNoFilterSelection] = useState([
    { title: '---Select---', value: '0' },
    { title: 'External Reference Number', value: '1' },
    { title: 'Internal Reference Number', value: '2' },
    { title: 'Customer Reference Number', value: '3' },
    { title: 'Internal Reference Id', value: '4' }
  ]);
  const [filterSection, setFilterSection] = useState('7');
  const [disableDate, setDisableDate] = useState(true);
  const [validateError, setValidateError] = useState(false);
  const [serviceGridData, setServiceGridData] = useState([]);
  const [filterReferenceNoSection, setFilterReferenceNoSection] = useState('0');
  const [referenceNo, setReferenceNo] = useState('');
  const [busyRef, setBusyRef] = useState(false);
  const [showRefNum, setShowRefNum] = useState(false);
  const [showDates, setShowDates] = useState(true);

  useEffect(() => {
    // fetch tenant and column toggle logic on component mount
    fetchTenant();
  }, []);

  const fetchTenant = async () => {
    try {
      const response = await axios.get('/Security/GetTenant');
      setLoggedTenant(response.data);
      setTogglingTenant(response.data);
      // Additional column toggle based logic can be implemented here if needed
    } catch (error) {
      console.error("Failed to fetch tenant", error);
    }
  };

  const handleDateChange = (dates) => {
    const [start, end] = dates;
    setFromDate(start);
    setThroughDate(end);
  };

  const invalidateConfirm = () => {
    confirmAlert({
      title: 'Confirm to Invalidate',
      message: 'Are you sure you want to Invalidate selected order(s)?',
      buttons: [
        {
          label: 'Yes',
          onClick: () => invalidateProcess()
        },
        {
          label: 'No',
          onClick: () => { }
        }
      ]
    });
  };

  const invalidateProcess = async () => {
    try {
      const response = await axios.post('/ReportingController/InvalidateOrderData', orderToInvalidate);
      // Assuming the API response structure; adjust based on actual API response
      if (response.data && response.data.length > 0) {
        growl.error('Failed to Invalidate following Service Request ID:' + response.data.join(','));
      } else {
        growl.success('Record(s) Invalidated Successfully');
        // Refresh grid logic comes here
      }
      setOrderToInvalidate([]);
      setInValidBtnEnable(true);
    } catch (error) {
      console.error("Error in invalidateProcess", error);
    }
  };

  const handleSelectionChange = (selectedItems) => {
    // Update selection logic
  };

  const validateDate = () => {
    const start = new Date(fromDate);
    const end = new Date(throughDate);
    if (end < start) {
      setValidateError(true);
    } else {
      setValidateError(false);
    }
  };

  // Additional handler functions go here

  return (
    <div>
      {/* UI Components and logic implementation here following the converted logic & structure */}
    </div>
  );
};

export default PsReportingComponent;
