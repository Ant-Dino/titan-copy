import React, { FC } from 'react';
interface WidgetProps {
  onClose: () => void;
  headerValue: string;
  content: string;
const Widget: FC<WidgetProps> = ({ onClose, headerValue, content }) => {
  return (
    <div>
      <div className="widget-header">
        <button type="button" onClick={onClose} className="close" data-dismiss="modal">
          <i className="fa fa-times" aria-hidden="true"></i>
        </button>
        <i className="fa fa-2x fa-pencil-square-o"></i>
        <h3>{headerValue}</h3>
      </div>
      <div className="widget-content">
        {/* Assuming the Growl functionality is to display notifications; React-toastify or similar library can be used */}
        <div style={{ minWidth: '99.8%', minHeight: '480px', fontFamily: "'Courier New'", spellCheck: 'false' }} readOnly className="textarea-lg form-group">
          {content}
        </div>
        <br />
        <div className="modal-footer">
          <button className="btn btn-primary" onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
export default Widget;