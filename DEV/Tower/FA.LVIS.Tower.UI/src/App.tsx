import React, { useState, useEffect } from 'react';
import './App.css'; // Assuming the CSS from AngularJS has been adapted to React and renamed App.css
const App: React.FC = () => {
  const [currentUser, setCurrentUser] = useState<string | null>(null);
  const [tenantName, setTenantName] = useState<string | null>(null);
  const [activityRight, setActivityRight] = useState<string | null>(null);
  const [errors, setErrors] = useState<{ unauthorized?: string }>({});
  const [canManageAccessReq, setCanManageAccessReq] = useState<boolean>(false);
  useEffect(() => {
    // This should contain logic to determine current user, tenant name, activity rights, etc.
    // This example simply sets some placeholder values.
    setCurrentUser('Jane Doe');
    setTenantName('Tenant XYZ');
    setActivityRight('Admin');
    setCanManageAccessReq(true);
  }, []);
  const openPopupWindow = () => {
    // Logic to open a popup window
    console.log('Popup window opened!');
  };
  return (
    <div className="container-fluid">
      {/* AntiForgery token mechanism should be implemented differently in React, possibly as a header in your API requests. */}
      <div>{errors.unauthorized && (
        <div className="alert alert-danger">
          <div className="error"><i className="fa fa-lg fa-ban"> {errors.unauthorized}</i></div>
        </div>
      )}</div>

      {!errors.unauthorized && (
        <div>
          {/* ps-framework and other custom components need to be created or adapted to React */}
          {/* Placeholder component to represent ps-framework like structure */}
          <div iconFile="images/FirstAmericanLogo.png" currentUser={currentUser} tenantName={tenantName}>
            {/* Here you would map or implement your menu and menu-item components */}
            <div>
              <div label="Home" route="dashboard" icon="fa-dashboard"></div>
              <div label="Reporting" route="reporting" icon="fa-line-chart"></div>
              <div label="Mapping Tables" route="Customermappings" icon="fa-cogs"></div>
              {activityRight === 'Admin' || activityRight === 'SuperAdmin' ? (
                <div label="Auditing" route="auditing" icon="fa-bars"></div>
              ) : null}
              <div label="Exceptions" route="businessexception" icon="fa-exclamation-triangle"></div>
              {activityRight === 'Admin' || activityRight === 'SuperAdmin' ? (
                <div label="Security" route="security" icon="fa-lock"></div>
              ) : null}
              {activityRight === 'SuperAdmin' ? (
                <div label="Utilities" route="confirmservicerequest" icon="fa-wrench"></div>
              ) : null}
              {canManageAccessReq ? (
                <div label="Access Request" route="AccessRequest" icon="fa-key"></div>
              ) : null}
              <div label="Help" route="help" icon="fa-info-circle" onClick={openPopupWindow}></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default App;