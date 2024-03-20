import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Modal, Button, Form } from 'react-bootstrap'; // Assuming usage of react-bootstrap for UI components
import { useCookies } from 'react-cookie'; // Assuming usage of react-cookie for managing cookies
import { NotificationManager } from 'react-notifications'; // Assuming usage of react-notifications for growl-like notifications
const FastOfficeMappingsComponent = () => {
    const [cookies, setCookie] = useCookies(['activityright']);
    const [activityRight, setActivityRight] = useState(cookies.activityright || 'User');
    const [hasAccess, setHasAccess] = useState(false);
    const [hasSuperAccess, setHasSuperAccess] = useState(false);
    const [isvisible, setIsvisible] = useState(false);
    const [fastOfficeMaps, setFastOfficeMaps] = useState([]);
    const [providerOfficeMapRowCount, setProviderOfficeMapRowCount] = useState(false);
    const [tenantName, setTenantName] = useState('');
    const [search, setSearch] = useState('');
    const [busy, setBusy] = useState(false);
    const [stateFipsList, setStateFipsList] = useState([]);
    const [countyFipsList, setCountyFipsList] = useState([]);
    const [disabled, setDisabled] = useState(true);
    useEffect(() => {
        // Mimick getUser event listener
        const fetchUserDetails = async () => {
            try {
                const response = await axios.get('/api/user/details');
                setActivityRight(response.data.activityRight);
                setTenantName(response.data.tenantName);
                handleAccessControl(response.data.activityRight);
            } catch (error) {
                console.error('Failed to fetch user details:', error);
            }
        }

        fetchUserDetails();
        fetchFastOfficeMaps(search);
        fetchStateFipsList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [search]);
    const handleAccessControl = (right) => {
        if (['Admin', 'SuperAdmin'].includes(right)) {
            setHasAccess(true);
        }
        if (right === 'SuperAdmin') {
            setHasSuperAccess(true);
        }
    }
    const fetchFastOfficeMaps = async (searchParam = '') => {
        setBusy(true);
        try {
            const response = await axios.get(`/api/fastOfficeMappings/${searchParam}`);
            setFastOfficeMaps(response.data);
        } catch (error) {
            console.error('Failed to fetch fast office mappings:', error);
        } finally {
            setBusy(false);
        }
    }
    const fetchStateFipsList = async () => {
        try {
            const response = await axios.get('/api/stateFipsList');
            setStateFipsList(response.data);
        } catch (error) {
            console.error('Failed to fetch state FIPS list:', error);
        }
    }
    const loadCountyFipsList = async (stateFips) => {
        try {
            const response = await axios.get(`/api/countyFipsList/${stateFips}`);
            setCountyFipsList(response.data);
            setDisabled(false);
        } catch (error) {
            console.error(`Failed to fetch county FIPS list for state ${stateFips}:`, error);
        }
    }
    // Additional event handlers and functionalities here...

    return (
        <div>
            {/* UI elements and components here, e.g., for displaying fast office mappings, handling searches, etc. */}
            {/* Omitted for brevity */}
        </div>
    );
}
export default FastOfficeMappingsComponent;