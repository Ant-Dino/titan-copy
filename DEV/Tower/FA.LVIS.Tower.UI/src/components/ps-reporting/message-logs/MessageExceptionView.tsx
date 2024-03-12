import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './MessageExceptionView.css'; // Assuming the CSS is adapted accordingly and saved as MessageExceptionView.css

// Define the props expected by the component
interface MessageExceptionProps {
  exceptionDescription: string;
}

const MessageExceptionView: React.FC<MessageExceptionProps> = ({ exceptionDescription }) => {
  // Function to close the modal, assuming there's a mechanism in place for this
  const closeModal = () => {
    console.log('Closing modal...'); // Placeholder for actual close functionality
}

  React.useEffect(() => {
    // This is where we might listen to prop changes, lifecycle events, or side-effects.
    // Currently, it's used to demonstrate where hook logic might be placed.
  }, []); // The empty array means this effect runs once on mount

  return (
    <div>
      <div className="widget-header">
        <button type="button" onClick={closeModal} className="close" data-dismiss="modal">
          <i className="fa fa-times" aria-hidden="true"></i>
        </button>
        <i className="fa fa-2x fa-pencil-square-o"></i>
        <h3>Exception Description</h3>
      </div>
      <div className="widget-content">
        <ToastContainer />
        <form className="serviceForm">
          <div className="form-group">
            <textarea 
              readOnly 
              className="textarea-lg" 
              spellCheck="false" 
              style={{ fontFamily: 'Courier', minWidth: '99.8%', minHeight: '480px' }}
              value={exceptionDescription}
            />
          </div>
        </form>
        <br />
        <div className="modal-footer">
          <button className="btn btn-primary" onClick={closeModal}>Close</button>
        </div>
      </div>
    </div>
  );
}

export default MessageExceptionView;