import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Interface to type the props received by the component
interface MessageExceptionViewComponentProps {
  exceptionDescription: string;
  closeModal: () => void;
}

// React Functional Component
const MessageExceptionViewComponent: React.FC<MessageExceptionViewComponentProps> = ({ exceptionDescription, closeModal }) => {
  // Function to display the toast notification
  const showToast = () => {
    toast.error(exceptionDescription, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
   };

  // useEffect hook to show the toast notification when the component mounts
  React.useEffect(() => {
    showToast();
   }, [exceptionDescription]);

  return (
    <>
      <div>
        {/* Toast Container */}
        <ToastContainer />
      </div>
      <div className="widget-header">
        <button type="button" onClick={closeModal} className="close" data-dismiss="modal"><i className="fa fa-times" aria-hidden="true"></i></button>
        <i className="fa fa-2x fa-pencil-square-o"></i>
        <h3>Exception Description</h3>
      </div>
      <div className="widget-content">
        <form className="serviceForm">
          <div className="form-group">
            <textarea readOnly className="textarea-lg" spellCheck="false" value={exceptionDescription} style={{fontFamily:'Courier', minWidth: '99.8%', minHeight: '480px'}}></textarea>
          </div>
        </form>
        <br />
        <div className="modal-footer">
          <button className="btn btn-primary" onClick={closeModal}>Close</button>
        </div>
      </div>
    </>
   );
};

export default MessageExceptionViewComponent;