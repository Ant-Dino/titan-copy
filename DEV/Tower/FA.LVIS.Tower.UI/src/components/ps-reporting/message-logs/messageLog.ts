import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MessageLogDetailsComponent from 'DEV/Tower/FA.LVIS.Tower.UI/src/components/ps-reporting/message-logs/MessageLogDetails';
// Import statement for any other necessary components or libraries

const MessageLogComponent: React.FC<{ serviceId: string }> = ({ serviceId }) => {
    const [messageDetails, setMessageDetails] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    // Method equivalent to AngularJS's vmTest.Refresh()
    const fetchMessageDetails = () => {
        setLoading(true);
        axios.get(`ReportingController/GetMessageDetails/${serviceId}`).then(response => {
            setMessageDetails(response.data);
            setLoading(false);
        }).catch(e => {
            console.error("Error fetching message details", e);
            setLoading(false);
        });
    };

    // Equivalent to vmTest.searchdet function
    const searchdet = (MessageLogs: any) => {
        return (MessageLogs.ParentMessageLogId === 0 || MessageLogs.ExceptionDescription !== '');
    };

    // closeModal method for passing as prop
    const closeModal = () => {
        console.log("Close modal logic here");
    };

    // Equivalent to vmTest.setContent and vmTest.setExceptionContent,
    // assuming MessageLogDetailsComponent handles these internally based on the passed props
    // This part of logic would depend on how MessageLogDetailsComponent is implemented

    useEffect(() => {
        fetchMessageDetails();
        // eslint-disable-next-line
    }, [serviceId]);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            {messageDetails.filter(searchdet).map((log, index) => (
                <MessageLogDetailsComponent
                    key={index}
                    refresh={fetchMessageDetails}
                    fetchMessageDetails={fetchMessageDetails}
                    closeModal={closeModal}
                    searchdet={searchdet}
                    log={log} // Assuming MessageLogDetailsComponent expects a log prop for details
                />
            ))}
        </div>
    );
};

export default MessageLogComponent;