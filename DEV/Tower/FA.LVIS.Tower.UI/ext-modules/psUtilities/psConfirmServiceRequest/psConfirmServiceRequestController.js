import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { Modal, Button, Form, Growl } from 'react-bootstrap'; // Assuming you use react-bootstrap for UI components

const ConfirmServiceRequestComponent = () => {
  const history = useHistory();
  const [disableServiceReqId, setDisableServiceReqId] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [tenantName, setTenantName] = useState('');
  const [activityRight, setActivityRight] = useState('');
  const [serviceRequestId, setServiceRequestId] = useState('');
  const [externalRefNum, setExternalRefNum] = useState('');
  const [internalRefNum, setInternalRefNum] = useState('');
  const [internalRefId, setInternalRefId] = useState('');
  const [customerRefNum, setCustomerRefNum] = useState('');
  const [confirmServiceCheck, setConfirmServiceCheck] = useState(false);
  const [statusList, setStatusList] = useState([]);
  const [status, setStatus] = useState([]);
  const [entity, setEntity] = useState({});
  const [busy, setBusy] = useState(false);
  const [gmsg, setGmsg] = useState('');

  useEffect(() => {
    const activityRightFromCookie = document.cookie.split('; ').find(row => row.startsWith('activityright=')).split('=')[1];
    if (activityRightFromCookie) {
      setActivityRight(activityRightFromCookie);
    }

    // Fetch Status List
    axios.get('UtilitiesController/GetStatus')
        .then(response => {
            setStatusList(response.data);
        });

    // Mocking user data fetch, replace with actual logic
    const userInfo = { activityright: 'SuperAdmin', tenantname: 'DemoTenant' }; // Replace this with actual API call
    setActivityRight(userInfo.activityright);
    setTenantName(userInfo.tenantname);
  }, []);

  const handleConfirm = () => {
    setConfirmServiceCheck(true);
    axios.get(`UtilitiesController/ConfirmService/${serviceRequestId}`)
        .then(response => {
            if (response.data === true) {
                Growl.success(`Confirm Service ${serviceRequestId} successful`); // This needs to be replaced with your actual success message logic
            } else {
                Growl.error(`Confirm Service ${serviceRequestId} not successful`); // This needs to be replaced with your actual error message logic
            }
            setConfirmServiceCheck(false);
        });
  };

  const handleSearch = () => {
    setBusy(true);
    axios.get(`UtilitiesController/GetServiceReqInfoWithTenant/${serviceRequestId}`)
        .then(response => {
            setEntity(response.data);
            if (response.data.ServiceRequestId > 0) {
                setExternalRefNum(response.data.ExternalRefNum);
                setInternalRefNum(response.data.InternalRefNum);
                setInternalRefId(response.data.InternalRefId);
                setCustomerRefNum(response.data.CustomerRefNum);
                const index = statusList.findIndex(status => status.ID === response.data.Status.ID);
                if (index > -1) setStatus(statusList[index]);
                setDisableServiceReqId(true);
            } else {
                setShowMessage(true);
                Growl.error(`There is no matching record found for Service Request ID: ${serviceRequestId}`); // Replace with your actual message logic
            }
            setBusy(false);
        });
  };

  const handleRefreshSearch = () => {
    setServiceRequestId('');
    setExternalRefNum('');
    setInternalRefNum('');
    setInternalRefId('');
    setCustomerRefNum('');
    setConfirmServiceCheck(false);
    setDisableServiceReqId(false);
    setShowMessage(false);
    if (gmsg !== '') {
        gmsg.destroy();
    }
  };

  if (activityRight !== 'SuperAdmin') {
    // Replace with your actual redirect or error disclosure logic
    return (
      <div>You are not authorized to view this page.</div>
    );
  }

  return (
    <div>
      {/* Your JSX here, including form, inputs, and buttons with their respective handlers */}
    </div>
  );
};

export default ConfirmServiceRequestComponent;