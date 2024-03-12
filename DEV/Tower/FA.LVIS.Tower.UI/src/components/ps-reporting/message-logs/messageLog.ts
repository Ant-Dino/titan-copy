// Import React and necessary hooks
import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Component imports
import MessageLogDetailsComponent from 'DEV/Tower/FA.LVIS.Tower.UI/src/components/ps-reporting/message-logs/MessageLogDetails.tsx';
import MessageLogMessageViewComponent from 'DEV/Tower/FA.LVIS.Tower.UI/src/components/ps-reporting/message-logs/MessageLogMessageView.tsx';
import MessageExceptionViewComponent from 'DEV/Tower/FA.LVIS.Tower.UI/src/components/ps-reporting/message-logs/MessageExceptionView.tsx';

interface MessageLogComponentProps {
    serviceRequestId: string;
}

const MessageLogComponent: React.FC<MessageLogComponentProps> = ({ serviceRequestId }) => {

    const [messageDetails, setMessageDetails] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        fetchMessageDetails();
    }, [serviceRequestId]);

    const fetchMessageDetails = async () => {
        setLoading(true);
        try {
            const response = await axios.get(`ReportingController/GetMessageDetails/${serviceRequestId}`);
            setMessageDetails(response.data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching message details:', error);
            setLoading(false);
        }
    };

    const searchdet = (messageLogs: any) => {
        return messageLogs.ParentMessageLogId === 0 || messageLogs.ExceptionDescription !== '';
    };

    const closeModal = () => {
        // Close modal logic here, note this would typically involve
        // managing modal state via context or local state in a real application
        console.log('Close modal called');
    };

    return (
        <div>
            {loading && <div>Loading...</div>}
            {!loading && messageDetails.filter(searchdet).map((detail, index) => (
                <MessageLogDetailsComponent
                    key={index}
                    refresh={fetchMessageDetails}
                    fetchMessageDetails={fetchMessageDetails}
                    closeModal={closeModal}
                    searchdet={searchdet}
                />
            ))}
        </div>
    );
};

export default MessageLogComponent;