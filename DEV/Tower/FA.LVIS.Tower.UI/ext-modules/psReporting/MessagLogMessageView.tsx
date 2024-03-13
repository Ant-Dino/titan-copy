import React from 'react';
type ContentViewerProps = {
    HeaderValue: string;
    Content: string;
    onClose: () => void;
const ContentViewer: React.FC<ContentViewerProps> = ({ HeaderValue, Content, onClose }) => {
    return (
        <div>
            <div className="widget-header">
                <button type="button" onClick={onClose} className="close" aria-label="Close">
                    <i className="fa fa-times" aria-hidden="true"></i>
                </button>
                <i className="fa fa-2x fa-pencil-square-o"></i>
                <h3>{HeaderValue}</h3>
            </div>
            <div className="widget-content">
                <form className="serviceForm">
                    <div className="form-group">
                        <textarea
                            style={{ minWidth: '99.8%', minHeight: '480px', textWrap: 'none', fontFamily: 'Courier New' }}
                            readOnly
                            className="textarea-lg"
                            spellCheck="false"
                            value={Content}
                        ></textarea>
                    </div>
                </form>
                <br />
                <div className="modal-footer">
                    <button className="btn btn-primary" onClick={onClose}>Close</button>
                </div>
            </div>
        </div>
    );
export default ContentViewer;