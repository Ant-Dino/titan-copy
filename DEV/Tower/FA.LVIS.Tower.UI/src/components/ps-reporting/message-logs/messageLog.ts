import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from './Modal'; // Assuming Modal is the React equivalent for $uibModal
import MessageLogDetails from './MessageLogDetails'; // Equivalent of 'ext-modules/psReporting/MessageLogDetails.html'
import MessageLogMessageView from './MessageLogMessageView'; // Equivalent of 'ext-modules/psReporting/MessagLogMessageView.html'
import MessageExceptionView from './MessageExceptionView'; // Equivalent of 'ext-modules/psReporting/MessageExceptionView.html'
interface MessageLogModuleProps {}
interface MessageDetails {
  ParentMessageLogId: number;
  ExceptionDescription: string;
interface MessageLogState {
  loading: boolean;
  messageDetails: MessageDetails[];
const MessageLogModule: React.FC<MessageLogModuleProps> = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [messageDetails, setMessageDetails] = useState<MessageDetails[]>([]);
  const [requestId, setRequestId] = useState<string | null>(null);
  const fetchMessageDetails = async (requestId: string) => {
    setLoading(true);
    try {
      const response = await axios.get(`ReportingController/GetMessageDetails/${requestId}`);
      setMessageDetails(response.data);
    } catch (error) {
      console.error("Failed to fetch message details", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    if (requestId) {
      fetchMessageDetails(requestId);
    }
  }, [requestId]);
  const openPopupModal = (Serviceid: string) => {
    // Assuming Modal component is a React equivalent to $uibModal
    // Note: For a real project, implement or use a library for modals.
    <Modal
      isOpen={true}
      onRequestClose={() => setRequestId(null)}
      contentLabel="Message Log Details"
    >
      <MessageLogDetails requestId={requestId} />
    </Modal>
  };
  const searchdet = (messageLogs: MessageDetails) => {
    return (messageLogs.ParentMessageLogId === 0 || messageLogs.ExceptionDescription !== '');
  }
  const scrollTo = (eID: string) => {
    const est = document.getElementById(eID);
    if (est) {
      const docPos = f_scrollTop();
      est.scrollIntoView();
      window.scrollTo(0, docPos);
    }
  };
  const f_scrollTop = () => {
    return f_filterResults (
      window.pageYOffset ? window.pageYOffset : 0,
      document.documentElement ? document.documentElement.scrollTop : 0,
      document.body ? document.body.scrollTop : 0
    );
  }
  const f_filterResults = (n_win: number, n_docel: number, n_body: number) => {
    var n_result = n_win ? n_win : 0;
    if (n_docel && (!n_result || (n_result > n_docel)))
      n_result = n_docel;
    return n_body && (!n_result || (n_result > n_body)) ? n_body : n_result;
  }
  return (
    <div>
      {loading && <p>Loading...</p>}
      {!loading && messageDetails.filter(searchdet).map((messageLog) => (
        <div key={messageLog.ParentMessageLogId}>
          {/* Display details */}
          <button onClick={() => openPopupModal(messageLog.ExceptionDescription)}>Open Modal</button>
          <button onClick={() => scrollTo('top')}>Scroll To Top</button>
        </div>
      ))}
    </div>
  );
};
export default MessageLogModule;