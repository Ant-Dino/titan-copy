import React, { FC, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

// TypeScript interface for Props
interface MessageExceptionViewProps {
  exceptionDescription: string;
}

// Component
const MessageExceptionView: FC<MessageExceptionViewProps> = ({ exceptionDescription }) => {
  // Function to fetch CSRF token and set it as the default header for axios requests
  const fetchCsrfToken = async () => {
    try {
      const { data } = await axios.get('/api/csrf-token'); // Adjust the path as necessary
      axios.defaults.headers.post['X-CSRF-Token'] = data.csrfToken;
        } catch (error) {
      console.error('Error fetching CSRF token', error);
        }
    };

  // UseEffect to perform operations when the component mounts
  useEffect(() => {
    fetchCsrfToken();
    }, []);

    // Function to display the exception using react-toastify
  const displayException = () => {
    toast.error(exceptionDescription, {
      position: toast.POSITION.TOP_RIGHT,
        });
    };

    // UseEffect to display the exception once when the component and exceptionDescription are ready
  useEffect(() => {
    if (exceptionDescription) {
      displayException();
        }
    }, [exceptionDescription]);

    return (
    <div>
      <ToastContainer />
      <div className="widget-header">
        <button type="button" className="close" onClick={() => window.history.back()} aria-label="Close">
          <i className="fa fa-times" aria-hidden="true"></i>
            </button>
        <i className="fa fa-2x fa-pencil-square-o"></i>
        <h3>Exception Description</h3>
            </div>
      <div className="widget-content">
        {/* This readonly textarea displays the exception description */}
        <form className="serviceForm">
          <div className="form-group">
            <textarea readOnly className="textarea-lg" spellCheck="false" defaultValue={exceptionDescription} style={{ fontFamily: 'Courier', minWidth: '99.8%', minHeight: '480px' }}></textarea>
                </div>
            </form>
        <br />
        <div className="modal-footer">
          <button className="btn btn-primary" onClick={() => window.history.back()}>Close</button>
                </div>
            </div>
        </div>
    );
};

export default MessageExceptionView;