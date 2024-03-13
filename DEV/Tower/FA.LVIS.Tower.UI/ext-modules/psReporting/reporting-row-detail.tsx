import React from 'react';

type ServiceRequestProps = {
  activeCustomerName: string;
  row: {
    entity: {
      ServiceRequestId: string;
      createddate: string; // Assuming it's in ISO format for simplicity
      service: string;
      ApplicationId: string;
      CustomerId: string;
      ExternalRefNum: string;
      CustomerRefNum: string;
      InternalRefNum: string;
      InternalRefId: string;
    };
  };
};

const formatDate = (dateString: string) => {
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: '2-digit', day: '2-digit' };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

const ServiceRequestRow: React.FC<ServiceRequestProps> = ({ activeCustomerName, row }) => {
  const isActive = activeCustomerName === row.entity.CustomerName;

  // Note: Removed antiforgerytoken handling as it is backend specific and not directly applicable in a front-end context.
  return (
    <div style={{ display: isActive ? 'block' : 'none' }} className={`row ${isActive ? 'alt' : ''}`}>
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
};

export default ServiceRequestRow;