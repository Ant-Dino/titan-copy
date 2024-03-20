import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Modal, Button } from 'react-bootstrap';
import { toast } from 'react-toastify';
const FastWorkFlowMappings = () => {
    const [accessRights, setAccessRights] = useState({
        activityRight: '',
        canManageTEQ: false,
        canManageBEQ: false,
        hasAccess: false,
        hasSuperAccess: false,
    });
    const [tenantName, setTenantName] = useState('');
    const [tenantData, setTenantData] = useState(null);
    const [fastWorkFlowMappings, setFastWorkFlowMappings] = useState([]);
    useEffect(() => {
        const fetchTenantData = async () => {
            const response = await axios.get('Security/GetTenant');
            setTenantData(response.data);
            if (response.data === 'LVIS') {
                setTenantName('LVIS');
            }
        };
        const fetchAccessRights = async () => {
            try {
                const response = await axios.get('UserInfo');
                setAccessRights(prevState => ({
                    ...prevState,
                    activityRight: response.data.ActivityRight,
                    canManageBEQ: response.data.CanManageBEQ,
                    canManageTEQ: response.data.CanManageTEQ,
                    hasAccess: response.data.ActivityRight === 'Admin' || response.data.ActivityRight === 'SuperAdmin',
                    hasSuperAccess: response.data.ActivityRight === 'SuperAdmin',
                }));
            } catch (error) {
                console.error('Error fetching user info:', error);
            }
        };
        const fetchFastWorkFlowMappings = async () => {
            if (accessRights.activityRight) {
                const response = await axios.get('FASTWorkFlow/GetFASTWorkFlowMapping/');
                setFastWorkFlowMappings(response.data);
            }
        };
        fetchTenantData();
        fetchAccessRights().then(fetchFastWorkFlowMappings);
    }, [accessRights.activityRight]);
    const editMapping = (row) => {
        console.log('Editing row:', row);
    };
    const addNewMapping = () => {
        console.log('Adding new mapping');
    };
    const deleteMapping = (id) => {
        console.log('Deleting mapping with id:', id);
    };
    return (
        <div>
            {accessRights.hasAccess && (
                <button onClick={addNewMapping}>Add New Mapping</button>
            )}
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Message Type</th>
                        <th>Service</th>
                        <th>Description</th>
                        <th>Customer</th>
                        <th>Tenant</th>
                        {accessRights.hasSuperAccess && <th>Actions</th>}
                    </tr>
                </thead>
                <tbody>
                    {fastWorkFlowMappings.map((mapping) => (
                        <tr key={mapping.FASTWorkFlowMapId}>
                            <td>{mapping.FASTWorkFlowMapId}</td>
                            <td>{mapping.MessageType}</td>
                            <td>{mapping.serviceName}</td>
                            <td>{mapping.FASTOWorkFlowMapDesc}</td>
                            <td>{mapping.Customer}</td>
                            <td>{tenantName}</td>
                            {accessRights.hasSuperAccess && (
                                <td>
                                    <button onClick={() => editMapping(mapping)}>Edit</button>
                                    <button onClick={() => deleteMapping(mapping.FASTWorkFlowMapId)}>Delete</button>
                                </td>
                            )}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
export default FastWorkFlowMappings;