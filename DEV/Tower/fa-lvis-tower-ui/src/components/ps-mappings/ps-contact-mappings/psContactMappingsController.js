import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import { Confirm } from 'react-confirm-bootstrap';
import { NotificationManager } from 'react-notifications';

const CustomModal = (props) => {
  // Modal content can be add here
  return (
    <Modal isOpen={props.isOpen} onRequestClose={props.onRequestClose}>
      {props.children}
    </Modal>
  );
};

function ContactMappings() {
  const [hasAccess, setHasAccess] = useState(false);
  const [hasSuperAccess, setHasSuperAccess] = useState(false);
  const [contactInfo, setContactInfo] = useState([]);
  const [tenant, setTenant] = useState({});
  const [locationName, setLocationName] = useState('');

  useEffect(() => {
    const getUserRights = async () => {
      try {
        const response = await axios.get('/api/user-info');
        const { activityright } = response.data;
        const adminRights = ['Admin', 'SuperAdmin'];
        setHasAccess(adminRights.includes(activityright));
        setHasSuperAccess(activityright === 'SuperAdmin');
      } catch (error) {
        console.error('Error fetching user rights:', error);
      }
    };

    getUserRights();
  }, []);

  useEffect(() => {
    if (hasAccess) {
      const fetchData = async () => {
        try {
          const response = await axios.get(`Security/GetContact/${locationName}`);
          if (response.data != null) {
            setContactInfo(response.data.map(val => ({ ...val, IsActive: val.IsActive ? 'Yes' : 'No' })));
          }
        } catch (error) {
          console.error('Error fetching contacts:', error);
        }
      };

      fetchData();
    }
  }, [hasAccess, locationName]);

  // Function to handle add new branch, similar to addNewBranch
  const addNewBranch = async (newBranchData) => {
    try {
      const response = await axios.post('/api/new-branch', newBranchData);
      if (response.data) {
        setContactInfo([...contactInfo, response.data]);
        NotificationManager.success('New branch added successfully');
      }
    } catch (error) {
      NotificationManager.error('Error adding new branch');
    }
  };

  // Function to handle delete branch, similar to deletebranchRow
  const deleteBranch = async (branchId) => {
    try {
      await axios.delete(`/api/branch/${branchId}`);
      setContactInfo(contactInfo.filter(item => item.ContactId !== branchId));
      NotificationManager.success('Branch deleted successfully');
    } catch (error) {
      NotificationManager.error('Error deleting branch');
    }
  };

  return (
    <div>
      {/* Assuming we can use a table to display contact mappings */}
      <table>
        <thead>
          <tr>
            <th>Location ID</th>
            <th>Location Name</th>
            <th>Contact ID</th>
            <th>Active</th>
          </tr>
        </thead>
        <tbody>
          {contactInfo.map((info) => (
            <tr key={info.ContactId}>
              <td>{info.LocationId}</td>
              <td>{info.LocationName}</td>
              <td>{info.LvisContactid}</td>
              <td>{info.IsActive}</td>
              <td>
                {/* Assuming action buttons for editing and deleting */}
                <button onClick={() => deleteBranch(info.ContactId)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ContactMappings;