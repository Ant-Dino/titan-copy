import React, { useState, useEffect } from 'react';
const App = () => {
  const [currentUser, setCurrentUser] = useState<string>('');
  const [tenantName, setTenantName] = useState<string>('');
  const [activityRight, setActivityRight] = useState<string>('');
  const [canManageAccessReq, setCanManageAccessReq] = useState<boolean>(false);
  const [errors, setErrors] = useState<{ unauthorized: string | null }>({ unauthorized: null });
  useEffect(() => {
    // Fetch user, tenant info, activity rights, etc. from API
    // This is a pseudo-code to simulate fetching data
    setCurrentUser("Example User");
    setTenantName("Example Tenant Name");
    setActivityRight("Admin"); // Example rights: 'Admin', 'SuperAdmin', or others
    setCanManageAccessReq(true);
    // Handle errors
    setErrors({ unauthorized: "Unauthorized access error message" }); // Example error
  }, []);
  const openPopupWindow = () => {
    // Logic to open popup window
    window.alert("Help Popup");
  };
  return (
    <div className="container-fluid">
      <div> {/* antiforgerytoken equivalent here if needed in React */}</div>
      {errors.unauthorized ? (
        <div className="alert alert-danger">
          <div className="error"><i className="fa fa-lg fa-ban"> {errors.unauthorized}</i></div>
        </div>
      ) : (
        <div>
          {/* Framework and menu components here. Adjust as per your component library or custom components. */}
          <div className="ps-framework">
            <img src="images/FirstAmericanLogo.png" alt="Logo" />
            <div className="current-user">{currentUser}</div>
            <div className="tenant-name">{tenantName}</div>
            <div className="ps-menu">
              <div className="ps-menu-item">Home</div>
              <div className="ps-menu-item">Reporting</div>
              <div className="ps-menu-item">Mapping Tables</div>
              {["Admin", "SuperAdmin"].includes(activityRight) && (
                <div className="ps-menu-item">Auditing</div>
              )}
              <div className="ps-menu-item">Exceptions</div>
              {["Admin", "SuperAdmin"].includes(activityRight) && (
                <div className="ps-menu-item">Security</div>
              )}
              {activityRight === 'SuperAdmin' && (
                <div className="ps-menu-item">Utilities</div>
              )}
              {canManageAccessReq && (
                <div className="ps-menu-item">Access Request</div>
              )}
              <div className="ps-menu-item" onClick={openPopupWindow}>Help</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default App;