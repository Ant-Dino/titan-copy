import React, { useState, useEffect } from 'react';
const App: React.FC = () => {
  const [currentUser, setCurrentUser] = useState<string>('');
  const [tenantName, setTenantName] = useState<string>('');
  const [unauthorizedError, setUnauthorizedError] = useState<string>('');
  const [activityRight, setActivityRight] = useState<string>('');
  const [canManageAccessReq, setCanManageAccessReq] = useState<boolean>(false);
  // Simulating fetching user and tenant data, as well as error and permissions
  useEffect(() => {
    // Fetch or compute values here
    setCurrentUser('John Doe');
    setTenantName('Example Tenant');
    setUnauthorizedError(''); // Assume there is no error
    setActivityRight('Admin');
    setCanManageAccessReq(true);
  }, []);
  return (
    <div className="container-fluid">
      {unauthorizedError ? (
        <div className="alert alert-danger">
          <div className="error"><i className="fa fa-lg fa-ban"> {unauthorizedError}</i></div>
        </div>
      ) : (
        <div>
          {/* ps-framework component could be a React Component */}
          {/* This assumes components like ps-menu, ps-menu-item, have been defined or will be. */}
          {/* Icons, labels, and routes can be mapped from a data structure. */}
          <div className="framework">
            <div className="menu">
              <div className="menu-item" icon="fa-dashboard">Home</div>
              <div className="menu-item" icon="fa-line-chart">Reporting</div>
              <div className="menu-item" icon="fa-cogs">Mapping Tables</div>
              {(activityRight === 'Admin' || activityRight === 'SuperAdmin') && (
                <div className="menu-item" icon="fa-bars">Auditing</div>
              )}
              <div className="menu-item" icon="fa-exclamation-triangle">Exceptions</div>
              {(activityRight === 'Admin' || activityRight === 'SuperAdmin') && (
                <div className="menu-item" icon="fa-lock">Security</div>
              )}
              {activityRight === 'SuperAdmin' && (
                <div className="menu-item" icon="fa-wrench">Utilities</div>
              )}
              {canManageAccessReq && (
                <div className="menu-item" icon="fa-key">Access Request</div>
              )}
              {/* Assuming OpenPopupWindow function to be defined */}
              <div className="menu-item" icon="fa-info-circle" onClick={() => console.log('Opening Help')}>Help</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default App;