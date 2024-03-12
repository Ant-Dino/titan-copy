import React, { useEffect, useState } from 'react';

type MessageLogDetailsProps = {
  refresh: () => void;
  fetchMessageDetails: () => Promise<any>;
  closeModal: () => void;
  searchdet: string;
};

const MessageLogDetailsComponent: React.FC<MessageLogDetailsProps> = ({ refresh, fetchMessageDetails, closeModal, searchdet }) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [messageDetails, setMessageDetails] = useState<any>(null);
  const [filteredMessages, setFilteredMessages] = useState<any[]>([]);

  useEffect(() => {
    fetchDetails();
  }, []);

  useEffect(() => {
    if (messageDetails) {
      filterMessages();
    }
  }, [searchdet, messageDetails]);

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

  const filterMessages = () => {
      const filtered = messageDetails?.MessageLogDetails.filter((log: any) => 
        log.Description.toLowerCase().includes(searchdet.toLowerCase())
      );
    setFilteredMessages(filtered || []);
  };

  return (
    <div>
      <div id="modalId" className="widget-header">
        <button type="button" onClick={closeModal} className="close" data-dismiss="modal">
          <i className="fa fa-times" aria-hidden="true"></i>
        </button>
        <i className="fa fa-2x fa-pencil-square-o"></i>
        <h3>Order Activity</h3>
      </div>
      <div style={{ margin: 'auto', width: '10%', padding: '50px' }} hidden={!loading}>
        <i className="fa fa-spinner fa-spin fa-4x fa-fw margin-bottom"></i>
        Loading...
      </div>

      <div className="widget-content" hidden={loading}>
        <div className="well well-sm">
          <b>Order Information</b>
        </div>
        {/* Assuming active, user, and vmTest variable handling is migrated to React state/context */}
        <div className="row">
          {/* Order details mapping */}
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
          {/* Message logs mapping */}
          {filteredMessages.map((MessageLogs, index) => (
            MessageLogs.IsIncoming ? (
              <li key={index}>
                {/* Incoming message details */}
              </li>
            ) : (
              <li className="timeline-inverted" key={index}>
                {/* Outgoing message details */}
              </li>
            )
          ))}
        </ul>
        {/* Additional components or JS based scroll-to-top functionality */}
      </div>
    </div>
  );
};

export default MessageLogDetailsComponent;