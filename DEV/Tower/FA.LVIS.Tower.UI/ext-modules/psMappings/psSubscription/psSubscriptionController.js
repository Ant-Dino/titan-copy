 
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Modal } from 'react-bootstrap';

const PsSubscriptionComponent = () => {
  const [activityRight, setActivityRight] = useState('');
  const [canManageTEQ, setCanManageTEQ] = useState(false);
  const [canManageBEQ, setCanManageBEQ] = useState(false);
  const [hasAccess, setHasAccess] = useState(false);
  const [hasModifyAccess, setHasModifyAccess] = useState(false);
  const [hasSuperAccess, setHasSuperAccess] = useState(false);
  const [customerName, setCustomerName] = useState('');
  const [isCategory, setIsCategory] = useState(false);
  const [showGroups, setShowGroups] = useState(false);
  const [subscriptions, setSubscriptions] = useState([]);
  const [tenant, setTenant] = useState('');

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get('/UserInfo');
        const { ActivityRight, CanManageTEQ, CanManageBEQ } = response.data;
        setActivityRight(ActivityRight || '');
        setCanManageTEQ(CanManageTEQ || false);
        setCanManageBEQ(CanManageBEQ || false);
        determineAccess(ActivityRight);
      } catch (error) {
        console.error("Error fetching user info:", error);
      }
    };

    fetchUser();
  }, []);

  const determineAccess = (activityRight) => {
    const accessLevels = {
      Admin: { access: true, modify: true, super: false },
      SuperAdmin: { access: true, modify: true, super: true },
      User: { access: false, modify: false, super: false },
    };

    const access = accessLevels[activityRight] || accessLevels['User'];
    setHasAccess(access.access);
    setHasModifyAccess(access.modify);
    setHasSuperAccess(access.super);
  };

  useEffect(() => {
    if (activityRight) {
      fetchSubscriptions();
    }
  }, [activityRight]);

  const fetchSubscriptions = async () => {
    try {
      const response = await axios.get(`/Subscriptions/${isCategory ? 'GetSubscriptionsByCategory' : 'GetSubscriptionsByCustomer'}/${customerName}/${isCategory ? 'CategoryID' : 'CustomerID'}`);
      setSubscriptions(response.data);
    } catch (error) {
      console.error("Error fetching subscriptions:", error);
    }
  };

  useEffect(() => {
    const fetchTenant = async () => {
      try {
        const response = await axios.get('/Security/GetTenant');
        setTenant(response.data);
      } catch (error) {
        console.error("Error fetching tenant info:", error);
      }
    };

    fetchTenant();
  }, []);

  return (
    <div>
      Your React Component replacing AngularJS functionality here...
      {/* Render your subscriptions and other component elements here */}
    </div>
  );
};

export default PsSubscriptionComponent;
