import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MessageModal from './MessageModal'; // Assuming you have created equivalent React modal components
import ExceptionModal from './ExceptionModal'; // Assuming you have created equivalent React modal components
interface MessageDetails {
  ParentMessageLogId: number;
  ExceptionDescription: string;
interface Props {
  ServiceId: string;
const MessageLogComponent: React.FC<Props> = ({ ServiceId }) => {
  const [messageDetails, setMessageDetails] = useState<MessageDetails[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    const fetchMessageDetails = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`ReportingController/GetMessageDetails/${ServiceId}`);
        setMessageDetails(response.data);
      } catch (error) {
        console.error("Failed to fetch Message Details", error);
      } finally {
        setLoading(false);
      }
    };
    fetchMessageDetails();
  }, [ServiceId]);
  const searchDetails = (messageLogs: MessageDetails) => {
    return messageLogs.ParentMessageLogId === 0 || messageLogs.ExceptionDescription !== '';
  };
  const scrollTo = (eID: string) => {
    const element = document.getElementById(eID);
    if (element) {
      element.scrollIntoView();
    }
  };
  const openMessageModal = (documentObjectId: string, headerValue: string) => {
    // Open message modal
    // This is a placeholder for modal logic, use actual modal logic with props
  };
  const openExceptionModal = (content: string) => {
    // Open exception modal
    // This is a placeholder for modal logic, use actual modal logic with props
  };
  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          {messageDetails.filter(searchDetails).map((messageLog, index) => (
            <div key={index}>
              {/* Display the message log details and buttons for modal pop-up */}
              {/* Placeholder example for button, insert actual design and functionality */}
              <button onClick={() => openMessageModal('DocumentObjectId', 'HeaderValue')}>Open Message Modal</button>
              <button onClick={() => openExceptionModal('Content')}>Open Exception Modal</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MessageLogComponent;