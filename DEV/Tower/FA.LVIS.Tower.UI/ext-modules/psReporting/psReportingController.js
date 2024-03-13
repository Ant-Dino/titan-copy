import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Modal } from './Modal'; // Assume a modal component exists
import { Growl } from './Growl'; // Assume a Growl notification component exists
import './ReportingComponent.css'; // Assume CSS is properly set up

interface ServiceGridRow {
  ServiceRequestId: string;
  CustomerName: string;
  ApplicationId: string;
  ExternalRefNum?: string;
  createddate: Date;
  InternalRefNum?: string;
  service: string;
  OrderStatus: string;
  Tenant?: string;
  LVISActionType?: string;
}

interface UserInfo {
  activityright: string;
  CanManageTEQ: boolean;
  CanManageBEQ: boolean;
}

const ReportingComponent: React.FC = () => {
  const [ordersToInvalidate, setOrdersToInvalidate] = useState<ServiceGridRow[]>([]);
  const [invalidBtnEnable, setInvalidBtnEnable] = useState(true);
  const [hasAccess, setHasAccess] = useState(false);
  const [hasSuperAccess, setHasSuperAccess] = useState(false);
  const [fromDate, setFromDate] = useState(new Date().toLocaleDateString('en-US'));
  const [throughDate, setThroughDate] = useState(new Date().toLocaleDateString('en-US'));
  const [isBusy, setIsBusy] = useState(false);
  const [loggedTenant, setLoggedTenant] = useState<string | null>(null); // Assuming tenant name is retrieved from some global state or local storage
  const [serviceGridData, setServiceGridData] = useState<ServiceGridRow[]>([]);

  useEffect(() => {
    fetchUserInfo().then((userInfo: UserInfo) => {
      if (['Admin', 'SuperAdmin'].includes(userInfo.activityright)) {
        setHasAccess(true);
      }
      if (userInfo.activityright === 'SuperAdmin') {
        setHasSuperAccess(true);
      }
    });
    // Assuming fetchServiceGridData is a method to fetch data for the grid
    fetchServiceGridData();
  }, []);

  const fetchUserInfo = async () => {
    // This should be replaced with actual API calling logic
    // For demonstration, return default values
    return {
      activityright: 'Admin',
      CanManageTEQ: true,
      CanManageBEQ: true,
    } as UserInfo;
  };

  const fetchServiceGridData = async () => {
    setIsBusy(true);
    // Replace with actual API call
    try {
      const response = await axios.get('/path/to/get/report/details'); // Example API call
      setServiceGridData(response.data);
    } catch (error) {
      console.error('Failed to fetch service grid data', error);
    } finally {
      setIsBusy(false);
    }
  };

  const inValidateConfirm = async () => {
    // Open a modal here for confirmation before invalidation, assuming a Modal component exists
    const userConfirmed = true; // Assuming this comes from the modal response
    if (userConfirmed) {
      await inValidateProcess();
    }
  };

  const inValidateProcess = async () => {
    // Invalidate process here
    console.log('Invalidating orders...');
    try {
      const response = await axios.post('/path/to/invalidate/order/data', ordersToInvalidate);
      setOrdersToInvalidate([]);
      // Assuming Growl is a notification component
      // success notification
    } catch (error) {
      console.error('Failed to invalidate orders', error);
      // error notification
    }
  };

  const editReportRow = (serviceRequestId: string) => {
    // Logic to edit report row
    console.log(`Editing row with Service Request ID ${serviceRequestId}`);
    // Potentially open a modal with row details for editing
  };

  return (
    <div className="reporting-component">
      <h1>Reporting Component</h1>
      {/* Render your service grid and other components here */}
    </div>
  );
};

export default ReportingComponent;