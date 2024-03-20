 
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductProviderMappingsRowEdit from './ProductProviderMappingsRowEdit';
import { Modal } from 'react-bootstrap';

const PsProductProviderMappingsController = ({ ProviderMappingName }) => {
  const [activityRight, setActivityRight] = useState('');
  const [canManageTEQ, setCanManageTEQ] = useState(false);
  const [canManageBEQ, setCanManageBEQ] = useState(false);
  const [search, setSearch] = useState('');
  const [providerExternalID, setProviderExternalID] = useState('');
  const [serviceOfficeGridData, setServiceOfficeGridData] = useState([]);
  const [tenant, setTenant] = useState('');
  const [hasAccess, setHasAccess] = useState(false);
  const [hasSuperAccess, setHasSuperAccess] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState({});
  const [providerId, setProviderId] = useState('');

  useEffect(() => {
    const fetchUserRights = async () => {
      try {
        const response = await axios.get('/path/to/get/user/rights');
        setActivityRight(response.data.ActivityRight);
        setCanManageTEQ(response.data.CanManageTEQ);
        setCanManageBEQ(response.data.CanManageBEQ);
        checkAccess(response.data.ActivityRight);
      } catch (error) {
        console.error('Error fetching user rights', error);
      }
    };
    fetchUserRights();
    fetchTenant();
  }, []);

  const checkAccess = (right) => {
    const accessRights = ['Admin', 'SuperAdmin'];
    const superRights = ['SuperAdmin'];
    setHasAccess(accessRights.includes(right));
    setHasSuperAccess(superRights.includes(right));
  };

  const fetchTenant = async () => {
    const response = await axios.get('Security/GetTenant');
    setTenant(response.data);
  };

  const fetchProductProviders = async (searchQuery) => {
    if (activityRight) {
      try {
        const response = await axios.get(`ProductProvider/GetProductProviders/${searchQuery}`);
        const modifiedData = response.data.map(data => ({
          ...data,
          ProviderName: data.ProviderName ? `${data.ProviderName} (${data.ExternalId})` : `${data.ProviderId} (${data.ExternalId})`
        }));
        setServiceOfficeGridData(modifiedData);
      } catch (error) {
        console.error('Failed to fetch product providers', error);
      }
    }
  };

  useEffect(() => {
    fetchProductProviders(search);
  }, [search, activityRight]);

  const handleEditProductBranch = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct({});
  };

  const addNewBranch = () => {
    // Logic to add a new branch
    setIsModalOpen(true);
    setSelectedProduct({
      ProductProviderMapId: '0',
      ProviderId: search,
      ProviderName: ProviderMappingName.ProviderNameExtension,
      CustomerId: '',
      ContactId: '',
      LocationId: '',
      ProductId: '',
      ServiceId: '',
      TenantId: tenant,
      ApplicationId: ''
    });
  };

  return (
    <div>
      <h2>Product Provider Mappings</h2>
      {/* Render logic based on access */}
      {hasAccess && <button onClick={addNewBranch}>Add New Branch</button>}
      <div>
        {/* Map through serviceOfficeGridData to display data */}
        {serviceOfficeGridData.map((product, index) => (
          <div key={index} onDoubleClick={() => handleEditProductBranch(product)}>
            <p>{product.ProviderName}</p>
            {/* Add more fields as needed */}
          </div>
        ))}
      </div>
      <Modal show={isModalOpen} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Product Branch</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ProductProviderMappingsRowEdit product={selectedProduct} onClose={handleCloseModal} />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default PsProductProviderMappingsController;
