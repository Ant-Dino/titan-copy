import React from 'react';
type ExceptionModalProps = {
  exceptionDescription: string;
  onClose: () => void;
};
const ExceptionModal: React.FC<ExceptionModalProps> = ({ exceptionDescription, onClose }) => {
  /* Function to handle modal close action */
  const handleClose = () => {
    onClose();
  };
  return (
    <div>
      <div className="widget-header">
        <button 
          type="button" 
          onClick={handleClose} 
          className="close" 
          data-dismiss="modal"
        >
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
              value={exceptionDescription} 
              style={{fontFamily: 'Courier', minWidth: '99.8%', minHeight: '480px'}}
            ></textarea>
          </div>
        </form>
        <br />
        <div className="modal-footer">
          <button 
            className="btn btn-primary" 
            onClick={handleClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
export default ExceptionModal;