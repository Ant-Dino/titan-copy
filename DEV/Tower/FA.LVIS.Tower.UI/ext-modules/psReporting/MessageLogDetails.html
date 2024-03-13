import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faPencilSquareO, faSpinner, faRefresh, faArrowRight, faArrowLeft, faPaperclip } from '@fortawesome/free-solid-svg-icons';
import { Modal } from 'react-bootstrap';
interface OrderActivityProps {
  loading: boolean;
  messageDetails: any; // Assuming messageDetails is an object, replace 'any' with the proper type for more accurate typing
  activeCustomer: string;
  refresh: () => void;
  setContent: (documentObjectId: string, messageType: string) => void;
  scrollToTop: () => void;
const OrderActivityComponent: React.FC<OrderActivityProps> = ({ loading, messageDetails, activeCustomer, refresh, setContent, scrollToTop }) => {
  const [showMessages, setShowMessages] = useState<boolean[]>([]);
  useEffect(() => {
    // Initialize showMessages states for each message log
    const initialShowMessagesState = messageDetails.MessageLogDetails.map(() => false);
    setShowMessages(initialShowMessagesState);
  }, [messageDetails.MessageLogDetails]);
  return (
    <div>
      <div id="modalId" className="widget-header">
        <button type="button" onClick={() => {}} className="close" data-dismiss="modal"><FontAwesomeIcon icon={faTimes} aria-hidden="true" /></button>
        <FontAwesomeIcon icon={faPencilSquareO} size="2x" />
        <h3>Order Activity</h3>
      </div>
      <div style={{ margin: 'auto', width: '10%', padding: '50px' }} hidden={!loading}>
        <FontAwesomeIcon icon={faSpinner} spin size="4x" className="margin-bottom" />
        Loading...
      </div>

      <div className="widget-content" hidden={loading}>
        <div className="well well-sm">
          <b>Order Information</b>
        </div>
        {messageDetails?.ReportDetails && activeCustomer === messageDetails.ReportDetails.CustomerName && (
          <div className={`row ${activeCustomer === messageDetails.ReportDetails.CustomerName ? 'alt' : ''}`}>
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
        )}
        <br />
        <div className="well well-sm">
          <b>Message Flow</b>
          <button type="button" style={{ float: 'right', border: 0, color: 'black', backgroundColor: 'none' }} title="Refresh" onClick={() => refresh()}>
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
          {messageDetails?.MessageLogDetails.filter((log: any) => true /* should filter based on some condition if needed */).map((MessageLogs: any, index: number) => (
            <li key={MessageLogs.MessageLogId} className={MessageLogs.IsIncoming ? '' : 'timeline-inverted'}>
              <div className={`timeline-badge ${MessageLogs.ExceptionDescription ? 'danger' : 'success'}`}>
                <FontAwesomeIcon icon={MessageLogs.IsIncoming ? faArrowRight : faArrowLeft} onClick={() => setContent(MessageLogs.ExceptionDescription, "Exception Description")} title="Toggle Message Direction" />