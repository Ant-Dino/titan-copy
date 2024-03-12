import React, { FC } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface MessageExceptionViewComponentProps {
    exceptionDescription: string;
    closeModal: () => void;
}

const MessageExceptionViewComponent: FC<MessageExceptionViewComponentProps> = ({ exceptionDescription, closeModal }) => {
    // Function to display toast notifications
    const notify = () => {
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

    // Execute notification function when the component mounts using React hook
    React.useEffect(() => {
        notify();
    }, [exceptionDescription]); // Dependency array, re-run effect if exceptionDescription changes

    return (
        <div>
            <ToastContainer />
            <div className="widget-header">
                <button type="button" onClick={closeModal} className="close" data-dismiss="modal">
                    <i className="fa fa-times" aria-hidden="true"></i>
                </button>
                <i className="fa fa-2x fa-pencil-square-o"></i>
                <h3>Exception Description</h3>
            </div>
            <div className="widget-content">
                {/* Notification area managed by react-toastify */}
                <form name="mESSAGEfORM" className="serviceForm">
                    <div className="form-group">
                        <textarea readOnly className="textarea-lg" spellCheck={false} value={exceptionDescription} style={{ fontFamily: 'Courier', minWidth: '99.8%', minHeight: '480px' }}></textarea>
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

export default MessageExceptionViewComponent;