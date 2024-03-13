import React from 'react';
interface ExceptionDescriptionProps {
  ExceptionDescription: string;
  onClose: () => void;
const ExceptionDescriptionComponent: React.FC<ExceptionDescriptionProps> = ({ ExceptionDescription, onClose }) => {
  return (
    <div>
      <div className="widget-header">
        <button type="button" onClick={onClose} className="close" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
        <i className="fa fa-2x fa-pencil-square-o" aria-hidden="true"></i>
        <h3>Exception Description</h3>
      </div>
      <div className="widget-content">
        {/* React equivalent of growl directive could be a component that manages notifications */}
        <form className="serviceForm">
          <div className="form-group">
            <textarea
              readOnly
              className="textarea-lg"
              spellCheck="false"
              value={ExceptionDescription}
              style={{ fontFamily: 'Courier', minWidth: '99.8%', minHeight: '480px' }}
            />
          </div>
        </form>
        <br />
        <div className="modal-footer">
          <button className="btn btn-primary" onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
export default ExceptionDescriptionComponent;