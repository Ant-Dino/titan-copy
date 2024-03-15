import React, { useState, useEffect } from 'react';

export const App: React.FC = () => {
  const [currentUser, setCurrentUser] = useState('');
  const [tenantName, setTenantName] = useState('');
  const [activityRight, setActivityRight] = useState('');
  const [canManageAccessReq, setCanManageAccessReq] = useState(false);
  const [errors, setErrors] = useState({ unauthorized: false });

  useEffect(() => {
    // Mimic fetching user and tenant name
    setCurrentUser('User Name');
    setTenantName('Tenant Name');
    // Mimic fetching rights
    setActivityRight('Admin');
    setCanManageAccessReq(true);
    // Mimic error state
    setErrors({ unauthorized: false });
  }, []);

  const OpenPopupWindow = () => {
    window.alert('Help Pop-up!');
  };

  return (
    <div className="container-fluid">
      {errors.unauthorized ? (
        <div className="alert alert-danger">
          <div className="error"><i className="fa fa-lg fa-ban"></i> {errors.unauthorized}</div>
        </div>
      ) : (
        <div>
          {/* You can replace img src with 'images/FirstAmericanLogo.png' to use actual image path */}
          <div icon-file="images/FirstAmericanLogo.png" currentuser={currentUser} tenantname={tenantName}>
            <div>
              <div label="Home" route="dashboard" icon="fa-dashboard"></div>
              <div label="Reporting" route="reporting" icon="fa-line-chart"></div>
              <div label="Mapping Tables" route="Customermappings" icon="fa-cogs"></div>
              {(activityRight === 'Admin' || activityRight === 'SuperAdmin') && (
                <>
                  <div label="Auditing" route="auditing" icon="fa-bars"></div>
                  <div label="Security" route="security" icon="fa-lock"></div>
                  <div label="Utilities" route="confirmservicerequest" icon="fa-wrench"></div>
                </>
              )}
              <div label="Exceptions" route="businessexception" icon="fa-exclamation-triangle"></div>
              {canManageAccessReq && <div label="Access Request" route="AccessRequest" icon="fa-key"></div>}
              <div label="Help" route="help" icon="fa-info-circle" onClick={OpenPopupWindow}></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};