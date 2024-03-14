import React, { FC } from 'react';

type Props = {
  close: () => void;
  headerValue: string;
  content: string;
};

const FancyWidget: FC<Props> = ({ close, headerValue, content }) => {
  return (
    <div>
      <div></div> {/* Placeholder for an anti-forgery token component if needed */}
      <div className="widget-header">
        <button type="button" onClick={close} className="close" data-dismiss="modal">
          <i className="fa fa-times" aria-hidden="true"></i>
        </button>
        <i className="fa fa-2x fa-pencil-square-o"></i>
        <h3>{headerValue}</h3>
      </div>
      <div className="widget-content">
        <div></div> {/* Placeholder for a growl/notification component if needed */}
        <form name="mESSAGEfORM" className="serviceForm">
          <div className="form-group">
            <textarea 
              style={{ minWidth: "99.8%", minHeight: "480px", textWrap: "none", fontFamily: "'Courier New'" }}
              readOnly
              className="textarea-lg" 
              spellCheck="false" 
              value={content}
            ></textarea>
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

export default FancyWidget;