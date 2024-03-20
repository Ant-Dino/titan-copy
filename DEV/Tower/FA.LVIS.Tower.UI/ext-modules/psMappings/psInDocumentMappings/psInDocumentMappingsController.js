import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Modal, Button } from 'react-bootstrap';

// Assuming we have an API service similar to AngularJS service for API URLs
import psInDocumentMappingsApiUri from './psInDocumentMappingsApiUri';

// Modal components for Editing and Adding Documents, assuming external components
import InDocumentMappingsEditModal from './InDocumentMappingsEditModal';
import InDocumentMappingsAddModal from './InDocumentMappingsAddModal';

const InDocumentMappings = () => {
  const [activityRight, setActivityRight] = useState('');
  const [canManageTEQ, setCanManageTEQ] = useState(false);
  const [canManageBEQ, setCanManageBEQ] = useState(false);
  const [documents, setDocuments] = useState([]);
  const [tenant, setTenant] = useState('');
  const [hasAccess, setHasAccess] = useState(false);
  const [hasSuperAccess, setHasSuperAccess] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [selectedDocument, setSelectedDocument] = useState(null);

  useEffect(() => {
    // Simulate getting user info like in $scope.$on("getUser")
    const getUserInfo = async () => {
      try {
        const response = await axios.get('/user/info');
        const userData = response.data;
        setActivityRight(userData.ActivityRight);
        setCanManageTEQ(userData.CanManageTEQ);
        setCanManageBEQ(userData.CanManageBEQ);
        checkAccessControl(userData.ActivityRight);
      } catch (error) {
        console.error('Failed to fetch user info:', error);
      }
    };

    getUserInfo();
    fetchDocuments();
    fetchTenant();
  }, []);

  const checkAccessControl = (right) => {
    if (right === 'Admin' || right === 'SuperAdmin') {
      setHasAccess(true);
    }
    if (right === 'SuperAdmin') {
      setHasSuperAccess(true);
    }
  };

  const fetchDocuments = async () => {
    if (!activityRight) return;
    try {
      const response = await axios.get('InboundDocs/GetInboundDocs/');
      setDocuments(response.data);
    } catch (error) {
      console.error('Failed to fetch documents:', error);
    }
  };

  const fetchTenant = async () => {
    try {
      const response = await axios.get('Security/GetTenant');
      setTenant(response.data);
    } catch (error) {
      console.error('Failed to fetch tenant:', error);
    }
  };

  const editDocument = (document) => {
    setSelectedDocument(document);
    setShowEditModal(true);
  };

  const addNewDocument = () => {
    setShowAddModal(true);
  };

  const closeModal = () => {
    setShowEditModal(false);
    setShowAddModal(false);
    fetchDocuments(); // Refresh documents after modal close
  };

  return (
    <div>
      <h2>InDocument Mappings</h2>
      {hasAccess && <button onClick={addNewDocument}>Add New Document</button>}
      <div>
        {documents.map((doc, index) => (
          <div key={index} onDoubleClick={() => editDocument(doc)}>
            <p>{doc.ExternalApplicationName}</p>
            <p>{doc.ExternalDocumentTypeDesc}</p>
          </div>
        ))}
      </div>
      {showEditModal && (
        <InDocumentMappingsEditModal
          show={showEditModal}
          onHide={closeModal}
          document={selectedDocument}
        />
      )}
      {showAddModal && (
        <InDocumentMappingsAddModal
          show={showAddModal}
          onHide={closeModal}
        />
      )}
    </div>
  );
};

export default InDocumentMappings;