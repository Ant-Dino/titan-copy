import React, { useState, useEffect } from 'react';
type OrderActivityProps = {
    data: any;
    loading: boolean;
    refreshData: () => void;
    scrollToTop: () => void;
};
const OrderActivityComponent: React.FC<OrderActivityProps> = ({ data, loading, refreshData, scrollToTop }) => {
    const [showMessages, setShowMessages] = useState<boolean>(false);
    const toggleShowMessages = () => setShowMessages(!showMessages);
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
                <button type="button" onClick={() => {}} className="close" data-dismiss="modal">
                    <i className="fa fa-times" aria-hidden="true"></i>
                </button>
                <i className="fa fa-2x fa-pencil-square-o"></i>
                <h3>Order Activity</h3>
            </div>
            <div className="widget-content">
                <div className="well well-sm">
                    <b>Order Information</b>
                </div>
                <div className="row" style={{ display: data.active == data.user.CustomerName ? 'block' : 'none' }}>
                    <div className="col-md-5">
                        <label>Service Request Id: </label> {data.MessageDetails.ReportDetails.ServiceRequestId}<br />
                        <label>Order Date: </label> {new Intl.DateTimeFormat('en-US').format(new Date(data.MessageDetails.ReportDetails.createddate))}<br />
                        <label>Service Type: </label> {data.MessageDetails.ReportDetails.service}<br />
                        <label>Application: </label> {data.MessageDetails.ReportDetails.ApplicationId}
                    </div>
                    <div className="col-md-4">
                        <label>Customer Id: </label> {data.MessageDetails.ReportDetails.CustomerId} <br />
                        <label>External Reference Number: </label> {data.MessageDetails.ReportDetails.ExternalRefNum} <br />
                        <label>Customer Reference Number: </label> {data.MessageDetails.ReportDetails.CustomerRefNum} <br />
                    </div>
                    <div className="col-md-3">
                        <label>Internal Reference Number: </label> {data.MessageDetails.ReportDetails.InternalRefNum}<br />
                        <label>Internal Reference Id: </label> {data.MessageDetails.ReportDetails.InternalRefId}<br />
                    </div>
                </div>
                <br />
                <div className="well well-sm">
                    <b>Message Flow</b>
                    <button type="button" style={{ float: 'right', border: 0, color: 'black', backgroundColor: 'none' }} title="Refresh" onClick={refreshData}>
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
                {data.MessageDetails.MessageLogDetails.filter((log: any) => log.IsIncoming).map((MessageLogs: any, index: number) => (
                    <div key={index} style={{ display: MessageLogs.IsIncoming ? 'block' : 'none' }}>
                        {/* Timeline for messages */}
                    </div>
                ))}
                {/* Placeholder for timeline inverted */}
                <a onMouseOver={() => (document.getElementById('atop')!.style.cursor = 'pointer')} style={{ float: 'right' }} id="atop" onClick={scrollToTop}>
                    Back To Top
                </a><br />
            </div>
        </div>
    );
};
export default OrderActivityComponent;