import React, { useState, useEffect } from 'react';
const App = () => {
  const [currentUser, setCurrentUser] = useState<string>('');
  const [tenantName, setTenantName] = useState<string>('');
  const [activityRight, setActivityRight] = useState<string>(''); // Assuming activity right is fetched from somewhere
  const [errors, setErrors] = useState<{ unauthorized?: string }>({});
  const [canManageAccessReq, setCanManageAccessReq] = useState<boolean>(false); // Assuming a method to determine this
  // Simulate fetching user details and rights, demonstration purpose only
  useEffect(() => {
    // Fetch user details and rights logic here
    setCurrentUser('John Doe');
    setTenantName('TenantXYZ');
    setActivityRight('Admin'); // Example right
    setCanManageAccessReq(true); // Example access management capability
  }, []);
  const OpenPopupWindow = () => {
    // Logic to open popup
    console.warn('OpenPopupWindow functionality should be implemented.');
  };
  return (
    <div className="container-fluid">
      <div></div> {/* antiforgerytoken placeholder */}
      {errors.unauthorized && (
        <div className="alert alert-danger">
          <div className="error"><i className="fa fa-lg fa-ban"> {errors.unauthorized}</i></div>
        </div>
      )}
      {!errors.unauthorized && (
        <div>
          {/* ps-framework equivalent in React */}
          <div iconFile="images/FirstAmericanLogo.png" currentUser={currentUser} tenantName={tenantName}>
            {/* ps-menu equivalent in React */}
            <ul>
              <li><a href="#dashboard"><i className="fa fa-dashboard"></i> Home</a></li>
              <li><a href="#reporting"><i className="fa fa-line-chart"></i> Reporting</a></li>
              <li><a href="#Customermappings"><i className="fa fa-cogs"></i> Mapping Tables</a></li>
              {(activityRight === 'Admin' || activityRight === 'SuperAdmin') && <li><a href="#auditing"><i className="fa fa-bars"></i> Auditing</a></li>}
              <li><a href="#businessexception"><i className="fa fa-exclamation-triangle"></i> Exceptions</a></li>
              {(activityRight === 'Admin' || activityRight === 'SuperAdmin') && <li><a href="#security"><i className="fa fa-lock"></i> Security</a></li>}
              {activityRight === 'SuperAdmin' && <li><a href="#confirmservicerequest"><i className="fa fa-wrench"></i> Utilities</a></li>}
              {canManageAccessReq && <li><a href="#AccessRequest"><i className="fa fa-key"></i> Access Request</a></li>}
              <li><a href="#help" onClick={OpenPopupWindow}><i className="fa fa-info-circle"></i> Help</a></li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};
export default App;