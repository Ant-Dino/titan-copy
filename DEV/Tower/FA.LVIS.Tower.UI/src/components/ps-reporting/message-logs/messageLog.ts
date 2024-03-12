import React, { useState, useCallback } from 'react';
import MessageLogDetailsComponent from 'DEV/Tower/FA.LVIS.Tower.UI/src/components/ps-reporting/message-logs/MessageLogDetails';
import MessageLogMessageViewComponent from 'DEV/Tower/FA.LVIS.Tower.UI/src/components/ps-reporting/message-logs/MessageLogMessageView';
import MessageExceptionViewComponent from 'DEV/Tower/FA.LVIS.Tower.UI/src/components/ps-reporting/message-logs/MessageExceptionView';

interface MessageLogComponentProps {
  requestID: string;
}

const MessageLogComponent: React.FC<MessageLogComponentProps> = ({ requestID }) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [messageDetails, setMessageDetails] = useState<any[]>([]);
  const [documentObjectID, setDocumentObjectID] = useState<string>('');
  const [headerValue, setHeaderValue] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const [exceptionDescription, setExceptionDescription] = useState<string>('');

  const refresh = useCallback(() => {
    setLoading(true);
    // Simulate fetching data. Replace with actual HTTP request.
    setTimeout(() => {
      setMessageDetails([{ id: 1, message: 'Test Message' }]); // Example data
      setLoading(false);
    }, 2000);
  }, []);

  const fetchMessageDetails = useCallback(() => {
    // Implement fetching logic here
  }, []);

  const closeModal = useCallback(() => {
    // Implement closing modal logic here
  }, []);

  const searchdet = (logs: any[]) => {
    return logs.filter((log) => log.ParentMessageLogId === 0 || log.ExceptionDescription !== '');
  };

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {/* Render MessageLogDetailsComponent */}
          <MessageLogDetailsComponent
            refresh={refresh}
            fetchMessageDetails={fetchMessageDetails}
            closeModal={closeModal}
            searchdet={searchdet}
          />
          {/* Render MessageLogMessageViewComponent if documentObjectID is set */}
          {documentObjectID && (
            <MessageLogMessageViewComponent
              headerValue={headerValue}
              content={content}
              closeModal={closeModal}
            />
          )}
          {/* Render MessageExceptionViewComponent if exceptionDescription is set */}
          {exceptionDescription && (
            <MessageExceptionViewComponent
              exceptionDescription={exceptionDescription}
              closeModal={closeModal}
            />
          )}
        </>
      )}
    </div>
  );
};

export default MessageLogComponent;