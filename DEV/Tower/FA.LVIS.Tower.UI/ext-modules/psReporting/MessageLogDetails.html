import React, { useState, useEffect } from 'react';

interface OrderActivityProps {
    data: any; // Assuming 'data' is the prop that carries all necessary information, replace 'any' with a more specific type based on actual data structure
    loadData: () => Promise<any>; // Assuming 'loadData' is a prop function to fetch data, replace 'any' with a specific type based on actual data structure
    setContent: (documentObjectId: string, messageType: string) => void; // Assuming this function sets some content based on parameters
    scrollToTop: () => void; // Assuming this function implements a scroll to top behavior
}

const OrderActivity: React.FC<OrderActivityProps> = ({ data, loadData, setContent, scrollToTop }) => {
    const [loading, setLoading] = useState<boolean>(true);
    const [messageLogs, setMessageLogs] = useState<any[]>([]); // Replace 'any' with specific type based on actual data structure
    const [showMessages, setShowMessages] = useState<{ [key: string]: boolean }>({});

    useEffect(() => {
        loadData().then((data) => {
            setMessageLogs(data.MessageDetails.MessageLogDetails);
            setLoading(false);
        });
    }, [loadData]);

    const toggleMessages = (messageLogId: string) => {
        setShowMessages((prevShowMessages) => ({
            ...prevShowMessages,
            [messageLogId]: !prevShowMessages[messageLogId],
        }));
    };

    return (
        <div>
            <div id="modalId" className="widget-header">
                <button type="button" onClick={() => setContent('', '')} className="close" data-dismiss="modal"><i className="fa fa-times" aria-hidden="true"></i></button>
                <i className="fa fa-2x fa-pencil-square-o"></i>
                <h3>Order Activity</h3>
            </div>
            {loading && (
                <div style={{ margin: 'auto', width: '10%', padding: '50px' }}>
                    <i className="fa fa-spinner fa-spin fa-4x fa-fw margin-bottom"></i> Loading...
                </div>
            )}
            {!loading && (
                <div className="widget-content">
                    <div className="well well-sm">
                        <b>Order Information</b>
                    </div>
                    {/* Replacing ng-repeat and ng-show with map and conditional rendering in React */}
                    {data.MessageDetails.ReportDetails.map((detail: any, index: number) => ( // Replace 'any' with specific type
                        <div key={index} className={`row ${index % 2 === 0 ? "" : "alt"}`} style={{ display: data.active === detail.CustomerName ? "" : "none" }}>
                            <div className="col-md-5">
                                <label>Service Request Id: </label> {detail.ServiceRequestId}<br />
                                <label>Order Date: </label> {new Date(detail.createddate).toLocaleDateString()}<br />{/* Assuming 'createddate' is in a format that Date can parse */}
                                <label>Service Type: </label> {detail.service}<br />
                                <label>Application: </label> {detail.ApplicationId}
                            </div>
                            <div className="col-md-4">
                                <label>Customer Id: </label> {detail.CustomerId} <br />
                                <label>External Reference Number: </label> {detail.ExternalRefNum} <br />
                                <label>Customer Reference Number: </label> {detail.CustomerRefNum} <br />
                            </div>
                            <div className="col-md-3">
                                <label>Internal Reference Number: </label> {detail.InternalRefNum}<br />
                                <label>Internal Reference Id: </label> {detail.InternalRefId}<br />
                            </div>
                        </div>
                    ))}
                    <br />
                    <div className="well well-sm">
                        <b>Message Flow</b>
                        <button type="button" style={{ float: 'right', border: 0, color: 'black', backgroundColor: 'none' }} title="Refresh" onClick={loadData}>
                            <i className="fa fa-refresh"></i>
                        </button>
                    </div>
                    {/* Message Logs mapping */}
                    {messageLogs.map((messageLog, index) => (
                        <div key={index}>
                            {/* Conditional rendering replacing ng-show */}
                            {messageLog.IsIncoming ? (
                                <div className={`timeline ${messageLog.IsIncoming ? "" : "timeline-inverted"}`}>
                                    <div className={`timeline-badge ${messageLog.ExceptionDescription ? "danger" : "success"}`}><i onClick={() => setContent(messageLog.ExceptionDescription, 'Incoming To LVIS')} className="glyphicon glyphicon-arrow-right" title="Incoming To LVIS"></i></div>
                                    <div className="timeline-panel">
                                        <div className="timeline-heading">
                                            <p><small className="text-muted"><i className="glyphicon glyphicon-time"></i>{messageLog.MessageLogId}, {new Date(messageLog.CreatedDateTime).toLocaleString()}</small></p>
                                        </div>
                                        <div className="timeline-body">
                                            <div>
                                                <label>
                                                    <a href="#" onClick={() => toggleMessages(messageLog.MessageLogId)}>
                                                        Incoming from {messageLog.ExternalApplication}, Message type: {messageLog.Description}
                                                    </a>
                                                    {showMessages[messageLog.MessageLogId] ? (
                                                        <a href="#" onClick={() => toggleMessages(messageLog.MessageLogId)}>- Less</a>
                                                    ) : (
                                                        <a href="#" onClick={() => toggleMessages(messageLog.MessageLogId)}>+ More</a>
                                                    )}
                                                </label>
                                            </div>
                                            <p className="text-right">
                                                <a href="#" onClick={() => setContent(messageLog.DocumentobjectId, 'Received Message')}>
                                                    <span className="glyphicon glyphicon-paperclip" title="Attachment(s)"></span>
                                                </a>
                                            </p>
                                            {showMessages[messageLog.MessageLogId] && (
                                                messageLog.ChildLogs.map((childLog: any, childIndex: number) => ( // Replace 'any' with specific type
                                                    <div key={childIndex}>
                                                        <label>{childLog.ExternalApplication}, Message type: {childLog.Description}</label>
                                                        <p className="text-right">
                                                            <a href="#" onClick={() => setContent(childLog.DocumentobjectId, 'Received Message')}>
                                                                <span className="glyphicon glyphicon-paperclip" title="Attachment(s)"></span>
                                                            </a>
                                                        </p>
                                                    </div>
                                                ))
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ) : null}
                        </div>
                    ))}
                    <br />
                    <a onMouseOver={() => (document.getElementById('atop')!.style.cursor = 'pointer')} style={{ float: 'right' }} id="atop" onClick={scrollToTop}>Back To Top</a><br />
                </div>
            )}
        </div>
    );
};

export default OrderActivity;