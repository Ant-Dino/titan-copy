import React, { useState } from 'react';
import './App.css'; // Assuming App.css imports all required CSS

// TypeScript interfaces for props/state (if any more complex state is needed)
interface UserError {
    unauthorized?: string;
}

const App: React.FC = () => {
    const [currentUser, setCurrentUser] = useState<string>("");
    const [tenantName, setTenantName] = useState<string>("");
    const [activityRight, setActivityRight] = useState<string>("");
    const [errors, setErrors] = useState<UserError>({});
    const [canManageAccessReq, setCanManageAccessReq] = useState<boolean>(false);

    const OpenPopupWindow = (): void => {
        // Function to open pop-up windows or similar behavior
        console.log("Popup window opened");
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
                    {/* ps-framework and other components need to be created or replaced with equivalent React components */}
                    <div>
                        <div label="Home" route="dashboard" icon="fa-dashboard"></div>
                        <div label="Reporting" route="reporting" icon="fa-line-chart"></div>
                        <div label="Mapping Tables" route="Customermappings" icon="fa-cogs"></div>
                        {["Admin", "SuperAdmin"].includes(activityRight) && <div label="Auditing" route="auditing" icon="fa-bars"></div>}
                        <div label="Exceptions" route="businessexception" icon="fa-exclamation-triangle"></div>
                        {["Admin", "SuperAdmin"].includes(activityRight) && <div label="Security" route="security" icon="fa-lock"></div>}
                        {activityRight === 'SuperAdmin' && <div label="Utilities" route="confirmservicerequest" icon="fa-wrench"></div>}
                        {canManageAccessReq && <div label="Access Request" route="AccessRequest" icon="fa-key"></div>}
                        <div label="Help" route="help" icon="fa-info-circle" onClick={OpenPopupWindow}></div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default App;