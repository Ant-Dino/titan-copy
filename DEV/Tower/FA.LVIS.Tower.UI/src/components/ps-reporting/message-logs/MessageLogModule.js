import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MessageDetailView from './MessageDetailView'; // Assume equivalent to 'ext-modules/psReporting/MessageLogDetails.html'
import MessageView from './MessageView'; // Assume equivalent to 'ext-modules/psReporting/MessagLogMessageView.html'
import ExceptionView from './ExceptionView'; // Assume equivalent to 'ext-modules/psReporting/MessageExceptionView.html'
import { Modal } from 'some-react-modal-library'; // Placeholder for actual modal import
interface MessageDetails {
  ParentMessageLogId: number;
  ExceptionDescription: string;
}
interface Props {}
const MessageLogModule: React.FC<Props> = () => {
  const [requestId, setRequestId] = useState<number | null>(null);
  const [messageDetails, setMessageDetails] = useState<MessageDetails[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [documentObjectId, setDocumentObjectId] = useState<number | null>(null);
  const [headerValue, setHeaderValue] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const [showMessageDetailModal, setShowMessageDetailModal] = useState<boolean>(false);
  const [showMessageModal, setShowMessageModal] = useState<boolean>(false);
  const [showExceptionModal, setShowExceptionModal] = useState<boolean>(false);
  useEffect(() => {
    if (requestId) {
      setLoading(true);
      axios.get(`ReportingController/GetMessageDetails/${requestId}`)
      .then(response => {
        setMessageDetails(response.data);
        setLoading(false);
      });
    }
  }, [requestId]);
  const refresh = () => {
    if (requestId) {
      setLoading(true);
      axios.get(`ReportingController/GetMessageDetails/${requestId}`)
      .then(response => {
        setMessageDetails(response.data);
        setLoading(false);
      });
    }
  };
  const searchdet = (MessageLogs: MessageDetails) => {
    return (MessageLogs.ParentMessageLogId === 0 || MessageLogs.ExceptionDescription !== '');
  };
  const scrollToTop = () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
  };
  const openMessageDetailModal = (ServiceId: number) => {
    setRequestId(ServiceId);
    setShowMessageDetailModal(true);
  };
  const openMessageModal = (DocumentobjectId: number, HeaderValue: string) => {
    setDocumentObjectId(DocumentobjectId);
    setHeaderValue(HeaderValue);
    setShowMessageModal(true);
  };
  const openExceptionModal = (Content: string) => {
    setContent(Content);
    setShowExceptionModal(true);
  };
  const closeModal = () => {
    setShowMessageDetailModal(false);
    setShowMessageModal(false);
    setShowExceptionModal(false);
  };
  return (
    <div>
      {loading ? <div>Loading...</div> : <div>
        {/* Messages */}
        {messageDetails.filter(searchdet).map((messageDetail, idx) => (
          <div key={idx} onClick={() => openMessageDetailModal(messageDetail.ParentMessageLogId)}>
            Message Details
          </div>
        ))}
      </div>}
      {/* Modal for Message Details */}
      {showMessageDetailModal && 
        <Modal isOpen={showMessageDetailModal} onRequestClose={closeModal}>
          <MessageDetailView requestId={requestId} />
        </Modal>
      }
      {/* Modal for Message View */}
      {showMessageModal && 
        <Modal isOpen={showMessageModal} onRequestClose={closeModal}>
          <MessageView documentObjectId={documentObjectId} headerValue={headerValue} />
        </Modal>
      }
      {/* Modal for Exception View */}
      {showExceptionModal && 
        <Modal isOpen={showExceptionModal} onRequestClose={closeModal}>
          <ExceptionView content={content} />
        </Modal>
      }
    </div>
  );
};
export default MessageLogModule;