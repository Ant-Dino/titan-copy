// Importing necessary libraries and components
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FC } from 'react'; // FC is shorthand for FunctionComponent

// TypeScript interface for props
interface MessageExceptionViewProps {
  exceptionDescription: string;
}

// The React Component
const MessageExceptionView: FC<MessageExceptionViewProps> = ({ exceptionDescription }) => {

    // Function to close the notification/modal, not implemented for simplicity as it would depend on parent component's state
  const handleClose = () => {
    console.log('Close modal functionality to be implemented by parent component');
    };

    // useEffect hook to display toast notification on component mount
  React.useEffect(() => {
    toast.info(exceptionDescription, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    }, [exceptionDescription]); // Note: dependency array contains exceptionDescription to trigger toast on its change

    // The component's rendered JSX
  return (
    <div>
      {/* React-Toastify container */}
      <ToastContainer />
      <div className="widget-header">
        <button type="button" onClick={handleClose} className="close" data-dismiss="modal">
          <i className="fa fa-times" aria-hidden="true"></i>
        </button>
        <i className="fa fa-2x fa-pencil-square-o"></i>
        <h3>Exception Description</h3>
      </div>
      <div className="widget-content">
        <form className="serviceForm">
          <div className="form-group">
            <textarea readOnly className="textarea-lg" spellCheck="false" style={{ fontFamily: 'Courier', minWidth: '99.8%', minHeight: '480px' }} value={exceptionDescription}></textarea>
          </div>
        </form>
        <br />
        <div className="modal-footer">
          <button className="btn btn-primary" onClick={handleClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

// Exporting the component
export default MessageExceptionView;