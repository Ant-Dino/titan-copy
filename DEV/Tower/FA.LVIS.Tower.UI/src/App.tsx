import React, { useState, useEffect } from 'react';
const Tower: React.FC = () => {
  const [currentUser, setCurrentUser] = useState('');
  const [tenantName, setTenantName] = useState('');
  const [activityRight, setActivityRight] = useState('');
  const [errors, setErrors] = useState<any>({ unauthorized: null });
  const [canManageAccessReq, setCanManageAccessReq] = useState(false);
  useEffect(() => {
    // Perform initialization and fetch user data, etc.
  }, []);
  const OpenPopupWindow = () => {
    // Define Popup Window Opening Logic
  };
  const hasAdminRights = () => {
    return activityRight === 'Admin' || activityRight === 'SuperAdmin';
  };
  return (
    <div className="container-fluid">
      <div antiforgerytoken></div>
      {errors.unauthorized ? (
        <div className="alert alert-danger">
          <div className="error"><i className="fa fa-lg fa-ban"> {errors.unauthorized}</i></div>
        </div>
      ) : (
        <div>
          <ps-framework icon-file="images/FirstAmericanLogo.png" currentuser={currentUser} tenantname={tenantName}>
            <ps-menu>
              <ps-menu-item label="Home" route="dashboard" icon="fa-dashboard"></ps-menu-item>
              <ps-menu-item label="Reporting" route="reporting" icon="fa-line-chart"></ps-menu-item>
              <ps-menu-item label="Mapping Tables" route="Customermappings" icon="fa-cogs"></ps-menu-item>
              <ps-menu-item label="Auditing" route="auditing" icon="fa-bars" show={hasAdminRights()}></ps-menu-item>
              <ps-menu-item label="Exceptions" route="businessexception" icon="fa-exclamation-triangle"></ps-menu-item>
              <ps-menu-item label="Security" route="security" icon="fa-lock" show={hasAdminRights()}></ps-menu-item>
              <ps-menu-item label="Utilities" route="confirmservicerequest" icon="fa-wrench" show={activityRight === 'SuperAdmin'}></ps-menu-item>
              <ps-menu-item label="Access Request" route="AccessRequest" icon="fa-key" show={canManageAccessReq}></ps-menu-item>
              <ps-menu-item label="Help" route="help" icon="fa-info-circle" onClick={OpenPopupWindow}></ps-menu-item>
            </ps-menu>
          </ps-framework>
        </div>
      )}
    </div>
  );
};
export default Tower;