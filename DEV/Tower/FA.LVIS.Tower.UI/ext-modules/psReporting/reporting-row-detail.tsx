import React from 'react';
interface ServiceRequestProps {
  active: string;
  data: {
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
}
const ServiceRequestRow: React.FC<ServiceRequestProps> = ({ active, data }) => {
  const formatDate = (dateString: string): string => {
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' } as const;
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
  if (active !== data.CustomerName) {
    return null;
  }
  return (
    <div className={`row ${data.CustomerName && 'alt'}`}>
      <br />
      <div className="col-md-5">
        <label>Service Request Id: </label> {data.ServiceRequestId}<br />
        <label>Order Date: </label> {formatDate(data.createddate)}<br />
        <label>Service Type: </label> {data.service}<br />
        <label>Application: </label> {data.ApplicationId}
      </div>
      <div className="col-md-4">
        <label>Customer Id: </label> {data.CustomerId} <br />
        <label>External Reference Number: </label> {data.ExternalRefNum} <br />
        <label>Customer Reference Number: </label> {data.CustomerRefNum}<br />
      </div>
      <div className="col-md-3">
        <label>Internal Reference Number: </label> {data.InternalRefNum}<br />
        <label>Internal Reference Id: </label> {data.InternalRefId}<br />
      </div>    
    </div>
  );
};
export default ServiceRequestRow;