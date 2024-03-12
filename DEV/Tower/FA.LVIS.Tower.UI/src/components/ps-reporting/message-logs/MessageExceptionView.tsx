// Import statements for required modules and components
import React, { FC } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Prop types definition for the component
interface MessageExceptionViewProps {
  exceptionDescription: string;
}

/*
 * Functional component definition using TypeScript.
 * Receives exceptionDescription via props and displays it in a text area.
 * Utilizes react-toastify for notifications.
 */
const MessageExceptionView: FC<MessageExceptionViewProps> = ({ exceptionDescription }) => {
  // Function to close the modal or notification, might involve more logic in real application scenario
  const closeModal = () => {
    toast.dismiss(); // Assuming the function closes the toast notifications
};

  // Render component UI
  return (
    <div>
      {/* react-toastify container setup */}
      <ToastContainer />
      <div className="widget-header">
        <button type="button" onClick={closeModal} className="close">
          <i className="fa fa-times" aria-hidden="true"></i>
        </button>
        <i className="fa fa-2x fa-pencil-square-o"></i>
        <h3>Exception Description</h3>
      </div>
      <div className="widget-content">
        <form className="serviceForm">
          <div className="form-group">
            <textarea
              readOnly
              className="textarea-lg"
              spellCheck="false"
              value={exceptionDescription}
              style={{
                fontFamily: 'Courier',
                minWidth: '99.8%',
                minHeight: '480px',
}}
            ></textarea>
          </div>
        </form>
        <br />
        <div className="modal-footer">
          <button className="btn btn-primary" onClick={closeModal}>Close</button>
        </div>
      </div>
    </div>
  );
};

// Export the component
export default MessageExceptionView;