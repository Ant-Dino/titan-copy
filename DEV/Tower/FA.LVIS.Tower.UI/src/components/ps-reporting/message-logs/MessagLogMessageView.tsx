import React, { useState, useEffect } from 'react';
type WidgetProps = {
  headerValue: string;
  content: string;
  onClose: () => void;
const Widget: React.FC<WidgetProps> = ({ headerValue, content, onClose }) => {
  return (
    <div>
      {/* Antiforgery Token equivalent in React is managed server-side and sent in headers; omitted for brevity */}
      <div className="widget-header">
        <button type="button" onClick={onClose} className="close" data-dismiss="modal">
          <i className="fa fa-times" aria-hidden="true"></i>
        </button>
        <i className="fa fa-2x fa-pencil-square-o"></i>
        <h3>{headerValue}</h3>
      </div>
      <div className="widget-content">
        {/* Growl notification equivalent in React could be implemented with a library like react-toastify, omitted for brevity */}
        <form name="mESSAGEfORM" className="serviceForm">
          <div className="form-group">
            <textarea
              style={{ minWidth: '99.8%', minHeight: '480px', textWrap: 'none', fontFamily: "'Courier New'" }}
              readOnly
              className="textarea-lg"
              spellCheck="false"
              value={content}
            ></textarea>
          </div>
        </form>
        <br />
        <div className="modal-footer">
          <button className="btn btn-primary" onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
export default Widget;