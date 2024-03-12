import React, { useState, useEffect } from 'react';
import { MessageLog, MessageDetailProps } from './MessageLogInterfaces';

interface MessageLogsDetailsProps {
  refresh: () => void;
  fetchMessageDetails: () => Promise<MessageLog[]>;
  searchdet: string;
}

const MessageLogDetails: React.FC<MessageLogsDetailsProps> = ({ refresh, fetchMessageDetails, searchdet }) => {
  const [messageDetails, setMessageDetails] = useState<MessageLog[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchMessageDetails().then((data) => {
      setMessageDetails(data);
      setLoading(false);
    });
  }, [fetchMessageDetails]);

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
        <button type="button" onClick={() => refresh()} className="close" data-dismiss="modal">
          <i className="fa fa-times" aria-hidden="true"></i>
        </button>
        <i className="fa fa-2x fa-pencil-square-o"></i>
        <h3>Order Activity</h3>
      </div>
      <div className="widget-content">
        <div className="well well-sm">
          <b>Order Information</b>
        </div>
         {messageDetails.filter((message) => message.Description.includes(searchdet)).map((message, index) => (
           <React.Fragment key={index}>
             <div className="row">
               <div className="col-md-5">
                 <label>Service Request Id: </label> {message.ReportDetails.ServiceRequestId}<br />
                 <label>Order Date: </label> {new Date(message.ReportDetails.createddate).toLocaleDateString()}<br />
                 <label>Service Type: </label> {message.ReportDetails.service}<br />
                 <label>Application: </label> {message.ReportDetails.ApplicationId}
               </div>
               <div className="col-md-4">
                 <label>Customer Id: </label> {message.ReportDetails.CustomerId} <br />
                 <label>External Reference Number: </label> {message.ReportDetails.ExternalRefNum} <br />
                 <label>Customer Reference Number: </label> {message.ReportDetails.CustomerRefNum} <br />
               </div>
               <div className="col-md-3">
                 <label>Internal Reference Number: </label> {message.ReportDetails.InternalRefNum}<br />
                 <label>Internal Reference Id: </label> {message.ReportDetails.InternalRefId}<br />
               </div>
             </div>
             <br />
             <div className="well well-sm">
               <b>Message Flow</b>
               <button type="button" style={{ float: 'right', border: '0', color: 'black', backgroundColor: 'none' }} title="Refresh" onClick={() => refresh()}>
                 <i className="fa fa-refresh"></i>
               </button>
             </div>
             {/* Timeline for Incoming and Outgoing messages */}
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
             {/* More implementation related to the timeline can be added here based on specific requirements */}
           </React.Fragment>
         ))}
      </div>
    </div>
  );
};

export default MessageLogDetails;