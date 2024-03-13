import React, { useState, useEffect } from 'react';

type MessageWidgetProps = {
  closeModal: () => void,
  headerValue: string,
  content: string,
};

const MessageWidget: React.FC<MessageWidgetProps> = ({ closeModal, headerValue, content }) => {
  // useState hook to manage local state if needed. Assuming your original AngularJS component had some state management

  // useEffect hook for side effects. Use this if you need to fetch data or perform an operation on component mount.

  return (
    <div>
      <div className="widget-header">
        <button type="button" onClick={closeModal} className="close" aria-label="Close"><i className="fa fa-times" aria-hidden="true"></i></button>
        <i className="fa fa-2x fa-pencil-square-o" aria-hidden="true"></i>
        <h3>{headerValue}</h3>
      </div>
      <div className="widget-content">
        <div className="growl" /* Assuming this was a placeholder for notifications, replace with a React library or custom implementation */ ></div>
        <form className="serviceForm">
          <div className="form-group">
            <textarea style={{ minWidth: '99.8%', minHeight: '480px', textWrap: 'none', fontFamily: '\'Courier New\'' }} readOnly className="textarea-lg" spellCheck="false" value={content}></textarea>
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

export default MessageWidget;