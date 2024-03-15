import React from 'react';

type RowData = {
  ServiceRequestId: string;
  createddate: string; // Assuming this is a string that can be formatted to 'MM/dd/yyyy';
  service: string;
  ApplicationId: string;
  CustomerId: string;
  ExternalRefNum: string;
  CustomerRefNum: string;
  InternalRefNum: string;
  InternalRefId: string;
};

type RequestDetailsProps = {
  active: string;
  rowData: RowData;
};

const formatDate = (dateString: string) => {
  const options: Intl.DateTimeFormatOptions = { month: '2-digit', day: '2-digit', year: 'numeric' };
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('en-US', options).format(date);
};

const RequestDetails: React.FC<RequestDetailsProps> = ({ active, rowData }) => {
  if (!rowData || active !== rowData.CustomerName) return null;

  return (
    <div>
      <div className="row alt">
        <div className="col-md-5">
          <label>Service Request Id: </label> {rowData.ServiceRequestId}<br />
          <label>Order Date: </label> {formatDate(rowData.createddate)}<br />
          <label>Service Type: </label> {rowData.service}<br />
          <label>Application: </label> {rowData.ApplicationId}
        </div>
        <div className="col-md-4">
          <label>Customer Id: </label> {rowData.CustomerId} <br />
          <label>External Reference Number: </label> {rowData.ExternalRefNum} <br />
          <label>Customer Reference Number: </label> {rowData.CustomerRefNum}<br />
        </div>
        <div className="col-md-3">
          <label>Internal Reference Number: </label> {rowData.InternalRefNum}<br />
          <label>Internal Reference Id: </label> {rowData.InternalRefId}<br />
        </div>    
      </div>
    </div>
  );
};

export default RequestDetails;