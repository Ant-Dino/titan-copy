import React, { FC, useEffect, useState } from 'react';
import { Button, Spinner, Badge, Tooltip, OverlayTrigger } from 'react-bootstrap';
import 'font-awesome/css/font-awesome.min.css';

type MessageLogDetailsProps = {
  refresh: () => void,
  fetchMessageDetails: () => void,
  searchdet: string
};

type MessageDetails = {
  ReportDetails: {
    ServiceRequestId: string,
    createddate: string,
    service: string,
    ApplicationId: string,
    CustomerId: string,
    ExternalRefNum: string,
    CustomerRefNum: string,
    InternalRefNum: string,
    InternalRefId: string
    },
  MessageLogDetails: MessageLog[]
};

type MessageLog = {
  IsIncoming: boolean,
  ExceptionDescription: string,
  MessageLogId: string,
  CreatedDateTime: string,
  ExternalApplication: string,
  Description: string,
  Documentobjectid: string,
  hasChild: boolean,
  ParentMessageLogId?: string
};

const MessageLogDetails: FC<MessageLogDetailsProps> = ({ refresh, fetchMessageDetails, searchdet }) => {
  const [messageDetails, setMessageDetails] = useState<MessageDetails | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadDetails = async () => {
      setIsLoading(true);
      try {
        await fetchMessageDetails();
        // Mockup response assuming fetchMessageDetails sets the details.
        setMessageDetails({ /* Mockup data would be here. */ } as MessageDetails);
      } catch (error) {
        console.error('Error fetching message details: ', error);
      } finally {
        setIsLoading(false);
      }
    };
    loadDetails();
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
      {isLoading ? (
        <div style={{ margin: 'auto', width: '10%', padding: '50px' }}>
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
          Loading...
        </div>
      ) : (
        <div className="widget-content">
          {/* Details and Message Flow goes here. Similar transformation as above would continue for each part */}
        </div>
      )}
    </div>
  );
};

export default MessageLogDetails;