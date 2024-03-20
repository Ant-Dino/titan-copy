import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Modal, Button } from 'react-bootstrap';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
const PsManageExternalRefNumberComponent = () => {
    const [serviceReqIdDisabled, setServiceReqIdDisabled] = useState(false);
    const [showMessage, setShowMessage] = useState(false);
    const [activityRight, setActivityRight] = useState(null);
    const [tenantName, setTenantName] = useState(null);
    const [serviceRequestId, setServiceRequestId] = useState('');
    const [externalRefNum, setExternalRefNum] = useState('');
    const [internalRefNum, setInternalRefNum] = useState('');
    const [newExternalRefNum, setNewExternalRefNum] = useState('');
    const [disabledResetButton, setDisabledResetButton] = useState(true);
    const [user, setUser] = useState({ ActivityRight: '', tenantname: '' });
    const [cookies, setCookie] = useCookies(['activityright']);
    const navigate = useNavigate();
    useEffect(() => {
        // Mock getting user info, replace with actual call
        const fetchUserInfo = async () => {
            const response = await axios.get('/path/to/get/user/info');
            setUser({
                ActivityRight: response.data.ActivityRight,
                tenantname: response.data.tenantname,
            });
        };
        fetchUserInfo();
    }, []);
    useEffect(() => {
        setActivityRight(user.ActivityRight || cookies.activityright);
        setTenantName(user.tenantname);
        if (activityRight !== 'SuperAdmin' || tenantName !== 'LVIS') {
            alert('You are not authorized to view this page.'); // This should be replaced with actual modal logic
            navigate('/dashboard'); // Redirect user
        }
    }, [user, activityRight, tenantName, navigate, cookies.activityright]);
    const handleSaveAndAccept = async () => {
        try {
            const response = await axios.post(`UtilitiesController/UpdateandAcceptExternalRefNum/${serviceRequestId}/${externalRefNum}/${newExternalRefNum}`);
            if (response.data === true) {
                setShowMessage(true);
                toast.success(`Update External Reference Number ${newExternalRefNum} was updated successfully`);
            }
        } catch (error) {
            setShowMessage(true);
            toast.error("There was an error in Updating External Reference Number");
        }
    };
    const handleSave = async () => {
        try {
            const response = await axios.post(`UtilitiesController/UpdateExternalRefNum/${serviceRequestId}/${externalRefNum}/${newExternalRefNum}`);
            if (response.data === true) {
                setShowMessage(true);
                toast.success(`Update External Reference Number ${newExternalRefNum} was updated successfully`);
            }
        } catch (error) {
            setShowMessage(true);
            toast.error("There was an error in Updating External Reference Number");
        }
    };
    const handleResetRefreshButton = () => {
        setDisabledResetButton(false);
    };
    const handleRefreshSearch = () => {
        setServiceRequestId('');
        setExternalRefNum('');
        setInternalRefNum('');
        setNewExternalRefNum('');
        setServiceReqIdDisabled(false);
        setShowMessage(false);
        // Reset form states if needed
    };
    const handleSearch = async () => {
        try {
            const response = await axios.get(`UtilitiesController/GetServiceReqInfo/${serviceRequestId}`);
            const { ServiceRequestId, ExternalRefNum, InternalRefNum } = response.data;
            if (ServiceRequestId > 0) {
                setExternalRefNum(ExternalRefNum);
                setInternalRefNum(InternalRefNum);
                setServiceReqIdDisabled(true);
            } else {
                setShowMessage(true);
                toast.error(`There is no matching record found for Service Request ID: ${serviceRequestId}`);
            }
        } catch (error) {
            toast.error('Error fetching service request information');
        }
    };
    return (
        <div>
            {/* UI elements and forms to handle inputs and call the above methods */}
        </div>
    );
};
export default PsManageExternalRefNumberComponent;