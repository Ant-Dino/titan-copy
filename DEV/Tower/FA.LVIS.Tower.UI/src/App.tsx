import React, { useState, useEffect } from 'react';

const App = () => {
  const [currentUser, setCurrentUser] = useState<string>('');
  const [tenantName, setTenantName] = useState<string>('');
  const [UnauthorizedError, setUnauthorizedError] = useState<boolean>(false);
  const [ActivityRight, setActivityRight] = useState<string>('');
  const [CanManageAccessReq, setCanManageAccessReq] = useState<boolean>(false);

  useEffect(() => {
    // Fetch User, Tenant, Rights etc. from API or Context
    // Assuming these are async functions 
    const fetchUserDetails = async () => {
      // Placeholder for fetching logic
      setCurrentUser('User Name');
      setTenantName('Tenant Name');
      setUnauthorizedError(false); // Assume initially there's no Unauthorized Error
      setActivityRight('Admin'); // Example: Admin, SuperAdmin, etc.
      setCanManageAccessReq(true); // Placeholder for actual logic to set the ability
    };
    fetchUserDetails();
  }, []);

  const openPopupWindow = () => {
    // Placeholder for your popup window function
    console.log('Popup window opened');
  };

  return (
    <div className="container-fluid">
      {UnauthorizedError ? (
        <div className="alert alert-danger">
          <div className="error"><i className="fa fa-lg fa-ban"> Unauthorized Access </i></div>
        </div>
      ) : (
        <div>
          {/* Assuming ps-framework and ps-menu are components you will adapt or create */}
          <ps-framework icon-file="images/FirstAmericanLogo.png" currentuser={currentUser} tenantname={tenantName}>
            <ps-menu>
              <ps-menu-item label="Home" route="dashboard" icon="fa-dashboard"></ps-menu-item>
              <ps-menu-item label="Reporting" route="reporting" icon="fa-line-chart"></ps-menu-item>
              <ps-menu-item label="Mapping Tables" route="Customermappings" icon="fa-cogs"></ps-menu-item>
              <ps-menu-item label="Auditing" route="auditing" icon="fa-bars" show={(ActivityRight === 'Admin') || (ActivityRight === 'SuperAdmin')}></ps-menu-item>
              <ps-menu-item label="Exceptions" route="businessexception" icon="fa-exclamation-triangle"></ps-menu-item>
              <ps-menu-item label="Security" route="security" icon="fa-lock" show={(ActivityRight === 'Admin') || (ActivityRight === 'SuperAdmin')}></ps-menu-item>
              <ps-menu-item label="Utilities" route="confirmservicerequest" icon="fa-wrench" show={(ActivityRight === 'SuperAdmin')} ></ps-menu-item>
              <ps-menu-item label="Access Request" route="AccessRequest" icon="fa-key" show={CanManageAccessReq}></ps-menu-item>
              <ps-menu-item label="Help" route="help" icon="fa-info-circle" onClick={openPopupWindow}></ps-menu-item>
            </ps-menu>
          </ps-framework>
        </div>
      )}
    </div>
  );
};

export default App;