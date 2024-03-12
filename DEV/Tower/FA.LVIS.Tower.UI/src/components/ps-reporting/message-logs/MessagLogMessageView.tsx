import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './MessageLogMessageView.css'; // Assuming you have a CSS file for your styles

// Defining the props' structure for our component
interface Props {
  antiforgeryToken: string;
  HeaderValue: string;
  Content: string;
  onClose: () => void; // Function to close the modal
}

// The React functional component
const MessageLogMessageView: React.FC<Props> = ({ antiforgeryToken, HeaderValue, Content, onClose }) => {
  // State hooks for handling the local state if needed
  // e.g., to track changes in the content (not used in this static version)
    
  // A useEffect hook to perform side effects, e.g., to show a welcome toast message, or handle the antiforgeryToken
  useEffect(() => {
    // For demonstration: showing a welcome toast message
    toast.info('Welcome to the Message Log Viewer!');
  }, []); // An empty dependency array means this runs once after the initial render

  return (
    <div>
      <div className="widget-header">
        <button type="button" onClick={onClose} className="close" data-dismiss="modal">
          <i className="fa fa-times" aria-hidden="true"></i>
        </button>
        <i className="fa fa-2x fa-pencil-square-o"></i>
        <h3>{HeaderValue}</h3>
      </div>
      <div className="widget-content">
        {/* React-toastify container for displaying notifications */}
        <ToastContainer />
        <form name="messageForm" className="serviceForm">
          <div className="form-group">
            <textarea
              style={{ minWidth: '99.8%', minHeight: '480px', textWrap: 'none', fontFamily: "'Courier New'" }}
              readOnly
              className="textarea-lg"
              spellCheck="false"
              value={Content}
            ></textarea>
          </div>
        </form>
        <br />
        <div className="modal-footer">
          <button className="btn btn-primary" onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default MessageLogMessageView;