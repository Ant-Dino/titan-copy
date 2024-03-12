// Import React, useEffect, useState from React
import React, { useEffect } from 'react';
// Import toasts functionalities from react-toastify
import { toast } from 'react-toastify';
// Import react-toastify CSS for styling the toast messages
import 'react-toastify/dist/ReactToastify.css';
// Import specific types from React for typing Props and events
import { FunctionComponent } from 'react';

// Define the props interface to type-check the received props
interface MessageLogMessageViewComponentProps {
  headerValue: string;
  content: string;
  closeModal: () => void;
}

// Define the component using the FunctionComponent generic type, passing in the props interface
const MessageLogMessageViewComponent: FunctionComponent<MessageLogMessageViewComponentProps> = ({ headerValue, content, closeModal }) => {
    
  // Use useEffect hook to run code when the component mounts
  useEffect(() => {
    // Call toast to display a message
    toast.info(`${headerValue}: ${content}`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
      
    // This is an empty dependency array, meaning this effect runs only once when the component mounts
  }, []);
  
  // Render method: Defines what React elements to display
  return (
    <div className="message-log-message-view">
      {/* Header area where we display the header value */}
      <div className="header">{headerValue}</div>
      {/* Content area where we display the message content */}
      <div className="content">{content}</div>
      {/* Close button to trigger closeModal */}
      <button onClick={() => closeModal()}>Close</button>
    </div>
  );
}

// Export the MessageLogMessageViewComponent for use in other parts of the application
export default MessageLogMessageViewComponent;