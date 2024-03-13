import React, { useState, useEffect } from 'react';

type Props = {
  loading: boolean,
  messageDetails: {
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
      ExternalApplication: string,
      Description: string,
      hasChild: boolean,
      ParentMessageLogId?: string,
      DocumentobjectId: string
    }>
  },
  refresh: () => void,
  setContent: (docId: string, messageType: string) => void,
  scrollToTop: () => void
};

const OrderActivityComponent: React.FC<Props> = ({ loading, messageDetails, refresh, setContent, scrollToTop }) => {
  const [showMessages, setShowMessages] = useState<{ [key: string]: boolean }>({});

  const toggleMessageVisibility = (id: string) => {
    setShowMessages(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div>
      <div id="modalId" className="widget-header">
        <button type="button" onClick={scrollToTop} className="close" data-dismiss="modal">
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
          <div className="row">
            <div className="col-md-5">
              <label>Service Request Id: </label> {messageDetails.ReportDetails.ServiceRequestId}<br />
              <label>Order Date: </label> {new Date(messageDetails.ReportDetails.createddate).toLocaleDateString('en-US')}<br />
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
            <button type="button" style={{ float: 'right', border: 0, color: 'black', backgroundColor: 'none' }} title="Refresh" onClick={refresh}>
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
            {messageDetails.MessageLogDetails.map((MessageLogs, index) => (
              <li key={index} className={MessageLogs.IsIncoming ? "" : "timeline-inverted"}>
                <div className={`timeline-badge ${MessageLogs.ExceptionDescription ? "danger" : "success"}`}>
                  <i onClick={() => setContent(MessageLogs.DocumentobjectId, MessageLogs.IsIncoming ? 'Incoming Message' : 'Outgoing Message')} className="glyphicon glyphicon-arrow-right" data-toggle="tooltip" title={MessageLogs.IsIncoming ? "Incoming To LVIS" : "Outgoing From LVIS"}></i>
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <p><small className="text-muted"><i className="glyphicon glyphicon-time"></i>{MessageLogs.MessageLogId}, {new Date(MessageLogs.CreatedDateTime).toLocaleString()}</small></p>
                  </div>
                  <div className="timeline-body">
                    <div>
                      <label>
                        <a href="#/" onClick={() => toggleMessageVisibility(MessageLogs.MessageLogId)}>
                          {MessageLogs.IsIncoming ? `Incoming from ${MessageLogs.ExternalApplication}, Message type: ${MessageLogs.Description}` : `Outgoing message to ${MessageLogs.ExternalApplication}, Message type: ${MessageLogs.Description}`}
                        </a>
                        <a href="#/" onClick={() => toggleMessageVisibility(MessageLogs.MessageLogId)}>{showMessages[MessageLogs.MessageLogId] ? '- Less' : '+ More'}</a>
                      </label>
                    </div>
                    <p className="text-right">
                      <a href="#/" onClick={() => setContent(MessageLogs.DocumentobjectId, 'Attachment(s)')}>
                        <span className="glyphicon glyphicon-paperclip" data-toggle="tooltip" title="Attachment(s)"></span>
                      </a>
                    </p>
                    {showMessages[MessageLogs.MessageLogId] && (
                      messageDetails.MessageLogDetails.filter(child => child.ParentMessageLogId === MessageLogs.MessageLogId).map((ChildLogs, childIndex) => (
                        <div key={`child-${childIndex}`}>
                          <label>{ChildLogs.ExternalApplication}, Message type: {ChildLogs.Description}</label>
                          <p className="text-right">
                            <a href="#/" onClick={() => setContent(ChildLogs.DocumentobjectId,'Received Message')}>
                              <span className="glyphicon glyphicon-paperclip" data-toggle="tooltip" title="Attachment(s)"></span>
                            </a>
                          </p>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <a onMouseOver={() => {}} style={{ float: 'right' }} id="atop" onClick={scrollToTop}>Back To Top</a><br />
        </div>
      )}
    </div>
  );
};

export default OrderActivityComponent;