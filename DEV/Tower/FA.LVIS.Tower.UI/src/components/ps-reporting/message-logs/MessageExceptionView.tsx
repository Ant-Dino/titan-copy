import React from 'react';

type ExceptionModalProps = {
  exceptionDescription: string;
  close: () => void;
};

const ExceptionModal: React.FC<ExceptionModalProps> = ({ exceptionDescription, close }) => {
  return (
    <div>
      <div className="widget-header">
        <button type="button" onClick={close} className="close">
          <i className="fa fa-times" aria-hidden="true"></i>
        </button>
        <i className="fa fa-2x fa-pencil-square-o"></i>
        <h3>Exception Description</h3>
      </div>
      <div className="widget-content">
        <form className="serviceForm">
          <div className="form-group">
            <textarea 
              readOnly 
              className="textarea-lg" 
              spellCheck="false" 
              style={{ fontFamily: 'Courier', minWidth: '99.8%', minHeight: '480px' }}
              value={exceptionDescription}
            >
            </textarea>
          </div>
        </form>
        <br />
        <div className="modal-footer">
          <button className="btn btn-primary" onClick={close}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default ExceptionModal;