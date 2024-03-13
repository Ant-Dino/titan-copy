import React, { useState, useEffect } from 'react';
const TowerApp: React.FC = () => {
  const [currentUser, setCurrentUser] = useState<string>('');
  const [tenantName, setTenantName] = useState<string>('');
  const [activityRight, setActivityRight] = useState<string>('');
  const [canManageAccessReq, setCanManageAccessReq] = useState<boolean>(false);
  const [errors, setErrors] = useState<{ unauthorized?: string }>({});
  useEffect(() => {
    // Fetch user data, rights, etc.
    // This is just an example. Replace it with actual data fetching logic.
    setCurrentUser("John Doe");
    setTenantName("Tenant Name");
    setActivityRight("Admin");
    setCanManageAccessReq(true);
    setErrors({ unauthorized: "Unauthorized Error" }); // Or set to {} if no errors
  }, []);
  return (
    <div className="container-fluid">
      <div></div> {/* AntiforgeryToken equivalent in React (if needed) should be handled here */}
      {errors.unauthorized ? (
        <div className="alert alert-danger">
          <div className="error"><i className="fa fa-lg fa-ban"> {errors.unauthorized}</i></div>
        </div>
      ) : (
        <div>
          {/* PsFramework and PsMenuItem components should be defined in React, using props for data */}
          {/* This is an indication of structure, replace with actual component logic */}
          <div iconFile="images/FirstAmericanLogo.png" currentUser={currentUser} tenantName={tenantName}>
            <div>
              <div label="Home" route="dashboard" icon="fa-dashboard"></div>
              <div label="Reporting" route="reporting" icon="fa-line-chart"></div>
              <div label="Mapping Tables" route="Customermappings" icon="fa-cogs"></div>
              <div label="Auditing" route="auditing" icon="fa-bars" show={(activityRight === 'Admin') || (activityRight === 'SuperAdmin')}></div>
              <div label="Exceptions" route="businessexception" icon="fa-exclamation-triangle"></div>
              <div label="Security" route="security" icon="fa-lock" show={(activityRight === 'Admin') || (activityRight === 'SuperAdmin')}></div>
              <div label="Utilities" route="confirmservicerequest" icon="fa-wrench" show={activityRight === 'SuperAdmin'}></div>
              <div label="Access Request" route="AccessRequest" icon="fa-key" show={canManageAccessReq}></div>
              <div label="Help" route="help" icon="fa-info-circle" onClick={() => {/* OpenPopupWindow logic here */}}></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default TowerApp;