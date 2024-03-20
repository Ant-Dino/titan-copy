    
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import Modal from 'react-modal';
import { toast } from 'react-toastify';

function AccessRequestComponent() {
    const [emailId, setEmailId] = useState('');
    const [serviceGridData, setServiceGridData] = useState([]);
    const [activityRight, setActivityRight] = useState('');
    const [hasAccess, setHasAccess] = useState(false);
    const [hasSuperAccess, setHasSuperAccess] = useState(false);
    const [cookies, setCookie] = useCookies(['activityRight', 'CanAccessReq']);

    useEffect(() => {
        fetchUserAccessRights();
    }, []);

    const fetchUserAccessRights = async () => {
        try {
            const response = await axios.get('/api/getUserAccessRights'); // Endpoint URL needs accurate path
            const { ActivityRight, CanManageTEQ, CanManageBEQ, CanAccessReq } = response.data;
            setActivityRight(ActivityRight);
            updateAccessRights(ActivityRight, CanManageTEQ, CanManageBEQ, CanAccessReq);
        } catch (error) {
            console.log('Error fetching user access rights:', error);
        }
    };

    const updateAccessRights = (ActivityRight, CanManageTEQ, CanManageBEQ, CanAccessReq) => {
        if (ActivityRight === 'Admin' || ActivityRight === 'SuperAdmin') {
            setHasAccess(true);
        }
        if (ActivityRight === 'SuperAdmin') {
            setHasSuperAccess(true);
        }
    };

    const loadServiceGridData = async () => {
        try {
            const response = await axios.get(`CustomerRegistration/GetCustomerRegistration/${emailId || ''}`);
            setServiceGridData(response.data);
        } catch (error) {
            console.log('Error loading service grid data:', error);
        }
    };

    useEffect(() => {
        loadServiceGridData();
    }, [emailId]);

    const handleAddNewRequest = () => {
        const newService = {
            "CustomerRegistrationId": 0,
            "FirstName": "",
            "LastName": "",
            "EmailId": "",
            "PhoneNo": "",
            "CompanyName": "",
            "ProjectName": "",
            "CustomerStatus": 5001
        };
        // Modal logic to add a new request goes here
    };

    const handleEditRequest = (serviceId) => {
        // Modal logic to edit a request by serviceId goes here
    };

    const handleDeleteRequest = async (serviceId) => {
        try {
            await axios.delete(`CustomerRegistration/Delete/${serviceId}`);
            toast.success("Successfully deleted the request.");
            loadServiceGridData();
        } catch (error) {
            toast.error("Failed to delete the request.");
        }
    };

    return (
        <div>
            {/* Access control UI feedback */}
            {hasAccess && <button onClick={handleAddNewRequest}>Add New Request</button>}
            <table>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {serviceGridData.map(service => (
                        <tr key={service.CustomerRegistrationId}>
                            <td>{service.FirstName}</td>
                            <td>{service.LastName}</td>
                            <td>{service.EmailId}</td>
                            <td>
                                <button onClick={() => handleEditRequest(service.CustomerRegistrationId)}>Edit</button>
                                <button onClick={() => handleDeleteRequest(service.CustomerRegistrationId)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default AccessRequestComponent;
