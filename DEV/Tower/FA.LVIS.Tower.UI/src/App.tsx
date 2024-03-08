import React, { useState, useEffect } from 'react';

const App: React.FC = () => {
  const [currentUser, setCurrentUser] = useState<string>('');
  const [tenantName, setTenantName] = useState<string>('');
  const [activityRight, setActivityRight] = useState<string>('');
  const [unauthorizedError, setUnauthorizedError] = useState<string>('');
  const [canManageAccessReq, setCanManageAccessReq] = useState<boolean>(false);

  useEffect(() => {
    // Assume these functions fetch the required state from your application's backend or context
    // These implementations are placeholders and should be replaced
    setCurrentUser('Actual User');
    setTenantName('Tenant Name');
    setActivityRight('SuperAdmin');
    setUnauthorizedError('');
    setCanManageAccessReq(true);
  }, []);

  const openPopupWindow = () => {
    // Logic to open a popup window
  };

  return (
    <div className="container-fluid">
      <div antiforgerytoken="true"></div>
      {unauthorizedError && (
        <div className="alert alert-danger">
          <div className="error"><i className="fa fa-lg fa-ban"> {unauthorizedError}</i></div>
        </div>
      )}
      {!unauthorizedError && (
        <div>
          {/* Assuming ps-framework, ps-menu, ps-menu-item are components that you have or will create */}
          {/* This is a simplified version assuming icon-file, currentuser, tenantname translate directly to props */}
          <ps-framework icon-file="images/FirstAmericanLogo.png" currentuser={currentUser} tenantname={tenantName}>
            <ps-menu>
              <ps-menu-item label="Home" route="dashboard" icon="fa-dashboard"></ps-menu-item>
              <ps-menu-item label="Reporting" route="reporting" icon="fa-line-chart"></ps-menu-item>
              <ps-menu-item label="Mapping Tables" route="Customermappings" icon="fa-cogs"></ps-menu-item>
              <ps-menu-item label="Auditing" route="auditing" show={(activityRight === 'Admin') || (activityRight === 'SuperAdmin')} icon="fa-bars"></ps-menu-item>
              <ps-menu-item label="Exceptions" route="businessexception" icon="fa-exclamation-triangle"></ps-menu-item>
              <ps-menu-item label="Security" route="security" show={(activityRight === 'Admin') || (activityRight === 'SuperAdmin')} icon="fa-lock"></ps-menu-item>
              <ps-menu-item label="Utilities" route="confirmservicerequest" show={(activityRight === 'SuperAdmin')} icon="fa-wrench"></ps-menu-item>
              <ps-menu-item label="Access Request" route="AccessRequest" show={canManageAccessReq} icon="fa-key"></ps-menu-item>
              <ps-menu-item label="Help" route="help" icon="fa-info-circle" onClick={() => openPopupWindow()}></ps-menu-item>
            </ps-menu>
          </ps-framework>
        </div>
      )}
    </div>
  );
};

export default App;