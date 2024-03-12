import React, { useState, useEffect } from 'react';

const App = () => {
  const [currentUser, setCurrentUser] = useState<string>('');
  const [tenantName, setTenantName] = useState<string>('');
  const [activityRight, setActivityRight] = useState<string>('');
  const [errors, setErrors] = useState<{ unauthorized: boolean }>({ unauthorized: false });
  const [canManageAccessReq, setCanManageAccessReq] = useState<boolean>(false);

  useEffect(() => {
    // Implement fetching logic here for currentUser, tenantName, activityRight, errors, etc.
    // Simulate fetching data
    setCurrentUser('John Doe');
    setTenantName('Tenant');
    setActivityRight('Admin');
    setErrors({ unauthorized: false });
    setCanManageAccessReq(true);
  }, []);

  const openPopupWindow = () => {
    // Logic to open a popup window
    console.log('Popup window opened');
  };

  return (
    <div className="container-fluid">
      <div antiforgerytoken></div>
      {errors.unauthorized ? (
        <div className="alert alert-danger">
          <div className="error"><i className="fa fa-lg fa-ban"> {errors.unauthorized}</i></div>
        </div>
      ) : (
        <div>
          <p>Icon here: <img src="images/FirstAmericanLogo.png" alt="Logo" /></p>
          <p>Current User: {currentUser}</p>
          <p>Tenant Name: {tenantName}</p>
          <div>
            <a href="/dashboard">Home <i className="fa fa-dashboard"></i></a>
            <a href="/reporting">Reporting <i className="fa fa-line-chart"></i></a>
            <a href="/Customermappings">Mapping Tables <i className="fa fa-cogs"></i></a>
            {(activityRight === 'Admin' || activityRight === 'SuperAdmin') && (
              <>
                <a href="/auditing">Auditing <i className="fa fa-bars"></i></a>
                <a href="/security">Security <i className="fa fa-lock"></i></a>
              </>
            )}
            <a href="/businessexception">Exceptions <i className="fa fa-exclamation-triangle"></i></a>
            {activityRight === 'SuperAdmin' && <a href="/confirmservicerequest">Utilities <i className="fa fa-wrench"></i></a>}
            {canManageAccessReq && <a href="/AccessRequest">Access Request <i className="fa fa-key"></i></a>}
            <a href="/help" onClick={openPopupWindow}>Help <i className="fa fa-info-circle"></i></a>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;