import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from 'react-modal'; // Assuming a generic modal component or library
interface MessageLogProps {}
interface MessageLogState {
  messageDetails: any[]; // Replace any with a more specific type according to your data structure
  loading: boolean;
  exceptionDescription?: string; // Optional, based on your application logic
}
const MessageLog: React.FC<MessageLogProps> = () => {
  const [messageDetails, setMessageDetails] = useState<MessageLogState['messageDetails']>([]);
  const [loading, setLoading] = useState<MessageLogState['loading']>(true);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [content, setContent] = useState('');
  const [exceptionDescription, setExceptionDescription] = useState<MessageLogState['exceptionDescription']>('');
  const fetchMessageDetails = (requestId: string) => {
    setLoading(true);
    axios.get(`ReportingController/GetMessageDetails/${requestId}`).then((res) => {
      setMessageDetails(res.data);
      setLoading(false);
    });
  };
  useEffect(() => {
    fetchMessageDetails("someRequestId"); // Assuming "someRequestId" is your Request ID
  }, []);
  const openModal = (documentObjectId: string, headerValue?: string) => {
    setContent(`Content for ${documentObjectId} with header ${headerValue}`);
    setModalIsOpen(true);
  };
  const openExceptionModal = (content: string) => {
    setExceptionDescription(content);
    setModalIsOpen(true);
  };
  const closeModal = () => {
    setModalIsOpen(false);
  };
  // Assuming a simple modal rendering. You would replace this with your actual modal components
  const renderModal = () => (
    <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
      <div>Content: {content || exceptionDescription}</div>
      <button onClick={closeModal}>Close</button>
    </Modal>
  );
  return (
    <div>
      {loading && <p>Loading...</p>}
      {!loading && messageDetails.map((message, index) => (
        <div key={index}>
          {/* Render your message details here */}
          <button onClick={() => openModal(message.DocumentobjectId, message.HeaderValue)}>View Content</button>
        </div>
      ))}
      {renderModal()}
    </div>
  );
};
export default MessageLog;