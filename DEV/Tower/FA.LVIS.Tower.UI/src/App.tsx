import React, { useState } from 'react';
import './App.css'; // Assuming you have a general CSS file for App component
// Assuming 'ps-framework', 'ps-menu', and 'ps-menu-item' components would need to be created or imported for React version
// import { PsFramework, PsMenu, PsMenuItem } from './components/yourcomponentfolder';
const App: React.FC = () => {
  const [unauthorizedError, setUnauthorizedError] = useState<string | null>(null); // Example error state
  const [currentUser, setCurrentUser] = useState<string>(' ');
  const [tenantName, setTenantName] = useState<string>(' ');
  const [activityRight, setActivityRight] = useState<string>(' ');
  const [canManageAccessReq, setCanManageAccessReq] = useState<boolean>(false);
  
  // Handling of logic to show components based on rights or errors could be here
  // For demo reasons, we keep it straightforward
  
  return (
    <div className="App">
      {/* Simulation of antiforgerytoken placement */}
      <div></div>
      {unauthorizedError ? (
        <div className="alert alert-danger">
          <div className="error"><i className="fa fa-lg fa-ban">{unauthorizedError}</i></div>
        </div>
      ) : (
        <>
          <PsFramework iconFile="images/FirstAmericanLogo.png" currentUser={currentUser} tenantName={tenantName}>
            <PsMenu>
              <PsMenuItem label="Home" route="dashboard" icon="fa-dashboard"></PsMenuItem>
              <PsMenuItem label="Reporting" route="reporting" icon="fa-line-chart"></PsMenuItem>
              <PsMenuItem label="Mapping Tables" route="Customermappings" icon="fa-cogs"></PsMenuItem>
              <PsMenuItem label="Auditing" route="auditing" icon="fa-bars" isVisible={activityRight === 'Admin' || activityRight === 'SuperAdmin'}></PsMenuItem>
              <PsMenuItem label="Exceptions" route="businessexception" icon="fa-exclamation-triangle"></PsMenuItem>
              <PsMenuItem label="Security" route="security" icon="fa-lock" isVisible={activityRight === 'Admin' || activityRight === 'SuperAdmin'}></PsMenuItem>
              <PsMenuItem label="Utilities" route="confirmservicerequest" icon="fa-wrench" isVisible={activityRight === 'SuperAdmin'}></PsMenuItem>
              <PsMenuItem label="Access Request" route="AccessRequest" icon="fa-key" isVisible={canManageAccessReq}></PsMenuItem>
              <PsMenuItem label="Help" route="help" icon="fa-info-circle" onClick={() => console.log('OpenPopupWindow logic here')}></PsMenuItem>
            </PsMenu>
          </PsFramework>
        </>
      )}
    </div>
  );
}

export default App;