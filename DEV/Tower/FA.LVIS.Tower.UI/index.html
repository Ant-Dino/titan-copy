import React, { useState, useEffect } from 'react';
import './App.css'; // Assuming you have a CSS file to import for React app similar to towercss
const App: React.FC = () => {
  const [currentUser, setCurrentUser] = useState<string>('');
  const [tenantName, setTenantName] = useState<string>('');
  const [activityRight, setActivityRight] = useState<string>('');
  const [canManageAccessReq, setCanManageAccessReq] = useState<boolean>(false);
  const [errors, setErrors] = useState<{ unauthorized?: string }>({});
  useEffect(() => {
    // Simulate fetching user data, rights, etc.
    // For demonstration, let's assume these values are fetched and updated
    setCurrentUser('John Doe');
    setTenantName('Company Inc.');
    setActivityRight('Admin');
    setCanManageAccessReq(true);
  }, []);
  const OpenPopupWindow = (): void => {
    // Functionality to open a popup window
    console.log('Popup window opened');
  };
  return (
    <div className="App">
      <div>
        {errors.unauthorized && (
          <div className="alert alert-danger">
            <div className="error"><i className="fa fa-lg fa-ban"> {errors.unauthorized}</i></div>
          </div>
        )}
      </div>
      <div>
        {!errors.unauthorized && (
          <div>
            {/* Assuming ps-framework, ps-menu, and ps-menu-item components are 
            replaced with equivalent React components */}
            <div iconFile="images/FirstAmericanLogo.png" currentUser={currentUser} tenantName={tenantName}>
              <div>
                <div label="Home" route="dashboard" icon="fa-dashboard"></div>
                <div label="Reporting" route="reporting" icon="fa-line-chart"></div>
                <div label="Mapping Tables" route="Customermappings" icon="fa-cogs"></div>
                {['Admin', 'SuperAdmin'].includes(activityRight) && <div label="Auditing" route="auditing" icon="fa-bars"></div>}
                <div label="Exceptions" route="businessexception" icon="fa-exclamation-triangle"></div>
                {['Admin', 'SuperAdmin'].includes(activityRight) && <div label="Security" route="security" icon="fa-lock"></div>}
                {activityRight === 'SuperAdmin' && <div label="Utilities" route="confirmservicerequest" icon="fa-wrench"></div>}
                {canManageAccessReq && <div label="Access Request" route="AccessRequest" icon="fa-key"></div>}
                <div label="Help" route="help" icon="fa-info-circle" onClick={OpenPopupWindow}></div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default App;