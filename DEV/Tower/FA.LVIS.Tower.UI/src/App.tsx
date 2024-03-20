import React, { useState, useEffect } from 'react';

const TowerApp: React.FC = () => {
    const [unauthorized, setUnauthorized] = useState(false);
    const [currentUser, setCurrentUser] = useState('');
    const [tenantName, setTenantName] = useState('');
    const [activityRight, setActivityRight] = useState('');
    const [canManageAccessReq, setCanManageAccessReq] = useState(false);

    useEffect(() => {
        // Example fetching logic to set states
        // This could include fetching the current user, tenant name, etc.
        // Assume activityRight and canManageAccessReq are fetched here and set accordingly
        
        // Placeholder for fetching logic
        setCurrentUser('JohnDoe'); // Example user
        setTenantName('Example Tenant');
        setActivityRight('Admin');
        setCanManageAccessReq(true);
    }, []);

    const openPopupWindow = () => {
        // Placeholder for popup window logic
        console.log('Popup window opened');
    };

    return (
        <div className="container-fluid">
            <div></div> {/* Placeholder for antiforgerytoken */}
            {unauthorized && (
                <div className="alert alert-danger">
                    <div className="error"><i className="fa fa-lg fa-ban">Unauthorized Access</i></div>
                </div>
            )}

            {!unauthorized && (
                <div>
                    {/* Assuming ps-framework and ps-menu are components to be created or integrated */}
                    {/* This code replaces AngularJS directives with hypothetical React components */}
                    <div iconFile="images/FirstAmericanLogo.png" currentUser={currentUser} tenantName={tenantName}>
                        <div>
                            <div label="Home" route="dashboard" icon="fa-dashboard"></div>
                            <div label="Reporting" route="reporting" icon="fa-line-chart"></div>
                            <div label="Mapping Tables" route="Customermappings" icon="fa-cogs"></div>
                            {['Admin', 'SuperAdmin'].includes(activityRight) && (
                                <div label="Auditing" route="auditing" icon="fa-bars"></div>
                            )}
                            <div label="Exceptions" route="businessexception" icon="fa-exclamation-triangle"></div>
                            {['Admin', 'SuperAdmin'].includes(activityRight) && (
                                <div label="Security" route="security" icon="fa-lock"></div>
                            )}
                            {activityRight === 'SuperAdmin' && (
                                <div label="Utilities" route="confirmservicerequest" icon="fa-wrench"></div>
                            )}
                            {canManageAccessReq && (
                                <div label="Access Request" route="AccessRequest" icon="fa-key"></div>
                            )}
                            <div label="Help" route="help" icon="fa-info-circle" onClick={openPopupWindow}></div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default TowerApp;