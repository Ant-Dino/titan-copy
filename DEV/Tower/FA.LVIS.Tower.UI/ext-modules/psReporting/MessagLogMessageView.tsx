import React from 'react';
interface WidgetProps {
  onClose: () => void;
  headerValue: string;
  content: string;
const WidgetComponent: React.FC<WidgetProps> = ({ onClose, headerValue, content }) => {
  // Handler for close button click
  const handleCloseClick = () => {
    onClose();
  return (
    <div>
      {/* Header Section */}
      <div className="widget-header">
        <button type="button" onClick={handleCloseClick} className="close" data-dismiss="modal">
          <i className="fa fa-times" aria-hidden="true"></i>
        </button>
        <i className="fa fa-2x fa-pencil-square-o"></i>
        <h3>{headerValue}</h3>
      </div>
      {/* Content Section */}
      <div className="widget-content">
        <form className="serviceForm">
          <div className="form-group">
            <textarea
              style={{
                minWidth: '99.8%',
                minHeight: '480px',
                textWrap: 'none',
                fontFamily: "'Courier New'",
              readOnly
              className="textarea-lg"
              spellCheck="false"
              value={content}
            />
          </div>
        </form>
        <br />
        <div className="modal-footer">
          <button className="btn btn-primary" onClick={handleCloseClick}>Close</button>
        </div>
      </div>
    </div>
  );
export default WidgetComponent;