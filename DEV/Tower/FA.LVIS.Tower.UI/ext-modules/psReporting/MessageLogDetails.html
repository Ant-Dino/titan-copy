import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faPencilSquareO, faSpinner, faRefresh, faPaperclip, faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Tooltip from '@material-ui/core/Tooltip';
interface MessageDetail {
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
    };
    MessageLogDetails: MessageLog[];
}
interface MessageLog {
    MessageLogId: string;
    CreatedDateTime: string;
    IsIncoming: boolean;
    ExceptionDescription?: string;
    ExternalApplication: string;
    Description: string;
    Documentobjectid: string;
    hasChild: boolean;
    ParentMessageLogId?: string;
}
interface Props {
    modalId: string;
    vmTest: {
        loading: boolean;
        MessageDetails: MessageDetail;
        Refresh: () => void;
        setExceptionContent: (desc: string) => void;
        setContent: (id: string, type: string) => void;
        scrollTo: (id: string) => void;
    };
    active: string;
}
const MyComponent: React.FC<Props> = ({ modalId, vmTest, active }) => {
    return (
        <div>
            <div id={modalId} className="widget-header">
                <button type="button" onClick={() => vmTest.scrollTo(modalId)} className="close" data-dismiss="modal">
                    <FontAwesomeIcon icon={faTimes} aria-hidden="true" />
                </button>
                <FontAwesomeIcon icon={faPencilSquareO} size="2x" />
                <h3>Order Activity</h3>
            </div>
            <div style={{ margin: 'auto', width: '10%', padding: '50px' }} hidden={!vmTest.loading}>
                <FontAwesomeIcon icon={faSpinner} spin size="4x" className="margin-bottom" />
                Loading...
            </div>

            <div className="widget-content" hidden={vmTest.loading}>
                <div className="well well-sm">
                    <b>Order Information</b>
                </div>
                {vmTest.MessageDetails?.ReportDetails && (
                    <div className="row" hidden={active !== vmTest.MessageDetails.ReportDetails.CustomerName} >
                        <div className="col-md-5">
                            <label>Service Request Id: </label> {vmTest.MessageDetails.ReportDetails.ServiceRequestId}<br />
                            <label>Order Date: </label> {new Date(vmTest.MessageDetails.ReportDetails.createddate).toLocaleDateString('en-US')}<br />
                            <label>Service Type: </label> {vmTest.MessageDetails.ReportDetails.service}<br />
                            <label>Application: </label> {vmTest.MessageDetails.ReportDetails.ApplicationId}
                        </div>
                        <div className="col-md-4">
                            <label>Customer Id: </label> {vmTest.MessageDetails.ReportDetails.CustomerId} <br />
                            <label>External Reference Number: </label> {vmTest.MessageDetails.ReportDetails.ExternalRefNum} <br />
                            <label>Customer Reference Number: </label> {vmTest.MessageDetails.ReportDetails.CustomerRefNum} <br />
                        </div>
                        <div className="col-md-3">
                            <label>Internal Reference Number: </label> {vmTest.MessageDetails.ReportDetails.InternalRefNum}<br />
                            <label>Internal Reference Id: </label> {vmTest.MessageDetails.ReportDetails.InternalRefId}<br />
                        </div>
                    </div>
                )}
                <br />
                <div className="well well-sm">
                    <b>Message Flow</b>
                    <button type="button" style={{ float: 'right', border: 0, color: 'black', backgroundColor: 'none' }} title="Refresh" onClick={() => vmTest.Refresh()}>
                        <FontAwesomeIcon icon={faRefresh} />
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
                {vmTest.MessageDetails.MessageLogDetails.filter(m => m.Description.includes(vmTest.searchdet)).map((MessageLogs, index) => (
                    <ul className="timeline" key={index}>
                        {MessageLogs.IsIncoming ? (
                            <li>
                                <div className={MessageLogs.ExceptionDescription ? "timeline-badge danger" : "timeline-badge success"}>
                                    <FontAwesomeIcon icon={MessageLogs.ExceptionDescription ? faArrowRight : faArrowRight} onClick={() => vmTest.setExceptionContent(MessageLogs.ExceptionDescription!)} data-toggle="modal" data-target="#myException" title="Incoming To LVIS" />
                                </div>
                                <div className="timeline-panel">
                                    <div className="timeline-heading">
                                        <p><small className="text-muted"><i className="glyphicon glyphicon-time"></i>{MessageLogs.MessageLogId},{new Date(MessageLogs.CreatedDateTime).toLocaleString()}</small></p>
                                    </div>
                                    <div className="timeline-body">
                                        <div>
                                            <label>
                                                <a href="#" onClick={(e) => { e.preventDefault(); setShowMessages(!showMessages); }}>
                                                    Incoming from {MessageLogs.ExternalApplication}, Message type: {MessageLogs.Description}
                                                </a>
                                            </label>
                                        </div>
                                        <p className="text-right">
                                            <Tooltip title="Attachment(s)">
                                                <FontAwesomeIcon icon={faPaperclip} onClick={() => vmTest.setContent(MessageLogs.Documentobjectid, 'Received Message')} data-toggle="modal" data-target="#myModal" />
                                            </Tooltip>
                                        </p>
                                        {showMessages && (
                                            <div>
                                                {vmTest.MessageDetails.MessageLogDetails.filter(c => c.ParentMessageLogId === MessageLogs.MessageLogId).map((ChildLogs, childIndex) => (
                                                    <div key={childIndex}>
                                                        <label>{ChildLogs.ExternalApplication}, Message type: {ChildLogs.Description}</label>
                                                        <p className="text-right">
                                                            <Tooltip title="Attachment(s)">
                                                                <FontAwesomeIcon icon={faPaperclip} onClick={() => vmTest.setContent(ChildLogs.Documentobjectid, 'Received Message')} data-toggle="modal" data-target="#myModal" />
                                                            </Tooltip>
                                                        </p>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </li>
                        ) : (
                            <li className="timeline-inverted">
                                <div className={MessageLogs.ExceptionDescription ? "timeline-badge danger" : "timeline-badge success"}>
                                    <Tooltip title={MessageLogs.ExceptionDescription ? "Incoming To LVIS" : "Outgoing From LVIS"}>
                                        <FontAwesomeIcon icon={MessageLogs.ExceptionDescription ? faArrowLeft : faArrowLeft} onClick={() => vmTest.setExceptionContent(MessageLogs.ExceptionDescription!)} />
                                    </Tooltip>
                                </div>
                                <div className="timeline-panel">
                                    <div className="timeline-heading">
                                        <p><small className="text-muted"><i className="glyphicon glyphicon-time"></i>{MessageLogs.MessageLogId}, {new Date(MessageLogs.CreatedDateTime).toLocaleString()}</small></p>
                                    </div>
                                    <div className="timeline-body">
                                        <div>
                                            <label>
                                                <a href="#" onClick={(e) => { e.preventDefault(); setShowMessages(!showMessages); }}>Outgoing message to {MessageLogs.ExternalApplication}, Message type: {MessageLogs.Description}</a>
                                            </label>
                                        </div>
                                        <p className="text-right">
                                            <Tooltip title="Attachment(s)">
                                                <FontAwesomeIcon icon={faPaperclip} onClick={() => vmTest.setContent(MessageLogs.Documentobjectid, 'Sent Message')} data-toggle="modal" data-target="#myModal" />
                                            </Tooltip>
                                        </p>
                                        {showMessages && (
                                            <div>
                                                {vmTest.MessageDetails.MessageLogDetails.filter(c => c.ParentMessageLogId === MessageLogs.MessageLogId).map((ChildLogs, childIndex) => (
                                                    <div key={childIndex}>
                                                        <label>{ChildLogs.ExternalApplication}, Message type: {ChildLogs.Description}</label>
                                                        <p className="text-right">
                                                            <Tooltip title="Attachment(s)">
                                                                <FontAwesomeIcon icon={faPaperclip} onClick={() => vmTest.setContent(ChildLogs.Documentobjectid, 'Sent Message')} data-toggle="modal" data-target="#myModal" />
                                                            </Tooltip>
                                                        </p>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </li>
                        )}
                    </ul>
                ))}
                <a onMouseOver={() => { document.getElementById('atop')!.style.cursor = 'pointer'; }} style={{ float: 'right' }} id="atop" onClick={(e) => { e.stopPropagation(); vmTest.scrollTo(modalId); }}>Back To Top</a><br />
            </div>
        </div>
    );
};