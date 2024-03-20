import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useCookies } from 'react-cookie';
import { useHistory } from 'react-router-dom';
const PsSecurityComponent = () => {
  const [cookies, setCookie] = useCookies(['activityright']);
  const [activityRight, setActivityRight] = useState(cookies.activityright || '');
  const [canManageTEQ, setCanManageTEQ] = useState(false);
  const [canManageBEQ, setCanManageBEQ] = useState(false);
  const [hasAccess, setHasAccess] = useState(false);
  const [hasModifyAccess, setHasModifyAccess] = useState(false);
  const [serviceGridData, setServiceGridData] = useState([]);
  const [tenant, setTenant] = useState('');
  const [showModal, setShowModal] = useState(false);
  const history = useHistory();
  useEffect(() => {
    getUserInfo();
    fetchTenantInfo();
    fetchSecurityGridData();
  }, []);
  const getUserInfo = async () => {
    try {
      const response = await axios.get('Security/GetCurrentUser/');
      const userInfo = response.data;
      setActivityRight(userInfo.ActivityRight);
      setCanManageTEQ(userInfo.CanManageTEQ);
      setCanManageBEQ(userInfo.CanManageBEQ);
      checkAccessRights(userInfo.ActivityRight);
    } catch (error) {
      console.error("Fetching user info failed:", error);
    }
  };
  const checkAccessRights = (right) => {
    if (right === 'Admin' || right === 'SuperAdmin') {
      setHasAccess(true);
    }
    if (right === 'SuperAdmin') {
      setHasModifyAccess(true);
    } else {
      setShowModal(true);
      setTimeout(() => {
        history.push('/dashboard');
      }, 5000);
    }
  };
  const fetchTenantInfo = async () => {
    try {
      const response = await axios.get('Security/GetTenant');
      setTenant(response.data);
    } catch (error) {
      console.error("Fetching tenant info failed:", error);
    }
  };
  const fetchSecurityGridData = async () => {
    if (activityRight) {
      try {
        const response = await axios.get('Security/GetUsers');
        setServiceGridData(response.data);
      } catch (error) {
        console.error("Fetching security grid data failed:", error);
      }
    }
  };
  const handleCloseModal = () => {
    setShowModal(false);
    history.push('/dashboard');
  };
  return (
    <div>
      {showModal &&
        <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>Attention</Modal.Title>
          </Modal.Header>
          <Modal.Body>You are not authorized to view this page.</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      }
      <div>
        {/* Display data from serviceGridData, implement filtering, selection, and other logic as required */}
      </div>
    </div>
  );
};
export default PsSecurityComponent;