import React, { useState } from 'react';
import './App.css'; // Assume your CSS is now in App.css
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Assuming font-awesome is replaced with its npm package
// Import other required CSS or components here
const App: React.FC = () => {
    const [currentUser, setCurrentUser] = useState<string>('');
    const [tenantName, setTenantName] = useState<string>('');
    const [activityRight, setActivityRight] = useState<string>('');
    const [canManageAccessReq, setCanManageAccessReq] = useState<boolean>(false);
    const [errors, setErrors] = useState<{ unauthorized?: string }>({});
    const openPopupWindow = () => {
        // Implementation for the popup window
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
                    {/* ps-framework and other AngularJS specific components need to be converted or replaced by equivalent React components */}
                    <div iconFile="images/FirstAmericanLogo.png" currentUser={currentUser} tenantName={tenantName}>
                        {/* The menu component and items will depend on how you decide to implement or replace the ps-menu and ps-menu-item components in React */}
                        <div label="Home" route="dashboard" icon="fa-dashboard"></div>
                        <div label="Reporting" route="reporting" icon="fa-line-chart"></div>
                        <div label="Mapping Tables" route="Customermappings" icon="fa-cogs"></div>
                        {["Admin", "SuperAdmin"].includes(activityRight) && (<div label="Auditing" route="auditing" icon="fa-bars"></div>)}
                        <div label="Exceptions" route="businessexception" icon="fa-exclamation-triangle"></div>
                        {["Admin", "SuperAdmin"].includes(activityRight) && (<div label="Security" route="security" icon="fa-lock"></div>)}
                        {activityRight === 'SuperAdmin' && (<div label="Utilities" route="confirmservicerequest" icon="fa-wrench"></div>)}
                        {canManageAccessReq && (<div label="Access Request" route="AccessRequest" icon="fa-key"></div>)}
                        <div label="Help" route="help" icon="fa-info-circle" onClick={openPopupWindow}></div>
                    </div>
                </div>
            )}
        </div>
    );
};
export default App;