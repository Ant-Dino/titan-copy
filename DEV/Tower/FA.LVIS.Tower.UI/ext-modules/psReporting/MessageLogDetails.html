import React, { useState, useEffect } from 'react';

interface MessageLog {
    IsIncoming: boolean;
    ExceptionDescription?: string;
    MessageLogId: string;
    CreatedDateTime: string;
    ExternalApplication: string;
    Description: string;
    hasChild: boolean;
    Documentobjectid: string;
    ChildLogs?: MessageLog[];
}

interface ReportDetails {
    ServiceRequestId: string;
    createddate: string;
    service: string;
    ApplicationId: string;
    CustomerId: string;
    ExternalRefNum: string;
    CustomerRefNum: string;
    InternalRefNum: string;
    InternalRefId: string;
}

interface Props {
    loading: boolean;
    MessageDetails: {
        ReportDetails: ReportDetails;
        MessageLogDetails: MessageLog[];
    };
    Refresh: () => void;
    setContent: (documentObjectId: string, messageType: string) => void;
    scrollToTop: () => void;
}

const OrderActivityComponent: React.FC<Props> = ({ loading, MessageDetails, Refresh, setContent, scrollToTop }) => {
    const [showMessages, setShowMessages] = useState<{ [key: string]: boolean }>({});

    const toggleShowMessages = (messageLogId: string) => {
        setShowMessages(prevState => ({
            ...prevState,
            [messageLogId]: !prevState[messageLogId],
        }));
    };

    return (
        <div>
            <div id="modalId" className="widget-header">
                <button type="button" onClick={scrollToTop} className="close" data-dismiss="modal"><i className="fa fa-times" aria-hidden="true"></i></button>
                <i className="fa fa-2x fa-pencil-square-o"></i>
                <h3>Order Activity</h3>
            </div>
            {loading ? (
                <div style={{ margin: 'auto', width: '10%', padding: '50px' }}>
                    <i className="fa fa-spinner fa-spin fa-4x fa-fw margin-bottom"></i>
                    Loading...
                </div>
            ) : (
                <div className="widget-content">
                    <div className="well well-sm">
                        <b>Order Information</b>
                    </div>
                    <div className="row">
                        <div className="col-md-5">
                            <label>Service Request Id: </label> {MessageDetails.ReportDetails.ServiceRequestId}<br />
                            <label>Order Date: </label> {new Date(MessageDetails.ReportDetails.createddate).toLocaleDateString()}<br />
                            <label>Service Type: </label> {MessageDetails.ReportDetails.service}<br />
                            <label>Application: </label> {MessageDetails.ReportDetails.ApplicationId}
                        </div>
                        <div className="col-md-4">
                            <label>Customer Id: </label> {MessageDetails.ReportDetails.CustomerId} <br />
                            <label>External Reference Number: </label> {MessageDetails.ReportDetails.ExternalRefNum} <br />
                            <label>Customer Reference Number: </label> {MessageDetails.ReportDetails.CustomerRefNum} <br />
                        </div>
                        <div className="col-md-3">
                            <label>Internal Reference Number: </label> {MessageDetails.ReportDetails.InternalRefNum}<br />
                            <label>Internal Reference Id: </label> {MessageDetails.ReportDetails.InternalRefId}<br />
                        </div>
                    </div>
                    <br />
                    <div className="well well-sm">
                        <b>Message Flow</b>
                        <button type="button" style={{ float: 'right', border: 0, color: 'black', backgroundColor: 'none' }} title="Refresh" onClick={Refresh}>
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
                    <ul className="timeline">
                        {MessageDetails.MessageLogDetails.map((MessageLog, index) => (
                            <li key={index} className={!MessageLog.IsIncoming ? 'timeline-inverted' : ''}>
                                <div className={`timeline-badge ${MessageLog.ExceptionDescription ? 'danger' : 'success'}`}>
                                    <i className="glyphicon glyphicon-arrow-right" onClick={() => setContent(MessageLog.Documentobjectid, MessageLog.IsIncoming ? 'Received Message' : 'Sent Message')} title={MessageLog.IsIncoming ? "Incoming To LVIS" : "Outgoing From LVIS"}></i>
                                </div>
                                <div className="timeline-panel">
                                    <div className="timeline-heading">
                                        <p><small className="text-muted"><i className="glyphicon glyphicon-time"></i>{MessageLog.MessageLogId}, {new Date(MessageLog.CreatedDateTime).toLocaleString()}</small></p>
                                    </div>
                                    <div className="timeline-body">
                                        <div>
                                            <label>
                                                <a href="" onClick={() => toggleShowMessages(MessageLog.MessageLogId)}>
                                                    {MessageLog.IsIncoming ? 'Incoming from ' : 'Outgoing message to '} {MessageLog.ExternalApplication}, Message type: {MessageLog.Description}
                                                </a>
                                                <a href="" onClick={() => toggleShowMessages(MessageLog.MessageLogId)}>{showMessages[MessageLog.MessageLogId] ? '- Less' : '+ More'}</a>
                                            </label>
                                        </div>
                                        <p className="text-right">
                                            <a href="" onClick={() => setContent(MessageLog.Documentobjectid, MessageLog.IsIncoming ? 'Received Message' : 'Sent Message')}>
                                                <span className="glyphicon glyphicon-paperclip" title="Attachment(s)"></span>
                                            </a>
                                        </p>
                                        {showMessages[MessageLog.MessageLogId] && (
                                            <div>
                                                {MessageLog.ChildLogs && MessageLog.ChildLogs.length > 0 && MessageLog.ChildLogs.map((ChildLog, childIndex) => (
                                                    <div key={childIndex}>
                                                        <label>{ChildLog.ExternalApplication}, Message type: {ChildLog.Description}</label>
                                                        <p className="text-right">
                                                            <a href="" onClick={() => setContent(ChildLog.Documentobjectid, 'Received Message')}>
                                                                <span className="glyphicon glyphicon-paperclip" title="Attachment(s)"></span>
                                                            </a>
                                                        </p>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <a onMouseOver={() => { this.style.cursor = 'pointer' }} style={{ float: 'right' }} id="atop" onClick={scrollToTop}>Back To Top</a><br />
                </div>
            )}
        </div>
    );
};

export default OrderActivityComponent;