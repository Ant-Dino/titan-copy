import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faPencilSquareO, faSpinner, faRefresh, faPaperclip, faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';

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
      InternalRefId: string,
    },
    MessageLogDetails: Array<{
      IsIncoming: boolean,
      ExceptionDescription?: string,
      MessageLogId: string,
      CreatedDateTime: string,
      ExternalApplication: string,
      Description: string,
      hasChild: boolean,
      DocumentobjectId: string,
      ParentMessageLogId?: string,
    }>,
  },
  Refresh: () => void,
  setExceptionContent: (description: string) => void,
  setContent: (id: string, type: string) => void,
  scrollTo: (id: string) => void,
};

const OrderActivity: React.FC<Props> = ({ loading, messageDetails, Refresh, setExceptionContent, setContent, scrollTo }) => {
  const [showMessages, setShowMessages] = useState<{ [key: string]: boolean }>({});

  const toggleShowMessage = (id: string) => {
    setShowMessages(prevState => ({ ...prevState, [id]: !prevState[id] }));
  };

  return (
    <div>
      <div id="modalId" className="widget-header">
        <button type="button" onClick={() => scrollTo('modalId')} className="close" data-dismiss="modal"><FontAwesomeIcon icon={faTimes} /></button>
        <FontAwesomeIcon icon={faPencilSquareO} size="2x" />
        <h3>Order Activity</h3>
      </div>
      {loading ? (
        <div style={{ margin: 'auto', width: '10%', padding: '50px' }}>
          <FontAwesomeIcon icon={faSpinner} spin size="4x" className="margin-bottom" />
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
            <button type="button" style={{ float: 'right', border: 0, color: 'black', backgroundColor: 'none' }} title="Refresh" onClick={Refresh}>
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
          <ul className="timeline">
            {messageDetails.MessageLogDetails.map((MessageLogs, index) => (
              <li key={index} className={classNames({ 'timeline-inverted': !MessageLogs.IsIncoming })}>
                <div className={classNames('timeline-badge', { 'danger': MessageLogs.ExceptionDescription, 'success': !MessageLogs.ExceptionDescription })}>
                  <FontAwesomeIcon icon={MessageLogs.IsIncoming ? faArrowRight : faArrowLeft} onClick={() => setExceptionContent(MessageLogs.ExceptionDescription || '')} title={MessageLogs.IsIncoming ? "Incoming To LVIS" : "Outgoing From LVIS"} />
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <p><small className="text-muted"><FontAwesomeIcon icon={faClock} />{MessageLogs.MessageLogId},{MessageLogs.CreatedDateTime}</small></p>
                  </div>
                  <div className="timeline-body">
                    <div>
                      <label>
                        <a href="#" onClick={() => toggleShowMessage(MessageLogs.MessageLogId)}>
                          {MessageLogs.IsIncoming ? `Incoming from ${MessageLogs.ExternalApplication}, Message type: ${MessageLogs.Description}` : `Outgoing message to ${MessageLogs.ExternalApplication}, Message type: ${MessageLogs.Description}`}
                        </a>
                        <a href="#" onClick={() => toggleShowMessage(MessageLogs.MessageLogId)}>
                          {showMessages[MessageLogs.MessageLogId] ? '- Less' : '+ More'}
                        </a>
                      </label>
                    </div>
                    <p className="text-right">
                      <a href="#" onClick={() => setContent(MessageLogs.DocumentobjectId, MessageLogs.IsIncoming ? 'Received Message' : 'Sent Message')}>
                        <FontAwesomeIcon icon={faPaperclip} title="Attachment(s)" />
                      </a>
                    </p>
                    {showMessages[MessageLogs.MessageLogId] && (
                      messageDetails.MessageLogDetails
                        .filter(childLog => childLog.ParentMessageLogId === MessageLogs.MessageLogId)
                        .map((ChildLogs, childIndex) => (
                          <div key={childIndex}>
                            <label>{ChildLogs.ExternalApplication}, Message type: {ChildLogs.Description}</label>
                            <p className="text-right">
                              <a href="#" onClick={() => setContent(ChildLogs.DocumentobjectId, 'Received Message')}>
                                <FontAwesomeIcon icon={faPaperclip} title="Attachment(s)" />
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
          <a onMouseOver={() => this.style.cursor = 'pointer'} style={{ float: 'right' }} id="atop" onClick={() => scrollTo('modalId')}>Back To Top</a><br />
        </div>
      )}
    </div>
  );
};

export default OrderActivity;