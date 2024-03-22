"use strict";

import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { Modal, Button, Alert } from 'react-bootstrap';
import { useCookies } from 'react-cookie';
import { toast } from 'react-toastify';

const PsReportingController = () => {
    const [orderToInvalidate, setOrderToInvalidate] = useState([]);
    const [loggedTenant, setLoggedTenant] = useState('');
    const [hasAccess, setHasAccess] = useState(false);
    const [hasSuperAccess, setHasSuperAccess] = useState(false);
    const [serviceGridData, setServiceGridData] = useState([]);
    const [fromDate, setFromDate] = useState('');
    const [throughDate, setThroughDate] = useState('');
    const [filters, setFilters] = useState([]);
    const [busy, setBusy] = useState(false);
    const [invalidateEnabled, setInvalidateEnabled] = useState(true);
    const [userInfo, setUserInfo] = useState({});
    const [cookies, setCookie] = useCookies(['activityright']);

    useEffect(() => {
        Axios.get('Security/GetTenant')
            .then(response => {
                setLoggedTenant(response.data);
            });
        checkAccessRights();
    }, []);
    
    const checkAccessRights = () => {
        let activityRight = cookies.activityright || userInfo.activityright;
        if (!activityRight) {
            // Fetch user info if not available
            Axios.get('UserInfo/GetUser')
                .then(response => {
                    setUserInfo(response.data);
                    activityRight = response.data.ActivityRight;
                    updateAccessRights(activityRight);
                })
                .catch(error => console.error("Failed to fetch user info", error));
        } else {
            updateAccessRights(activityRight);
        }
    };
    
    const updateAccessRights = (activityRight) => {
        if (activityRight === 'Admin' || activityRight === 'SuperAdmin') {
            setHasAccess(true);
        }
        if (activityRight === 'SuperAdmin') {
            setHasSuperAccess(true);
        }
    };

    const handleRowSelectionChanged = (row) => {

    };

    const invalidateConfirm = () => {
        // Confirm modal logic here, on confirm call invalidateProcess()
    };

    const invalidateProcess = () => {
        console.log("entered invalidate process method.");
        Axios.post('ReportingController/InvalidateOrderData', orderToInvalidate)
            .then(response => {
                setOrderToInvalidate([]);
                toast.success('Record(s) Invalidated Successfully');
                loadData(); // Refetch or update your grid data
            })
            .catch(error => {
                console.error("Failed to invalidate", error);
                toast.error('Failed to Invalidate');
            })
            .finally(() => {
                setInvalidateEnabled(true);
            });
    };

    const loadGridData = (filter) => {
        // Axios to load data based on filter
        setBusy(true);
        Axios.get(`ReportingController/GetReportDetailsFilter/${filter}/${loggedTenant}`)
            .then(response => {
                setServiceGridData(response.data);
            })
            .catch(error => console.error("Failed to fetch grid data", error))
            .finally(() => setBusy(false));
    };

    const handleFilterChange = (newFilter) => {
        setFilters(newFilter);
        loadGridData(newFilter);
    };

    return (
        <div>
            {/* React components for UI elements */}
            {busy && <div>Loading...</div>}
            {!busy && serviceGridData && (
                <div>
                    {/* UI Grid component to be rendered with serviceGridData */}
                </div>
            )}
            {hasAccess && (
                <Button onClick={invalidateConfirm}>Invalidate Selected Orders</Button>
            )}
            {/* More UI components */}
        </div>
    );
};

export default PsReportingController;