import React, { useState, useEffect } from 'react';
import './App.css'; // Assume your CSS imports would be adapted here

const App: React.FC = () => {
  const [currentUser, setCurrentUser] = useState<string>('');
  const [tenantName, setTenantName] = useState<string>('');
  const [activityRight, setActivityRight] = useState<string>(''); 
  const [unauthorizedError, setUnauthorizedError] = useState<string>('');
  const [canManageAccessReq, setCanManageAccessReq] = useState<boolean>(false);

  // Simulating fetching data and setting state
  useEffect(() => {
    // Fetch and set state logic here
    // For example:
    setCurrentUser('John Doe');
    setTenantName('TenantName');
    setActivityRight('Admin');
    setUnauthorizedError('');
    setCanManageAccessReq(true);
  }, []);

  return (
    <div className="container-fluid">
      <div antiforgerytoken></div>
      {unauthorizedError && (
        <div className="alert alert-danger">
          <div className="error"><i className="fa fa-lg fa-ban"> {unauthorizedError}</i></div>
        </div>
      )}

      {!unauthorizedError && (
        <div>
          {/* Assuming ps-framework and other components are adapted into React components */}
          <PSFramework iconFile="images/FirstAmericanLogo.png" currentUser={currentUser} tenantName={tenantName}>
            <PSMenu>
              <PSMenuItem label="Home" route="dashboard" icon="fa-dashboard" />
              <PSMenuItem label="Reporting" route="reporting" icon="fa-line-chart" />
              <PSMenuItem label="Mapping Tables" route="Customermappings" icon="fa-cogs" />
              <PSMenuItem label="Auditing" route="auditing" 
                            show={(activityRight === 'Admin') || (activityRight === 'SuperAdmin')} icon="fa-bars" />
              <PSMenuItem label="Exceptions" route="businessexception" icon="fa-exclamation-triangle" />
              <PSMenuItem label="Security" route="security" 
                            show={(activityRight === 'Admin') || (activityRight === 'SuperAdmin')} icon="fa-lock" />
              <PSMenuItem label="Utilities" route="confirmservicerequest" 
                            show={(activityRight === 'SuperAdmin')} icon="fa-wrench" />
              <PSMenuItem label="Access Request" route="AccessRequest" 
                            show={canManageAccessReq} icon="fa-key" />
              <PSMenuItem label="Help" route="help" icon="fa-info-circle" onClick={() => {/* OpenPopupWindow logic here */}} />
            </PSMenu>
          </PSFramework>
        </div>
      )}
    </div>
  );
};

export default App;