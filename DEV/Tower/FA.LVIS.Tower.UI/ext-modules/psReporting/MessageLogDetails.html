import React, { useState, useEffect } from 'react';
type MessageLog = {
    IsIncoming: boolean;
    ExceptionDescription?: string;
    MessageLogId: string;
    CreatedDateTime: string;
    ExternalApplication: string;
    Description: string;
    Documentobjectid: string;
    hasChild: boolean;
};
type MessageDetails = {
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
type MessageLogDetails = MessageLog[];
interface OrderActivityProps {
    loading: boolean;
    MessageDetails: {
        ReportDetails: MessageDetails;
        MessageLogDetails: MessageLogDetails;
    };
    Refresh: () => void;
    setExceptionContent: (description: string) => void;
    setContent: (documentObjectId: string, messageType: string) => void;
    scrollToTop: () => void;
}
const OrderActivity: React.FC<OrderActivityProps> = ({
    loading,
    MessageDetails,
    Refresh,
    setExceptionContent,
    setContent,
    scrollToTop,
}) => {
    return (
        <div>
            <div className="widget-header">
                <button type="button" onClick={scrollToTop} className="close" data-dismiss="modal"><i className="fa fa-times" aria-hidden="true"></i></button>
                <i className="fa fa-2x fa-pencil-square-o"></i>
                <h3>Order Activity</h3>
            </div>
            {loading ? (
                <div style={{ margin: "auto", width: "10%", padding: "50px" }}>
                    <i className="fa fa-spinner fa-spin fa-4x fa-fw margin-bottom"></i>
                    Loading...
                </div>
            ) : (
                <>
                    <div className="widget-content">
                        <div className="well well-sm">
                            <b>Order Information</b>
                        </div>
                        <div className="row">
                            <div className="col-md-5">
                                <label>Service Request Id: </label> {MessageDetails.ReportDetails.ServiceRequestId}<br />
                                <label>Order Date: </label> {new Date(MessageDetails.ReportDetails.createddate).toLocaleDateString()}<br />
                                <label>Service Type: </label> {MessageDetails.ReportDetails.service}<br />
                                <label>Application: </label> {MessageDetails.ReportDetails.ApplicationId}
                            </div>
                            <div className="col-md-4">
                                <label>Customer Id: </label> {MessageDetails.ReportDetails.CustomerId} <br />
                                <label>External Reference Number: </label> {MessageDetails.ReportDetails.ExternalRefNum} <br />
                                <label>Customer Reference Number: </label> {MessageDetails.ReportDetails.CustomerRefNum} <br />
                            </div>
                            <div className="col-md-3">
                                <label>Internal Reference Number: </label> {MessageDetails.ReportDetails.InternalRefNum}<br />
                                <label>Internal Reference Id: </label> {MessageDetails.ReportDetails.InternalRefId}<br />
                            </div>
                        </div>
                        <div className="well well-sm">
                            <b>Message Flow</b>
                            <button type="button" style={{ float: 'right', border: '0', color: 'black', backgroundColor: 'none' }} title="Refresh" onClick={Refresh}>
                                <i className="fa fa-refresh"></i>
                            </button>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};
export default OrderActivity;