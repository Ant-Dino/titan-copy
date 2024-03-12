import React, { useState, useEffect } from 'react';

interface MessageLogDetailsComponentProps {
  refresh: () => void;
  fetchMessageDetails: () => Promise<any>;
  closeModal: () => void;
  searchdet: string;
}

const MessageLogDetailsComponent: React.FC<MessageLogDetailsComponentProps> = ({
  refresh,
  fetchMessageDetails,
  closeModal,
  searchdet,
}) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [messageDetails, setMessageDetails] = useState<any>(null);
  const [filteredMessageLogs, setFilteredMessageLogs] = useState<any[]>([]);

  useEffect(() => {
    const fetchDetails = async () => {
      setLoading(true);
      try {
        const response = await fetchMessageDetails();
        setMessageDetails(response);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching message details:', error);
        setLoading(false);
      }
    };
    fetchDetails();
  }, [fetchMessageDetails]);

  useEffect(() => {
    if (messageDetails && messageDetails.MessageLogDetails) {
      const filteredLogs = messageDetails.MessageLogDetails.filter(
        (log: any) => log.Description.toLowerCase().includes(searchdet.toLowerCase())
      );
      setFilteredMessageLogs(filteredLogs);
    }
  }, [messageDetails, searchdet]);

  return (
    <div>
      <div id="modalId" className="widget-header">
        <button type="button" onClick={closeModal} className="close" data-dismiss="modal">
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
          {messageDetails && messageDetails.ReportDetails && (
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
          )}
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
          {filteredMessageLogs.map((log, index) => (
            <ul key={index} className="timeline">
              <li className={log.IsIncoming ? '' : 'timeline-inverted'}>
                <div className={`timeline-badge ${log.ExceptionDescription ? 'danger' : 'success'}`}>
                  <i className={`glyphicon ${log.IsIncoming ? 'glyphicon-arrow-right' : 'glyphicon-arrow-left'}`} title={log.IsIncoming ? 'Incoming To LVIS' : 'Outgoing From LVIS'}></i>
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <p><small className="text-muted"><i className="glyphicon glyphicon-time"></i>{log.MessageLogId},{new Date(log.CreatedDateTime).toLocaleString()}</small></p>
                  </div>
                  <div className="timeline-body">
                    {/* Details and children logs */}
                  </div>
                </div>
              </li>
            </ul>
          ))}
        </div>
      )}
    </div>
  );
};

export default MessageLogDetailsComponent;