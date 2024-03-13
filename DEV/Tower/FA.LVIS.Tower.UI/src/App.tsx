import React, { useState, useEffect } from 'react';
import './Content/bootstrap.min.css';
import './Content/ui-grid.css';
import './Content/font-awesome.min.css';
import './towercss';
type MenuProps = {
  label: string;
  route: string;
  icon: string;
  activityRight?: string;
  canManageAccessReq?: boolean;
};
const MenuItem: React.FC<MenuProps> = ({ label, icon, activityRight, canManageAccessReq, route }) => {
  // Assuming OpenPopupWindow is a global function defined somewhere else or a function you will define in your component.
  const handleClick = () => {
    if (route === "help") {
      // OpenPopupWindow(); Uncomment this when the function is available
      console.log("OpenPopupWindow function should be called here");
    }
  };
  if (activityRight && !["Admin", "SuperAdmin"].includes(activityRight)) return null;
  if (route === "AccessRequest" && !canManageAccessReq) return null;
  return (
    <div onClick={handleClick}>
      <i className={`fa ${icon}`}/> {label}
    </div>
  );
const App: React.FC = () => {
  const [currentUser, setCurrentUser] = useState<string>("");
  const [tenantName, setTenantName] = useState<string>("");
  const [activityRight, setActivityRight] = useState<string>("");
  const [canManageAccessReq, setCanManageAccessReq] = useState<boolean>(false);
  const [unauthorizedError, setUnauthorizedError] = useState<string>("");
  // Placeholder for logic to determine currentUser, tenantName, etc.
  // For example, this could involve fetching data from a back-end API.
  useEffect(() => {
    // Fetch logic or other initializations here
    // Fake Initialization
    setCurrentUser("John Doe");
    setTenantName("Company XYZ");
    setActivityRight("Admin");
    setCanManageAccessReq(true);
    // Suppose unauthorizedError is fetched or determined by some logic
    // setUnauthorizedError("Your custom unauthorized error message");
  }, []);
  return (
    <div className="container-fluid">
      <div>This would be replaced by whatever your antiforgerytoken implementation in React is</div>
      {unauthorizedError && (
        <div className="alert alert-danger">
          <div className="error"><i className="fa fa-lg fa-ban"/> {unauthorizedError}</div>
        </div>
      )}
      {!unauthorizedError && (
        <div>
          {/* Assuming ps-framework, ps-menu, and ps-menu-item are components you'll need to create or mimic in React */}
          <div>
            {/* Menu items here, passing props as necessary */}
            <MenuItem label="Home" route="dashboard" icon="fa-dashboard" />
            <MenuItem label="Reporting" route="reporting" icon="fa-line-chart" />
            <MenuItem label="Mapping Tables" route="Customermappings" icon="fa-cogs" />
            <MenuItem label="Auditing" route="auditing" icon="fa-bars" activityRight={activityRight} />
            <MenuItem label="Exceptions" route="businessexception" icon="fa-exclamation-triangle" />
            <MenuItem label="Security" route="security" icon="fa-lock" activityRight={activityRight} />
            <MenuItem label="Utilities" route="confirmservicerequest" icon="fa-wrench" activityRight={activityRight} />
            <MenuItem label="Access Request" route="AccessRequest" icon="fa-key" canManageAccessReq={canManageAccessReq} />
            <MenuItem label="Help" route="help" icon="fa-info-circle" />
          </div>
        </div>
      )}
    </div>
  );
};
export default App;