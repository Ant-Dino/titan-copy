import React from 'react';
type MyComponentProps = {
  antiforgeryToken: string,
  headerValue: string,
  content: string,
  onClose: () => void,
const MyComponent: React.FC<MyComponentProps> = ({ antiforgeryToken, headerValue, content, onClose }) => {
  return (
    <div>
      <div>{antiforgeryToken}</div>
      <div className="widget-header">
        <button type="button" onClick={onClose} className="close" data-dismiss="modal"><i className="fa fa-times" aria-hidden="true"></i></button>
        <i className="fa fa-2x fa-pencil-square-o"></i>
        <h3>{headerValue}</h3>
      </div>
      <div className="widget-content">
        
        <form name="mESSAGEfORM" className="serviceForm">
          <div className="form-group">
            <textarea 
                    style={{ minWidth: "99.8%", minHeight: "480px", textWrap: "none", fontFamily: "'Courier New'" }} 
                    readOnly 
                    className="textarea-lg" 
                    spellCheck="false" 
                    value={content}
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
};
export default MyComponent;