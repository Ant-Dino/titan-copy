 
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from './Modal'; // Assume we have a Modal component for editing & adding rows
import { useCookies } from 'react-cookie';
import { useLocation, useHistory } from 'react-router-dom';
import { NotificationManager } from 'react-notifications'; // Using react-notifications for growl-like notifications

function PsProviderMappingsComponent() {
    const [activityRight, setActivityRight] = useState('');
    const [hasAccess, setHasAccess] = useState(false);
    const [hasSuperAccess, setHasSuperAccess] = useState(false);
    const [serviceOfficeGridData, setServiceOfficeGridData] = useState([]);
    const [tenant, setTenant] = useState('');
    const [tenantName, setTenantName] = useState('');
    const [openModal, setOpenModal] = useState(false);
    const [selectedRow, setSelectedRow] = useState(null);
    const [cookies, setCookie] = useCookies(['activityright']);
    const location = useLocation();
    const history = useHistory();

    useEffect(() => {
        fetchActivityRights();
        fetchTenantInfo();
        handleLocationSearch();
    }, []);

    const fetchActivityRights = async () => {
        try {
            const response = await axios.get('Security/GetUserRights');
            const { ActivityRight, CanManageTEQ, CanManageBEQ } = response.data;
            setActivityRight(ActivityRight || cookies.activityright);
            setHasAccess(ActivityRight === 'Admin' || ActivityRight === 'SuperAdmin');
            setHasSuperAccess(ActivityRight === 'SuperAdmin');
        } catch (error) {
            console.error('Error fetching activity rights', error);
        }
    };

    const fetchTenantInfo = async () => {
        try {
            const response = await axios.get('Security/GetTenant');
            setTenant(response.data);
        } catch (error) {
            console.error('Error fetching tenant info', error);
        }
    };

    const handleLocationSearch = () => {
        const searchParams = new URLSearchParams(location.search);
        const externalID = searchParams.get('ExternalID');
        if (externalID) {
            // Example logic to handle search by External ID, adjust according to actual requirements
            // Load grid data filtered by ExternalID
            loadServiceOfficeGridData(externalID);
        } else {
            loadServiceOfficeGridData();
        }
    };

    const loadServiceOfficeGridData = async (externalID = '') => {
        try {
            const response = await axios.get(`Providers/GetProviders/${externalID}`);
            setServiceOfficeGridData(response.data);
        } catch (error) {
            console.error('Error loading service office grid data', error);
        }
    };

    const handleEditRow = (row) => {
        setSelectedRow(row);
        setOpenModal(true);
    };

    const handleDeleteRow = async (row) => {
        try {
            await axios.post(`Providers/Delete/${row.ID}`);
            NotificationManager.success("Provider info record was deleted successfully");
            loadServiceOfficeGridData(); // Refresh data
        } catch (error) {
            NotificationManager.error('Cannot delete row');
        }
    };

    const handleModalClose = () => {
        setSelectedRow(null);
        setOpenModal(false);
        loadServiceOfficeGridData(); // Refresh data after closing modal
    };

    return (
        <div>
            {openModal && (
                <Modal
                    isOpen={openModal}
                    onClose={handleModalClose}
                    data={selectedRow}
                    onSave={handleModalClose} // Assuming onSave will handle both edit and add operations
                />
            )}
            <button onClick={() => handleEditRow(null)}>Add New Row</button>
            <div>
                {/* Render service office grid here. This is highly simplified. */}
                {serviceOfficeGridData.map(row => (
                    <div key={row.ProviderID}>
                        {row.ProviderName}
                        {/* Simplified action buttons */}
                        <button onClick={() => handleEditRow(row)}>Edit</button>
                        <button onClick={() => handleDeleteRow(row)}>Delete</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PsProviderMappingsComponent;
