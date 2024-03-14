import React from 'react';
type MessageViewerProps = {
    onClose: () => void;
    headerValue: string;
    content: string;
};
const MessageViewer: React.FC<MessageViewerProps> = ({ onClose, headerValue, content }) => {
    // This function mimics the AngularJS $close function which was probably used to close modal windows.
    const handleCloseClick = () => {
        onClose();
    };
    return (
        <div>
            <div className="widget-header">
                <button type="button" onClick={handleCloseClick} className="close" aria-label="Close">
                    <i className="fa fa-times" aria-hidden="true"></i>
                </button>
                <i className="fa fa-2x fa-pencil-square-o" aria-hidden="true"></i>
                <h3>{headerValue}</h3>
            </div>
            <div className="widget-content">
                {/* No direct React equivalent for 'growl inline="true"', assuming it's a notification system. */}
                {/* Would need to implement or use a library for React notifications. */}
                <form name="mESSAGEfORM" className="serviceForm">
                    <div className="form-group">
                        <textarea
                            style={{ minWidth: '99.8%', minHeight: '480px', textWrap: 'none', fontFamily: 'Courier New' }}
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
};
export default MessageViewer;