import React, { useState, useEffect } from 'react';

const App: React.FC = () => {
  const [currentUser, setCurrentUser] = useState<string | null>(null);
  const [tenantName, setTenantName] = useState<string | null>(null);
  const [errors, setErrors] = useState<{ unauthorized?: string }>({});
  const [activityRight, setActivityRight] = useState<string | null>(null);
  const [canManageAccessReq, setCanManageAccessReq] = useState<boolean>(false);

  // Simulating the fetching of user/rights data
  useEffect(() => {
    // Replace the following with actual API calls
    setCurrentUser("John Doe");
    setTenantName("Acme Corp");
    setActivityRight("Admin");
    setCanManageAccessReq(true);
  }, []);

  const openPopupWindow = () => {
    alert("Opening help...");
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
          <ps-framework icon-file="images/FirstAmericanLogo.png" currentuser={currentUser} tenantname={tenantName}>
            <ps-menu>
              <ps-menu-item label="Home" route="dashboard" icon="fa-dashboard"></ps-menu-item>
              <ps-menu-item label="Reporting" route="reporting" icon="fa-line-chart"></ps-menu-item>
              <ps-menu-item label="Mapping Tables" route="Customermappings" icon="fa-cogs"></ps-menu-item>
              <ps-menu-item label="Auditing" route="auditing" icon="fa-bars" show={(activityRight === 'Admin') || (activityRight === 'SuperAdmin')}></ps-menu-item>
              <ps-menu-item label="Exceptions" route="businessexception" icon="fa-exclamation-triangle"></ps-menu-item>
              <ps-menu-item label="Security" route="security" icon="fa-lock" show={(activityRight === 'Admin') || (activityRight === 'SuperAdmin')}></ps-menu-item>
              <ps-menu-item label="Utilities" route="confirmservicerequest" icon="fa-wrench" show={(activityRight === 'SuperAdmin')}></ps-menu-item>
              <ps-menu-item label="Access Request" route="AccessRequest" icon="fa-key" show={canManageAccessReq}></ps-menu-item>
              <ps-menu-item label="Help" route="help" icon="fa-info-circle" onClick={openPopupWindow}></ps-menu-item>
            </ps-menu>
          </ps-framework>
        </div>
      )}
    </div>
  );
};

export default App;