 
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

function FastTaskMappingsComponent() {
    const [activityRight, setActivityRight] = useState('');
    const [canManageTEQ, setCanManageTEQ] = useState(false);
    const [canManageBEQ, setCanManageBEQ] = useState(false);
    const [hasAccess, setHasAccess] = useState(false);
    const [hasSuperAccess, setHasSuperAccess] = useState(false);
    const [fastTaskMappingDetails, setFastTaskMappingDetails] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [modalContent, setModalContent] = useState({});
    const { register, handleSubmit, errors } = useForm();

    useEffect(() => {
        const activityRight = localStorage.getItem('activityright') || ''; // Emulating $cookies.get()
        if (!activityRight) {
            UserInfo();
        } else {
            setActivityRight(activityRight);
            updateAccessRights(activityRight);
        }
    }, []);

    const updateAccessRights = (right) => {
        const isAdminOrSuperAdmin = right === 'Admin' || right === 'SuperAdmin';
        const isSuperAdmin = right === 'SuperAdmin';
        
        setHasAccess(isAdminOrSuperAdmin);
        setHasSuperAccess(isSuperAdmin);
    };

    const UserInfo = async () => {
        try {
            const response = await axios.get('api/user/info');
            const { ActivityRight, CanManageTEQ, CanManageBEQ } = response.data;
            setActivityRight(ActivityRight);
            setCanManageTEQ(CanManageTEQ);
            setCanManageBEQ(CanManageBEQ);
            updateAccessRights(ActivityRight);
        } catch (error) {
            console.error('Failed to fetch user info:', error);
        }
    };

    const fetchFastTaskMappingDetails = async () => {
        if (activityRight) {
            try {
                const response = await axios.get('FastTask/GetFASTTaskMappingDetails/');
                setFastTaskMappingDetails(response.data);
            } catch (error) {
                console.error('Failed to fetch task mapping details:', error);
            }
        }
    };

    useEffect(() => {
        fetchFastTaskMappingDetails();
    }, [activityRight]);

    const openModal = (content) => {
        setModalContent(content);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    // Placeholder for form submission logic
    const onFormSubmit = (data) => {
        console.log(data);
    };

    return (
        <div>
            <h2>FAST Task Mappings</h2>
            {hasAccess && <button onClick={() => openModal({ type: 'new' })}>Add New Fast Task Mapping</button>}
            <ul>
                {fastTaskMappingDetails.map((detail, index) => (
                    <li key={index} onDoubleClick={() => openModal({ type: 'edit', data: detail })}>{detail.FastTaskMapDesc}</li>
                ))}
            </ul>
            <Modal show={showModal} onHide={closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>{modalContent.type === 'new' ? 'Add New' : 'Edit'} FAST Task Mapping</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={handleSubmit(onFormSubmit)}>
                        {/* Form fields here */}
                        <Button variant="secondary" onClick={closeModal}>
                            Close
                        </Button>
                        <Button variant="primary" type="submit">
                            Save Changes
                        </Button>
                    </form>
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default FastTaskMappingsComponent;
