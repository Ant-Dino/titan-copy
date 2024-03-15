import React, { useState, useEffect } from 'react';
export const App: React.FC = () => {
  const [errors, setErrors] = useState({ unauthorized: false });
  const [currentUser, setCurrentUser] = useState('');
  const [tenantName, setTenantName] = useState('');
  const [activityRight, setActivityRight] = useState('');
  const [canManageAccessReq, setCanManageAccessReq] = useState(false);
  useEffect(() => {
    // You might want to fetch the user data or any necessary data here.
    // setCurrentUser(), setTenantName(), setActivityRight(), setCanManageAccessReq()...
  }, []);
  // This function could be for opening help in a new window
  const openPopupWindow = () => {
    window.open('your-help-url', '_blank');
  };
  return (
    <div className="container-fluid">
      <div antiforgerytoken=""></div>
      {errors.unauthorized ? (
        <div className="alert alert-danger">
          <div className="error"><i className="fa fa-lg fa-ban"> {errors.unauthorized}</i></div>
        </div>
      ) : (
        <div>
         {/* ps-framework could be a custom component you've built */}
          <div icon-file="images/FirstAmericanLogo.png" currentuser={currentUser} tenantname={tenantName}>
            <div>
              <div label="Home" route="dashboard" icon="fa-dashboard"></div>
              <div label="Reporting" route="reporting" icon="fa-line-chart"></div>
              <div label="Mapping Tables" route="Customermappings" icon="fa-cogs"></div>
              <div label="Auditing" route="auditing" style={{ display: ((activityRight === 'Admin') || (activityRight === 'SuperAdmin')) ? 'block' : 'none' }} icon="fa-bars"></div>
              <div label="Exceptions" route="businessexception" icon="fa-exclamation-triangle"></div>
              <div label="Security" route="security" style={{ display: ((activityRight === 'Admin') || (activityRight === 'SuperAdmin')) ? 'block' : 'none' }} icon="fa-lock"></div>
              <div label="Utilities" route="confirmservicerequest" style={{ display: activityRight === 'SuperAdmin' ? 'block' : 'none' }} icon="fa-wrench"></div>
              <div label="Access Request" route="AccessRequest" style={{ display: canManageAccessReq ? 'block' : 'none' }} icon="fa-key"></div>
              <div label="Help" route="help" icon="fa-info-circle" onClick={openPopupWindow}></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default App;