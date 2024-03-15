tsx
import React, { useState, useEffect } from 'react';

const App: React.FC = () => {
  // Placeholder for actual authentication and authorization logic
  const [currentUser, setCurrentUser] = useState<string | null>(null);
  const [tenantName, setTenantName] = useState<string | null>(null);
  const [activityRight, setActivityRight] = useState<string | null>(null);
  const [unauthorizedError, setUnauthorizedError] = useState<string | null>(null);
  const [canManageAccessReq, setCanManageAccessReq] = useState<boolean>(false);

  // Simulating fetching user data and rights
  useEffect(() => {
    // Placeholder for actual fetch/login logic
    setCurrentUser('John Doe');
    setTenantName('Acme Corp');
    setActivityRight('Admin');
    setUnauthorizedError(null);
    setCanManageAccessReq(true);
  }, []);

  return (
    <div className="container-fluid">
      {unauthorizedError ? (
        <div className="alert alert-danger">
          <div className="error">
            <i className="fa fa-lg fa-ban">{` ${unauthorizedError}`}</i>
          </div>
        </div>
      ) : (
        <>
          <div antiforgerytoken=""></div>
          <ps-framework icon-file="images/FirstAmericanLogo.png" currentuser={`${currentUser}`} tenantname={`${tenantName}`}>
            <ps-menu>
              <ps-menu-item label="Home" route="dashboard" icon="fa-dashboard"></ps-menu-item>
              <ps-menu-item label="Reporting" route="reporting" icon="fa-line-chart"></ps-menu-item>
              <ps-menu-item label="Mapping Tables" route="Customermappings" icon="fa-cogs"></ps-menu-item>
              {(activityRight === 'Admin' || activityRight === 'SuperAdmin') && (
                <>
                  <ps-menu-item label="Auditing" route="auditing" icon="fa-bars"></ps-menu-item>
                  <ps-menu-item label="Security" route="security" icon="fa-lock"></ps-menu-item>
                </>
              )}
              <ps-menu-item label="Exceptions" route="businessexception" icon="fa-exclamation-triangle"></ps-menu-item>
              {activityRight === 'SuperAdmin' && (
                <ps-menu-item label="Utilities" route="confirmservicerequest" icon="fa-wrench"></ps-menu-item>
              )}
              {canManageAccessReq && (
                <ps-menu-item label="Access Request" route="AccessRequest" icon="fa-key"></ps-menu-item>
              )}
              <ps-menu-item label="Help" route="help" icon="fa-info-circle" onClick={() => alert('Open help popup window here.')}></ps-menu-item>
            </ps-menu>
          </ps-framework>
        </>
      )}
    </div>
  );
};

export default App;
