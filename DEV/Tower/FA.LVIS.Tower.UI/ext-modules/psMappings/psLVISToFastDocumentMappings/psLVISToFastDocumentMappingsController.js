  
import React, { useState, useEffect } from 'react';  
import axios from 'axios';  
import Modal from './ModalComponent'; // Assuming you have a Modal component for edit and add new document  
  
const FastDocumentMappingsComponent = () => {  
    const [userRights, setUserRights] = useState({ activityRight: '', canManageTEQ: false, canManageBEQ: false });  
    const [hasAccess, setHasAccess] = useState(false);  
    const [hasSuperAccess, setHasSuperAccess] = useState(false);  
    const [documents, setDocuments] = useState([]);  
    const [tenants, setTenants] = useState('');  
    const [isTenantVisible, setIsTenantVisible] = useState(false);  
  
    useEffect(() => {  
        const fetchUserRights = async () => {  
            // Implement fetching logic based on your previous $http.get('Security/GetUser') or UserInfo.getUser()  
            // Example:  
            const response = await axios.get('/api/get-user-rights');  
            setUserRights({  
                activityRight: response.data.activityRight,  
                canManageTEQ: response.data.CanManageTEQ,  
                canManageBEQ: response.data.CanManageBEQ  
            });  
        };  
        fetchUserRights();  
    }, []);  
  
    useEffect(() => {  
        if (userRights.activityRight === 'Admin' || userRights.activityRight === 'SuperAdmin') {  
            setHasAccess(true);  
        }  
        if (userRights.activityRight === 'SuperAdmin') {  
            setHasSuperAccess(true);  
        }  
        setIsTenantVisible(userRights.tenantName === 'LVIS');  
    }, [userRights]);  
  
    useEffect(() => {  
        const fetchDocuments = async () => {  
            // Logic to fetch documents similar to $http.get('FastDocs/LVISToFastDocs/') from AngularJS  
            const response = await axios.get('/api/fastdocs/lvistofastdocs');  
            setDocuments(response.data);  
        };  
        if (userRights.activityRight) {  
            fetchDocuments();  
        }  
    }, [userRights.activityRight]);  
  
    const handleAddNewDocument = (newDocument) => {  
        // Logic for handling adding a new document  
        // You'll likely want to call an API endpoint to save the new document, then fetch the updated list  
    };  
  
    const handleEditDocument = (documentId, updatedDocument) => {  
        // Logic for handling editing an existing document  
        // As above, call your API to update the document, then fetch or update your state with the updated list  
    };  
  
    const handleDeleteDocument = (documentId) => {  
        // Logic for deleting a document  
        // Call your API to delete the document, then fetch or update your state to remove it from the list  
    };  
  
    return (  
        <div>  
            {hasAccess && (  
                <button onClick={() => handleAddNewDocument()}>Add New Document</button>  
            )}  
            <div>  
                {documents.map((document) => (  
                    <div key={document.id}>  
                        {document.name}  
                        {hasAccess && <button onClick={() => handleEditDocument(document.id)}>Edit</button>}  
                        {hasAccess && <button onClick={() => handleDeleteDocument(document.id)}>Delete</button>}  
                    </div>  
                ))}  
            </div>  
            {/* Assuming ModalComponent is a modal/popup to add or edit documents. Implement or include as needed. */}  
            {<Modal />}  
        </div>  
    );  
};  
  
export default FastDocumentMappingsComponent;  
