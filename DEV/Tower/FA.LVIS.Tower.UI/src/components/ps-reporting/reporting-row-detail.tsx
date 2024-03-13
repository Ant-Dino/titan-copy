import React from 'react';

type RowEntity = {
  ServiceRequestId: string;
  createdDate: string; // Assuming a string representation initially, parsing will be done for display
  service: string;
  ApplicationId: string;
  CustomerId: string;
  ExternalRefNum: string;
  CustomerRefNum: string;
  InternalRefNum: string;
  InternalRefId: string;
};

type Props = {
  active: string;
  userCustomerName: string;
  rowEntity: RowEntity;
};

const formatDate = (dateString: string): string => {
  const options: Intl.DateTimeFormatOptions = { month: '2-digit', day: '2-digit', year: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

const DataRow: React.FC<Props> = ({ active, userCustomerName, rowEntity }) => {
  // Logic to determine if the current row should be displayed based on active state and user information
  const isActiveRow: boolean = active === userCustomerName;

  return (
    <>
    {isActiveRow && (
      <div className={`row ${isActiveRow && 'alt'}`}>
        <br />
        <div className="col-md-5">
          <label>Service Request Id: </label> {rowEntity.ServiceRequestId}<br />
          <label>Order Date: </label> {formatDate(rowEntity.createdDate)}<br />
          <label>Service Type: </label> {rowEntity.service}<br />
          <label>Application: </label> {rowEntity.ApplicationId}
        </div>
        <div className="col-md-4">
          <label>Customer Id: </label> {rowEntity.CustomerId} <br />
          <label>External Reference Number: </label> {rowEntity.ExternalRefNum} <br />
          <label>Customer Reference Number: </label> {rowEntity.CustomerRefNum}<br />
        </div>
        <div className="col-md-3">
          <label>Internal Reference Number: </label> {rowEntity.InternalRefNum}<br />
          <label>Internal Reference Id: </label> {rowEntity.InternalRefId}<br />
        </div>    
      </div>
    )}
    </>
  );
};

export default DataRow;