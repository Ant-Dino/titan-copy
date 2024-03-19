import React, { useState, useEffect } from 'react';
const TowerComponent: React.FC = () => {
  const [currentUser, setCurrentUser] = useState<string>('');
  const [tenantName, setTenantName] = useState<string>('');
  const [unauthorizedError, setUnauthorizedError] = useState<string>('');
  const [activityRight, setActivityRight] = useState<string>('');
  const [canManageAccessReq, setCanManageAccessReq] = useState<boolean>(false);
  // Mimicking the effect of fetching data or doing some initialization
  useEffect(() => {
    // These values would be fetched from your auth context or a global state/store
    setCurrentUser('JohnDoe');
    setTenantName('ExampleTenant');
    setUnauthorizedError(''); // Assuming no error by default
    setActivityRight('Admin'); // Could also be 'SuperAdmin' or any other role
    setCanManageAccessReq(true); // Assume the user can manage access requests
  }, []);
  const openPopupWindow = () => {
    console.log('Opening help popup...');
  };
  return (
    <div className="container-fluid">
      {unauthorizedError && (
        <div className="alert alert-danger">
          <div className="error"><i className="fa fa-lg fa-ban">{unauthorizedError}</i></div>
        </div>
      )}
      {!unauthorizedError && (
        <div>
          <div icon-file="images/FirstAmericanLogo.png" currentuser={currentUser} tenantname={tenantName}>
            <div>
              <div label="Home" route="dashboard" icon="fa-dashboard"></div>
              <div label="Reporting" route="reporting" icon="fa-line-chart"></div>
              <div label="Mapping Tables" route="Customermappings" icon="fa-cogs"></div>
              {["Admin", "SuperAdmin"].includes(activityRight) && <div label="Auditing" route="auditing" icon="fa-bars"></div>}
              <div label="Exceptions" route="businessexception" icon="fa-exclamation-triangle"></div>
              {["Admin", "SuperAdmin"].includes(activityRight) && <div label="Security" route="security" icon="fa-lock"></div>}
              {activityRight === 'SuperAdmin' && <div label="Utilities" route="confirmservicerequest" icon="fa-wrench"></div>}
              {canManageAccessReq && <div label="Access Request" route="AccessRequest" icon="fa-key"></div>}
              <div label="Help" route="help" icon="fa-info-circle" onClick={openPopupWindow}></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default TowerComponent;