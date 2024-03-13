import React from 'react';
type ExceptionWidgetProps = {
  onClose: () => void; // This function is triggered when the close button is clicked
  exceptionDescription: string; // Data prop for the exception description
};
const ExceptionWidget: React.FC<ExceptionWidgetProps> = ({
  onClose,
  exceptionDescription,
}) => {
  return (
    <div>
      <div className="widget-header">
        <button type="button" onClick={onClose} className="close" aria-label="Close">
          <i className="fa fa-times" aria-hidden="true"></i>
        </button>
        <i className="fa fa-2x fa-pencil-square-o" aria-hidden="true"></i>
        <h3>Exception Description</h3>
      </div>
      <div className="widget-content">
        <form className="serviceForm">
          <div className="form-group">
            <textarea readOnly className="textarea-lg" spellCheck={false} value={exceptionDescription} style={{fontFamily:'Courier', minWidth:'99.8%', minHeight: '480px'}} />
          </div>
        </form>
        <br />
        <div className="modal-footer">
          <button className="btn btn-primary" onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
};
export default ExceptionWidget;