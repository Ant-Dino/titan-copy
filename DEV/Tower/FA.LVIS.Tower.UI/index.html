import React, { useState, useEffect } from 'react';
const App = () => {
  const [currentUser, setCurrentUser] = useState('');
  const [tenantName, setTenantName] = useState('');
  const [activityRight, setActivityRight] = useState('');
  const [canManageAccessReq, setCanManageAccessReq] = useState(false);
  const [errors, setErrors] = useState({ unauthorized: false });
  // Simulate fetching user data and permissions
  useEffect(() => {
    // Fetch user info here and set states accordingly
    // This is a placeholder for actual data fetching logic
    setCurrentUser('User Name');
    setTenantName('Tenant Name');
    setActivityRight('Admin');
    setCanManageAccessReq(true);
    setErrors({ unauthorized: false }); // Assume no errors initially
  }, []);
  const openPopupWindow = () => {
    // Placeholder for function to open popup window
    console.log("Popup window opened");
  };
  return (
    <div className="container-fluid">
      <div antiforgerytoken></div>
      <div className={errors.unauthorized ? 'd-none' : ''}>
        <div>
          {/* This component needs to be created according to your needs */}
          <ps-framework icon-file="images/FirstAmericanLogo.png" currentuser={currentUser} tenantname={tenantName}>
            <ps-menu>
              <ps-menu-item label="Home" route="dashboard" icon="fa-dashboard"></ps-menu-item>
              <ps-menu-item label="Reporting" route="reporting" icon="fa-line-chart"></ps-menu-item>
              <ps-menu-item label="Mapping Tables" route="Customermappings" icon="fa-cogs"></ps-menu-item>
              {['Admin', 'SuperAdmin'].includes(activityRight) && (
                <ps-menu-item label="Auditing" route="auditing" icon="fa-bars"></ps-menu-item>
              )}
              <ps-menu-item label="Exceptions" route="businessexception" icon="fa-exclamation-triangle"></ps-menu-item>
              {['Admin', 'SuperAdmin'].includes(activityRight) && (
                <ps-menu-item label="Security" route="security" icon="fa-lock"></ps-menu-item>
              )}
              {activityRight === 'SuperAdmin' && (
                <ps-menu-item label="Utilities" route="confirmservicerequest" icon="fa-wrench"></ps-menu-item>
              )}
              {canManageAccessReq && (
                <ps-menu-item label="Access Request" route="AccessRequest" icon="fa-key"></ps-menu-item>
              )}
              <ps-menu-item label="Help" route="help" icon="fa-info-circle" onClick={openPopupWindow}></ps-menu-item>
            </ps-menu>
          </ps-framework>
        </div>
      </div>
      {errors.unauthorized && (
        <div className="alert alert-danger">
          <div className="error"><i className="fa fa-lg fa-ban"> {errors.unauthorized}</i></div>
        </div>
      )}
    </div>
  );
}
export default App;