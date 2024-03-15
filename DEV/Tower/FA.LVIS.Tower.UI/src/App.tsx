import React, { useState } from 'react';
import './App.css'; // Assuming your styles are in App.css
// Import relevant icons, components, and styles below
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Example for FontAwesome icons
// import { PsMenuItem } from './components/PsMenuItem'; // Assuming you have a component for menu items
const App: React.FC = () => {
  const [currentUser, setCurrentUser] = useState<string>('');
  const [tenantName, setTenantName] = useState<string>('');
  const [activityRight, setActivityRight] = useState<string>('');
  const [canManageAccessReq, setCanManageAccessReq] = useState<boolean>(false);
  const [errors, setErrors] = useState<{ unauthorized?: string }>({});
  const OpenPopupWindow = () => {
    // Implementation for opening a popup window
  };
  return (
    <div className="container-fluid">
      <div antiforgerytoken=""></div>
      {errors.unauthorized && (
        <div className="alert alert-danger">
          <div className="error"><i className="fa fa-lg fa-ban"> {errors.unauthorized}</i></div>
        </div>
      )}
      {!errors.unauthorized && (
        <div>
          {/* Placeholder for ps-framework component */}
          <ps-framework icon-file="images/FirstAmericanLogo.png" currentuser={currentUser} tenantname={tenantName}>
            {/* Assuming ps-menu and ps-menu-item components to be developed or used from a library */}
            <ps-menu>
              <PsMenuItem label="Home" route="dashboard" icon="fa-dashboard" />
              <PsMenuItem label="Reporting" route="reporting" icon="fa-line-chart" />
              <PsMenuItem label="Mapping Tables" route="Customermappings" icon="fa-cogs" />
              <PsMenuItem label="Auditing" route="auditing" icon="fa-bars" show={(activityRight === 'Admin') || (activityRight === 'SuperAdmin')} />
              <PsMenuItem label="Exceptions" route="businessexception" icon="fa-exclamation-triangle" />
              <PsMenuItem label="Security" route="security" icon="fa-lock" show={(activityRight === 'Admin') || (activityRight === 'SuperAdmin')} />
              <PsMenuItem label="Utilities" route="confirmservicerequest" icon="fa-wrench" show={activityRight === 'SuperAdmin'} />
              <PsMenuItem label="Access Request" route="AccessRequest" icon="fa-key" show={canManageAccessReq} />
              <PsMenuItem label="Help" route="help" icon="fa-info-circle" onClick={OpenPopupWindow} />
            </ps-menu>
          </ps-framework>
        </div>
      )}
    </div>
  );
};
export default App;