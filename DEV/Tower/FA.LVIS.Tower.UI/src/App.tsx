import React, { useState, useEffect } from 'react';
const App: React.FC = () => {
  const [currentUser, setCurrentUser] = useState<string>('');
  const [tenantName, setTenantName] = useState<string>('');
  const [activityRight, setActivityRight] = useState<string>('');
  const [errors, setErrors] = useState<{ unauthorized: string }>({ unauthorized: '' });
  const [canManageAccessReq, setCanManageAccessReq] = useState<boolean>(false);
  useEffect(() => {
    // Fetch the current user, tenant name, activity right from an API or Context
    // Simulating fetching data
    setCurrentUser('JohnDoe');
    setTenantName('ExampleTenant');
    setActivityRight('Admin');
    setCanManageAccessReq(true);
  }, []);
  const openPopupWindow = () => {
    // Simulate opening a popup window
    console.log('Opening a popup window');
  };
  return (
    <div className="container-fluid">
      <div>AntiForgery Token Placeholder</div>
      {errors.unauthorized && (
        <div className="alert alert-danger">
          <div className="error"><i className="fa fa-lg fa-ban"> {errors.unauthorized}</i></div>
        </div>
      )}
      {!errors.unauthorized && (
        <div>
          {/* Placeholder for the PS Framework component */}
          <div>
            {/* Assuming ps-menu and ps-menu-items are components to be created or replaced */}
            <div>Menu Placeholder:</div>
            <div label="Home" route="dashboard" icon="fa-dashboard">Home</div>
            <div label="Reporting" route="reporting" icon="fa-line-chart">Reporting</div>
            <div label="Mapping Tables" route="Customermappings" icon="fa-cogs">Mapping Tables</div>
            {(activityRight === 'Admin' || activityRight === 'SuperAdmin') && (
              <div label="Auditing" route="auditing" icon="fa-bars">Auditing</div>
            )}
            <div label="Exceptions" route="businessexception" icon="fa-exclamation-triangle">Exceptions</div>
            {(activityRight === 'Admin' || activityRight === 'SuperAdmin') && (
              <div label="Security" route="security" icon="fa-lock">Security</div>
            )}
            {activityRight === 'SuperAdmin' && (
              <div label="Utilities" route="confirmservicerequest" icon="fa-wrench">Utilities</div>
            )}
            {canManageAccessReq && (
              <div label="Access Request" route="AccessRequest" icon="fa-key">Access Request</div>
            )}
            <div label="Help" route="help" icon="fa-info-circle" onClick={openPopupWindow}>Help</div>
          </div>
        </div>
      )}
    </div>
  );
};
export default App;