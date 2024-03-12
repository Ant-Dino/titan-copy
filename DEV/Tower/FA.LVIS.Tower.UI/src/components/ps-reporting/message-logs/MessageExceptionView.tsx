import React, { FC } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// TypeScript interfaces for Props
interface MessageExceptionViewComponentProps {
  exceptionDescription: string;
  closeModal: () => void;
}

// React component definition with TypeScript
const MessageExceptionViewComponent: FC<MessageExceptionViewComponentProps> = ({ exceptionDescription, closeModal }) => {
  
  // Function to call when wanting to display a toast notification
  const notify = () => {
    toast.error(exceptionDescription, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
    
  // Effect that calls notify to display the exception as a toast on component mount
  React.useEffect(() => {
    notify();
  }, [exceptionDescription]);

  return (
    <div>
      {/* Toast Container for displaying messages */}
      <ToastContainer />
      <div className="widget-header">
        <button type="button" onClick={closeModal} className="close" data-dismiss="modal">
          <i className="fa fa-times" aria-hidden="true"></i>
        </button>
        <i className="fa fa-2x fa-pencil-square-o"></i>
        <h3>Exception Description</h3>
      </div>
      <div className="widget-content">
        <form className="serviceForm">
          <div className="form-group">
            <textarea readOnly className="textarea-lg" spellCheck="false" value={exceptionDescription} style={{fontFamily:'Courier', minWidth:'99.8%', minHeight: '480px'}}></textarea>
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

// Export the component 
export default MessageExceptionViewComponent;