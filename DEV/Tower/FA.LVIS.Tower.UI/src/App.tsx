import React, { useState, useEffect } from 'react';
import './App.css'; // Assume your CSS is in App.css

const App: React.FC = () => {
  const [currentUser, setCurrentUser] = useState('');
  const [tenantName, setTenantName] = useState('');
  const [activityRight, setActivityRight] = useState('');
  const [unauthorizedError, setUnauthorizedError] = useState('');
  const [canManageAccessReq, setCanManageAccessReq] = useState(false);

  // Replace these with actual logic to determine values
  useEffect(() => {
    // Placeholder for authentication logic or fetching user details
    setCurrentUser('John Doe');
    setTenantName('Tenant 1');
    setActivityRight('Admin'); // Possible values: Admin, SuperAdmin, etc.
    setUnauthorizedError(''); // Assume error handling sets this accordingly
    setCanManageAccessReq(true); // Assume some logic to set this based on user rights
  }, []);

  const openPopupWindow = () => {
    // Placeholder for openPopupWindow logic
    console.log('Popup window opened');
  };

  return (
    <div className="container-fluid">
      <div antiforgerytoken=""></div>
      {unauthorizedError && (
        <div className="alert alert-danger">
          <div className="error"><i className="fa fa-lg fa-ban"> {unauthorizedError}</i></div>
        </div>
      )}
      {!unauthorizedError && (
        <div>
          {/* Assuming ps-framework and similar elements are replaced with analogous React components */}
          <div iconFile="images/FirstAmericanLogo.png" currentUser={currentUser} tenantName={tenantName}>
            <div>
              <div label="Home" route="dashboard" icon="fa-dashboard"></div>
              <div label="Reporting" route="reporting" icon="fa-line-chart"></div>
              <div label="Mapping Tables" route="Customermappings" icon="fa-cogs"></div>
              {(activityRight === 'Admin' || activityRight === 'SuperAdmin') && (
                <div label="Auditing" route="auditing" icon="fa-bars"></div>
              )}
              <div label="Exceptions" route="businessexception" icon="fa-exclamation-triangle"></div>
              {(activityRight === 'Admin' || activityRight === 'SuperAdmin') && (
                <div label="Security" route="security" icon="fa-lock"></div>
              )}
              {activityRight === 'SuperAdmin' && (
                <div label="Utilities" route="confirmservicerequest" icon="fa-wrench"></div>
              )}
              {canManageAccessReq && (
                <div label="Access Request" route="AccessRequest" icon="fa-key"></div>
              )}
              <div label="Help" route="help" icon="fa-info-circle" onClick={openPopupWindow}></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;