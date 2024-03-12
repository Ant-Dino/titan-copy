import React, { useState, useEffect } from 'react';
import MessageLogDetailsComponent from 'DEV/Tower/FA.LVIS.Tower.UI/src/components/ps-reporting/message-logs/MessageLogDetails.tsx';
import MessageLogMessageViewComponent from 'DEV/Tower/FA.LVIS.Tower.UI/src/components/ps-reporting/message-logs/MessageLogMessageView.tsx';

interface MessageDetail {
  ParentMessageLogId: number;
  ExceptionDescription: string;
}

const MessageLogComponent: React.FC = () => {
  const [messageDetails, setMessageDetails] = useState<Array<MessageDetail>>([]);
  const [selectedDocumentId, setSelectedDocumentId] = useState<string | null>(null);
  const [selectedHeaderValue, setSelectedHeaderValue] = useState<string>('');
  const [selectedContent, setSelectedContent] = useState<string>('');

  const fetchMessageDetails = (requestId: string) => {
    // This should be replaced by the actual API call
    const url = `ReportingController/GetMessageDetails/${requestId}`;
    // Example: fetch(url).then((response) => response.json()).then(setMessageDetails);
    console.log(`Fetching message details for Request ID: ${requestId}`);
  };

  const searchdet = (messageLog: MessageDetail) => {
    return messageLog.ParentMessageLogId === 0 || messageLog.ExceptionDescription !== '';
  };

  const closeModal = () => {
    setSelectedDocumentId(null);
    setSelectedHeaderValue('');
    setSelectedContent('');
  };

  const setContent = (documentObjectId: string, headerValue: string) => {
    // Mocking fetching document content
    const content = `Content for ${documentObjectId}`;
    setSelectedDocumentId(documentObjectId);
    setSelectedHeaderValue(headerValue);
    setSelectedContent(content);
  };
 
  useEffect(() => {
    fetchMessageDetails("SomeServiceRequestId");
  }, []);

  return (
    <div>
      {messageDetails.filter(searchdet).map((detail, index) => (
        <div key={index} onClick={() => setContent("DocumentObjectId", "HeaderValue")}>
          Details
        </div>
      ))}
      {selectedDocumentId && (
        <MessageLogMessageViewComponent
          headerValue={selectedHeaderValue}
          content={selectedContent}
          closeModal={closeModal}
        />
      )}
      <MessageLogDetailsComponent
        refresh={() => fetchMessageDetails("AnotherServiceRequestId")}
        fetchMessageDetails={fetchMessageDetails}
        closeModal={closeModal}
        searchdet={searchdet}
      />
    </div>
  );
};

export default MessageLogComponent;