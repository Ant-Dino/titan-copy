  
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PsReportingComponent = () => {
  const [orderToInvalidate, setOrderToInvalidate] = useState([]);
  const [inValidBtnEnable, setInValidBtnEnable] = useState(true);
  const [loggedTenant, setLoggedTenant] = useState('');
  const [togglingTenant, setTogglingTenant] = useState('');
  const [hasAccess, setHasAccess] = useState(false);
  const [hasSuperAccess, setHasSuperAccess] = useState(false);
  const [fromDate, setFromDate] = useState('');
  const [throughDate, setThroughDate] = useState('');
  const [dateFilterSelection, setDateFilterSelection] = useState([]);
  const [referenceNoFilterSelection, setReferenceNoFilterSelection] = useState([]);
  const [filterSection, setFilterSection] = useState('7');
  const [disableDate, setDisableDate] = useState(true);
  const [serviceGridData, setServiceGridData] = useState([]);
  const [filterReferenceNoSection, setFilterReferenceNoSection] = useState('0');
  const [referenceNo, setReferenceNo] = useState('');
  const [busyRef, setBusyRef] = useState(false);
  const [showRefNum, setShowRefNum] = useState(false);
  const [showDates, setShowDates] = useState(true);
  const [mynumStyle, setMynumStyle] = useState({});
  const [mydtStyle, setMydtStyle] = useState({ color: '#007acc' });

  useEffect(() => {
    // Initial fetch for tenant details
    fetchTenantInfo();
    // Initialize with current date for from and through dates
    const today = new Date().toISOString().slice(0, 10);
    setFromDate(today);
    setThroughDate(today);
  }, []);

  const fetchTenantInfo = async () => {
    try {
      const response = await axios.get('Security/GetTenant');
      setLoggedTenant(response.data);
      setTogglingTenant(response.data);
      // Dummy logic for access rights, replace with actual conditions
      const hasAccessRights = response.data === 'Admin' || response.data === 'SuperAdmin';
      const hasSuperAccessRights = response.data === 'SuperAdmin';
      setHasAccess(hasAccessRights);
      setHasSuperAccess(hasSuperAccessRights);
    } catch (error) {
      console.error('Error fetching tenant info', error);
    }
  };

  const inValidateConfirm = () => {
    // Assuming implementation of a modal confirmation dialog
    const confirmation = window.confirm('Are you sure you want to Invalidate selected order(s)?');
    if (confirmation) {
      inValidateProcess();
    }
  };

  const inValidateProcess = async () => {
    try {
      const response = await axios.post('ReportingController/InvalidateOrderData', orderToInvalidate);
      if (response.data.length > 0) {
        // handle failure
        console.error('Failed to Invalidate following Service Request ID:', response.data.join(','));
      } else {
        // handle success
        console.log('Record(s) Invalidated Successfully');
        fetchReportDetails(); // assuming this fetches updated grid data
      }
    } catch (error) {
      console.error('Error during the invalidate process', error);
    }
  };

  const fetchReportDetails = async () => {
    // This is a simplified version, replace with actual logic to match AngularJS version
    try {
      if (filterSection === "1") {
        const response = await axios.post(`ReportingController/GetReportDetails/${togglingTenant}`, {
          Fromdate: fromDate,
          ThroughDate: throughDate,
        });
        setServiceGridData(response.data);
      } else {
        const response = await axios.get(`ReportingController/GetReportDetailsFilter/${filterSection}/${togglingTenant}`);
        setServiceGridData(response.data);
      }
    } catch (error) {
      console.error('Error fetching report details', error);
    }
  };

  const handleDateChangeSelect = (item) => {
    setDisableDate(item !== "1");
  };

  const validateDate = () => {
    const startDate = new Date(fromDate);
    const endDate = new Date(throughDate);
    return endDate >= startDate;
  };

  const searchByReferenceNo = async () => {
    if (referenceNo !== '') {
      try {
        const response = await axios.post(`ReportingController/GetReportDetailsbyReferenceFilter/${togglingTenant}`, {
          ReferenceNoType: filterReferenceNoSection,
          ReferenceNo: referenceNo,
        });
        setServiceGridData(response.data);
      } catch (error) {
        console.error('Error during search by reference number', error);
      }
    }
  };

  // Define additional methods as needed by converting the AngularJS logic to React equivalent

  // Example event handlers for UI interactions in JSX
  const onFromDateChange = (e) => setFromDate(e.target.value);
  const onThroughDateChange = (e) => setThroughDate(e.target.value);

  return (
    <div>
      {/* React component UI here */}
    </div>
  );
};

export default PsReportingComponent;
