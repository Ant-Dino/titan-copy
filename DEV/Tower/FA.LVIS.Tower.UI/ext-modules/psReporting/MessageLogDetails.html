import React, { useState, useEffect, useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faPencilSquareO, faSpinner, faRefresh } from '@fortawesome/free-solid-svg-icons';
import './OrderActivityComponent.css'; // Assuming a separate CSS file for styles
type MessageLog = {
  MessageLogId: string;
  CreatedDateTime: string;
  ExternalApplication: string;
  Description: string;
  IsIncoming: boolean;
  ExceptionDescription?: string;
  DocumentobjectId?: string;
  hasChild: boolean;
  ParentMessageLogId?: string;
type MessageDetails = {
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
  MessageLogDetails: MessageLog[];
interface OrderActivityProps {
  loading: boolean;
  MessageDetails: MessageDetails;
  Refresh: () => void;
  showModal: (content: string, title: string) => void;
const OrderActivityComponent: React.FC<OrderActivityProps> = ({ loading, MessageDetails, Refresh, showModal }) => {
  const [showMessages, setShowMessages] = useState<Record<string, boolean>>({});
  const toggleShowMessages = useCallback((messageLogId: string) => {
    setShowMessages((prevShowMessages) => ({
      ...prevShowMessages,
      [messageLogId]: !prevShowMessages[messageLogId],
  return (
    <div>
      <div id="modalId" className="widget-header">
        <button type="button" onClick={() => {}} className="close" data-dismiss="modal"><FontAwesomeIcon icon={faTimes} aria-hidden="true" /></button>
        <FontAwesomeIcon icon={faPencilSquareO} className="fa-2x" />
        <h3>Order Activity</h3>
      </div>
      {loading && (
        <div style={{ margin: 'auto', width: '10%', padding: '50px' }}>
          <FontAwesomeIcon icon={faSpinner} className="fa-spin fa-4x fa-fw margin-bottom" />
          Loading...
        </div>
      )}
      {!loading && (
        <div className="widget-content">
          <div className="well well-sm">
            <b>Order Information</b>
          </div>
          <div className="row">
            <div className="col-md-5">
              <label>Service Request Id: </label> {MessageDetails.ReportDetails.ServiceRequestId}<br />
              <label>Order Date: </label> {new Date(MessageDetails.ReportDetails.createddate).toLocaleDateString()}<br />
              <label>Service Type: </label> {MessageDetails.ReportDetails.service}<br />
              <label>Application: </label> {MessageDetails.ReportDetails.ApplicationId}
            </div>
            <div className="col-md-4">
              <label>Customer Id: </label> {MessageDetails.ReportDetails.CustomerId}<br />
              <label>External Reference Number: </label> {MessageDetails.ReportDetails.ExternalRefNum}<br />
              <label>Customer Reference Number: </label> {MessageDetails.ReportDetails.CustomerRefNum}<br />
            </div>
            <div className="col-md-3">
              <label>Internal Reference Number: </label> {MessageDetails.ReportDetails.InternalRefNum}<br />
              <label>Internal Reference Id: </label> {MessageDetails.ReportDetails.InternalRefId}<br />
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
          {/* Timeline list */}
          {/* Attachment modal and exception modal logic would be similar to showModal but not included due to the initial request format */}
        </div>
      )}
    </div>
  );
export default OrderActivityComponent;