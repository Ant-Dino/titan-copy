import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Modal, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { toast } from 'react-toastify';
const PsEndPointAccessComponent = () => {
  const history = useHistory();
  const [cookies, setCookie] = useCookies(['activityright']);
  const [activityRight, setActivityRight] = useState(cookies.activityright || '');
  const [tenantName, setTenantName] = useState('');
  const [applicationList, setApplicationList] = useState([]);
  const [showMessage, setShowMessage] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  useEffect(() => {
    // Replace the event emitter with React context or props,
    // depending on how getUser is triggered in your application.

    // Mockup for demonstration
    const { activityRight: newActivityRight, tenantname: newTenantName } = { activityRight: 'SuperAdmin', tenantname: 'LVIS' };
    setActivityRight(newActivityRight);
    setTenantName(newTenantName);

    if (activityRight !== 'SuperAdmin' || tenantName !== 'LVIS') {
      alert('You are not authorized to view this page.');
      history.push('/dashboard');
    }

    axios.get('UtilitiesController/GetEndPointApplications')
      .then((response) => {
        setApplicationList(response.data);
      });
  }, [history, activityRight, tenantName]);
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const save = () => {
    setSubmitted(true);
    axios.post('UtilitiesController/AddCredentials/', { /* data */ })
      .then((response) => {
        if (response.data === true) {
          setShowMessage(true);
          toast.success("Credentials for Application was updated successfully");
          setSubmitted(false);
        }
      })
      .catch((error) => {
        setShowMessage(true);
        toast.error("There was an error in Inserting the credentials.");
        setSubmitted(false);
      });
  };
  return (
    <div>
      {showMessage && (
        <div>
          Message here
        </div>
      )}
      <button onClick={toggleShowPassword}>
        {showPassword ? 'Hide Password' : 'Show Password'}
      </button>
      <button onClick={save} disabled={submitted}>
        Save
      </button>
    </div>
  );
};
export default PsEndPointAccessComponent;