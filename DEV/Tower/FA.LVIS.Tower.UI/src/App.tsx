import React, { useState, useEffect } from 'react';
const App: React.FC = () => {
  const [currentUser, setCurrentUser] = useState<string>('');
  const [tenantName, setTenantName] = useState<string>('');
  const [activityRight, setActivityRight] = useState<string>('');
  const [canManageAccessReq, setCanManageAccessReq] = useState<boolean>(false);
  const [unauthorizedError, setUnauthorizedError] = useState<string>('');
  useEffect(() => {
    // Logic to fetch user data, activity rights etc.
    // This is where you would typically fetch data from your server
    // and then set it to state variables like currentUser, tenantName, etc.
    // For demonstration, let's assume some dummy data:
    setCurrentUser('John Doe');
    setTenantName('Awesome Tenant');
    setActivityRight('Admin');
    setCanManageAccessReq(true);
    // Simulate an error to demonstrate conditional rendering
    // setUnauthorizedError('Unauthorized Access Detected');
  }, []);
  return (
    <div className="App">
      <div>
        {unauthorizedError ? (
          <div className="alert alert-danger">
            <div className="error"><i className="fa fa-lg fa-ban"> {unauthorizedError}</i></div>
          </div>
        ) : (
          <div className="container-fluid">
            <ps-framework icon-file="images/FirstAmericanLogo.png" currentuser={currentUser} tenantname={tenantName}>
              <ps-menu>
                <ps-menu-item label="Home" route="dashboard" icon="fa-dashboard"></ps-menu-item>
                <ps-menu-item label="Reporting" route="reporting" icon="fa-line-chart"></ps-menu-item>
                <ps-menu-item label="Mapping Tables" route="Customermappings" icon="fa-cogs"></ps-menu-item>
                <ps-menu-item label="Auditing" route="auditing" icon="fa-bars" show={(activityRight === 'Admin') || (activityRight === 'SuperAdmin')}></ps-menu-item>
                <ps-menu-item label="Exceptions" route="businessexception" icon="fa-exclamation-triangle"></ps-menu-item>
                <ps-menu-item label="Security" route="security" icon="fa-lock" show={(activityRight === 'Admin') || (activityRight === 'SuperAdmin')}></ps-menu-item>
                <ps-menu-item label="Utilities" route="confirmservicerequest" icon="fa-wrench" show={(activityRight === 'SuperAdmin') }></ps-menu-item>
                <ps-menu-item label="Access Request" route="AccessRequest" icon="fa-key" show={canManageAccessReq}></ps-menu-item>
                <ps-menu-item label="Help" route="help" icon="fa-info-circle" onClick={() => alert('Help clicked')}></ps-menu-item>
              </ps-menu>
            </ps-framework>
          </div>
        )}
      </div>
    </div>
  );
};
export default App;