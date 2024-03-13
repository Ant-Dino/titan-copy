import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// Import other CSS files here as needed, adjust paths accordingly. You may
// need to convert CSS files to modules or use a different strategy for styling.
import './YourCustomCssFile.css'; // Example for importing a custom CSS, replace with your actual CSS file path

const App: React.FC = () => {
  const [currentUser, setCurrentUser] = useState('');
  const [tenantName, setTenantName] = useState('');
  const [activityRight, setActivityRight] = useState('');
  const [unauthorizedError, setUnauthorizedError] = useState('');
  const [canManageAccessReq, setCanManageAccessReq] = useState(false);

  useEffect(() => {
    // Here you would fetch user data and auth status
    // This is just a placeholder
    // Example:
    setCurrentUser('John Doe');
    setTenantName('Tenant XYZ');
    setActivityRight('Admin');
    setUnauthorizedError('');
    setCanManageAccessReq(true);
  }, []);

  return (
    <div className="container-fluid">
      {unauthorizedError && (
        <div className="alert alert-danger">
          <div className="error"><i className="fa fa-lg fa-ban"> {unauthorizedError}</i></div>
        </div>
      )}
      {!unauthorizedError && (
        <div>
          <div icon-file="images/FirstAmericanLogo.png" currentuser={currentUser} tenantname={tenantName}>
            {/* Your menu component logic will go here, you will need to create a separate component for that */}
            {/* Below is a placeholder for menu items, replace them with your actual component structure */}
            <div>
              <div label="Home" route="dashboard" icon="fa-dashboard"></div>
              <div label="Reporting" route="reporting" icon="fa-line-chart"></div>
              <div label="Mapping Tables" route="Customermappings" icon="fa-cogs"></div>
              {(activityRight === 'Admin' || activityRight === 'SuperAdmin') && <div label="Auditing" route="auditing" icon="fa-bars"></div>}
              <div label="Exceptions" route="businessexception" icon="fa-exclamation-triangle"></div>
              {(activityRight === 'Admin' || activityRight === 'SuperAdmin') && <div label="Security" route="security" icon="fa-lock"></div>}
              {activityRight === 'SuperAdmin' && <div label="Utilities" route="confirmservicerequest" icon="fa-wrench"></div>}
              {canManageAccessReq && <div label="Access Request" route="AccessRequest" icon="fa-key"></div>}
              <div label="Help" route="help" icon="fa-info-circle" onClick={() => alert('Open help popup')}></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;