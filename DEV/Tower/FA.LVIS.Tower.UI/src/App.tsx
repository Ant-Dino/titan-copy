import React, { useState, useEffect } from 'react';

export const App: React.FC = () => {
  const [errors, setErrors] = useState<{ unauthorized?: string }>({});
  const [activityRight, setActivityRight] = useState<string>('');
  const [canManageAccessReq, setCanManageAccessReq] = useState<boolean>(false);
  const [currentUser, setCurrentUser] = useState<string>('');
  const [tenantName, setTenantName] = useState<string>('');

  // Mock function to replace AngularJS dependency
  const OpenPopupWindow = () => {
    console.log('Open Popup Window');
  };

  // Mock setup, replace with actual API calls or state management logic
  useEffect(() => {
    // Setup your application state here
    setErrors({ unauthorized: '' }); // Example of setting unauthorized error
    setActivityRight('Admin'); // e.g., Admin, SuperAdmin
    setCanManageAccessReq(true);
    setCurrentUser('John Doe');
    setTenantName('Example Tenant');
  }, []);

  return (
    <div className="container-fluid">
      <div antiforgerytoken="true"></div>
      {errors.unauthorized && (
        <div className="alert alert-danger">
          <div className="error"><i className="fa fa-lg fa-ban"> {errors.unauthorized}</i></div>
        </div>
      )}

      {!errors.unauthorized && (
        <div>
          <ps-framework icon-file="images/FirstAmericanLogo.png" currentuser={currentUser} tenantname={tenantName}>
            <ps-menu>
              <ps-menu-item label="Home" route="dashboard" icon="fa-dashboard"></ps-menu-item>
              <ps-menu-item label="Reporting" route="reporting" icon="fa-line-chart"></ps-menu-item>
              <ps-menu-item label="Mapping Tables" route="Customermappings" icon="fa-cogs"></ps-menu-item>
              {(activityRight === 'Admin' || activityRight === 'SuperAdmin') && (
                <ps-menu-item label="Auditing" route="auditing" icon="fa-bars"></ps-menu-item>
              )}
              <ps-menu-item label="Exceptions" route="businessexception" icon="fa-exclamation-triangle"></ps-menu-item>
              {(activityRight === 'Admin' || activityRight === 'SuperAdmin') && (
                <ps-menu-item label="Security" route="security" icon="fa-lock"></ps-menu-item>
              )}
              {activityRight === 'SuperAdmin' && (
                <ps-menu-item label="Utilities" route="confirmservicerequest" icon="fa-wrench"></ps-menu-item>
              )}
              {canManageAccessReq && (
                <ps-menu-item label="Access Request" route="AccessRequest" icon="fa-key"></ps-menu-item>
              )}
              <ps-menu-item label="Help" route="help" icon="fa-info-circle" onClick={OpenPopupWindow}></ps-menu-item>
            </ps-menu>
          </ps-framework>
        </div>
      )}
    </div>
  );
};