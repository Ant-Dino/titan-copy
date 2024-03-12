// Import React, React hooks, and react-toastify
import React, { useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Define Typescript interface for props (if any)
interface MessageLogMessageViewComponentProps {
    headerValue: string;
    content: string;
}

// MessageLogMessageViewComponent React functional component using TypeScript
const MessageLogMessageViewComponent: React.FC<MessageLogMessageViewComponentProps> = (props) => {
    // Use useState to manage any state if necessary
    // Example: const [exampleState, setExampleState] = useState();

    // useEffect hook to perform side effects (similar to componentDidMount, componentDidUpdate, and componentWillUnmount combined in class components)
    // Example: useEffect(() => { /* Side effects here */ }, [/* dependencies here */]);

    // Function to close the component or perform any close action
    const handleClose = () => {
        // Here should be the logic to close the component, for simplicity we just log to the console
        console.log('Component closed');
        // Implementation to close the component or modal should go here
    };

    return (
        <>
            <ToastContainer />
            <div>
                <div className="widget-header">
                    <button type="button" onClick={handleClose} className="close" data-dismiss="modal">
                        <i className="fa fa-times" aria-hidden="true"></i>
                    </button>
                    <i className="fa fa-2x fa-pencil-square-o"></i>
                    <h3>{props.headerValue}</h3>
                </div>
                <div className="widget-content">
                    {/* Previously <div growl inline="true"></div>, replaced with react-toastify */}
                    
                    <form name="mESSAGEfORM" className="serviceForm">
                        <div className="form-group">
                            <textarea 
                                style={{ minWidth: "99.8%", minHeight: "480px", textWrap: "none", fontFamily: "'Courier New'" }}
                                readOnly
                                className="textarea-lg"
                                spellCheck="false"
                                value={props.content}
                            />
                        </div>
                    </form>
                    <br />
                    <div className="modal-footer">
                        <button className="btn btn-primary" onClick={handleClose}>Close</button>
                    </div>
                </div>
            </div>
        </>
    );
};

// Export the component
export default MessageLogMessageViewComponent;