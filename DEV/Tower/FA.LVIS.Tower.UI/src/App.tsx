import React, { useState, useEffect } from 'react';
import './App.css'; // Assuming you have equivalent styles and assets managed via CSS
// Import necessary assets, e.g., images and stylesheets.

const App: React.FC = () => {
    const [currentUser, setCurrentUser] = useState<string>('');
    const [tenantName, setTenantName] = useState<string>('');
    const [activityRight, setActivityRight] = useState<string>('');
    const [unauthorized, setUnauthorized] = useState<boolean>(false);
    const [canManageAccessReq, setCanManageAccessReq] = useState<boolean>(false);

    useEffect(() => {
        // Placeholder for logic to fetch user data or other initialization
    }, []);

    return (
        <div className="container-fluid">
            {/* Placeholder for antiforgerytoken equivalent, if needed */}
            {unauthorized ? (
                <div className="alert alert-danger">
                    <div className="error"><i className="fa fa-lg fa-ban"> {unauthorized}</i></div>
                </div>
            ) : (
                <div>
                    {/* Assuming ps-framework, ps-menu, and ps-menu-item are custom components, you need to 
                        convert these AngularJS directives/components to React components */}
                    <div iconFile="images/FirstAmericanLogo.png" currentUser={currentUser} tenantName={tenantName}>
                        <div>
                            <div label="Home" route="dashboard" icon="fa-dashboard"></div>
                            <div label="Reporting" route="reporting" icon="fa-line-chart"></div>
                            <div label="Mapping Tables" route="Customermappings" icon="fa-cogs"></div>
                            {(activityRight === 'Admin' || activityRight === 'SuperAdmin') && (
                                <div label="Auditing" route="auditing" icon="fa-bars"></div>
                            )}
                            <div label="Exceptions" route="businessexception" icon="fa-exclamation-triangle"></div>
                            {(activityRight === 'Admin' || activityRight === 'SuperAdmin') && (
                                <div label="Security" route="security" icon="fa-lock"></div>
                            )}
                            {activityRight === 'SuperAdmin' && (
                                <div label="Utilities" route="confirmservicerequest" icon="fa-wrench"></div>
                            )}
                            {canManageAccessReq && (
                                <div label="Access Request" route="AccessRequest" icon="fa-key"></div>
                            )}
                            <div label="Help" route="help" icon="fa-info-circle" onClick={() => console.log('Open help popup')}></div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default App;