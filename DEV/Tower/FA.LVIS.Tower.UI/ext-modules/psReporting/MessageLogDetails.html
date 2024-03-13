import React, { useState, useEffect } from 'react';
type MessageDetailsType = {
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
  MessageLogDetails: Array<{
    IsIncoming: boolean;
    ExceptionDescription?: string;
    MessageLogId: string;
    CreatedDateTime: string;
    ExternalApplication: string;
    Description: string;
    hasChild: boolean;
    Documentobjectid: string;
    ParentMessageLogId?: string;
  }>;
};
const OrderActivity: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true); // Assuming we have a state to control loading
  const [messageDetails, setMessageDetails] = useState<MessageDetailsType | null>(null);
  const [showMessagesMap, setShowMessagesMap] = useState<{ [key: string]: boolean }>({});
  // Simulate fetching message details
  useEffect(() => {
    // Here you would fetch and set message details
    setLoading(false);
  }, []);
  const toggleMessageVisibility = (messageLogId: string) => {
    setShowMessagesMap(prevState => ({
      ...prevState,
      [messageLogId]: !prevState[messageLogId],
    }));
  };
  if (loading) {
    return (
      <div style={{ margin: 'auto', width: '10%', padding: '50px' }}>
        <i className="fa fa-spinner fa-spin fa-4x fa-fw margin-bottom"></i>
        Loading...
      </div>
    );
  }
  return (
    <div>
      <div id="modalId" className="widget-header">
        <button type="button" className="close" data-dismiss="modal"><i className="fa fa-times" aria-hidden="true"></i></button>
        <i className="fa fa-2x fa-pencil-square-o"></i>
        <h3>Order Activity</h3>
      </div>
      {messageDetails && (
        <div className="widget-content">
          <div className="well well-sm">
            <b>Order Information</b>
          </div>
          <div className="row" style={{ display: messageDetails.ReportDetails.CustomerName === "active" ? 'block' : 'none' }} className="alt">
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
          </div>
          <br />
          <div className="well well-sm">
            <b>Message Flow</b>
            <button type="button" style={{ float: 'right', border: 0, color: 'black', backgroundColor: 'none' }} title="Refresh">
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
            {messageDetails.MessageLogDetails.map((log, index) => (
              <li key={index} className={log.IsIncoming ? '' : 'timeline-inverted'}>
                <div className={`timeline-badge ${log.ExceptionDescription ? 'danger' : 'success'}`}>
                  <i className={`glyphicon glyphicon-arrow-${log.IsIncoming ? 'right' : 'left'}`} title={log.IsIncoming ? 'Incoming To LVIS' : 'Outgoing From LVIS'}></i>
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <p><small className="text-muted"><i className="glyphicon glyphicon-time"></i>{log.MessageLogId},{log.CreatedDateTime}</small></p>
                  </div>
                  <div className="timeline-body">
                    <div>
                      <label>
                        <a href="#" onClick={() => toggleMessageVisibility(log.MessageLogId)}>
                          {log.IsIncoming ? `Incoming from ${log.ExternalApplication}, Message type: ${log.Description}` : `Outgoing message to ${log.ExternalApplication}, Message type: ${log.Description}`}
                        </a>
                      </label>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <a onMouseOver={() => (document.getElementById('atop')!.style.cursor = 'pointer')} style={{ float: 'right' }} id="atop">
            Back To Top
          </a><br />
        </div>
      )}
    </div>
  );
};
export default OrderActivity;