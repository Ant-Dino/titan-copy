import React from 'react';
interface ServiceRequestProps {
  active: string,
  user: { CustomerName: string },
  row: {
    entity: {
      ServiceRequestId: string,
      createddate: string, // Assuming this is a string that can be converted to Date
      service: string,
      ApplicationId: string,
      CustomerId: string,
      ExternalRefNum: string,
      CustomerRefNum: string,
      InternalRefNum: string,
      InternalRefId: string,
    }
  }
}
export const ServiceRequest: React.FC<ServiceRequestProps> = ({ active, user, row }) => {
  return (
    <div>
      {active === user.CustomerName && (
        <div className="row alt">
          <br />
          <div className="col-md-5">
            <label>Service Request Id: </label> {row.entity.ServiceRequestId}<br />
            <label>Order Date: </label> {new Date(row.entity.createddate).toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' })}<br />
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
}