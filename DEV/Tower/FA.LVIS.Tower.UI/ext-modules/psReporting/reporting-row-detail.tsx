import React from 'react';
type ServiceRequestProps = {
  active: string;
  row: {
    entity: {
      ServiceRequestId: string;
      createddate: string; // Assume ISO string for simplicity
      service: string;
      ApplicationId: string;
      CustomerId: string;
      ExternalRefNum: string;
      CustomerRefNum: string;
      InternalRefNum: string;
      InternalRefId: string;
    };
  formatDateString: (dateString: string) => string;
};
const ServiceRequestRow: React.FC<ServiceRequestProps> = ({ active, row, formatDateString }) => {
  if (active !== row.entity.CustomerName) return null;
  return (
    <div className="row" style={{ marginBottom: '20px' }}>
      <div className="col-md-5">
        <label>Service Request Id: </label> {row.entity.ServiceRequestId}<br />
        <label>Order Date: </label> {formatDateString(row.entity.createddate)}<br />
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
};
export default ServiceRequestRow;