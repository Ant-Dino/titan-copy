import React, { useState, useEffect } from 'react';
function PsReportingComponent() {
    const [orderToInvalidate, setOrderToInvalidate] = useState([]);
    const [inValidBtnEnable, setInValidBtnEnable] = useState(true);
    const [loggedTenant, setLoggedTenant] = useState('');
    const [togglingTenant, setTogglingTenant] = useState('');
    const [hasAccess, setHasAccess] = useState(false);
    const [hasSuperAccess, setHasSuperAccess] = useState(false);
    const [serviceGridData, setServiceGridData] = useState([]);
    const [busy, setBusy] = useState(false);
    const [fromDate, setFromDate] = useState(new Date().toLocaleDateString('en-US'));
    const [throughDate, setThroughDate] = useState(new Date().toLocaleDateString('en-US'));
    const [validateError, setValidateError] = useState(false);
    const [filterSection, setFilterSection] = useState('7');
    const [disableDate, setDisableDate] = useState(true);
    const [referenceNo, setReferenceNo] = useState('');
    const [disableReferenceNo, setDisableReferenceNo] = useState(true);
    const [filterReferenceNoSection, setFilterReferenceNoSection] = useState('0');
    const [busyRef, setBusyRef] = useState(false);
    useEffect(() => {
    return (
export default PsReportingComponent;