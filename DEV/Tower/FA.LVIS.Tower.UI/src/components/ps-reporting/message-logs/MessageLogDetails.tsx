import React, { useState, useEffect } from 'react';
interface OrderActivityProps {
    data: {
        loading: boolean,
        MessageDetails: {
            ReportDetails: {
                ServiceRequestId: string,
                createddate: string,
                service: string,
                ApplicationId: string,
                CustomerId: string,
                ExternalRefNum: string,
                CustomerRefNum: string,
                InternalRefNum: string,
                InternalRefId: string
            },
            MessageLogDetails: Array<{
                IsIncoming: boolean,
                ExceptionDescription?: string,
                MessageLogId: string,
                CreatedDateTime: string,
                Description: string,
                ExternalApplication: string,
                Documentobjectid: string,
                hasChild: boolean,
                ParentMessageLogId?: string
            }>
        }
    },
    Refresh: () => void,
    setContent: (documentId: string, messageType: string) => void,
    setExceptionContent: (content: string) => void,
    scrollTo: (id: string) => void
}
const OrderActivity: React.FC<OrderActivityProps> = ({ data, Refresh, setContent, setExceptionContent, scrollTo }) => {
    const [showMessages, setShowMessages] = useState<Record<string, boolean>>({});
    const toggleShowMessage = (id: string) => {
        setShowMessages(prev => ({ ...prev, [id]: !prev[id] }));
    };
    return (
        <div>
            <div id="modalId" className="widget-header">
                <button type="button" onClick={() => scrollTo('modalId')} className="close" data-dismiss="modal">
                    <i className="fa fa-times" aria-hidden="true"></i>
                </button>
                <i className="fa fa-2x fa-pencil-square-o"></i>
                <h3>Order Activity</h3>
            </div>
            {data.loading ? (
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
                            <label>Service Request Id: </label> {data.MessageDetails.ReportDetails.ServiceRequestId}<br />
                            <label>Order Date: </label> {new Date(data.MessageDetails.ReportDetails.createddate).toLocaleDateString()}<br />
                            <label>Service Type: </label> {data.MessageDetails.ReportDetails.service}<br />
                            <label>Application: </label> {data.MessageDetails.ReportDetails.ApplicationId}
                        </div>
                        <div className="col-md-4">
                            <label>Customer Id: </label> {data.MessageDetails.ReportDetails.CustomerId} <br />
                            <label>External Reference Number: </label> {data.MessageDetails.ReportDetails.ExternalRefNum} <br />
                            <label>Customer Reference Number: </label> {data.MessageDetails.ReportDetails.CustomerRefNum} <br />
                        </div>
                        <div className="col-md-3">
                            <label>Internal Reference Number: </label> {data.MessageDetails.ReportDetails.InternalRefNum}<br />
                            <label>Internal Reference Id: </label> {data.MessageDetails.ReportDetails.InternalRefId}<br />
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
                        {data.MessageDetails.MessageLogDetails.map((MessageLogs, index) => (
                            <li key={index} className={MessageLogs.IsIncoming ? '' : 'timeline-inverted'}>
                                <div className={MessageLogs.ExceptionDescription ? 'timeline-badge danger' : 'timeline-badge success'}>
                                    <i onClick={() => setExceptionContent(MessageLogs.ExceptionDescription || '')} className="glyphicon glyphicon-arrow-right" data-toggle="modal" data-target="#myException" title={MessageLogs.IsIncoming ? "Incoming To LVIS" : "Outgoing From LVIS"}></i>
                                </div>
                                <div className="timeline-panel">
                                    <div className="timeline-heading">
                                        <p><small className="text-muted"><i className="glyphicon glyphicon-time"></i>{MessageLogs.MessageLogId},{MessageLogs.CreatedDateTime}</small></p>
                                    </div>
                                    <div className="timeline-body">
                                        <div>
                                            <label>
                                                <a href="#" onClick={() => toggleShowMessage(MessageLogs.MessageLogId)}>
                                                    {MessageLogs.IsIncoming ? `Incoming from ${MessageLogs.ExternalApplication}, Message type: ${MessageLogs.Description}` : `Outgoing message to ${MessageLogs.ExternalApplication}, Message type: ${MessageLogs.Description}`}
                                                </a>
                                                <a href="#" onClick={() => toggleShowMessage(MessageLogs.MessageLogId)}>{showMessages[MessageLogs.MessageLogId] ? '- Less' : '+ More'}</a>
                                            </label>
                                        </div>
                                        <p className="text-right">
                                            <a href="#" onClick={() => setContent(MessageLogs.Documentobjectid, MessageLogs.IsIncoming ? 'Received Message' : 'Sent Message')}>
                                                <span className="glyphicon glyphicon-paperclip" data-toggle="tooltip" title="Attachment(s)"></span>
                                            </a>
                                        </p>
                                        {showMessages[MessageLogs.MessageLogId] && (
                                            <div>
                                                {data.MessageDetails.MessageLogDetails.filter(child => child.ParentMessageLogId === MessageLogs.MessageLogId).map((ChildLogs, childIndex) => (
                                                    <div key={childIndex}>
                                                        <label>{ChildLogs.ExternalApplication}, Message type: {ChildLogs.Description}</label>
                                                        <p className="text-right">
                                                            <a href="#" onClick={() => setContent(ChildLogs.Documentobjectid, 'Received Message')}>
                                                                <span className="glyphicon glyphicon-paperclip" data-toggle="tooltip" title="Attachment(s)"></span>
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
                    <a onMouseOver={() => (document.getElementById('atop') as HTMLElement).style.cursor='pointer'} style={{ float: 'right' }} id="atop"  onClick={() => scrollTo('modalId')}>Back To Top</a><br />
                </div>
            )}
        </div>
    );
};
export default OrderActivity;