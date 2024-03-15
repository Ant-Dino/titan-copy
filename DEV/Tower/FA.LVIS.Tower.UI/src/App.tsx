import React, { useState, useEffect } from 'react';
import './App.css'; // Assuming you have these styles global or you adjust accordingly

const App: React.FC = () => {
  const [currentUser, setCurrentUser] = useState<string>('');
  const [tenantName, setTenantName] = useState<string>('');
  const [errors, setErrors] = useState<{ unauthorized: string }>({ unauthorized: '' });
  const [activityRight, setActivityRight] = useState<string>('');
  const [canManageAccessReq, setCanManageAccessReq] = useState<boolean>(false);

  // Example of how you might fetch data or handle logic similar to your AngularJS controller
  useEffect(() => {
    // Fetch user info and rights, etc.
    setCurrentUser('John Doe');
    setTenantName('Sample Tenant');
    setErrors({ unauthorized: 'Unauthorized Access Detected' }); // Example Error
    setActivityRight('Admin');
    setCanManageAccessReq(true);
  }, []);

  const openPopupWindow = () => {
    console.log('Help Popup Opened');
  }

  return (
    <div className="container-fluid">
      <div></div> {/* Placeholder for antiforgerytoken */}
      {errors.unauthorized && (
        <div className="alert alert-danger">
          <div className="error"><i className="fa fa-lg fa-ban"> {errors.unauthorized}</i></div>
        </div>
      )}

      {!errors.unauthorized && (
        <div>
          {/* Assuming ps-framework and child components are React components you will create */}
          {/* You will need to replace or build these as React components */}
          <div icon-file="images/FirstAmericanLogo.png" currentuser={currentUser} tenantname={tenantName}>
            {/* ps-menu and ps-menu-item will be your React components */}
            <div>
              <div label="Home" route="dashboard" icon="fa-dashboard"></div>
              <div label="Reporting" route="reporting" icon="fa-line-chart"></div>
              <div label="Mapping Tables" route="Customermappings" icon="fa-cogs"></div>
              <div label="Auditing" route="auditing" icon="fa-bars" show={(activityRight === 'Admin') || (activityRight === 'SuperAdmin')}></div>
              <div label="Exceptions" route="businessexception" icon="fa-exclamation-triangle"></div>
              <div label="Security" route="security" show={(activityRight === 'Admin') || (activityRight === 'SuperAdmin')} icon="fa-lock"></div>
              <div label="Utilities" route="confirmservicerequest" show={(activityRight === 'SuperAdmin')} icon="fa-wrench"></div>
              <div label="Access Request" route="AccessRequest" show={canManageAccessReq} icon="fa-key"></div>
              <div label="Help" route="help" icon="fa-info-circle" onClick={() => openPopupWindow()}></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;