import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Modal from './Modal'; // Import the Modal component according to your directory structure
import MessageView from './MessageView'; // Adapt this import to your actual Message View component
import ExceptionView from './ExceptionView'; // Adapt this import to your actual Exception View component
// Define the types for your props and state
interface MessageLogProps {
  serviceId: string;
}
interface MessageLogState {
  messageDetails: any;
  loading: boolean;
const MessageLog: React.FC<MessageLogProps> = ({ serviceId }) => {
  const [messageDetails, setMessageDetails] = useState<MessageLogState['messageDetails']>(null);
  const [loading, setLoading] = useState<MessageLogState['loading']>(true);
  // Fetch message details
  useEffect(() => {
    const fetchMessageDetails = async () => {
      try {
        const response = await axios.get(`ReportingController/GetMessageDetails/${serviceId}`);
        setMessageDetails(response.data);
      } catch (error) {
        console.error('Error fetching message details:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMessageDetails();
  }, [serviceId]);
  const searchdet = (messageLogs: any) => {
    return messageLogs.ParentMessageLogId === 0 || messageLogs.ExceptionDescription !== '';
  };
  const scrollTo = (eID: string) => {
    const est = document.getElementById(eID);
    const docPos = f_scrollTop();
    if (est) {
      est.scrollIntoView();
      window.scrollTo(0, docPos);
  };
  const f_scrollTop = () => {
    return f_filterResults(
      window.pageYOffset ? window.pageYOffset : 0,
      document.documentElement ? document.documentElement.scrollTop : 0,
      document.body ? document.body.scrollTop : 0
    );
  };
  const f_filterResults = (n_win: number, n_docel: number, n_body: number) => {
    let n_result = n_win || 0;
    if (n_docel && (!n_result || (n_result > n_docel))) n_result = n_docel;
    return n_body && (!n_result || (n_result > n_body)) ? n_body : n_result;
  };
  const setContent = (documentObjectId: string, headerValue: string) => {
    // Assuming Modal opens MessageView component. Implement similar or adapt based on your actual modal logic and props.
    <Modal>
      <MessageView documentObjectId={documentObjectId} headerValue={headerValue} />
    </Modal>;
  };
  const setExceptionContent = (content: string) => {
    // Assuming Modal opens ExceptionView component. Implement similar or adapt based on your actual modal logic and props.
    <Modal>
      <ExceptionView content={content} />
    </Modal>;
  };
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      {messageDetails?.map((messageLog: any) => (
        <div key={messageLog.id}>
          {/* Render your message log details here */}
          <button onClick={() => scrollTo(messageLog.id)}>Scroll To</button>
          <button onClick={() => setContent(messageLog.documentObjectId, messageLog.headerValue)}>View Content</button>
          <button onClick={() => setExceptionContent(messageLog.exceptionDescription)}>View Exception</button>
        </div>
      ))}
    </div>
  );
};
export default MessageLog;