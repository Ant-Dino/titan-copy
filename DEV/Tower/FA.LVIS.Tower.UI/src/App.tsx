import React, { useState, useEffect } from 'react';

// Import CSS files, if using CSS modules or similar approach adjust accordingly
import 'bootstrap/dist/css/bootstrap.min.css'; // Assuming these are installed via npm
import './Content/ui-grid.css';
import 'font-awesome/css/font-awesome.min.css';
import './Content/towercss.css';

// Assuming you have equivalent react components for ps-framework and ps-menu items or plan to create them
import PsFramework from './components/PsFramework';
import PsMenuItem from './components/PsMenuItem';

const App = () => {
  const [currentUser, setCurrentUser] = useState<string>('');
  const [tenantName, setTenantName] = useState<string>('');
  const [activityRight, setActivityRight] = useState<string>('User'); // default to 'User', adjust based on your auth logic
  const [canManageAccessReq, setCanManageAccessReq] = useState<boolean>(false);
  const [errors, setErrors] = useState<{ unauthorized?: string }>({});

  useEffect(() => {
    // Placeholder for auth logic or data fetching
    // e.g., set your state based on current user's rights, tenant info, etc.
    setCurrentUser("John Doe");
    setTenantName("My Tenant");
    setActivityRight("Admin"); // Example, adjust based on actual logic
    setCanManageAccessReq(true);
  }, []);

  const openPopupWindow = () => {
    // Placeholder for opening a popup window
    console.log("Opening popup window...");
  };

  return (
    <div className="container-fluid">
      {errors.unauthorized ? (
        <div className="alert alert-danger">
          <div className="error"><i className="fa fa-lg fa-ban"> {errors.unauthorized}</i></div>
        </div>
      ) : (
        <PsFramework iconFile="images/FirstAmericanLogo.png" currentUser={currentUser} tenantName={tenantName}>
          <PsMenuItem label="Home" route="dashboard" icon="fa-dashboard" />
          <PsMenuItem label="Reporting" route="reporting" icon="fa-line-chart" />
          <PsMenuItem label="Mapping Tables" route="Customermappings" icon="fa-cogs" />
          <PsMenuItem label="Auditing" route="auditing" icon="fa-bars" isVisible={(activityRight === 'Admin') || (activityRight === 'SuperAdmin')} />
          <PsMenuItem label="Exceptions" route="businessexception" icon="fa-exclamation-triangle" />
          <PsMenuItem label="Security" route="security" icon="fa-lock" isVisible={(activityRight === 'Admin') || (activityRight === 'SuperAdmin')} />
          <PsMenuItem label="Utilities" route="confirmservicerequest" icon="fa-wrench" isVisible={activityRight === 'SuperAdmin'} />
          <PsMenuItem label="Access Request" route="AccessRequest" icon="fa-key" isVisible={canManageAccessReq} />
          <PsMenuItem label="Help" route="help" icon="fa-info-circle" onClick={openPopupWindow} />
        </PsFramework>
      )}
    </div>
  );
};

export default App;