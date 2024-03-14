import React from 'react';

interface ServiceRequestProps {
    active: string;
    user: { CustomerName: string; };
    row: {
        entity: {
            ServiceRequestId: string;
            createddate: string; // ISO Date format
            service: string;
            ApplicationId: string;
            CustomerId: string;
            ExternalRefNum: string;
            CustomerRefNum: string;
            InternalRefNum: string;
            InternalRefId: string;
        };
    };
}

const ServiceRequest: React.FC<ServiceRequestProps> = ({ active, user, row }) => {
    const formatDate = (dateString: string): string => {
        const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: '2-digit', day: '2-digit' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    return (
        <div>
            <div></div> {/* Placeholder for anti-forgery token implementation */}
            {active === user.CustomerName && (
                <div className={`row ${row.entity % 2 === 0 ? 'alt' : ''}`}>
                    <br />
                    <div className="col-md-5">
                        <label>Service Request Id: </label> {row.entity.ServiceRequestId}<br />
                        <label>Order Date: </label> {formatDate(row.entity.createddate)}<br />
                        <label>Service Type: </label> {row.entity.service}<br />
                        <label>Application: </label> {row.entity.ApplicationId}
                    </div>
                    <div className="col-md-4">
                        <label>Customer Id: </label> {row.entity.CustomerId} <br />
                        <label>External Reference Number: </label> {row.entity.ExternalRefNum} <br />
                        <label>Customer Reference Number: </label> {row.entity.CustomerRefNum}<br />
                    </div>
                    <div className="col-md-3">
                        <label>Internal Reference Number: </label> {row.entity.InternalRefNum}<br />
                        <label>Internal Reference Id: </label> {row.entity.InternalRefId}<br />
                    </div>    
                </div>
            )}
        </div>
    );
};

export default ServiceRequest;