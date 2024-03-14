import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ModalComponent from './ModalComponent'; // Assuming we have a ModalComponent equivalent

interface MessageDetails {
  // Define the structure according to your data
  ParentMessageLogId: number;
  ExceptionDescription: string;
}

interface DocumentObject {
  DocumentobjectId: string;
  HeaderValue: string;
}

interface Props {
  Serviceid: string;
}

const MessageLog: React.FC<Props> = ({ Serviceid }) => {
  const [messageDetails, setMessageDetails] = useState<MessageDetails[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchMessageDetails = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`ReportingController/GetMessageDetails/${Serviceid}`);
      setMessageDetails(response.data);
    } catch (error) {
      console.error("Fetching message details failed:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMessageDetails();
  }, [Serviceid]);

  const searchdet = (messageLogs: MessageDetails) => {
    return (messageLogs.ParentMessageLogId === 0 || messageLogs.ExceptionDescription !== '');
  };

  // Simulation of scrollTo function in React environment
  const scrollTo = (eID: string) => {
    const element = document.getElementById(eID);
    if (element) {
      element.scrollIntoView();
    }
  };

  const setContent = (documentObjectId: string, headerValue: string) => {
    // Assuming ModalComponent is configured to accept these props.
    // Show modal with content
  };

  const setExceptionContent = (content: string) => {
    // Assuming ModalComponent is configured to handle exception content in props
    // Show modal with exception content
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {messageDetails.filter(searchdet).map((detail, index) => (
        <div key={index}>
          {/* Display your message details */}
          <button onClick={() => setContent(detail.DocumentobjectId, "Your Header Value")}>Open Content</button>
          <button onClick={() => setExceptionContent("Your Exception Content")}>Open Exception</button>
        </div>
      ))}
      <button onClick={() => scrollTo("top")}>Scroll to Top</button>
    </div>
  );
};

export default MessageLog;