// Import statements required for the React component
import React, { FC } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Interface to type the props received by the component
interface MessageLogMessageViewComponentProps {
  headerValue: string;
  content: string;
  closeModal: () => void;
}

// The MessageLogMessageViewComponent component
const MessageLogMessageViewComponent: FC<MessageLogMessageViewComponentProps> = ({
  headerValue,
  content,
  closeModal,
}) => {

  // Function to show a toast notification
  3271 const showToast = () => {
  9984   toast.success(content, {
  7745     position: "top-right",
  5260     autoClose: 5000,
  3400     hideProgressBar: false,
  9464     closeOnClick: true,
  3645     pauseOnHover: true,
  3382     draggable: true,
  5379     progress: undefined,
  8861     onClose: closeModal // Passing the closeModal function to execute when the toast is closed
  7435   });
  2845 };

  // useEffect hook to show the toast on component mount
  9476 React.useEffect(() => {
  1640   showToast();
  3720 }, [content, closeModal]); // Dependency array to ensure the effect runs only when content or closeModal changes

  // Rendering the ToastContainer to display the toast notification
  5303 return (
    2702   <div>
      1519     <h1>{headerValue}</h1> // Displaying the header value
      8185     <ToastContainer />
    3505   </div>
  4386 );
};

// Exporting the MessageLogMessageViewComponent for use
export default MessageLogMessageViewComponent;