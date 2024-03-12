import React, { useEffect, useState } from 'react';

type OrderActivityProps = {
  refresh: () => void;
  fetchMessageDetails: () => Promise<any>;
  searchdet: string;
};

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
};

interface MessageDetails {
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
  MessageLogDetails: MessageLog[];
};

const OrderActivity: React.FC<OrderActivityProps> = ({ refresh, fetchMessageDetails, searchdet }) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [messageDetails, setMessageDetails] = useState<MessageDetails | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const data = await fetchMessageDetails();
      setMessageDetails(data);
      setLoading(false);
       };
    fetchData();
   }, [fetchMessageDetails]);

  return (
    <div>
      <div id="modalId" className="widget-header">
        <button type="button" onClick={() => refresh()} className="close" data-dismiss="modal">
          <i className="fa fa-times" aria-hidden="true"></i>
         </button>
        <i className="fa fa-2x fa-pencil-square-o"></i>
        <h3>Order Activity</h3>
       </div>
      {loading && (
        <div style={{ margin: 'auto', width: '10%', padding: '50px' }}>
          <i className="fa fa-spinner fa-spin fa-4x fa-fw margin-bottom"></i>
          Loading...
         </div>
       )}
      {!loading && messageDetails && (
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
          <button type="button" style={{ float: 'right', border: 0, color: 'black', backgroundColor: 'none' }} title="Refresh" onClick={() => refresh()}>
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
        {/* Mapping through MessageLogs based on the searchdet criteria */}
        {messageDetails.MessageLogDetails.filter((log) => log.Description.includes(searchdet)).map((MessageLogs, index) => (
          <React.Fragment key={index}>
            {/* Conditionally rendering based on IsIncoming value */}
            {MessageLogs.IsIncoming ? (
              <div className="timeline">
                {/* Timeline for incoming message */}
              </div>
             ) : (
              <div className="timeline-inverted">
                {/* Timeline for outgoing message */}
                   </div>
             )}
          </React.Fragment>
         ))}
       </div>
     )}
   </div>
 );
};

export default OrderActivity;