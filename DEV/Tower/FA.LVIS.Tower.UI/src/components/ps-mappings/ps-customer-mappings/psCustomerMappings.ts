import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom";
const AccessControl = ({ children, requiredRights }) => {
    const [userRights, setUserRights] = useState({});
    const checkAccess = () => {
        // This simulates an API call to get user's rights/permissions
        setUserRights({ canAccess: true, canEdit: true }); // Dummy response
    };
    useEffect(() => {
        checkAccess();
    }, []);
    const hasRequiredRights = requiredRights.every(right => userRights[right]);
    return <>
        {hasRequiredRights ? children : <div>No access</div>}
    </>;
};
const PsCustomerMappingsComponent = () => {
    const [customerData, setCustomerData] = useState([]);
    const [tenant, setTenant] = useState('');
    const [hasAccess, setHasAccess] = useState(false);
    const [hasSuperAccess, setHasSuperAccess] = useState(false);
    const history = useHistory();
    useEffect(() => {
        const fetchTenant = async () => {
            try {
                const response = await axios.get('Security/GetTenant');
                setTenant(response.data);
            } catch (error) {
                console.error("Failed to fetch tenant data", error);
            }
        };
        fetchTenant();
    }, []);
    useEffect(() => {
        const fetchCustomers = async () => {
            try {
                if (hasAccess || hasSuperAccess) {
                    const response = await axios.get('Customers/GetCustomers/');
                    setCustomerData(response.data);
                }
            } catch (error) {
                console.error("Failed to fetch customer data", error);
            }
        };
        fetchCustomers();
    }, [hasAccess, hasSuperAccess]);
    const handleEdit = (customer) => {
        // Handle edit logic here, possibly using a modal or a different route
        console.log("Edit", customer);
    };
    const handleDelete = (id) => {
        // Handle delete logic here
        console.log("Delete", id);
    };
    return (
        <div>
            <AccessControl requiredRights={['canEdit']}>
                <button>Add Customer</button>
            </AccessControl>
            {customerData.map((customer, index) => (
                <div key={index}>
                    <span>{customer.CustomerName}</span>
                    <AccessControl requiredRights={['canEdit']}>
                        <button onClick={() => handleEdit(customer)}>Edit</button>
                        <button onClick={() => handleDelete(customer.LVISCustomerID)}>Delete</button>
                    </AccessControl>
                </div>
            ))}
        </div>
    );
};
export default PsCustomerMappingsComponent;