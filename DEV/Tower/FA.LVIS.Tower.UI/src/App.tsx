import React, { useState, useEffect } from 'react';

const App: React.FC = () => {
  const [currentUser, setCurrentUser] = useState('');
  const [tenantName, setTenantName] = useState('');
  const [activityRight, setActivityRight] = useState('');
  const [canManageAccessReq, setCanManageAccessReq] = useState(false);
  const [unauthorizedError, setUnauthorizedError] = useState('');

  useEffect(() => {
    // Initialize user, tenant name, activity right, access manage state
    // This is where you could fetch these details from an API or service
    // Simulating an API response
    setCurrentUser('John Doe');
    setTenantName('Tenant 1');
    setActivityRight('Admin');
    setCanManageAccessReq(true);
    setUnauthorizedError('Unauthorized access detected.'); // Simulate error
  }, []);

  const openPopupWindow = () => {
    // Implement the logic for opening a popup window
    console.log('Popup window opened');
  };

  return (
    <div className="container-fluid">
      {unauthorizedError ? (
        <div className="alert alert-danger">
          <div className="error"><i className="fa fa-lg fa-ban"> {unauthorizedError}</i></div>
        </div>
      ) : (
        <div>
          {/* Simulated ps-framework component */}
          {/* This would be a good place for a dedicated React component */}
          <div className="ps-framework" icon-file="images/FirstAmericanLogo.png" currentuser={currentUser} tenantname={tenantName}>
            {/* Simulated ps-menu component */}
            <div className="ps-menu">
              <div className="ps-menu-item" label="Home" route="dashboard" icon="fa-dashboard">Home</div>
              <div className="ps-menu-item" label="Reporting" route="reporting" icon="fa-line-chart">Reporting</div>
              <div className="ps-menu-item" label="Mapping Tables" route="Customermappings" icon="fa-cogs">Mapping Tables</div>
              {(activityRight === 'Admin' || activityRight === 'SuperAdmin') && (
                <div className="ps-menu-item" label="Auditing" route="auditing" icon="fa-bars">Auditing</div>
              )}
              <div className="ps-menu-item" label="Exceptions" route="businessexception" icon="fa-exclamation-triangle">Exceptions</div>
              {(activityRight === 'Admin' || activityRight === 'SuperAdmin') && (
                <div className="ps-menu-item" label="Security" route="security" icon="fa-lock">Security</div>
              )}
              {activityRight === 'SuperAdmin' && (
                <div className="ps-menu-item" label="Utilities" route="confirmservicerequest" icon="fa-wrench">Utilities</div>
              )}
              {canManageAccessReq && (
                <div className="ps-menu-item" label="Access Request" route="AccessRequest" icon="fa-key">Access Request</div>
              )}
              <div className="ps-menu-item" label="Help" route="help" icon="fa-info-circle" onClick={openPopupWindow}>Help</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;