import React, { useState, useEffect } from 'react';
import "./Content/bootstrap.min.css";
import "./Content/ui-grid.css";
import "./Content/font-awesome.min.css";
import "./towercss.css";
// Assuming "towerjqscripts", "towerangularscripts", "towerscripts", "towersubmenuscripts" are either
// converted to React compatible scripts or their functionalities are implemented in React
const App = () => {
  const [currentUser, setCurrentUser] = useState<string>('');
  const [tenantName, setTenantName] = useState<string>('');
  const [activityRight, setActivityRight] = useState<string>('');
  const [errors, setErrors] = useState<{ unauthorized: string }>({ unauthorized: '' });
  const [canManageAccessReq, setCanManageAccessReq] = useState<boolean>(false);
  useEffect(() => {
    // Mockup for fetching data or any initial setup previously handled by AngularJS controller
    // Replace with actual fetching logic
    setCurrentUser("Mock User");
    setTenantName("Mock Tenant");
    setActivityRight("Admin");
    setCanManageAccessReq(true);
  }, []);
  const openPopupWindow = () => {
    // Replace this with actual popup window logic
    console.log("Popup window opened");
  };
  return (
    <div className="container-fluid">
      <div antiforgerytoken></div>
      {errors.unauthorized && (
        <div className="alert alert-danger">
          <div className="error"><i className="fa fa-lg fa-ban"> {errors.unauthorized}</i></div>
        </div>
      )}
      {!errors.unauthorized && (
        <div>
          {/* ps-framework replaced with div, implement as a component for actual use */}
          <div icon-file="images/FirstAmericanLogo.png" currentuser={currentUser} tenantname={tenantName}>
            {/* Assuming ps-menu and ps-menu-item are custom made React components */}
            <div>
              <div label="Home" route="dashboard" icon="fa-dashboard"></div>
              <div label="Reporting" route="reporting" icon="fa-line-chart"></div>
              <div label="Mapping Tables" route="Customermappings" icon="fa-cogs"></div>
              {(activityRight === 'Admin' || activityRight === 'SuperAdmin') && <div label="Auditing" route="auditing" icon="fa-bars"></div>}
              <div label="Exceptions" route="businessexception" icon="fa-exclamation-triangle"></div>
              {(activityRight === 'Admin' || activityRight === 'SuperAdmin') && <div label="Security" route="security" icon="fa-lock"></div>}
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
export default App;