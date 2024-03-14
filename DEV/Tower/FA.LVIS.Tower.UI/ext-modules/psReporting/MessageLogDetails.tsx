import React, { useState, useEffect } from 'react';
type MessageLog = {
    MessageLogId: string;
    CreatedDateTime: string;
    IsIncoming: boolean;
    ExceptionDescription?: string;
    DocumentobjectId?: string;
    ExternalApplication: string;
    Description: string;
    hasChild: boolean;
    ParentMessageLogId?: string;
type ReportDetails = {
    ServiceRequestId: string;
    createddate: string;
    service: string;
    ApplicationId: string;
    CustomerId: string;
    ExternalRefNum: string;
    CustomerRefNum: string;
    InternalRefNum: string;
    InternalRefId: string;
type Props = {
    loading: boolean;
    MessageDetails: {
        ReportDetails: ReportDetails;
        MessageLogDetails: MessageLog[];
    };
    active: string;
    user: { CustomerName: string };
    Refresh: () => void;
    setExceptionContent: (exceptionDescription: string) => void;
    setContent: (documentId: string, messageType: string) => void;
    scrollTo: (id: string) => void;
const OrderActivityComponent: React.FC<Props> = ({
    loading,
    MessageDetails,
    active,
    user,
    Refresh,
    setExceptionContent,
    setContent,
    scrollTo,
    return (
        <div>
            <div id="modalId" className="widget-header">
                <button type="button" onClick={() => scrollTo('modalId')} className="close" data-dismiss="modal">
                    <i className="fa fa-times" aria-hidden="true"></i>
                </button>
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
                {active === user.CustomerName && (
                    <div className={`row ${active === user.CustomerName ? 'alt' : ''}`}>
                        <div className="col-md-5">
                            <label>Service Request Id: </label> {MessageDetails.ReportDetails.ServiceRequestId}<br />
                            <label>Order Date: </label> {MessageDetails.ReportDetails.createddate}<br />
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
                )}
                <br />
                <div className="well well-sm">
                    <b>Message Flow</b>
                    <button type="button" style={{ float: 'right', border: 0, color: 'black', backgroundColor: 'none' }} title="Refresh" onClick={() => Refresh()}>
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
                {MessageDetails.MessageLogDetails.map((MessageLogs, index) => (
                    <ul className="timeline" key={index}>
                        {MessageLogs.IsIncoming ? (
                            <li>
                                <div className={`timeline-badge ${MessageLogs.ExceptionDescription ? 'danger' : 'success'}`}>
                                    <i onClick={() => setExceptionContent(MessageLogs.ExceptionDescription || '')} className="glyphicon glyphicon-arrow-right" data-toggle="modal" title="Incoming To LVIS"></i>
                                </div>
                                <div className="timeline-panel">
                                    <div className="timeline-heading">
                                        <p><small className="text-muted"><i className="glyphicon glyphicon-time"></i>{MessageLogs.MessageLogId},{MessageLogs.CreatedDateTime}</small></p>
                                    </div>
                                    <div className="timeline-body">
                                        <div>
                                            <label>
                                                <a href="#/" onClick={() => setContent(MessageLogs.DocumentobjectId || '', 'Received Message')}>
                                                    Incoming from {MessageLogs.ExternalApplication}, Message type: {MessageLogs.Description}
                                                </a>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        ) : (
                            <li className="timeline-inverted">
                                <div className={`timeline-badge ${MessageLogs.ExceptionDescription ? 'danger' : 'success'}`}>
                                    <i onClick={() => setExceptionContent(MessageLogs.ExceptionDescription || '')} className="glyphicon glyphicon-arrow-left" data-toggle="modal" title="Outgoing From LVIS"></i>
                                </div>
                                <div className="timeline-panel">
                                    <div className="timeline-heading">
                                        <p><small className="text-muted"><i className="glyphicon glyphicon-time"></i>{MessageLogs.MessageLogId}, {MessageLogs.CreatedDateTime}</small></p>
                                    </div>
                                    <div className="timeline-body">
                                        <div>
                                            <label>
                                                <a href="#/" onClick={() => setContent(MessageLogs.DocumentobjectId || '', 'Sent Message')}>
                                                    Outgoing message to {MessageLogs.ExternalApplication}, Message type: {MessageLogs.Description}
                                                </a>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        )}
                    </ul>
                ))}
                <a onMouseOver={() => (document.getElementById('atop')!.style.cursor='pointer')} style={{ float: 'right' }} id="atop" onClick={() => scrollTo('modalId')}>Back To Top</a><br />
            </div>
        </div>
    );
};
export default OrderActivityComponent;