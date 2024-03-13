import React from 'react';

interface ServiceRequestProps {
  active: string;
  user: { CustomerName: string };
  row: {
    entity: {
      ServiceRequestId: string;
      createddate: string; // Assuming this date is ISO string for simplicity
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

const formatDate = (dateString: string): string => {
  const options: Intl.DateTimeFormatOptions = { month: '2-digit', day: '2-digit', year: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

const ServiceRequestDetail: React.FC<ServiceRequestProps> = ({ active, user, row }) => {
  if (active !== user.CustomerName) return null;

  return (
    <div>
      <div className="row alt">
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
    </div>
  );
};

export default ServiceRequestDetail;