import React, { useState, useEffect } from 'react';
import './App.css'; // Assume your common css files (e.g., bootstrap, custom styles) are imported here

const App: React.FC = () => {
    const [currentUser, setCurrentUser] = useState<string>('');
    const [tenantName, setTenantName] = useState<string>('');
    const [unauthorizedError, setUnauthorizedError] = useState<string>('');
    const [activityRight, setActivityRight] = useState<string>('');
    const [canManageAccessReq, setCanManageAccessReq] = useState<boolean>(false);

    useEffect(() => {
        // logic to fetch user data and set state accordingly
        // e.g., setCurrentUser('John Doe'); setTenantName('Tenant1'); etc.
    }, []);

    const openPopupWindow = () => {
        // Logic for opening a popup window
    };

    return (
        <div className="container-fluid">
            <div></div> {/* Placeholder for antiforgerytoken */}
            {unauthorizedError ? (
                <div className="alert alert-danger">
                    <div className="error"><i className="fa fa-lg fa-ban"> {unauthorizedError}</i></div>
                </div>
            ) : (
                <div>
                    {/* Assuming ps-framework and related custom components would be components in your React app */}
                    {/* <PsFramework iconFile="images/FirstAmericanLogo.png" currentUser={currentUser} tenantName={tenantName}> */}
                        {/* This is a representation. Replace with actual component implementation */}
                        <div>
                            {/* Similarly, replace <PsMenu>, <PsMenuItem>, etc., with your React component implementations */}
                            <div>Home (Dashboard)</div>
                            <div>Reporting</div>
                            <div>Mapping Tables</div>
                            {['Admin', 'SuperAdmin'].includes(activityRight) && <div>Auditing</div>}
                            <div>Exceptions</div>
                            {['Admin', 'SuperAdmin'].includes(activityRight) && <div>Security</div>}
                            {'SuperAdmin' === activityRight && <div>Utilities</div>}
                            {canManageAccessReq && <div>Access Request</div>}
                            <div onClick={openPopupWindow}>Help</div>
                        </div>
                    {/* </PsFramework> */}
                </div>
            )}
        </div>
    );
};

export default App;