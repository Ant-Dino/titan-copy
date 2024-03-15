import React, { useState, useEffect } from 'react';
const App: React.FC = () => {
  const [currentUser, setCurrentUser] = useState('');
  const [tenantName, setTenantName] = useState('');
  const [errors, setErrors] = useState({ unauthorized: false });
  const [activityRight, setActivityRight] = useState('');
  const [canManageAccessReq, setCanManageAccessReq] = useState(false);
  // This function would replace your AngularJS's ng-click functionality
  const openPopupWindow = () => {
    console.log("Opening Popup Window...");
  };
  useEffect(() => {
    // Fetch user data and rights here
    // Example set states
    setCurrentUser('John Doe');
    setTenantName('Acme Inc.');
    setErrors({...errors, unauthorized: false}); 
    setActivityRight('Admin');
    setCanManageAccessReq(true);
  }, []);
  return (
    <div className="container-fluid">
      {errors.unauthorized ? (
        <div className="alert alert-danger">
          <div className="error"><i className="fa fa-lg fa-ban"> {errors.unauthorized}</i>
        </div>
      ) : (
        <div>
          {/* Framework and Menu here, replace with your React components */}
          <div>
            {/* This should be replaced with React components structure for menu */}
            {/* For demonstration, it's just static now */}
            <div>Home</div>
            <div>Reporting</div>
            <div>Mapping Tables</div>
            <div>Auditing</div>
            <div>Exceptions</div>
            <div>Security</div>
            <div>Utilities</div>
            <div>Access Request</div>
            <div onClick={openPopupWindow}>Help</div>
          </div>
        </div>
      )}
    </div>
  );
};
export default App;