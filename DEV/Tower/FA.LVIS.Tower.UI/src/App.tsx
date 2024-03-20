import React, { useState, useEffect } from 'react';
const App = () => {
  const [unauthorized, setUnauthorized] = useState(false);
  const [currentuser, setCurrentuser] = useState('');
  const [tenantname, setTenantname] = useState('');
  const [activityright, setActivityright] = useState('');
  const [canmanageaccessreq, setCanmanageaccessreq] = useState(false);
  // Placeholder for any logic to determine the state variables like `unauthorized`, `currentuser`, etc.
  return (
    <>
      <div>
        {unauthorized ? (
          <div className="alert alert-danger">
            <div className="error"><i className="fa fa-lg fa-ban"> Unauthorized Access </i></div>
          </div>
        ) : (
          <div>
            {/* Assuming ps-framework and related components would be already defined or replaced accordingly */}
            <ps-framework icon-file="images/FirstAmericanLogo.png" currentuser={currentuser} tenantname={tenantname}>
              <ps-menu>
                <ps-menu-item label="Home" route="dashboard" icon="fa-dashboard"></ps-menu-item>
                <ps-menu-item label="Reporting" route="reporting" icon="fa-line-chart"></ps-menu-item>
                <ps-menu-item label="Mapping Tables" route="Customermappings" icon="fa-cogs"></ps-menu-item>
                {(activityright === 'Admin' || activityright === 'SuperAdmin') && (
                  <ps-menu-item label="Auditing" route="auditing" icon="fa-bars"></ps-menu-item>
                )}
                <ps-menu-item label="Exceptions" route="businessexception" icon="fa-exclamation-triangle"></ps-menu-item>
                {(activityright === 'Admin' || activityright === 'SuperAdmin') && (
                  <ps-menu-item label="Security" route="security" icon="fa-lock"></ps-menu-item>
                )}
                {activityright === 'SuperAdmin' && (
                  <ps-menu-item label="Utilities" route="confirmservicerequest" icon="fa-wrench"></ps-menu-item>
                )}
                {canmanageaccessreq && (
                  <ps-menu-item label="Access Request" route="AccessRequest" icon="fa-key"></ps-menu-item>
                )}
                <ps-menu-item label="Help" route="help" icon="fa-info-circle" onClick={() => { /* OpenPopupWindow logic */ }}></ps-menu-item>
              </ps-menu>
            </ps-framework>
          </div>
        )}
      </div>
    </>
  );
}
export default App;