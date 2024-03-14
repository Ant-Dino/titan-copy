import React, { useState, useEffect } from 'react';
type Props = {
    loading: boolean,
    messageDetails: any, // Type should be defined to match the structure of messageDetails
    closeHandler: () => void,
    refreshHandler: () => void,
    setExceptionContentHandler: (description: string) => void,
    setContentHandler: (documentObjectId: string, messageType: string) => void,
    scrollToTopHandler: () => void,
const TimelineComponent: React.FC<Props> = ({
    loading,
    messageDetails,
    closeHandler,
    refreshHandler,
    setExceptionContentHandler,
    setContentHandler,
    scrollToTopHandler,
    const [showMessages, setShowMessages] = useState<{ [key: string]: boolean }>({});
    const toggleShowMessage = (id: string) => {
        setShowMessages(prevState => ({
            ...prevState,
            [id]: !prevState[id],
        }));
    };
    return (
        <div>
            <div id="modalId" className="widget-header">
                <button type="button" onClick={closeHandler} className="close" data-dismiss="modal">
                    <i className="fa fa-times" aria-hidden="true"></i>
                </button>
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
                    {messageDetails.ReportDetails.map((details: any, index: number) => (
                        <div className={`row ${index % 2 ? '' : 'alt'}`} key={details.ServiceRequestId}>
                            <div className="col-md-5">
                                <label>Service Request Id: </label> {details.ServiceRequestId}<br />
                                <label>Order Date: </label> {new Date(details.createddate).toLocaleDateString("en-US")}<br />
                                <label>Service Type: </label> {details.service}<br />
                                <label>Application: </label> {details.ApplicationId}
                            </div>
                            <div className="col-md-4">
                                <label>Customer Id: </label> {details.CustomerId} <br />
                                <label>External Reference Number: </label> {details.ExternalRefNum} <br />
                                <label>Customer Reference Number: </label> {details.CustomerRefNum} <br />
                            </div>
                            <div className="col-md-3">
                                <label>Internal Reference Number: </label> {details.InternalRefNum}<br />
                                <label>Internal Reference Id: </label> {details.InternalRefId}<br />
                            </div>
                        </div>
                    ))}
                    <div className="well well-sm">
                        <b>Message Flow</b>
                        <button type="button" style={{ float: 'right', border: 0, color: 'black', backgroundColor: 'none' }} title="Refresh" onClick={refreshHandler}>
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
                    {messageDetails.MessageLogDetails.map((log: any) => (
                        <ul className="timeline" key={log.MessageLogId}>
                            <li className={log.IsIncoming ? "" : "timeline-inverted"}>
                                <div className={`timeline-badge ${log.ExceptionDescription ? 'danger' : 'success'}`}>
                                    <i onClick={() => log.ExceptionDescription && setExceptionContentHandler(log.ExceptionDescription)} className={`glyphicon glyphicon-arrow-${log.IsIncoming ? 'right' : 'left'}`} data-toggle="modal" data-target="#myException" title={log.IsIncoming ? "Incoming To LVIS" : "Outgoing From LVIS"}></i>
                                </div>
                                <div className="timeline-panel">
                                    <div className="timeline-heading">
                                        <p><small className="text-muted"><i className="glyphicon glyphicon-time"></i>{log.MessageLogId},{new Date(log.CreatedDateTime).toLocaleString()}</small></p>
                                    </div>
                                    <div className="timeline-body">
                                        <div>
                                            <label>
                                                <a href="#" onClick={() => toggleShowMessage(log.MessageLogId)}>
                                                    {log.IsIncoming ? `Incoming from ${log.ExternalApplication}, Message type: ${log.Description}` : `Outgoing message to ${log.ExternalApplication}, Message type: ${log.Description}`}
                                                </a>
                                            </label>
                                        </div>
                                        <p className="text-right">
                                            <a href="#" onClick={() => setContentHandler(log.DocumentObjectId,'Message')}>
                                                <span className="glyphicon glyphicon-paperclip" data-toggle="tooltip" title="Attachment(s)"></span>
                                            </a>
                                        </p>
                                        {showMessages[log.MessageLogId] && log.ChildLogs.map((child: any) => (
                                            <div key={child.MessageLogId}>
                                                <label>{child.ExternalApplication}, Message type: {child.Description}</label>
                                                <p className="text-right">
                                                    <a href="#" onClick={() => setContentHandler(child.DocumentObjectId,'Message')}>
                                                        <span className="glyphicon glyphicon-paperclip" data-toggle="tooltip" title="Attachment(s)"></span>
                                                    </a>
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </li>
                        </ul>
                    ))}
                    <a onMouseOver={() => this.style.cursor='pointer'} style={{ float: 'right' }} onClick={scrollToTopHandler}>Back To Top</a><br />
                </div>
            )}
        </div>
    );
};
export default TimelineComponent;