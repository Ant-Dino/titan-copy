import React, { useState, useEffect } from 'react';

// Assuming types for your states (adapt as needed)
type ErrorState = {
  unauthorized: string;
};

type UserRights = 'Admin' | 'SuperAdmin' | 'User';

const App: React.FC = () => {
  const [errors, setErrors] = useState<ErrorState>({ unauthorized: '' });
  const [currentUser, setCurrentUser] = useState<string>('');
  const [tenantName, setTenantName] = useState<string>('');
  const [activityRight, setActivityRight] = useState<UserRights>('User');
  const [canManageAccessReq, setCanManageAccessReq] = useState<boolean>(false);

  // Simulate fetching data or any setup needed
  useEffect(() => {
    // Mock setting unauthorized error (adapt as needed)
    setErrors({ unauthorized: 'Unauthorized Access' });
    // Mock user data setup
    setCurrentUser('John Doe');
    setTenantName('Tenant Inc.');
    setActivityRight('Admin');
    setCanManageAccessReq(true);
  }, []);

  // Function to simulate opening a popup window (adapt as needed)
  const openPopupWindow = () => alert('Popup window opened!');

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
              {(activityRight === 'Admin' || activityRight === 'SuperAdmin') && <ps-menu-item label="Auditing" route="auditing" icon="fa-bars"></ps-menu-item>}
              <ps-menu-item label="Exceptions" route="businessexception" icon="fa-exclamation-triangle"></ps-menu-item>
              {(activityRight === 'Admin' || activityRight === 'SuperAdmin') && <ps-menu-item label="Security" route="security" icon="fa-lock"></ps-menu-item>}
              {activityRight === 'SuperAdmin' && <ps-menu-item label="Utilities" route="confirmservicerequest" icon="fa-wrench"></ps-menu-item>}
              {canManageAccessReq && <ps-menu-item label="Access Request" route="AccessRequest" icon="fa-key"></ps-menu-item>}
              <ps-menu-item label="Help" route="help" icon="fa-info-circle" onClick={openPopupWindow}></ps-menu-item>
            </ps-menu>
          </ps-framework>
        </div>
      )}
    </div>
  );
};

export default App;