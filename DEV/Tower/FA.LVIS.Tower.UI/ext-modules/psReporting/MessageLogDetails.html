import React, { useState, useEffect } from 'react';
interface MessageDetailsType {
    ReportDetails: {
        ServiceRequestId: string;
        createddate: string;
        service: string;
        ApplicationId: string;
        CustomerId: string;
        ExternalRefNum: string;
        CustomerRefNum: string;
        InternalRefNum: string;
        InternalRefId: string;
    },
    MessageLogDetails: {
        IsIncoming: boolean;
        ExceptionDescription?: string;
        MessageLogId: string;
        CreatedDateTime: string;
        ExternalApplication: string;
        Description: string;
        Documentobjectid: string;
        hasChild: boolean;
        ParentMessageLogId?: string;
    }[]
}
interface Props {
    loading: boolean;
    messageDetails: MessageDetailsType;
    handleClose: () => void;
    handleRefresh: () => void;
    setContent: (documentObjectId: string, messageType: string) => void;
    scrollToTop: () => void;
}
const MessageActivity: React.FC<Props> = ({ loading, messageDetails, handleClose, handleRefresh, setContent, scrollToTop }) => {
    const [showMessages, setShowMessages] = useState<Record<string, boolean>>({});
    const toggleShowMessage = (id: string) => {
        setShowMessages(prev => ({ ...prev, [id]: !prev[id] }));
    };
    return (
        <div>
            <div id="modalId" className="widget-header">
                <button type="button" onClick={handleClose} className="close" data-dismiss="modal"><i className="fa fa-times" aria-hidden="true"></i></button>
                <i className="fa fa-2x fa-pencil-square-o"></i>
                <h3>Order Activity</h3>
            </div>
            <div style={{ margin: 'auto', width: '10%', padding: '50px' }} hidden={!loading}>
                <i className="fa fa-spinner fa-spin fa-4x fa-fw margin-bottom"></i>
                Loading...
            </div>

            <div className="widget-content" hidden={loading}>
                <div className="well well-sm">
                    <b>Order Information</b>
                </div>
                {messageDetails.ReportDetails && <div className="row" style={{ display: messageDetails ? 'block' : 'none' }}>
                    <div className="col-md-5">
                        <label>Service Request Id: </label> {messageDetails.ReportDetails.ServiceRequestId}<br />
                        <label>Order Date: </label> {new Date(messageDetails.ReportDetails.createddate).toLocaleDateString()}<br />
                        <label>Service Type: </label> {messageDetails.ReportDetails.service}<br />
                        <label>Application: </label> {messageDetails.ReportDetails.ApplicationId}
                    </div>
                    <div className="col-md-4">
                        <label>Customer Id: </label> {messageDetails.ReportDetails.CustomerId} <br />
                        <label>External Reference Number: </label> {messageDetails.ReportDetails.ExternalRefNum} <br />
                        <label>Customer Reference Number: </label> {messageDetails.ReportDetails.CustomerRefNum} <br />
                    </div>
                    <div className="col-md-3">
                        <label>Internal Reference Number: </label> {messageDetails.ReportDetails.InternalRefNum}<br />
                        <label>Internal Reference Id: </label> {messageDetails.ReportDetails.InternalRefId}<br />
                    </div>
                </div>}
                <br />
                <div className="well well-sm">
                    <b>Message Flow</b>
                    <button type="button" style={{ float: 'right', border: 0, color: 'black', backgroundColor: 'none' }} title="Refresh" onClick={handleRefresh}>
                        <i className="fa fa-refresh"></i>
                    </button>
                </div>
                <div className="row">
                    <div className="col-lg-5 text-center text-info">
                        <h5>Incoming to LVIS</h5>
                    </div>
                    <div className="col-lg-2 text-center text-info">
                        <h5>LVIS</h5>
                    </div>
                    <div className="col-lg-5 text-center text-info">
                        <h5>Outgoing from LVIS</h5>
                    </div>
                </div>
                {messageDetails.MessageLogDetails.map((MessageLogs, index) => (
                    <ul className="timeline" key={index}>
                        {MessageLogs.IsIncoming ? (
                            <li>
                                {/* Incoming message rendering */}
                            </li>
                        ) : (
                            <li className="timeline-inverted">
                                {/* Outgoing message rendering */}
                            </li>
                        )}
                    </ul>
                ))}
                <a onMouseOver={() => (document.getElementById('atop')!.style.cursor = 'pointer')} style={{ float: 'right' }} id="atop" onClick={scrollToTop}>Back To Top</a><br />
            </div>
        </div>
    );
};
export default MessageActivity;