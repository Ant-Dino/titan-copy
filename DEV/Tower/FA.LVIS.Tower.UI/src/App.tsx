import React, { useState, useEffect } from 'react';
// Importing required CSS and assets
import 'Content/bootstrap.min.css';
import 'Content/ui-grid.css';
import 'Content/font-awesome.min.css';
import 'towercss';
// Assuming custom React components for ps-framework and its children exist
import PSFramework from './components/PSFramework';
import PSMenuItem from './components/PSMenuItem';

const App: React.FC = () => {
  const [errors, setErrors] = useState<{ unauthorized?: string }>({});
  const [currentUser, setCurrentUser] = useState<string>('');
  const [tenantName, setTenantName] = useState<string>('');
  const [activityRight, setActivityRight] = useState<string>('');
  const [canManageAccessReq, setCanManageAccessReq] = useState<boolean>(false);

  useEffect(() => {
    // Placeholder for potential initial data fetching or setup
    // You might want to set the initial states based on fetched data here
  }, []);

  const OpenPopupWindow = () => {
    // Open popup window logic here
  };

  return (
    <div className="container-fluid">
      <div antiforgerytoken=""></div>
      {errors.unauthorized ? (
        <div className="alert alert-danger">
          <div className="error"><i className="fa fa-lg fa-ban">{errors.unauthorized}</i></div>
        </div>
      ) : (
        <PSFramework iconFile="images/FirstAmericanLogo.png" currentUser={currentUser} tenantName={tenantName}>
          <PSMenu>
            <PSMenuItem label="Home" route="dashboard" icon="fa-dashboard" />
            <PSMenuItem label="Reporting" route="reporting" icon="fa-line-chart" />
            <PSMenuItem label="Mapping Tables" route="Customermappings" icon="fa-cogs" />
            <PSMenuItem label="Auditing" route="auditing" show={(activityRight === 'Admin') || (activityRight === 'SuperAdmin')} icon="fa-bars" />
            <PSMenuItem label="Exceptions" route="businessexception" icon="fa-exclamation-triangle" />
            <PSMenuItem label="Security" route="security" show={(activityRight === 'Admin') || (activityRight === 'SuperAdmin')} icon="fa-lock" />
            <PSMenuItem label="Utilities" route="confirmservicerequest" show={activityRight === 'SuperAdmin'} icon="fa-wrench" />
            <PSMenuItem label="Access Request" route="AccessRequest" show={canManageAccessReq} icon="fa-key" />
            <PSMenuItem label="Help" route="help" icon="fa-info-circle" onClick={OpenPopupWindow} />
          </PSMenu>
        </PSFramework>
      )}
    </div>
  );
};

export default App;