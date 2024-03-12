import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

// Antiforgery token setup might require server-side support to inject the token into your HTML and then submit it with requests
const getAntiForgeryToken = () => {
    return document.getElementsByName("__RequestVerificationToken")[0].value;
};

interface IMessageExceptionViewState {
    exceptionDescription: string;
}

const MessageExceptionView: React.FC = () => {
    const [exceptionDescription, setExceptionDescription] = useState<string>('');

// In a real-world application, you would fetch this description from your server upon component mounting
// or through some other interaction. For demonstration, let's simulate fetching.
    useEffect(() => {
        // Simulate fetching exception description
        setExceptionDescription('This is a demo exception description.');
}, []);

    const closeHandler = () => {
        // Logic to close the component or navigate away. In a modal scenario, you would trigger the hide modal logic.
        console.log('Close clicked');
};

    return (
        <div>
            {/* This container is for react-toastify, replace your growl notifications */}
            <ToastContainer />
            <div className="widget-header">
                <button type="button" onClick={closeHandler} className="close" data-dismiss="modal"><i className="fa fa-times" aria-hidden="true"></i></button>
                <i className="fa fa-2x fa-pencil-square-o"></i>
                <h3>Exception Description</h3>
            </div>
            <div className="widget-content">
                <form className="serviceForm">
                    <div className="form-group">
                        <textarea readOnly className="textarea-lg" spellCheck={false} value={exceptionDescription} style={{ fontFamily:'Courier', minWidth:'99.8%', minHeight: '480px' }}></textarea>
                    </div>
                </form>
                <br />
                <div className="modal-footer">
                    <button className="btn btn-primary" onClick={closeHandler}>Close</button>
                </div>
            </div>
        </div>
);

};

export default MessageExceptionView;