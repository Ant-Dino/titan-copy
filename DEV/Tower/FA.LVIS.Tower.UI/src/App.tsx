import React, { useState, useEffect } from 'react';

const App: React.FC = () => {
    const [currentUser, setCurrentUser] = useState('');
    const [tenantName, setTenantName] = useState('');
    const [activityRight, setActivityRight] = useState('');
    const [canManageAccessReq, setCanManageAccessReq] = useState(false);
    const [errors, setErrors] = useState({ unauthorized: false });

    useEffect(() => {
        // Here you'd fetch the data required by your app, for now let's assume it's a static value
        setCurrentUser("Sample User");
        setTenantName("Sample Tenant");
        setActivityRight("Admin"); // Admin or SuperAdmin or other
        setCanManageAccessReq(true);

        // Simulate fetching error state
        setErrors({ unauthorized: false });
    }, []);

    const openPopupWindow = () => {
        // Functionality to open a popup window
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
                    {/* This represents your ps-framework and its children */}
                    {/* Using divs as placeholders for your custom components */}
                    <div icon-file="images/FirstAmericanLogo.png" currentuser={currentUser} tenantname={tenantName}>
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
                            <div label="Help" route="help" icon="fa-info-circle" onClick={openPopupWindow}></div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default App;