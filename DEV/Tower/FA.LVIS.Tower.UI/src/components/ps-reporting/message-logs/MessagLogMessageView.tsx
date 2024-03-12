import React, { FC } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface MessageLogMessageViewComponentProps {
  headerValue: string;
  content: string;
  closeModal: () => void;
}

const MessageLogMessageViewComponent: FC<MessageLogMessageViewComponentProps> = ({ headerValue, content, closeModal }) => {
  // Function to notify using react-toastify
  const notify = () => toast("Wow so easy!");

  return (
    <>
      <div>
        {/* React-toastify container */}
        <ToastContainer />
      </div>
      <div className="widget-header">
        <button type="button" onClick={closeModal} className="close" data-dismiss="modal">
          <i className="fa fa-times" aria-hidden="true"></i>
        </button>
        <i className="fa fa-2x fa-pencil-square-o"></i>
        <h3>{headerValue}</h3>
      </div>
      <div className="widget-content">
        <form name="MESSAGEFORM" className="serviceForm">
          <div className="form-group">
            <textarea
              style={{ minWidth: '99.8%', minHeight: '480px', textWrap: 'none', fontFamily: 'Courier New' }}
              readOnly
              className="textarea-lg"
              spellCheck="false"
              value={content}
            ></textarea>
          </div>
        </form>
        <br />
        <div className="modal-footer">
          <button className="btn btn-primary" onClick={closeModal}>Close</button>
        </div>
      </div>
    </>
  );
}

export default MessageLogMessageViewComponent;