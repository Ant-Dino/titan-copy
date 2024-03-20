 
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Modal, Button } from 'react-bootstrap';
import { toast } from 'react-toastify';

const ContactProviderMappingsComponent = ({ UserInfo, growl }) => {
    const [accessRights, setAccessRights] = useState({ activityRight: '', canManageTEQ: false, canManageBEQ: false });
    const [hasAccess, setHasAccess] = useState(false);
    const [hasSuperAccess, setHasSuperAccess] = useState(false);
    const [serviceBranchGridData, setServiceBranchGridData] = useState([]);
    const [tenant, setTenant] = useState([]);
    const [customerDetails, setCustomerDetails] = useState({ customerId: '', customerName: '', tenantName: '', tenantId: '' });

    useEffect(() => {
        const fetchUserDetails = async () => {
            try {
                const userResponse = await UserInfo.getUser();
                setAccessRights({
                    activityRight: userResponse.ActivityRight,
                    canManageBEQ: userResponse.CanManageBEQ,
                    canManageTEQ: userResponse.CanManageTEQ,
                });
            } catch (error) {
                console.error('Error fetching user details:', error);
            }
        };

        if (!accessRights.activityRight) {
            fetchUserDetails();
        } else {
            const checkAccess = ['Admin', 'SuperAdmin'].includes(accessRights.activityRight);
            const checkSuperAccess = accessRights.activityRight === 'SuperAdmin';
            setHasAccess(checkAccess);
            setHasSuperAccess(checkSuperAccess);
        }

        const fetchTenant = async () => {
            try {
                const response = await axios.get('Security/GetTenant');
                setTenant(response.data);
            } catch (error) {
                console.error('Error fetching tenant data:', error);
            }
        };

        fetchTenant();
    }, [accessRights.activityRight]);

    const editContactProvider = (grid, row) => {
        // Open modal for editing - use React-Bootstrap Modal or equivalent
    };

    const addNewBranch = () => {
        // Add new branch logic here
    };

    const deleteContactProviderRow = async (row) => {
        try {
            await axios.get(`Contacts/Delete/${row.entity.ContactId}`);
            toast.success("The record was deleted successfully");
            // Remove from grid or refresh grid
        } catch (error) {
            toast.error('Cannot Delete row (error in console)');
            console.error('Error deleting contact provider:', error);
        }
    };

    const handleGroupingChange = () => {
        // Logic for changing grouping
    };

    return (
        <div>
            {/* Render UI elements such as buttons, tables, etc. corresponding to serviceBranchGrid, tenant, and other states */}
            <Button onClick={addNewBranch} disabled={!hasAccess}>Add New Branch</Button>
            {/* More UI components */}
        </div>
    );
};

export default ContactProviderMappingsComponent;
