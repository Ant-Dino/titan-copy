import React, { FC } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './MessageExceptionViewComponent.css'; // Assuming you have or will create CSS similar to your AngularJS styles

// Interface to type the props expected by the component
interface MessageExceptionViewProps {
  exceptionDescription: string;
  closeModal: () => void;
}

// The MessageExceptionViewComponent function component
const MessageExceptionViewComponent: FC<MessageExceptionViewProps> = ({ exceptionDescription, closeModal }) => {
  // Function to show toast notification
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

  // Call showToast when the component mounts using React useEffect hook
  React.useEffect(() => {
    showToast(); // This will show the toast notification with the exception description
  }, [exceptionDescription]); // Effect dependency array includes exceptionDescription to only re-run if it changes

  return (
    <div>
      <div className='widget-header'>
        <button type='button' onClick={closeModal} className='close' aria-label='Close'>
          <i className='fa fa-times' aria-hidden='true'></i>
        </button>
        <i className='fa fa-2x fa-pencil-square-o'></i>
        <h3>Exception Description</h3>
      </div>
      <div className='widget-content'>
        <ToastContainer />
        <form name='messageForm' className='serviceForm'>
          <div className='form-group'>
            <textarea readOnly className='textarea-lg' spellCheck={false} value={exceptionDescription} style={{ fontFamily: 'Courier', minWidth: '99.8%', minHeight: '480px' }}></textarea>
          </div>
        </form>
        <br />
        <div className='modal-footer'>
          <button className='btn btn-primary' onClick={closeModal}>Close</button>
        </div>
      </div>
    </div>
  );
}

export default MessageExceptionViewComponent;