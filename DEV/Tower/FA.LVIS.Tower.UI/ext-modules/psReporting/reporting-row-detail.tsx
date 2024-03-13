import React from 'react';
import '../styles.css'; // Assuming a CSS file is available for the required styles
interface ServiceRequestProps {
  active: string;
  row: {
    entity: {
      ServiceRequestId: number;
      createddate: string; // Assuming this is a ISO 8601 string
      service: string;
      ApplicationId: number;
      CustomerId: number;
      ExternalRefNum: string;
      CustomerRefNum: string;
      InternalRefNum: string;
      InternalRefId: number;
    }
  }
}
const formatDate = (dateString: string): string => {
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: '2-digit', day: '2-digit' };
  return new Date(dateString).toLocaleDateString(undefined, options);
}
const ServiceRequest: React.FC<ServiceRequestProps> = ({active, row}) => {
  return (
    <div className="row" style={{ display: active === row.entity.CustomerName ? 'block' : 'none' }}>
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
  );
}

export default ServiceRequest;