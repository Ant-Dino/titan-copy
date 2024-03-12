// Import React and necessary hooks
import React, { useEffect, useState } from 'react';

// Import necessary types for props
import PropTypes from 'prop-types'; // Note: TypeScript users may prefer to use interfaces instead of PropTypes

// Define the props interface
interface MessageLogDetailsProps {
  refresh: () => void;
  fetchMessageDetails: () => void;
  closeModal: () => void;
  searchdet: string;
}

// Define the MessageLogDetails component
const MessageLogDetailsComponent: React.FC<MessageLogDetailsProps> = ({
  refresh,
  fetchMessageDetails,
  closeModal,
  searchdet,
}) => {
  // State to hold message details
  const [messageDetails, setMessageDetails] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  // useEffect to fetch message details initially
  useEffect(() => {
    fetchMessageDetails();
  }, [fetchMessageDetails]);

  // Function to trigger refresh
  const handleRefresh = () => {
    refresh();
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
        {/* Order Information */}
        <div className="well well-sm">
          <b>Order Information</b>
        </div>
        {messageDetails?.ReportDetails && (
          <div className="row">
            <div className="col-md-5">
              <label>Service Request Id: </label>
              {messageDetails.ReportDetails.ServiceRequestId}<br />
              <label>Order Date: </label>
              {messageDetails.ReportDetails.createddate}<br />
              <label>Service Type: </label>
              {messageDetails.ReportDetails.service}<br />
              <label>Application: </label>
              {messageDetails.ReportDetails.ApplicationId}
            </div>
            {/* Other details omitted for brevity */}
          </div>
        )}
        <br />
        <div className="well well-sm">
          <b>Message Flow</b>
          <button
            type="button"
            style={{ float: 'right', border: 0, color: 'black', backgroundColor: 'none' }}
            title="Refresh"
            onClick={handleRefresh}
          >
            <i className="fa fa-refresh"></i>
          </button>
        </div>
        {/* Timeline for messages - Not fully implemented for brevity */}
        <ul className="timeline">
          {/* Implementation required here */}
        </ul>
        <a
          onMouseOver={(e) => (e.currentTarget.style.cursor = 'pointer')}
          style={{ float: 'right' }}
          id="atop"
          onClick={() => {}}
        >
          Back To Top
        </a>
        <br />
      </div>
    </div>
  );
};

// Specify prop types for validation
MessageLogDetailsComponent.propTypes = {
  refresh: PropTypes.func.isRequired,
  fetchMessageDetails: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
  searchdet: PropTypes.string.isRequired,
};

export default MessageLogDetailsComponent;