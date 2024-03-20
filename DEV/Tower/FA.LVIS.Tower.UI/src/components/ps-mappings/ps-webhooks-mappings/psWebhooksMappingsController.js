 
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from './Modal'; // Assuming custom Modal for edit/add is created
import { extractHostname } from './utils'; // Utility function to extract the hostname
import { Growl } from 'primereact/growl'; // Assuming using PrimeReact for growl notifications

const WebhooksMappings = () => {
    const [activityRight, setActivityRight] = useState('');
    const [hasAccess, setHasAccess] = useState(false);
    const [hasSuperAccess, setHasSuperAccess] = useState(false);
    const [customerDetail, setCustomerDetail] = useState({ CustomerName: '', CustomerID: '' });
    const [webhooksData, setWebhooksData] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [modalContent, setModalContent] = useState({});

    useEffect(() => {
        const accessRights = ['Admin', 'SuperAdmin']; // Access control logic
        const fetchUserDetails = async () => {
            try {
                const response = await axios.get('/api/user/details');
                setActivityRight(response.data.ActivityRight);
                setHasAccess(accessRights.includes(response.data.ActivityRight));
                setHasSuperAccess(response.data.ActivityRight === 'SuperAdmin');
            } catch (error) {
                console.log(error);
            }
        };
        fetchUserDetails();
    }, []);

    const handleAddOrEdit = (data, operation) => {
        if (activityRight === 'User') return; // Restricting 'User' from adding/editing
        setModalContent({ data, operation });
        setShowModal(true);
    };

    const handleSave = async (webhook, operation) => {
        try {
            const url = `/api/webhook/${operation.toLowerCase()}`;
            await axios.post(url, { webhook });
            setShowModal(false);
            refreshData(); // Function to refresh data after add/edit
            Growl.success({ summary: `Webhook ${operation}ed successfully` });
        } catch (error) {
            console.error(error);
            Growl.error({ summary: 'Operation failed', detail: 'Unable to process your request' });
        }
    };

    const refreshData = async () => {
        if (activityRight && customerDetail.CustomerID) {
            try {
                const userResponse = await axios.get(`/api/customers/getwebhookuser/${customerDetail.CustomerID}`);
                const webhooksResponse = await axios.get(`/api/customers/getwebhooks/${userResponse.data}`);
                setWebhooksData(webhooksResponse.data);
            } catch (error) {
                console.log(error);
            }
        }
    };

    useEffect(() => {
        refreshData();
    }, [customerDetail.CustomerID, activityRight]);

    return (
        <div>
            <h2>Webhooks Mappings</h2>
            {hasAccess && (
                <button onClick={() => handleAddOrEdit({}, 'Add')}>Add Webhook</button>
            )}
            <div>
                {/* Assuming a table to display the webhooks */}
                {webhooksData.map((webhook, index) => (
                    <div key={index} onDoubleClick={() => handleAddOrEdit(webhook, 'Edit')}>
                        <span>{webhook.URL}</span>
                        {/* Other fields */}
                    </div>
                ))}
            </div>
            {showModal && (
                <Modal
                    content={modalContent}
                    onHide={() => setShowModal(false)}
                    onSave={handleSave}
                />
            )}
        </div>
    );
};

export default WebhooksMappings;
