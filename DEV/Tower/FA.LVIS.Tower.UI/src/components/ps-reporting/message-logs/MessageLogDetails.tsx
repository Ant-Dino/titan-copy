import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

interface MessageDetails {
    ReportDetails: {
        ServiceRequestId: string;
        createddate: string; // Assuming its a string formatted as a date.
        service: string;
        ApplicationId: string;
        CustomerId: string;
        ExternalRefNum: string;
        CustomerRefNum: string;
        InternalRefNum: string;
        InternalRefId: string;
    };
    MessageLogDetails: Array<{
        MessageLogId: string;
        CreatedDateTime: string;
        ExternalApplication: string;
        Description: string;
        Documentobjectid: string;
        IsIncoming: boolean;
        ExceptionDescription?: string;
        hasChild?: boolean;
        ParentMessageLogId?: string;
    }>;
}

interface Props {
    refresh: () => void;
    fetchMessageDetails: () => Promise<MessageDetails>;
    closeModal: () => void;
    searchdet: string;
}

const MessageLogDetailsComponent: React.FC<Props> = ({ refresh, fetchMessageDetails, closeModal, searchdet }) => {
    const [loading, setLoading] = useState<boolean>(true);
    const [messageDetails, setMessageDetails] = useState<MessageDetails | null>(null);

    useEffect(() => {
        const fetchDetails = async () => {
            setLoading(true);
            try {
                const details = await fetchMessageDetails();
                setMessageDetails(details);
            } catch (error) {
                console.error("Failed to fetch message details", error);
            } finally {
                setLoading(false);
            }
        };
        fetchDetails();
    }, [fetchMessageDetails]);

    if (loading) {
        return <div style={{ margin: 'auto', width: '10%', padding: '50px' }}>
            <i className="fa fa-spinner fa-spin fa-4x fa-fw margin-bottom"></i>
            Loading...
        </div>;
    }

    if (!messageDetails) {
        return null;
    }

    return (
        <div>
            <div id="modalId" className="widget-header">
                <button type="button" onClick={closeModal} className="close" data-dismiss="modal"><i className="fa fa-times" aria-hidden="true"></i></button>
                <i className="fa fa-2x fa-pencil-square-o"></i>
                <h3>Order Activity</h3>
            </div>
            <div className="widget-content">
                <div className="well well-sm">
                    <b>Order Information</b>
                </div>
                {messageDetails.ReportDetails && (
                    <div className="row">
                        <div className="col-md-5">
                            <label>Service Request Id: </label> {messageDetails.ReportDetails.ServiceRequestId}<br />
                            <label>Order Date: </label> {messageDetails.ReportDetails.createddate}<br />
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
                <div className="well well-sm">
                    <b>Message Flow</b>
                    <button type="button" style={{ float: 'right', border: 0, color: 'black', backgroundColor: 'none' }} title="Refresh" onClick={refresh}>
                        <i className="fa fa-refresh"></i>
                    </button>
                </div>
                {/* Timeline for incoming and outgoing messages */}
                <ul className="timeline">
                    {messageDetails.MessageLogDetails.filter(it => it.Description.includes(searchdet)).map((log, index) => (
                        <li key={index} className={log.IsIncoming ? "" : "timeline-inverted"}>
                            <div className={`timeline-badge ${log.ExceptionDescription ? 'danger' : 'success'}`}>
                                <i className={`glyphicon ${log.IsIncoming ? 'glyphicon-arrow-right' : 'glyphicon-arrow-left'}`} data-toggle="tooltip" title={log.IsIncoming ? "Incoming To LVIS" : "Outgoing From LVIS"}></i>
                            </div>
                            <div className="timeline-panel">
                                <div className="timeline-heading">
                                    <p><small className="text-muted"><i className="glyphicon glyphicon-time"></i>{log.MessageLogId},{log.CreatedDateTime}</small></p>
                                </div>
                                <div className="timeline-body">
                                    {/* Details omitted for brevity */}
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

MessageLogDetailsComponent.propTypes = {
    refresh: PropTypes.func.isRequired,
    fetchMessageDetails: PropTypes.func.isRequired,
    closeModal: PropTypes.func.isRequired,
    searchdet: PropTypes.string.isRequired,
};

export default MessageLogDetailsComponent;