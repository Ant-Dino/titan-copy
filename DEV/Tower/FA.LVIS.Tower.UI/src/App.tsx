import React, { useState, useEffect } from 'react';
import './Content/bootstrap.min.css';
import './Content/ui-grid.css';
import './Content/font-awesome.min.css';
import './towercss.css'; // Assuming you have renamed your CSS file
// You'll need to handle scripts differently in React, possibly moving functionality into components
const App = () => {
  const [currentUser, setCurrentUser] = useState('');
  const [tenantName, setTenantName] = useState('');
  const [activityRight, setActivityRight] = useState('');
  const [errors, setErrors] = useState({ unauthorized: false });
  const [canManageAccessReq, setCanManageAccessReq] = useState(false);
  // Mimic fetching user data and settings, replace with actual data fetching
  useEffect(() => {
    // Fake API responses
    setCurrentUser('John Doe');
    setTenantName('Example Tenant');
    setActivityRight('Admin'); // Values might be 'Admin', 'SuperAdmin', or others based on your app's roles
    setErrors({ unauthorized: false });
    setCanManageAccessReq(true);
    // Include cleanup if needed
  }, []);
  const OpenPopupWindow = () => {
    // Handle opening of popup window
    alert("Popup window opened");
  };
  return (
    <div className="container-fluid">
      <div antiforgerytoken></div>
      {errors.unauthorized ?
        <div className="alert alert-danger">
          <div className="error"><i className="fa fa-lg fa-ban"> {errors.unauthorized}</i></div>
        </div>
        :
        <div>
          {/* This will need to be a custom React component */}
          <ps-framework icon-file="images/FirstAmericanLogo.png" currentuser={currentUser} tenantname={tenantName}>
            <ps-menu>
              <ps-menu-item label="Home" route="dashboard" icon="fa-dashboard"></ps-menu-item>
              <ps-menu-item label="Reporting" route="reporting" icon="fa-line-chart"></ps-menu-item>
              <ps-menu-item label="Mapping Tables" route="Customermappings" icon="fa-cogs"></ps-menu-item>
              {(activityRight === 'Admin' || activityRight === 'SuperAdmin') &&
                <ps-menu-item label="Auditing" route="auditing" icon="fa-bars"></ps-menu-item>
              }
              <ps-menu-item label="Exceptions" route="businessexception" icon="fa-exclamation-triangle"></ps-menu-item>
              {(activityRight === 'Admin' || activityRight === 'SuperAdmin') &&
                <ps-menu-item label="Security" route="security" icon="fa-lock"></ps-menu-item>
              }
              {activityRight === 'SuperAdmin' &&
                <ps-menu-item label="Utilities" route="confirmservicerequest" icon="fa-wrench"></ps-menu-item>
              }
              {canManageAccessReq &&
                <ps-menu-item label="Access Request" route="AccessRequest" icon="fa-key"></ps-menu-item>
              }
              <ps-menu-item label="Help" route="help" icon="fa-info-circle" onClick={OpenPopupWindow}></ps-menu-item>
            </ps-menu>
          </ps-framework>
        </div>
      }
    </div>
  );
};
export default App;