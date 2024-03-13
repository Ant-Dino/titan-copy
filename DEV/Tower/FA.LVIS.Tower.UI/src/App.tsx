import React, { useState, useEffect } from 'react';
const App = () => {
  const [errors, setErrors] = useState({ unauthorized: false });
  const [currentuser, setCurrentuser] = useState('');
  const [tenantname, setTenantname] = useState('');
  const [activityright, setActivityright] = useState('');
  const [canmanageaccessreq, setCanmanageaccessreq] = useState(false);
  // Function to simulate fetching user data and rights
  useEffect(() => {
    // Here you should fetch user data from your backend and then set the state accordingly.
    // This is a simulation of fetching user data and settings.
    setCurrentuser('User Name');
    setTenantname('Tenant Name');
    setActivityright('Admin'); // Or 'SuperAdmin', 'User', etc.
    setCanmanageaccessreq(true);
    // Handle errors if any during fetching
    // setErrors({ unauthorized: true }); To simulate unauthorized error
  }, []);
  // Placeholder function for opening pop-up which was triggered by ng-click in AngularJS example
  const openPopupWindow = () => {
    console.log('Opening popup window...');
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
          <ps-framework icon-file="images/FirstAmericanLogo.png" currentuser={currentuser} tenantname={tenantname}>
            <ps-menu>
              <ps-menu-item label="Home" route="dashboard" icon="fa-dashboard"></ps-menu-item>
              <ps-menu-item label="Reporting" route="reporting" icon="fa-line-chart"></ps-menu-item>
              <ps-menu-item label="Mapping Tables" route="Customermappings" icon="fa-cogs"></ps-menu-item>
              <ps-menu-item label="Auditing" route="auditing" icon="fa-bars" show={(activityright === 'Admin') || (activityright === 'SuperAdmin')}></ps-menu-item>
              <ps-menu-item label="Exceptions" route="businessexception" icon="fa-exclamation-triangle"></ps-menu-item>
              <ps-menu-item label="Security" route="security" icon="fa-lock" show={(activityright === 'Admin') || (activityright === 'SuperAdmin')}></ps-menu-item>
              <ps-menu-item label="Utilities" route="confirmservicerequest" icon="fa-wrench" show={activityright === 'SuperAdmin'}></ps-menu-item>
              <ps-menu-item label="Access Request" route="AccessRequest" icon="fa-key" show={canmanageaccessreq}></ps-menu-item>
              <ps-menu-item label="Help" route="help" icon="fa-info-circle" onClick={openPopupWindow}></ps-menu-item>
            </ps-menu>
          </ps-framework>
        </div>
      )}
    </div>
  );
};
export default App;