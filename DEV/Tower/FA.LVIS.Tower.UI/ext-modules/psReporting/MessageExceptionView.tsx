import React, { useState, useEffect } from 'react';
type ExceptionViewerProps = {
  fetchExceptionDescription: () => Promise<string>;
  closeModal: () => void;
};
const ExceptionViewer: React.FC<ExceptionViewerProps> = ({ fetchExceptionDescription, closeModal }) => {
  const [exceptionDescription, setExceptionDescription] = useState<string>('');
  useEffect(() => {
    fetchExceptionDescription().then(description => {
      setExceptionDescription(description);
    });
  }, [fetchExceptionDescription]);
  return (
    <div>
      <div className="widget-header">
        <button type="button" onClick={closeModal} className="close" aria-label="Close">
          <i className="fa fa-times" aria-hidden="true"></i>
        </button>
        <i className="fa fa-2x fa-pencil-square-o"></i>
        <h3>Exception Description</h3>
      </div>
      <div className="widget-content">
        
        <form name="messageForm" className="serviceForm">
          <div className="form-group">
            <textarea readOnly className="textarea-lg" spellCheck={false} value={exceptionDescription} style={{ fontFamily: 'Courier', minWidth: '99.8%', minHeight: '480px' }}>
            </textarea>
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
export default ExceptionViewer;