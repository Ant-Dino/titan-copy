import React, { useState } from 'react';
import './App.css'; // Assuming you have a global CSS file, or you could import specific styles

// Define an interface to type your component's props if necessary

// Define an interface for the menu item to help with TypeScript typing
interface MenuItemProps {
  label: string;
  route: string;
  icon: string;
  show?: boolean; // Optional, as not all menu items have this property
}

// A functional component for each Menu Item
const MenuItem: React.FC<MenuItemProps> = ({ label, route, icon, show = true }) => {
  if (!show) return null;

  return (
    <div className={`fa ${icon}`}>{label}</div> // Adjusted to a div for simplicity, replace with actual routing/link component
  );
}

// The main App component
const App: React.FC = () => {
  const [unauthorized, setUnauthorized] = useState(false); // Assuming some logic sets this
  const [currentUser, setCurrentUser] = useState('John Doe'); // Placeholder, replace with actual user logic
  const [tenantName, setTenantName] = useState('Tenant Name'); // Placeholder, replace with actual tenant logic
  const [activityRight, setActivityRight] = useState('Admin'); // Placeholder, replace with actual rights logic
  const [canManageAccessReq, setCanManageAccessReq] = useState(true); // Placeholder logic

  return (
    <div className="App container-fluid">
      {unauthorized && (
        <div className="alert alert-danger">
          <div className="error"><i className="fa fa-lg fa-ban"> Unauthorized </i></div>
        </div>
      )}

      {!unauthorized && (
        <div>
          <img src="images/FirstAmericanLogo.png" alt="Logo" />
          {/* Assuming ps-framework can be represented as divs here */}
          <div>
            <MenuItem label="Home" route="dashboard" icon="fa-dashboard"/>
            <MenuItem label="Reporting" route="reporting" icon="fa-line-chart"/>
            <MenuItem label="Mapping Tables" route="Customermappings" icon="fa-cogs"/>
            <MenuItem label="Auditing" route="auditing" icon="fa-bars" show={["Admin", "SuperAdmin"].includes(activityRight)}/>
            <MenuItem label="Exceptions" route="businessexception" icon="fa-exclamation-triangle"/>
            <MenuItem label="Security" route="security" icon="fa-lock" show={["Admin", "SuperAdmin"].includes(activityRight)}/>
            <MenuItem label="Utilities" route="confirmservicerequest" icon="fa-wrench" show={activityRight === 'SuperAdmin'}/>
            <MenuItem label="Access Request" route="AccessRequest" icon="fa-key" show={canManageAccessReq}/>
            <MenuItem label="Help" route="help" icon="fa-info-circle"/> {/* OpenPopupWindow function handling needs to be converted to React */}
          </div>
        </div>
      )}
    </div>
  );
};

export default App;