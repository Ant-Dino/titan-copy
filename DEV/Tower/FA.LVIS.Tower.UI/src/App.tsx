import React, { useState, useEffect } from 'react';
import './App.css'; // Assume this is the CSS file that includes all the required styles

// Assuming App is your main component
const App: React.FC = () => {
    const [currentUser, setCurrentUser] = useState<string>('');
    const [tenantName, setTenantName] = useState<string>('');
    const [activityRight, setActivityRight] = useState<string>('');
    const [errors, setErrors] = useState<{ unauthorized?: string }>({});
    const [canManageAccessReq, setCanManageAccessReq] = useState<boolean>(false);

    // Simulate fetching user data and permissions
    useEffect(() => {
        // Fetch logic here
        // Example static assignment for demonstration
        setCurrentUser('John Doe');
        setTenantName('Example Tenant');
        setActivityRight('Admin');
        setCanManageAccessReq(true);
        setErrors({ unauthorized: 'Unauthorized Access Detected' }); // Example error
    }, []);

    const openPopupWindow = () => {
        // Function to open help popup
        alert("Help Popup!");
    };

    return (
        <div className="container-fluid">
            <div>{/* AntiforgeryToken placeholder */}</div>
            {errors.unauthorized ? (
                <div className="alert alert-danger">
                    <div className="error"><i className="fa fa-lg fa-ban">{errors.unauthorized}</i></div>
                </div>
            ) : (
                <div>
                    {/* ps-framework component placeholder */}
                    <div className="ps-menu">
                        <div className="ps-menu-item" label="Home" route="dashboard" icon="fa-dashboard">Home</div>
                        <div className="ps-menu-item" label="Reporting" route="reporting" icon="fa-line-chart">Reporting</div>
                        <div className="ps-menu-item" label="Mapping Tables" route="Customermappings" icon="fa-cogs">Mapping Tables</div>
                        <div className="ps-menu-item" label="Auditing" route="auditing" style={{ display: (activityRight === 'Admin' || activityRight === 'SuperAdmin') ? 'block' : 'none' }} icon="fa-bars">Auditing</div>
                        <div className="ps-menu-item" label="Exceptions" route="businessexception" icon="fa-exclamation-triangle">Exceptions</div>
                        <div className="ps-menu-item" label="Security" route="security" style={{ display: (activityRight === 'Admin' || activityRight === 'SuperAdmin') ? 'block' : 'none' }} icon="fa-lock">Security</div>
                        <div className="ps-menu-item" label="Utilities" route="confirmservicerequest" style={{ display: activityRight === 'SuperAdmin' ? 'block' : 'none' }} icon="fa-wrench">Utilities</div>
                        <div className="ps-menu-item" label="Access Request" route="AccessRequest" style={{ display: canManageAccessReq ? 'block' : 'none' }} icon="fa-key">Access Request</div>
                        <div className="ps-menu-item" label="Help" route="help" icon="fa-info-circle" onClick={openPopupWindow}>Help</div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default App;