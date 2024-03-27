import React, { useState, useEffect } from 'react';
const useReportingLogic = () => {
    const [orderToInvalidate, setOrderToInvalidate] = useState([]);
    const [inValidBtnEnable, setInValidBtnEnable] = useState(true);
    const [loggedTenant, setLoggedTenant] = useState("");
    const [togglingTenant, setTogglingTenant] = useState("");
    const [hasAccess, setHasAccess] = useState(false);
    const [hasSuperAccess, setHasSuperAccess] = useState(false);
    const [fromDate, setFromDate] = useState(new Date().toLocaleDateString());
    const [throughDate, setThroughDate] = useState(new Date().toLocaleDateString());
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
    useEffect(() => {
        setLoggedTenant("Simulated Tenant Name");
        setTogglingTenant("Simulated Tenant Name");
        const activityright = "Admin";
        if (activityright === 'Admin' || activityright === 'SuperAdmin') {
            setHasAccess(true);
        }
        if (activityright === 'SuperAdmin') {
            setHasSuperAccess(true);
        }
    }, []);
    const handleInvalidateConfirm = () => {
        console.log("Invalidate confirmed");
    };
    const handleInvalidateProcess = () => {
        console.log("Processing invalidate...");
    };
    const handleSearch = () => {
        console.log("Search...");
    };
    const handleChangeSelect = (item) => {
        setDisableDate(item !== '1');
    };
    return {
        orderToInvalidate,
        inValidBtnEnable,
        loggedTenant,
        togglingTenant,
        hasAccess,
        hasSuperAccess,
        fromDate,
        throughDate,
        busy,
        dateFilterSelection,
        referencenoFilterSelection,
        filterSection,
        disableDate,
        handleInvalidateConfirm,
        handleInvalidateProcess,
        handleSearch,
        handleChangeSelect
    };
};
const PsReportingComponent = () => {
    const {
        orderToInvalidate,
        inValidBtnEnable,
        loggedTenant,
        togglingTenant,
        hasAccess,
        hasSuperAccess,
        fromDate,
        throughDate,
        busy,
        dateFilterSelection,
        referencenoFilterSelection,
        filterSection,
        disableDate,
        handleInvalidateConfirm,
        handleInvalidateProcess,
        handleSearch,
        handleChangeSelect
    } = useReportingLogic();
    return (
        <div>
            <h1>Ps Reporting Component</h1>
            {/* UI components for PsReporting would go here */}
        </div>
    );
};
export default PsReportingComponent;