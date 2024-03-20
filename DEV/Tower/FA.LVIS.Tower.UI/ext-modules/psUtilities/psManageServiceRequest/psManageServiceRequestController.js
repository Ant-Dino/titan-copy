import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import { useHistory } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
function PsManageServiceRequestComponent() {
  const [serviceRequestId, setServiceRequestId] = useState('');
  const [externalRefNum, setExternalRefNum] = useState('');
  const [internalRefNum, setInternalRefNum] = useState('');
  const [internalRefId, setInternalRefId] = useState('');
  const [customerRefNum, setCustomerRefNum] = useState('');
  const [chkUniqueID, setChkUniqueID] = useState(false);
  const [chkExternalRefNum, setChkExternalRefNum] = useState(false);
  const [status, setStatus] = useState([]);
  const [statusList, setStatusList] = useState([]);
  const [disableServiceReqId, setDisableServiceReqId] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [busy, setBusy] = useState(false);
  const [cookies, setCookie] = useCookies(['activityright']);
  const history = useHistory();
  const { reset } = useForm(); // Form hook for reset functionality
  useEffect(() => {
    const checkAccess = () => {
      const activityright = cookies.activityright;
      const tenantname = "LVIS"; // assuming you get it from somewhere
      if (activityright !== 'SuperAdmin' || tenantname !== 'LVIS') {
        handleShow();
      }
    };
    const getStatusList = async () => {
      try {
        const response = await axios.get('UtilitiesController/GetStatus');
        setStatusList(response.data);
      } catch (error) {
        console.error("There was an error fetching the status list.", error);
      }
    };
    checkAccess();
    getStatusList();
  }, [cookies]);
  const handleShow = () => {
    toast.error('You are not authorized to view this page.', {
      onClose: () => history.push('/dashboard')
    });
  };
  const handleSave = async () => {
    try {
      const response = await axios.post(`UtilitiesController/UpdateServiceRequestInfo/${serviceRequestId}/${externalRefNum}/${internalRefNum}/${internalRefId}/${customerRefNum}/${status.ID}/${chkUniqueID}/${chkExternalRefNum}`);
      if (response.data === true) {
        setShowMessage(true);
        toast.success(`Service Request information with id ${serviceRequestId} was updated successfully`);
      }
    } catch (error) {
      setShowMessage(true);
      toast.error("There was an error in Updating Service Request information.");
    }
  };
  const handleSearch = async () => {
    setBusy(true);
    try {
      const response = await axios.get(`UtilitiesController/GetServiceReqInfo/${serviceRequestId}`);
      const data = response.data;
      if (data.ServiceRequestId > 0) {
        setServiceRequestId(data.ServiceRequestId);
        setExternalRefNum(data.ExternalRefNum);
        setInternalRefNum(data.InternalRefNum);
        setInternalRefId(data.InternalRefId);
        setCustomerRefNum(data.CustomerRefNum);
        setChkExternalRefNum(false);
        setChkUniqueID(false);
        const index = statusList.findIndex((item) => item.ID === data.Status.ID);
        if (index > -1) setStatus(statusList[index]);
        setDisableServiceReqId(true);
      } else {
        setShowMessage(true);
        toast.error(`There is no matching record found for Service Request ID: ${serviceRequestId}`);
      }
    } catch (error) {
      console.error("Error during search", error);
    }
    setBusy(false);
  };
  const handleRefreshSearch = () => {
    setServiceRequestId('');
    setExternalRefNum('');
    setInternalRefNum('');
    setInternalRefId('');
    setCustomerRefNum('');
    setChkUniqueID(false);
    setChkExternalRefNum(false);
    setStatus([]);
    setDisableServiceReqId(false);
    setShowMessage(false);
    reset(); // Reset form fields
  };
  return (
    <div>
      {/* Render component UI here */}
    </div>
  );
}
export default PsManageServiceRequestComponent;