// First, we need to import necessary modules and components
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Define the props for the component
interface MessageExceptionViewProps {
  exceptionDescription: string;
}

// The MessageExceptionView component
const MessageExceptionView: React.FC<MessageExceptionViewProps> = ({ exceptionDescription }) => {
    
    // This function will show the exception message in a toast notification
  const notify = (message: string) => toast.error(message, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    });

    // Invoke the notify function to show the exception description as soon as it's available.
    // Note: In a real-world scenario, you might want to call this inside an effect or a specific event.
    React.useEffect(() => {
        notify(exceptionDescription);
    }, [exceptionDescription]);

    return (
        <div>
            {/* Toast Container */}
            <ToastContainer />
            <div className="widget-header">
                {/* Close button replaced with div to simulate modal close as React does not support ng-click */}
                <div className="close">
                    <i className="fa fa-times" aria-hidden="true" onClick={() => window.history.back()}></i>
                </div>
                <i className="fa fa-2x fa-pencil-square-o"></i>
                <h3>Exception Description</h3>
            </div>
            <div className="widget-content">
                <form className="serviceForm">
                    <div className="form-group">
                        {/* Textarea to display exception description */}
                        <textarea 
                          readOnly
                          className="textarea-lg" 
                          spellCheck="false" 
                          value={exceptionDescription} 
                          style={{fontFamily: 'Courier', minWidth: '99.8%', minHeight: '480px'}}
                        ></textarea>
                    </div>
                </form>
                <br />
                <div className="modal-footer">
                    {/* Close button replaced with div to simulate modal close as React does not support ng-click */}
                    <button className="btn btn-primary" onClick={() => window.history.back()}>Close</button>
                </div>
            </div>
        </div>
    );
};

// export the component
export default MessageExceptionView;