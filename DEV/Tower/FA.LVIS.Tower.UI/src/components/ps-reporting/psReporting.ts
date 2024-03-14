import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { format, parseISO } from 'date-fns';

const PsReportingComponent = () => {
    const [ordersData, setOrdersData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [hasAccess, setHasAccess] = useState(false);
    const [fromDate, setFromDate] = useState(format(new Date(), 'MM/dd/yyyy'));
    const [throughDate, setThroughDate] = useState(format(new Date(), 'MM/dd/yyyy'));
    const [disableDate, setDisableDate] = useState(true);
    const [validateError, setValidateError] = useState(false);
    const [filterSection, setFilterSection] = useState('7');
    const [loggedTenant, setLoggedTenant] = useState('');
    const [isVisibleDates, setIsVisibleDates] = useState(true);
    const [isVisibleRefNum, setIsVisibleRefNum] = useState(false);
    const [busyRef, setBusyRef] = useState(false);
    const [referenceNo, setReferenceNo] = useState('');
    const [filterReferenceNoSection, setFilterReferenceNoSection] = useState('0');
    const [disableReferenceNo, setDisableReferenceNo] = useState(true);
    const [togglingTenant, setTogglingTenant] = useState('');
    const [title, setTitle] = useState('Orders Summary');

    useEffect(() => {
        fetchLoggedTenant();
        fetchUserData();
    }, []);

    const fetchLoggedTenant = async () => {
        try {
            const response = await axios.get('/Security/GetTenant');
            setLoggedTenant(response.data);
            setTogglingTenant(response.data);
        } catch (error) {
            console.error('Error fetching logged tenant', error);
        }
    };

    const fetchUserData = async () => {
        try {
            const response = await axios.get('/UserInfo');
            // Assuming response data has an object with these properties
            const { ActivityRight, CanManageTEQ, CanManageBEQ } = response.data;
            setHasAccess(ActivityRight === 'Admin' || ActivityRight === 'SuperAdmin');
            // Additional setup based on user data could be added here
        } catch (error) {
            console.error('Error fetching user data', error);
        }
    };

    const searchData = async () => {
        setIsLoading(true);
        try {
            const response = await axios.post('/ReportingController/GetReportDetails', {
                filterSection,
                fromDate,
                throughDate,
                togglingTenant,
            });
            setOrdersData(response.data);
            setTitle(togglingTenant === 'RF' ? 'RF Orders Summary' : 'Orders Summary');
        } catch (error) {
            console.error('Error fetching orders data', error);
        } finally {
            setIsLoading(false);
        }
    };

    const changeFilterSection = (value) => {
        setFilterSection(value);
        setDisableDate(value !== '1');
    };

    const validateDate = () => {
        const startDate = parseISO(fromDate);
        const endDate = parseISO(throughDate);
        setValidateError(endDate < startDate);
    };

    const switchGridInfo = (val) => {
        if (val === 'RF') {
            setTogglingTenant('RF');
            searchData();
        } else if (val === '') {
            setTogglingTenant(loggedTenant);
            searchData();
        }
    };

    // Render UI components based on states
    return (
        <div>
            <div> {/* Placeholder for breadcrumb and other UI elements */}
            </div>
            {isLoading ? (
                <div>Loading...</div>
            ) : (
                <div className="wrapper">
                    {/* Conditional rendering and other JSX elements */}
                </div>
            )}
        </div>
    );
};

export default PsReportingComponent;