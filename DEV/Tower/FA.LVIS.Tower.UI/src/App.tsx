import React, { useState } from 'react';
const App: React.FC = () => {
  const [errors, setErrors] = useState({ unauthorized: false });
  const [currentuser, setCurrentUser] = useState('');
  const [tenantname, setTenantname] = useState('');
  const [activityright, setActivityRight] = useState('');
  const [canmanageaccessreq, setCanManageAccessReq] = useState(false);
  const OpenPopupWindow = () => {
    // Your code to open popup window
  };
  return (
    <div className="container-fluid">
      <div antiforgerytoken></div>
      {errors.unauthorized && (
        <div className="alert alert-danger">
          <div className="error"><i className="fa fa-lg fa-ban"> {errors.unauthorized}</i></div>
        </div>
      )}
      
      {!errors.unauthorized && (
        <div>
          {/* Placeholder for ps-framework equivalent in React */}
          <div>
            {/* Placeholder for menu items */}
            <div label="Home" route="dashboard" icon="fa-dashboard"></div>
            <div label="Reporting" route="reporting" icon="fa-line-chart"></div>
            <div label="Mapping Tables" route="Customermappings" icon="fa-cogs"></div>
            { (activityright === 'Admin' || activityright === 'SuperAdmin') && <div label="Auditing" route="auditing" icon="fa-bars"></div>}
            <div label="Exceptions" route="businessexception" icon="fa-exclamation-triangle"></div>
            { (activityright === 'Admin' || activityright === 'SuperAdmin') && <div label="Security" route="security" icon="fa-lock"></div>}
            {activityright === 'SuperAdmin' && <div label="Utilities" route="confirmservicerequest" icon="fa-wrench"></div>}
            {canmanageaccessreq && <div label="Access Request" route="AccessRequest" icon="fa-key"></div>}
            <div label="Help" route="help" icon="fa-info-circle" onClick={OpenPopupWindow}></div>
          </div>
        </div>
      )}
    </div>
  );
};
export default App;