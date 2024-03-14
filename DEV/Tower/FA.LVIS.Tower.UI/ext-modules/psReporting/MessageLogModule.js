import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import ModalComponent from './ModalComponent'; // Assume this is the React equivalent of the AngularJS modal functionality

type MessageDetail = {
  ParentMessageLogId: number;
  ExceptionDescription: string;
};

type DocumentObject = {
  documentObjectId: string;
  headerValue: string;
};

type Props = {
  ServiceId: string;
};

const MessageLogComponent: React.FC<Props> = ({ ServiceId }) => {
  const [messageDetails, setMessageDetails] = useState<MessageDetail[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchMessageDetails = useCallback(async () => {
    setLoading(true);
    try {
      const response = await axios.get(`ReportingController/GetMessageDetails/${ServiceId}`);
      setMessageDetails(response.data);
    } catch (error) {
      console.error('Error fetching Message Details', error);
    } finally {
      setLoading(false);
    }
  }, [ServiceId]);

  useEffect(() => {
    fetchMessageDetails();
  }, [fetchMessageDetails]);

  const searchdet = useCallback((messageLogs: MessageDetail) => 
    messageLogs.ParentMessageLogId === 0 || messageLogs.ExceptionDescription !== '', []);

  const scrollTo = (eID: string) => {
    const element = document.getElementById(eID);
    if(element) {
      element.scrollIntoView();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const setContent = (documentObject: DocumentObject) => {
    // Open modal and pass Documentobjectid and HeaderValue as props
    // Assuming ModalComponent is a pre-defined modal component for displaying content
    // This part may differ based on your modal implementation
  };

  const setExceptionContent = (content: string) => {
    // Open modal and pass Content as prop
    // Assuming modal implementation details as per your application's architecture
  };

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        messageDetails.filter(searchdet).map((detail, index) => (
          <div key={index}>
            {/* Render your message detail component here */}
            <button onClick={() => scrollTo(`detail${index}`)}>Scroll To</button>
            <button onClick={() => setContent({ 
              documentObjectId: 'someId', 
              headerValue: 'HeaderValue' 
            })}>View Content</button>
            <button onClick={() => setExceptionContent('Exception Content')}>View Exception</button>
          </div>
        ))
      )}
    </div>
  );
};

export default MessageLogComponent;