import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Growl } from 'primereact/growl'; // Assuming Growl notification is similar to 'growl' in AngularJS
import { Button } from 'primereact/button';
import { Calendar } from 'primereact/calendar';
import { Dropdown } from 'primereact/dropdown';
import { InputText } from 'primereact/inputtext';
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
    const [busyRef, setBusyRef] = useState(false);
    const [showDates, setShowDates] = useState(true);
    const [showRefNum, setShowRefNum] = useState(false);
    const [filterSection, setFilterSection] = useState('7');
    const [dateFilterSelection, setDateFilterSelection] = useState([
        { title: 'Custom', value: '1' },
        { title: 'Last 90 Days', value: '90' },
        { title: 'Last 60 Days', value: '60' },
        { title: 'Last 30 Days', value: '30' },
        { title: 'Last 15 Days', value: '15' },
        { title: 'Last 7 Days', value: '7' },
        { title: '24 hrs', value: '24' },
        { title: 'Today', value: '0' },
    ]);
    const [filterReferenceNoSection, setFilterReferenceNoSection] = useState('0');
    const [referenceNo, setReferenceNo] = useState('');
    useEffect(() => {
        // Simulate fetching data on component mount
        setLoggedTenant('LVIS'); // Example setting
        setTogglingTenant('LVIS'); // Example setting
        // We will need to handle axios requests here based on the initial state
    }, []);
    const search = async () => {
        try {
            setBusy(true);
            const response = await axios.get(`ReportingController/GetReportDetailsFilter/${filterSection}/${togglingTenant}`);
            // Assume response contains data in a structured manner
            console.log(response.data); // Actual data handling logic here
            setBusy(false);
        } catch (error) {
            console.error('Error fetching data:', error);
            setBusy(false);
        }
    };
    const invalidateOrder = async () => {
        try {
            setBusy(true);
            const response = await axios.post('ReportingController/InvalidateOrderData', orderToInvalidate);
            console.log(response.data); // Process response
            setBusy(false);
        } catch (error) {
            console.error('Error invalidating orders:', error);
            setBusy(false);
        }
    };
    const handleChangeFilterSection = (e) => {
        setFilterSection(e.value);
        setBusy(false);
    };
    const handleChangeReferenceNoSection = (e) => {
        setFilterReferenceNoSection(e.value);
    };
    const handleDateChange = (e, name) => {
        if (name === 'fromDate') {
            setFromDate(e.value);
        } else {
            setThroughDate(e.value);
        }
    };
    return (
        <div className="ps-dashboard-header">
            {/* Simplified rendering based on the provided AngularJS template */}
            <Growl ref={(el) => this.growl = el} />
            <Button label="Search" onClick={search} disabled={busy} />
            <Button label="Invalidate Order" onClick={invalidateOrder} disabled={!hasAccess || inValidBtnEnable} />
            <Calendar value={fromDate} onChange={(e) => handleDateChange(e, 'fromDate')} showIcon={true} />
            <Calendar value={throughDate} onChange={(e) => handleDateChange(e, 'throughDate')} showIcon={true} />
            <Dropdown value={filterSection} options={dateFilterSelection} onChange={handleChangeFilterSection} placeholder="Select Date Filter" />
            <Dropdown value={filterReferenceNoSection} options={[
                { label: '---Select---', value: '0' },
                { label: 'External Reference Number', value: '1' },
                { label: 'Internal Reference Number', value: '2' },
                { label: 'Customer Reference Number', value: '3' },
                { label: 'Internal Reference Id', value: '4' },
            ]} onChange={handleChangeReferenceNoSection} placeholder="Select Reference" />
            <InputText value={referenceNo} onChange={(e) => setReferenceNo(e.target.value)} placeholder="Enter Reference No" />
            {/* Grid Component and other components can be added here as needed */}
        </div>
    );
};
export default PsReportingComponent;