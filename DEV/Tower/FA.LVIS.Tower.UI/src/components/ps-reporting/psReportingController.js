import React, { useState, useEffect } from 'react';
const usePsReportingLogic = () => {
  const [orderToInvalidate, setOrderToInvalidate] = useState([]);
  const [inValidBtnEnable, setInValidBtnEnable] = useState(true);
  const [loggedTenant, setLoggedTenant] = useState('');
  const [togglingTenant, setTogglingTenant] = useState('');
  const [hasAccess, setHasAccess] = useState(false);
  const [hasSuperAccess, setHasSuperAccess] = useState(false);
  const [fromDate, setFromDate] = useState('');
  const [throughDate, setThroughDate] = useState('');
  const [busy, setBusy] = useState(false);
  const [dateFilterSelection, setDateFilterSelection] = useState([
    { 'title': 'Custom', 'value': '1' },
    { 'title': 'Last 90 Days', 'value': '90' },
    { 'title': 'Last 60 Days', 'value': '60' },
    { 'title': 'Last 30 Days', 'value': '30' },
    { 'title': 'Last 15 Days', 'value': '15' },
    { 'title': 'Last 7 Days', 'value': '7' },    
    { 'title': '24 hrs', 'value': '24' },
    { 'title': 'Today', 'value': '0' }
  ]);
  const [referencenoFilterSelection, setReferencenoFilterSelection] = useState([
    { 'title': '---Select---', 'value': '0' },
    { 'title': 'External Reference Number', 'value': '1' },
    { 'title': 'Internal Reference Number', 'value': '2' },
    { 'title': 'Customer Reference Number', 'value': '3' },
    { 'title': 'Internal Reference Id', 'value': '4' }
  ]);
  const [filterSection, setFilterSection] = useState('7');
  const [disableDate, setDisableDate] = useState(true);
  const [serviceGrid, setServiceGrid] = useState({ data: [] });
  const [validateError, setValidateError] = useState(false);
  useEffect(() => {
    setFromDate(new Date().toLocaleDateString('en-US'));
    setThroughDate(new Date().toLocaleDateString('en-US'));
  }, []);
  const inValidateConfirm = () => {
    alert('Are you sure you want to Invalidate selected order(s)?');
    // Proceed with invalidate process
  };
  const inValidateProcess = () => {
    console.log("entered invalidate process method.");
    // Invalidate process logic
  };
  const search = () => {
    console.log("Search function logic here");
    // Search functionality logic
  };
  const changeSelect = (item) => {
    if (item === '1') {
      setDisableDate(false);
    } else {
      setDisableDate(true);
    }
  };
  const validateDate = () => {
    const startDate = new Date(fromDate);
    const endDate = new Date(throughDate);
    setValidateError(endDate < startDate);
  };
  return {
    orderToInvalidate,
    setOrderToInvalidate,
    inValidBtnEnable,
    setInValidBtnEnable,
    loggedTenant,
    setLoggedTenant,
    togglingTenant,
    setTogglingTenant,
    hasAccess,
    setHasAccess,
    hasSuperAccess,
    setHasSuperAccess,
    fromDate,
    setFromDate,
    throughDate,
    setThroughDate,
    busy,
    setBusy,
    dateFilterSelection,
    setDateFilterSelection,
    referencenoFilterSelection,
    setReferencenoFilterSelection,
    filterSection,
    setFilterSection,
    disableDate,
    setDisableDate,
    serviceGrid,
    setServiceGrid,
    validateError,
    setValidateError,
    inValidateConfirm,
    inValidateProcess,
    search,
    changeSelect,
    validateDate,
  };
};
const PsReportingComponent = () => {
  const {
    orderToInvalidate,
    setOrderToInvalidate,
    inValidBtnEnable,
    setInValidBtnEnable,
    loggedTenant,
    setLoggedTenant,
    togglingTenant,
    setTogglingTenant,
    hasAccess,
    setHasAccess,
    hasSuperAccess,
    setHasSuperAccess,
    fromDate,
    setFromDate,
    throughDate,
    setThroughDate,
    busy,
    setBusy,
    dateFilterSelection,
    setDateFilterSelection,
    referencenoFilterSelection,
    setReferencenoFilterSelection,
    filterSection,
    setFilterSection,
    disableDate,
    setDisableDate,
    serviceGrid,
    setServiceGrid,
    validateError,
    setValidateError,
    inValidateConfirm,
    inValidateProcess,
    search,
    changeSelect,
    validateDate,
  } = usePsReportingLogic();
  return (
    <div>
        <h2>Ps Reporting Component</h2>
        {/* UI Components and Logic Here */}
    </div>
  );
};
export default PsReportingComponent;