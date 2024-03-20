import React, { useState, useEffect } from 'react';
import './Content/bootstrap.min.css';
import './Content/ui-grid.css';
import './Content/font-awesome.min.css';
import './towercss.css';
export const App: React.FC = () => {
    const [currentUser, setCurrentUser] = useState<string>('');
    const [tenantName, setTenantName] = useState<string>('');
    const [activityRight, setActivityRight] = useState<string>('');
    const [unauthorizedError, setUnauthorizedError] = useState<string>('');
    const [canManageAccessReq, setCanManageAccessReq] = useState<boolean>(false);
    // Replace with actual antiforgery token setup logic
    const antiforgeryToken = ''; 
    useEffect(() => {
        // Placeholder: logic to fetch user info, tenant name, activity rights, etc.
        // This might involve fetching data from a backend service or local storage.
        setCurrentUser('John Doe');
        setTenantName('Sample Tenant');
        setActivityRight('Admin');
        setCanManageAccessReq(true);
    }, []);
    return (
        <div className="container-fluid">
            <div>{antiforgeryToken}</div>
            {unauthorizedError && (
                <div className="alert alert-danger">
                    <div className="error"><i className="fa fa-lg fa-ban"> {unauthorizedError}</i></div>
                </div>
            )}
            {!unauthorizedError && (
                <div>
                    {/* Placeholder for actual framework component. Could be a React component wrapping the application's layout and functionality. */}
                    <div>
                        {/* Menu items could be rendered here based on the state, replacing ng-show with conditional rendering in React. */}
                        <div label="Home" route="dashboard" icon="fa-dashboard"></div>
                        <div label="Reporting" route="reporting" icon="fa-line-chart"></div>
                        <div label="Mapping Tables" route="Customermappings" icon="fa-cogs"></div>
                        {activityRight === 'Admin' || activityRight === 'SuperAdmin' ? (
                            <div label="Auditing" route="auditing" icon="fa-bars"></div>
                        ) : null}
                        <div label="Exceptions" route="businessexception" icon="fa-exclamation-triangle"></div>
                        {activityRight === 'Admin' || activityRight === 'SuperAdmin' ? (
                            <div label="Security" route="security" icon="fa-lock"></div>
                        ) : null}
                        {activityRight === 'SuperAdmin' ? (
                            <div label="Utilities" route="confirmservicerequest" icon="fa-wrench"></div>
                        ) : null}
                        {canManageAccessReq ? (
                            <div label="Access Request" route="AccessRequest" icon="fa-key"></div>
                        ) : null}
                        <div label="Help" route="help" icon="fa-info-circle" onClick={() => {/* OpenPopupWindow logic here */}}></div>
                    </div>
                </div>
            )}
        </div>
    );
};