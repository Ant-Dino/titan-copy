import React, { useEffect, useState } from 'react';
import { Icon, Button, Tooltip } from 'antd';
import 'font-awesome/css/font-awesome.min.css';
import './MessageLogDetails.css'; // Assuming you have a CSS file for styles

interface IMessageLog {
  MessageLogId: string;
  CreatedDateTime: string;
  IsIncoming: boolean;
  ExternalApplication: string;
  Description: string;
  hasChild: boolean;
  DocumentobjectId: string;
  ExceptionDescription?: string;
  ParentMessageLogId?: string;
}

interface IMessageLogDetailsProps {
  refresh: () => void;
  fetchMessageDetails: () => Promise<any>;
  searchdet: string;
}

const MessageLogDetails: React.FC<IMessageLogDetailsProps> = ({ refresh, fetchMessageDetails, searchdet }) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [messageDetails, setMessageDetails] = useState<any>(null);
  const [showMessages, setShowMessages] = useState<boolean[]>([]);

  useEffect(() => {
    const fetchDetails = async () => {
      setLoading(true);
      try {
        const details = await fetchMessageDetails();
        setMessageDetails(details);
      } catch (error) {
        console.error('Error fetching message details:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchDetails();
  }, [fetchMessageDetails]);

  const toggleMessages = (index: number) => {
    setShowMessages(prevState => {
      const newShowMessages = [...prevState];
      newShowMessages[index] = !newShowMessages[index];
      return newShowMessages;
    });
  };

  return (
    <div>
      <div id="modalId" className="widget-header">
        <button type="button" onClick={refresh} className="close" data-dismiss="modal">
          <Icon type="close" />
        </button>
        <Icon type="edit" className="fa-2x"/>
        <h3>Order Activity</h3>
      </div>
      {loading ? (
        <div style={{ margin: 'auto', width: '10%', padding: '50px' }}>
          <Icon type="loading" className="fa-spinner fa-spin fa-4x fa-fw margin-bottom"/>
          Loading...
        </div>
      ) : (
        <div className="widget-content">
          <div className="well well-sm">
            <b>Order Information</b>
          </div>
          {/* Assuming MessageDetails and ReportDetails are part of the fetched details */}
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
            <button type="button" style={{ float: 'right', border: 0, color: 'black', backgroundColor: 'none' }} title="Refresh" onClick={refresh}>
              <Icon type="reload" />
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
            {/* Assuming messageDetails contains an array of MessageLogDetails filtered by searchdet */}
            {messageDetails.MessageLogDetails.filter((log: IMessageLog) => log.Description.includes(searchdet)).map((MessageLogs: IMessageLog, index: number) => (
              <li key={MessageLogs.MessageLogId} className={MessageLogs.IsIncoming ? "" : "timeline-inverted"}>
                <div className={`timeline-badge ${MessageLogs.ExceptionDescription ? 'danger' : 'success'}`}>
                  <Tooltip title={MessageLogs.IsIncoming ? "Incoming To LVIS" : "Outgoing From LVIS"}>
                    <Icon type={MessageLogs.IsIncoming ? "arrow-right" : "arrow-left"} onClick={() => toggleMessages(index)} />
                  </Tooltip>
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <p>
                      <small className="text-muted">
                        <Icon type="clock-circle-o" /> {MessageLogs.MessageLogId}, {new Date(MessageLogs.CreatedDateTime).toLocaleString()}
                      </small>
                    </p>
                  </div>
                  <div className="timeline-body">
                    <div>
                      <label>
                        <a href="#" onClick={() => toggleMessages(index)}>
                          {MessageLogs.IsIncoming ? "Incoming from" : "Outgoing to"} {MessageLogs.ExternalApplication}, Message type: {MessageLogs.Description}
                        </a>
                        <a href="#" onClick={() => toggleMessages(index)}>{showMessages[index] ? '- Less' : '+ More'}</a>
                      </label>
                    </div>
                    <p className="text-right">
                      <a href="#" onClick={() => console.log("Attachment clicked, implement modal here")}>
                        <Icon type="paperclip" />
                      </a>
                    </p>
                    {/* Child message logs implementation omitted for brevity */}
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <a onMouseOver={() => (document.getElementById('atop')!.style.cursor = 'pointer')} style={{ float: 'right' }} id="atop" onClick={() => window.scrollTo(0, 0)}>Back To Top</a><br />
        </div>
      )}
    </div>
  );
};

export default MessageLogDetails;