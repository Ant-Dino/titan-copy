import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faPencilSquareO, faSpinner, faRefresh, faPaperclip, faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

interface MessageDetail {
  ServiceRequestId: string;
  createddate: string;
  service: string;
  ApplicationId: string;
  CustomerId: string;
  ExternalRefNum: string;
  CustomerRefNum: string;
  InternalRefNum: string;
  InternalRefId: string;
}

interface MessageLog {
  IsIncoming: boolean;
  ExceptionDescription?: string;
  MessageLogId: string;
  CreatedDateTime: string;
  ExternalApplication: string;
  Description: string;
  hasChild: boolean;
  Documentobjectid: string;
  ParentMessageLogId?: string;
}

interface Props {}

const OrderActivity: React.FC<Props> = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [messageDetails, setMessageDetails] = useState<MessageDetail>();
  const [messageLogs, setMessageLogs] = useState<MessageLog[]>([]);
  const [activeCustomerName, setActiveCustomerName] = useState<string | null>(null);

  // Placeholder for refresh logic
  const refresh = () => {
    console.log('Refresh logic here');
  };

  // Placeholder for logic to scroll to the modal ID
  const scrollToModalId = () => {
    document.getElementById('modalId')?.scrollIntoView();
  };

  // Assuming fetchMessageDetails & fetchMessageLogs are async functions that fetch data from an API
  const fetchMessageDetails = async () => {
    // Fetch logic here
    // Assuming response with mock data
    const mockMessageDetails: MessageDetail = {
      ServiceRequestId: '1234',
      createddate: '01/01/2021',
      service: 'Delivery',
      ApplicationId: 'App1234',
      CustomerId: 'Cust1234',
      ExternalRefNum: 'Ext1234',
      CustomerRefNum: 'CustRef1234',
      InternalRefNum: 'IntRef1234',
      InternalRefId: 'IntId1234',
    };
    setMessageDetails(mockMessageDetails);
  };

  const fetchMessageLogs = async () => {
    // Fetch logic here
    // Assuming response with mock data
    const mockMessageLogs: MessageLog[] = [
      {
        IsIncoming: true,
        MessageLogId: 'Log1234',
        CreatedDateTime: '01/02/2021',
        ExternalApplication: 'ExternalApp',
        Description: 'Description of Message',
        hasChild: false,
        Documentobjectid: 'Doc1234',
      },
      // More mock logs can be added here
    ];
    setMessageLogs(mockMessageLogs);
  };

  useEffect(() => {
    fetchMessageDetails();
    fetchMessageLogs();
    setLoading(false);
  }, []);

  return (
    <div>
      <div id="modalId" className="widget-header">
        <button type="button" onClick={() => window.close()} className="close" data-dismiss="modal"><FontAwesomeIcon icon={faTimes} aria-hidden="true"/></button>
        <FontAwesomeIcon icon={faPencilSquareO} size="2x"/>
        <h3>Order Activity</h3>
      </div>
      <div style={{margin: 'auto', width: '10%', padding: '50px'}} className={loading ? '' : 'd-none'}>
        <FontAwesomeIcon icon={faSpinner} spin size="4x" className="margin-bottom"/> Loading...
      </div>

      <div className={`widget-content ${loading ? 'd-none' : ''}`}>
        <div className="well well-sm">
          <b>Order Information</b>
        </div>
        {/* Assuming active is some state that needs to be managed. */}
        {messageDetails && activeCustomerName === 'user.CustomerName' && (
          <div className={`row ${'alt'}`}>
            <div className="col-md-5">
              <label>Service Request Id: </label> {messageDetails.ServiceRequestId}<br/>
              <label>Order Date: </label> {new Date(messageDetails.createddate).toLocaleDateString('en-US')}<br/>
              <label>Service Type: </label> {messageDetails.service}<br/>
              <label>Application: </label> {messageDetails.ApplicationId}
            </div>
            <div className="col-md-4">
              <label>Customer Id: </label> {messageDetails.CustomerId} <br/>
              <label>External Reference Number: </label> {messageDetails.ExternalRefNum} <br/>
              <label>Customer Reference Number: </label> {messageDetails.CustomerRefNum} <br/>
            </div>
            <div className="col-md-3">
              <label>Internal Reference Number: </label> {messageDetails.InternalRefNum}<br/>
              <label>Internal Reference Id: </label> {messageDetails.InternalRefId}<br/>
            </div>
          </div>
        )}
        <br />
        <div className="well well-sm">
          <b>Message Flow</b>
          <button type="button" style={{float: 'right', border:0, color:'black', backgroundColor: 'none'}} title="Refresh" onClick={refresh}>
            <FontAwesomeIcon icon={faRefresh}/>
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
        {messageLogs.map((log, index) => (
          <ul className="timeline" key={index}>
            {log.IsIncoming ? (
              <li>
                <div className={log.ExceptionDescription ? "timeline-badge danger" : "timeline-badge success"}>
                  <FontAwesomeIcon icon={log.ExceptionDescription ? faArrowRight : faArrowRight} data-toggle="tooltip" title="Incoming To LVIS"/>
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <p><small className="text-muted"><FontAwesomeIcon icon={faClock} />{`${log.MessageLogId},${log.CreatedDateTime}`}</small></p>
                  </div>
                  <div className="timeline-body">
                    <div>
                      <label>
                        <a href="#" onClick={() => setShowMessages(!showMessages)}>
                          Incoming from {log.ExternalApplication}, Message type: {log.Description}
                        </a>
                        {/* Collapsible content for additional logs */}
                      </label>
                    </div>
                    <p className="text-right">
                      <a href="#" onClick={() => setShowContent(log.Documentobjectid, 'Received Message')}>
                        <FontAwesomeIcon icon={faPaperclip} data-toggle="tooltip" title="Attachment(s)"/>
                      </a>
                    </p>
                    {/* Show additional message log details here */}
                  </div>
                </div>
              </li>
            ) : (
              <li className="timeline-inverted">
                {/* Similar structure for outgoing messages */}
              </li>
            )}
          </ul>
        ))}
        <a onMouseOver={() => (document.body.style.cursor = 'pointer')} style={{float:'right'}} id="atop" onClick={scrollToModalId}>Back To Top</a><br />
      </div>
    </div>
  );
};

export default OrderActivity;