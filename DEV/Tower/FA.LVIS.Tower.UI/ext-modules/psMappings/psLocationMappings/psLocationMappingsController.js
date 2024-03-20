 
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Modal, Button, Alert } from 'react-bootstrap';
import { toast } from 'react-toastify';

const PsLocationMappings = () => {
  const [hasAccess, setHasAccess] = useState(false);
  const [hasSuperAccess, setHasSuperAccess] = useState(false);
  const [serviceBranchGrid, setServiceBranchGrid] = useState([]);
  const [tenant, setTenant] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [customerNameLink, setCustomerNameLink] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const userInfo = UserInfo.getUser(); // Assuming UserInfo.getUser returns a promise.
    userInfo.then((response) => {
      const { ActivityRight, CanManageTEQ, CanManageBEQ } = response;
      if(ActivityRight === 'Admin' || ActivityRight === 'SuperAdmin') {
        setHasAccess(true);
      }
      if(ActivityRight === 'SuperAdmin') {
        setHasSuperAccess(true);
      }
    }).catch((error) => {
      console.error('Error fetching user info:', error);
    });
  }, []);

  useEffect(() => {
    if(hasAccess || hasSuperAccess) {
      let searchParams = new URLSearchParams(window.location.search);
      let customerParam = searchParams.get('CustomerName') || '';
      let search = '';
      setCustomerName(customerParam);
      if (customerParam.indexOf(":") > 0) {
        let parts = customerParam.split(":");
        setCustomerNameLink(parts[0]);
        search = parts[1];
      }
      fetchLocations(search);
    }
  }, [hasAccess, hasSuperAccess]);

  const fetchLocations = (search) => {
    axios.get(`Locations/GetLocations/${search}`).then((response) => {
      setServiceBranchGrid(response.data);
      setIsLoading(false);
    }).catch((error) => {
      console.error("Failed to fetch locations", error);
      setIsLoading(false);
    });
  };

  const handleAddNewBranch = () => {
    // Implement add new branch logic.
  };

  const handleBulkImportLocations = () => {
    // Implement bulk import locations logic.
  };

  const handleDeleteBranchRow = (row) => {
    // Confirmation dialog logic can be implemented.
    axios.get(`Locations/Delete/${row.locationId}`).then(() => {
      toast.success("The record was deleted successfully");
      // Remove row from UI logic
    }).catch(error => {
      toast.error("Cannot delete row");
    });
  };

  return (
    <div>
      <h2>Location Mappings Component</h2>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <Button onClick={handleAddNewBranch}>Add New Branch</Button>
          <Button onClick={handleBulkImportLocations}>Bulk Import Locations</Button>
          {/* Render serviceBranchGrid here */}
        </div>
      )}
      <Modal>
        {/* Modal Content */}
      </Modal>
    </div>
  );
};

export default PsLocationMappings;
