import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import { Button } from 'react-bootstrap';

type MessageDetailsType = {
  ParentMessageLogId: number;
  ExceptionDescription: string;
};

type DocumentObjectType = {
  DocumentObjectId: string;
  HeaderValue: string;
};

type ExceptionContentType = {
  Content: string;
};

const MessageLog: React.FC = () => {
    const [messageDetails, setMessageDetails] = useState<MessageDetailsType[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [modalContent, setModalContent] = useState<DocumentObjectType | ExceptionContentType | null>(null);

    const fetchMessageDetails = async (requestId: string) => {
        setLoading(true);
        try {
            const response = await axios.get(`ReportingController/GetMessageDetails/${requestId}`);
            setMessageDetails(response.data);
            setLoading(false);
        } catch (error) {
            console.error("There was an error fetching the message details: ", error);
            setLoading(false);
        }
}; 

    useEffect(() => {
        const requestId = "YourRequestId"; 
        fetchMessageDetails(requestId);
}, []);

    const handleOpenModal = (content: DocumentObjectType | ExceptionContentType) => {
        setModalContent(content);
        setIsModalOpen(true);
};

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setModalContent(null);
};

    const renderModalContent = () => {
        if (!modalContent) return null;
        return typeof modalContent === "string" ? (
            <div>{modalContent}</div>
) : (
            <div>
                <p>Document ID: {modalContent.DocumentObjectId}</p>
                <p>Header Value: {modalContent.HeaderValue}</p>
            </div>
);
};

    return (
        <div>
            {loading && <p>Loading...</p>}
            {!loading && messageDetails.map((message, index) => (
                <div key={index}>
                    {/* Conditional rendering based on your logic here */}
                    <p>{message.ParentMessageLogId}</p>
                    <Button onClick={() => handleOpenModal(message)}>View Details</Button>
}</div>
))}
            <Modal isOpen={isModalOpen} onRequestClose={handleCloseModal}>
                {renderModalContent()}
                <Button onClick={handleCloseModal}>Close</Button>
}</Modal>
}</div>
);

};

export default MessageLog;