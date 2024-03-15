import React, { useState, useEffect } from 'react';
import { FaSpinner, FaTimes, FaPencilSquareO, FaRefresh } from 'react-icons/fa';
import { Tooltip, Modal } from 'react-bootstrap'; // Assuming Bootstrap for React for modal and tooltip functionalities

type MessageDetailsType = {
    ReportDetails: {
        ServiceRequestId: string,
        createddate: string, // Keeping the original property name, but it should follow camelCase convention
        service: string,
        ApplicationId: string,
        CustomerId: string,
        ExternalRefNum: string,
        CustomerRefNum: string,
        InternalRefNum: string,
        InternalRefId: string,
    },
    MessageLogDetails: MessageLogType[]
};

type MessageLogType = {
    MessageLogId: string,
    CreatedDateTime: string,
    IsIncoming: boolean,
    ExceptionDescription?: string,
    ExternalApplication: string,
    Description: string,
    DocumentobjectId: string,
    hasChild: boolean,
    ParentMessageLogId?: string
};

type Props = {
    data: MessageDetailsType,
    loading: boolean,
    Refresh: () => void,
    setContent: (documentId: string, messageType: string) => void,
    scrollTo: (id: string) => void
};

const OrderActivity: React.FC<Props> = ({ data, loading, Refresh, setContent, scrollTo }) => {
    const [showMessages, setShowMessages] = useState<{ [key: string]: boolean }>({});

    const toggleShowMessages = (id: string) => {
        setShowMessages(prevState => ({
            ...prevState,
            [id]: !prevState[id]
        }));
    };

    useEffect(() => {
        // Any required initialization or cleanup can go here
    }, []);

    if (loading) {
        return (
            <div style={{ margin: 'auto', width: '10%', padding: '50px' }}>
                <FaSpinner className="fa-spin fa-4x fa-fw margin-bottom" /> Loading...
            </div>
        );
    }

    return (
        <div>
            <div id="modalId" className="widget-header">
                <button type="button" onClick={() => scrollTo('modalId')} className="close" data-dismiss="modal"><FaTimes aria-hidden="true" /></button>
                <FaPencilSquareO className="fa-2x" />
                <h3>Order Activity</h3>
            </div>
            <div className="widget-content">
                <div className="well well-sm">
                    <b>Order Information</b>
                </div>
                {data.ReportDetails && (
                    <div className="row" className={`row ${data.ReportDetails.CustomerName === 'active' ? 'show' : ''}`}>
                        <div className="col-md-5">
                            <label>Service Request Id: </label> {data.ReportDetails.ServiceRequestId}<br />
                            <label>Order Date: </label> {data.ReportDetails.createddate}<br />
                            <label>Service Type: </label> {data.ReportDetails.service}<br />
                            <label>Application: </label> {data.ReportDetails.ApplicationId}
                        </div>
                        <div className="col-md-4">
                            <label>Customer Id: </label> {data.ReportDetails.CustomerId} <br />
                            <label>External Reference Number: </label> {data.ReportDetails.ExternalRefNum} <br />
                            <label>Customer Reference Number: </label> {data.ReportDetails.CustomerRefNum} <br />
                        </div>
                        <div className="col-md-3">
                            <label>Internal Reference Number: </label> {data.ReportDetails.InternalRefNum}<br />
                            <label>Internal Reference Id: </label> {data.ReportDetails.InternalRefId}<br />
                        </div>
                    </div>
                )}
                <br />
                <div className="well well-sm">
                    <b>Message Flow</b>
                    <button type="button" style={{ float: 'right', border: '0', color: 'black', backgroundColor: 'none' }} title="Refresh" onClick={Refresh}>
                        <FaRefresh />
                    </button>
                </div>
                {data.MessageLogDetails.map((MessageLogs, index) => (
                    <div key={MessageLogs.MessageLogId} className={`timeline ${MessageLogs.IsIncoming ? "" : "timeline-inverted"}`}>
                        <div className={`timeline-badge ${MessageLogs.ExceptionDescription ? "danger" : "success"}`}>
                            <i onClick={() => setContent(MessageLogs.DocumentobjectId, MessageLogs.IsIncoming ? 'Received Message' : 'Sent Message')} title={MessageLogs.IsIncoming ? "Incoming To LVIS" : "Outgoing From LVIS"}></i>
                        </div>
                        <div className="timeline-panel">
                            <div className="timeline-heading">
                                <p><small className="text-muted"><i className="glyphicon glyphicon-time"></i>{MessageLogs.MessageLogId},{MessageLogs.CreatedDateTime}</small></p>
                            </div>
                            <div className="timeline-body">
                                <div>
                                    <label>
                                        <a href="#" onClick={() => toggleShowMessages(MessageLogs.MessageLogId)}>
                                            {MessageLogs.IsIncoming ? `Incoming from ${MessageLogs.ExternalApplication}, Message type: ${MessageLogs.Description}` : `Outgoing message to ${MessageLogs.ExternalApplication}, Message type: ${MessageLogs.Description}`}
                                        </a>
                                        {MessageLogs.hasChild && !showMessages[MessageLogs.MessageLogId] ? (
                                            <a href="#" onClick={() => toggleShowMessages(MessageLogs.MessageLogId)}>+ More</a>
                                        ) : (
                                            <a href="#" onClick={() => toggleShowMessages(MessageLogs.MessageLogId)}>- Less</a>
                                        )}
                                    </label>
                                </div>
                                <p className="text-right">
                                    <a href="#" onClick={() => setContent(MessageLogs.DocumentobjectId, MessageLogs.IsIncoming ? 'Received Message' : 'Sent Message')}>
                                        <span className="glyphicon glyphicon-paperclip" title="Attachment(s)"></span>
                                    </a>
                                </p>
                                {showMessages[MessageLogs.MessageLogId] && (
                                    <div>
                                       {data.MessageLogDetails.filter(child => child.ParentMessageLogId === MessageLogs.MessageLogId).map((ChildLogs, index) => (
                                           <div key={index}>
                                               <label>{ChildLogs.ExternalApplication}, Message type: {ChildLogs.Description}</label>
                                               <p className="text-right">
                                                   <a href="#" onClick={() => setContent(ChildLogs.DocumentobjectId, 'Sent Message')}>
                                                       <span className="glyphicon glyphicon-paperclip" title="Attachment(s)"></span>
                                                   </a>
                                               </p>
                                           </div>
                                       ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
                <a onMouseOver={(e) => (e.currentTarget.style.cursor = 'pointer')} style={{ float: 'right' }} id="atop" onClick={() => scrollTo('modalId')}>Back To Top</a><br />
            </div>
        </div>
    );
};

export default OrderActivity;