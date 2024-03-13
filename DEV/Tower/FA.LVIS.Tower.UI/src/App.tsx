import React, { useState, useEffect } from 'react';

export const App = () => {
  const [currentUser, setCurrentUser] = useState('');
  const [tenantName, setTenantName] = useState('');
  const [errors, setErrors] = useState({ unauthorized: false });
  const [activityRight, setActivityRight] = useState('');
  const [canManageAccessReq, setCanManageAccessReq] = useState(false);

  // Assuming fetching user details, handling errors, setting rights, etc.
  useEffect(() => {
    // Mocking fetch operations and settings
    setCurrentUser('John Doe');
    setTenantName('Company Name');
    setActivityRight('Admin'); // Or 'SuperAdmin'
    setCanManageAccessReq(true);
    // Error handling simulated as none for simplification
    // setErrors(...);
  }, []);

  const OpenPopupWindow = () => {
    // Simulated popup function
    console.log('Popup window opened');
  };

  return (
    <div className="container-fluid">
      <div antiforgerytoken></div>
      {errors.unauthorized && (
        <div className="alert alert-danger">
          <div className="error"><i className="fa fa-lg fa-ban"> {errors.unauthorized}</i></div>
        </div>
      )}
      {!errors.unauthorized && (
        <div>
          {/* This is a simplified version; assuming ps-framework and related components are Reactified */}
          <div icon-file="images/FirstAmericanLogo.png" currentuser={currentUser} tenantname={tenantName}>
            <div>
              <div label="Home" route="dashboard" icon="fa-dashboard"></div>
              <div label="Reporting" route="reporting" icon="fa-line-chart"></div>
              <div label="Mapping Tables" route="Customermappings" icon="fa-cogs"></div>
              {(activityRight === 'Admin' || activityRight === 'SuperAdmin') && <div label="Auditing" route="auditing" icon="fa-bars"></div>}
              <div label="Exceptions" route="businessexception" icon="fa-exclamation-triangle"></div>
              {(activityRight === 'Admin' || activityRight === 'SuperAdmin') && <div label="Security" route="security" icon="fa-lock"></div>}
              {activityRight === 'SuperAdmin' && <div label="Utilities" route="confirmservicerequest" icon="fa-wrench"></div>}
              {canManageAccessReq && <div label="Access Request" route="AccessRequest" icon="fa-key"></div>}
              <div label="Help" route="help" icon="fa-info-circle" onClick={OpenPopupWindow}></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};