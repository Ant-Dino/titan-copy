import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faPencilAlt, faSpinner, faRefresh, faPaperclip, faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import './YourComponent.css'; // Ensure you create and import the appropriate CSS for this component
type MessageDetailsType = {
  Loading: boolean,
  MessageLogDetails: any[],
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
  }
};
type Props = {
  data: MessageDetailsType,
  onClose: () => void,
  onRefresh: () => void,
  setContent: (documentObjectId: string, fileType: string) => void,
};
const YourComponent: React.FC<Props> = ({ data, onClose, onRefresh, setContent }) => {
  const [showMessages, setShowMessages] = useState(false);
  const toggleMessages = () => setShowMessages(!showMessages);
  useEffect(() => {
    Modal.setAppElement('body');
  }, []);
  return (
    <div>
      <div id="modalId" className="widget-header">
        <button type="button" onClick={onClose} className="close" data-dismiss="modal">
          <FontAwesomeIcon icon={faTimes} aria-hidden="true" />
        </button>
        <FontAwesomeIcon icon={faPencilAlt} size="2x" />
        <h3>Order Activity</h3>
      </div>
      {data.Loading ? (
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
              <label>Service Request Id: </label> {data.ReportDetails.ServiceRequestId}<br />
              <label>Order Date: </label> {new Date(data.ReportDetails.createddate).toLocaleDateString()}<br />
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
          <br />
          <div className="well well-sm">
            <b>Message Flow</b>
            <button type="button" style={{ float: 'right', border: 0, color: 'black', backgroundColor: 'none' }} title="Refresh" onClick={onRefresh}>
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
          {data.MessageLogDetails.map((MessageLogs, index) => (
            <div key={index}>
              {MessageLogs.IsIncoming ? (
                <div className="timeline">
                  {/* Incoming Message Timeline Entry */}
                  <div className="timeline-panel">
                    {/* Message Details */}
                  </div>
                </div>
              ) : (
                <div className="timeline-inverted">
                  {/* Outgoing Message Timeline Entry */}
                  <div className="timeline-panel">
                    {/* Message Details */}
                  </div>
                </div>
              )}
            </div>
          ))}
          <a onMouseOver={() => { this.style.cursor = 'pointer'; }} style={{ float: 'right' }} onClick={onClose}>Back To Top</a><br />
        </div>
      )}
    </div>
  );
};
export default YourComponent;