import React, { useState, useEffect } from 'react';
const App: React.FC = () => {
  // assuming `errors`, `currentuser`, `tenantname`, `activityright`, and `canmanageaccessreq` are states you'd dynamically check or fetch
  const [errors, setErrors] = useState<{ unauthorized?: string }>({});
  const [currentuser, setCurrentUser] = useState<string>('');
  const [tenantname, setTenantName] = useState<string>('');
  const [activityright, setActivityRight] = useState<string>('');
  const [canmanageaccessreq, setCanManageAccessReq] = useState<boolean>(false);
  // Simulating fetching user rights, user details etc.
  useEffect(() => {
    // fetch or compute user details/rights
    // for the sake of example: 
    setCurrentUser('John Doe');
    setTenantName('Some Tenant');
    setActivityRight('Admin');
    setCanManageAccessReq(true);
  }, []);
  const OpenPopupWindow = () => {
    // Define how you open popup windows
    alert('Popup window example');
  };
  return (
    <div className="container-fluid">
      <div></div> {/* antiforgerytoken, implement as needed */}
      {errors.unauthorized && (
        <div className="alert alert-danger">
          <div className="error"><i className="fa fa-lg fa-ban"> {errors.unauthorized}</i></div>
        </div>
      )}
      {!errors.unauthorized && (
        <div>
          {/* Assuming ps-framework, ps-menu, and ps-menu-item would be components you'd need to create or replace accordingly */}
          {/* The attributes and behavior of these components would need to be defined in your React app */}
          {/* Below is a hypothetical structure assuming you've created these components */}
          <div iconFile="images/FirstAmericanLogo.png" currentUser={currentuser} tenantName={tenantname}>
            <div>
              <div label="Home" route="dashboard" icon="fa-dashboard"></div>
              <div label="Reporting" route="reporting" icon="fa-line-chart"></div>
              <div label="Mapping Tables" route="Customermappings" icon="fa-cogs"></div>
              {(['Admin', 'SuperAdmin'].includes(activityright)) && <div label="Auditing" route="auditing" icon="fa-bars"></div>}
              <div label="Exceptions" route="businessexception" icon="fa-exclamation-triangle"></div>
              {(['Admin', 'SuperAdmin'].includes(activityright)) && <div label="Security" route="security" icon="fa-lock"></div>}
              {(activityright === 'SuperAdmin') && <div label="Utilities" route="confirmservicerequest" icon="fa-wrench"></div>}
              {canmanageaccessreq && <div label="Access Request" route="AccessRequest" icon="fa-key"></div>}
              <div label="Help" route="help" icon="fa-info-circle" onClick={OpenPopupWindow}></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default App;