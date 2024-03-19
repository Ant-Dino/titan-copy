import React, { useState, useEffect } from 'react';
const App = () => {
  const [errors, setErrors] = useState<{ unauthorized: string | null }>({ unauthorized: null });
  const [currentUser, setCurrentUser] = useState<string>('');
  const [tenantName, setTenantName] = useState<string>('');
  const [activityRight, setActivityRight] = useState<string>('');
  const [canManageAccessReq, setCanManageAccessReq] = useState<boolean>(false);
  // Assuming fetching of user data and rights, here we are just initializing some states for the sake of example
  useEffect(() => {
    // Placeholder for actual fetching logic
    setCurrentUser('Jane Doe');
    setTenantName('Company ABC');
    setActivityRight('Admin');
    setCanManageAccessReq(true);
  }, []);
  const handleUnauthorizedError = (message: string) => {
    setErrors(prevState => ({ ...prevState, unauthorized: message }));
  };
  return (
    <div className="container-fluid">
      <div antiforgerytoken=""></div>
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
              {/* Conditionally rendered based on activityRight */}
              {(activityRight === 'Admin' || activityRight === 'SuperAdmin') && (
                <>
                  <ps-menu-item label="Auditing" route="auditing" icon="fa-bars"></ps-menu-item>
                  <ps-menu-item label="Security" route="security" icon="fa-lock"></ps-menu-item>
                </>
              )}
              <ps-menu-item label="Exceptions" route="businessexception" icon="fa-exclamation-triangle"></ps-menu-item>
              {/* SuperAdmin exclusive items */}
              {activityRight === 'SuperAdmin' && (
                <ps-menu-item label="Utilities" route="confirmservicerequest" icon="fa-wrench"></ps-menu-item>
              )}
              {canManageAccessReq && (
                <ps-menu-item label="Access Request" route="AccessRequest" icon="fa-key"></ps-menu-item>
              )}
              <ps-menu-item label="Help" route="help" icon="fa-info-circle" onClick={() => window.alert('Help clicked')}></ps-menu-item>
            </ps-menu>
          </ps-framework>
        </div>
      )}
    </div>
  );
};
export default App;