import React, { FC } from 'react';

type ServiceRequestProps = {
  active: string;
  row: {
    entity: {
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
  };
};

const formatDate = (dateString: string): string => {
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: '2-digit', day: '2-digit' };
  return new Intl.DateTimeFormat('en-US', options).format(new Date(dateString));
};

const ServiceRequestRow: FC<ServiceRequestProps> = ({ active, row }) => {
  if (active !== row.entity.CustomerName) {
    return null;
  }

  return (
    <div className={`row ${row.entity.CustomerName === active ? '' : 'd-none'}`}>
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
        <label>Internal Reference Id: : </label> {row.entity.InternalRefId}<br />
      </div>
    </div>
  );
};

export default ServiceRequestRow;