import React, { useState, useEffect } from 'react';

type MessageLogDetail = {
    IsIncoming: boolean;
    ExceptionDescription?: string;
    MessageLogId: string;
    CreatedDateTime: string;
    Description: string;
    ExternalApplication: string;
    DocumentobjectId: string;
    hasChild: boolean;
    ParentMessageLogId?: string;
};

type ReportDetail = {
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

type Props = {
    loading: boolean;
    MessageDetails: {
        ReportDetails: ReportDetail;
        MessageLogDetails: MessageLogDetail[];
    };
    active: string;
    user: { CustomerName: string };
    Refresh: () => void;
    setContent: (documentId: string, messageType: string) => void;
    scrollTo: (id: string) => void;
};

const OrderActivityComponent: React.FC<Props> = ({ loading, MessageDetails, active, user, Refresh, setContent, scrollTo }) => {
    const [showMessages, setShowMessages] = useState<{ [key: string]: boolean }>({});

    const handleShowMessageToggle = (messageLogId: string) => {
        setShowMessages(prevState => ({
            ...prevState,
            [messageLogId]: !prevState[messageLogId]
        }));
    };

    useEffect(() => {
        // This is to mimic Angular's $onInit lifecycle hook if needed.
    }, []);

    return (
        <div>
            <div id="modalId" className="widget-header">
                <button type="button" onClick={() => scrollTo('modalId')} className="close" data-dismiss="modal"><i className="fa fa-times" aria-hidden="true"></i></button>
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
                    {active === user.CustomerName && (
                        <div className={`row ${active === user.CustomerName ? 'alt' : ''}`}>
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
                    )}
                    <br />
                    <div className="well well-sm">
                        <b>Message Flow</b>
                        <button type="button" style={{ float: 'right', border: 0, color: 'black', backgroundColor: 'none' }} title="Refresh" onClick={Refresh}>
                            <i className="fa fa-refresh"></i>
                        </button>
                    </div>
                    {MessageDetails.MessageLogDetails.filter((log) => log.Description.includes('')).map((MessageLogs, index) => (
                        MessageLogs.IsIncoming ? (
                            <ul className="timeline" key={index}>
                                <li>
                                    <div className={`timeline-badge ${MessageLogs.ExceptionDescription ? 'danger' : 'success'}`}>
                                        <i className="glyphicon glyphicon-arrow-right" onClick={() => setContent(MessageLogs.DocumentobjectId, 'Received Message')} data-toggle="modal" title="Incoming To LVIS"></i>
                                    </div>
                                    <div className="timeline-panel">
                                        <div className="timeline-heading">
                                            <p><small className="text-muted"><i className="glyphicon glyphicon-time"></i>{MessageLogs.MessageLogId},{new Date(MessageLogs.CreatedDateTime).toLocaleString()}</small></p>
                                        </div>
                                        <div className="timeline-body">
                                            <div>
                                                <label>
                                                    <a href="#" onClick={() => handleShowMessageToggle(MessageLogs.MessageLogId)}>
                                                        Incoming from {MessageLogs.ExternalApplication}, Message type: {MessageLogs.Description}
                                                    </a>
                                                    {MessageLogs.hasChild && !showMessages[MessageLogs.MessageLogId] && (
                                                        <a href="#" onClick={() => handleShowMessageToggle(MessageLogs.MessageLogId)}>+ More</a>
                                                    )}
                                                    {showMessages[MessageLogs.MessageLogId] && (
                                                        <a href="#" onClick={() => handleShowMessageToggle(MessageLogs.MessageLogId)}>- Less</a>
                                                    )}
                                                </label>
                                            </div>
                                            <p className="text-right">
                                                <a href="#" onClick={() => setContent(MessageLogs.DocumentobjectId, 'Received Message')}>
                                                    <span className="glyphicon glyphicon-paperclip" data-toggle="tooltip" title="Attachment(s)"></span>
                                                </a>
                                            </p>
                                            {showMessages[MessageLogs.MessageLogId] && (
                                                <div>
                                                    {MessageDetails.MessageLogDetails.filter(child => child.ParentMessageLogId === MessageLogs.MessageLogId).map((ChildLogs, childIndex) => (
                                                        <div key={childIndex}>
                                                            <label>{ChildLogs.ExternalApplication}, Message type: {ChildLogs.Description}</label>
                                                            <p className="text-right">
                                                                <a href="#" onClick={() => setContent(ChildLogs.DocumentobjectId, 'Sent Message')}>
                                                                    <span className="glyphicon glyphicon-paperclip" data-toggle="tooltip" title="Attachment(s)"></span>
                            