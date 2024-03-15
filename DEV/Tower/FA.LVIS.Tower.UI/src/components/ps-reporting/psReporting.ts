 
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Modal, Button, Alert } from 'react-bootstrap';
import { useCookies } from 'react-cookie';

// Add types for props as needed
interface PsReportingProps {
  userInfo: any;
  onInvalidateOrders: (orders: any[]) => void;
  growl: {
    error: (message: string) => void;
    success: (message: string) => void;
  };
}

const PsReporting: React.FC<PsReportingProps> = ({ userInfo, onInvalidateOrders, growl }) => {
  const [dateFilterSelection] = useState([
    { title: 'Custom', value: '1' },
    { title: 'Last 90 Days', value: '90' },
    { title: 'Last 60 Days', value: '60' },
    { title: 'Last 30 Days', value: '30' },
    { title: 'Last 15 Days', value: '15' },
    { title: 'Last 7 Days', value: '7' },
    { title: '24 hrs', value: '24' },
    { title: 'Today', value: '0' },
  ]);
  const [fromDate, setFromDate] = useState(new Date().toDateString());
  const [toDate, setToDate] = useState(new Date().toDateString());
  const [referencenoFilterSelection] = useState([
    { title: '---Select---', value: '0' },
    { title: 'External Reference Number', value: '1' },
    { title: 'Internal Reference Number', value: '2' },
    { title: 'Customer Reference Number', value: '3' },
    { title: 'Internal Reference Id', value: '4' },
  ]);
  const [serviceGridData, setServiceGridData] = useState([]);
  const [ordersToInvalidate, setOrdersToInvalidate] = useState([]);
  const [invalidBtnEnable, setInvalidBtnEnable] = useState(true);
  const [cookies, setCookie] = useCookies(['activityright']);
  const [hasAccess, setHasAccess] = useState(false);
  const [hasSuperAccess, setHasSuperAccess] = useState(false);

  useEffect(() => {
    if (userInfo.activityright) {
      setHasAccess(['Admin', 'SuperAdmin'].includes(userInfo.activityright));
      setHasSuperAccess(userInfo.activityright === 'SuperAdmin');
    } else if (cookies.activityright) {
      const activityRight = cookies.activityright;
      setHasAccess(['Admin', 'SuperAdmin'].includes(activityRight));
      setHasSuperAccess(activityRight === 'SuperAdmin');
    }
  }, [userInfo, cookies]);

  const handleOrderSelectionChange = (selectedOrder) => {
    if (selectedOrder.isSelected && selectedOrder.InternalRefNum == null) {
      setOrdersToInvalidate([...ordersToInvalidate, selectedOrder]);
      setInvalidBtnEnable(false);
    } else {
      setOrdersToInvalidate(ordersToInvalidate.filter((el) => el.ServiceRequestId !== selectedOrder.ServiceRequestId));
      if (ordersToInvalidate.length === 0) {
        setInvalidBtnEnable(true);
      }
    }
  };

  const inValidateConfirm = () => {
    // Implementation for confirmation before invalidation
    // This example does not include a Modal implementation.
    inValidateProcess();
  };

  const inValidateProcess = () => {
    console.log("entered invalidate process method.");
    axios.post('ReportingController/InvalidateOrderData', ordersToInvalidate)
       .then(response => {
           const data = response.data;
           setOrdersToInvalidate([]);
           if (data.length > 0) {
               growl.error(`Failed to Invalidate following Service Request ID: ${data.join(',')}`);
               setInvalidBtnEnable(true);
           } else {
               growl.success('Record(s) Invalidated Successfully');
               // Fetch the updated data list
           }
       }).catch(error => {
           console.error("Error invalidating orders:", error);
           growl.error("Error invalidating orders.");
       });
  };

  const search = () => {
    console.log("Search functionality not yet implemented");
  };

  const handleChangeSelect = (item) => {
    console.log("Handle change select not yet implemented", item);
  };

  return (
    <div>
      {/* Components and logic for displaying and interacting with the UI */}
      <h1>PS Reporting Component</h1>
      <Button onClick={inValidateConfirm} disabled={invalidBtnEnable}>Invalidate Orders</Button>
      {/* More UI components will go here */}
    </div>
  );
};

export default PsReporting;
