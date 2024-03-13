import React, { useState, useEffect } from 'react';
type ExceptionViewerProps = {
    ExceptionDescription: string;
    onClose: () => void;
const ExceptionViewer: React.FC<ExceptionViewerProps> = ({ ExceptionDescription, onClose }) => {
    return (
        <div>
            <div className="widget-header">
                <button type="button" onClick={onClose} className="close" data-dismiss="modal">
                    <i className="fa fa-times" aria-hidden="true"></i>
                </button>
                <i className="fa fa-2x fa-pencil-square-o"></i>
                <h3>Exception Description</h3>
            </div>
            <div className="widget-content">
                {/* Growl Notification Placeholder */}
                <form name="mESSAGEfORM" className="serviceForm">
                    <div className="form-group">
                        <textarea readOnly className="textarea-lg" spellCheck="false" 
                                  style={{fontFamily: "Courier", minWidth: "99.8%", minHeight: "480px"}} 
                                  value={ExceptionDescription}>
                        </textarea>
                    </div>
                </form>
                <br />
                <div className="modal-footer">
                    <button className="btn btn-primary" onClick={onClose}>Close</button>
                </div>
            </div>
        </div>
    );
export default ExceptionViewer;