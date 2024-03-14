import React from 'react';
type ServiceRequestProps = {
  active: string;
  data: {
    ServiceRequestId: string;
    createddate: string; // Assuming the date is a string for simplicity
    service: string;
    ApplicationId: string;
    CustomerId: string;
    ExternalRefNum: string;
    CustomerRefNum: string;
    InternalRefNum: string;
    InternalRefId: string;
  }[];
};
const formatDate = (dateString: string): string => {
  const options = { year: 'numeric', month: '2-digit', day: '2-digit' } as const;
  return new Date(dateString).toLocaleDateString('en-US', options);
};
const ServiceRequestComponent: React.FC<ServiceRequestProps> = ({ active, data }) => {
  return (
    <>
    {data.map((row, index) => {
      const isOdd = index % 2 !== 0;
      const showRow = active === row.CustomerName;
      if (!showRow) return null;
      return (
        <div key={row.ServiceRequestId} className={`row ${isOdd ? 'alt' : ''}`}>
          <div className="col-md-5">
            <label>Service Request Id: </label> {row.ServiceRequestId}<br />
            <label>Order Date: </label> {formatDate(row.createddate)}<br />
            <label>Service Type: </label> {row.service}<br />
            <label>Application: </label> {row.ApplicationId}
          </div>
          <div className="col-md-4">
            <label>Customer Id: </label> {row.CustomerId} <br />
            <label>External Reference Number: </label> {row.ExternalRefNum} <br />
            <label>Customer Reference Number: </label> {row.CustomerRefNum}<br />
          </div>
          <div className="col-md-3">
            <label>Internal Reference Number: </label> {row.InternalRefNum}<br />
            <label>Internal Reference Id: </label> {row.InternalRefId}<br />
          </div>    
        </div>
      );
    })}
    </>
  );
};
export default ServiceRequestComponent;