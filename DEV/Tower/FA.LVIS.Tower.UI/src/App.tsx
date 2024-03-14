import React, { useState, useEffect } from 'react';
const TowerApp: React.FC = () => {
  const [currentUser, setCurrentUser] = useState('');
  const [tenantName, setTenantName] = useState('');
  const [activityRight, setActivityRight] = useState('');
  const [canManageAccessReq, setCanManageAccessReq] = useState(false);
  const [errors, setErrors] = useState({ unauthorized: '' });
  // Supposedly here you would fetch your user, tenant, and rights data
  useEffect(() => {
    // Mocked fetch call to set state
    setCurrentUser('John Doe');
    setTenantName('ExampleTenant');
    setActivityRight('Admin');
    setCanManageAccessReq(true);
    // Assume there might be an unauthorized error to catch
    setErrors({ unauthorized: 'Unauthorized access detected.' });
  }, []);
  return (
    <>
      <div>
        {errors.unauthorized && (
          <div className="alert alert-danger">
            <div className="error"><i className="fa fa-lg fa-ban"> {errors.unauthorized}</i></div>
          </div>
        )}
      </div>
      <div>
        {!errors.unauthorized && (
          <>
            {/* Your converted framework structure from AngularJS to React would go here */}
            {/* This is a placeholder example to represent the structure change */}
            <div className="your-react-framework" iconFile="images/FirstAmericanLogo.png" currentUser={currentUser} tenantName={tenantName}>
              <div className="your-menu">
                <div className="menu-item" label="Home" route="dashboard" icon="fa-dashboard"></div>
                {/* More menu items would follow here */}
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
export default TowerApp;