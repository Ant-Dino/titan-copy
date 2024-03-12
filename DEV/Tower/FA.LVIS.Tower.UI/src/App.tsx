import React, { useState, useEffect } from 'react';
import './App.css'; // Assume you have an equivalent CSS file for React

const App: React.FC = () => {
 const [currentUser, setCurrentUser] = useState<string>('');
 const [tenantName, setTenantName] = useState<string>('');
 const [activityRight, setActivityRight] = useState<string>('');
 const [unauthorizedError, setUnauthorizedError] = useState<string>('');
 const [canManageAccessReq, setCanManageAccessReq] = useState<boolean>(false);

 useEffect(() => {
   // Load initial data here (currentUser, tenantName, activityRight, etc.)
   // For example:
   setCurrentUser('John Doe');
   setTenantName('Demo Tenant');
   setActivityRight('Admin');
   setUnauthorizedError('');
   setCanManageAccessReq(true);
 }, []);

 const openPopupWindow = () => {
   // Logic to open a popup window
 };

 return (
   <div className="App container-fluid">
     {unauthorizedError ? (
       <div className="alert alert-danger">
         <div className="error"><i className="fa fa-lg fa-ban">{unauthorizedError}</i></div>
       </div>
     ) : (
       <div>
         {/* Assuming ps-framework and ps-menu represent specific UI components, you should translate them into React components. This is a simple placeholder. */}
         <div className="ps-framework" iconFile="images/FirstAmericanLogo.png" currentUser={currentUser} tenantName={tenantName}>
           <div className="ps-menu">
             <div label="Home" route="dashboard" icon="fa-dashboard" />
             <div label="Reporting" route="reporting" icon="fa-line-chart" />
             <div label="Mapping Tables" route="Customermappings" icon="fa-cogs" />
             <div label="Auditing" route="auditing" icon="fa-bars" style={{ display: (activityRight === 'Admin' || activityRight === 'SuperAdmin') ? 'block' : 'none' }} />
             <div label="Exceptions" route="businessexception" icon="fa-exclamation-triangle" />
             <div label="Security" route="security" icon="fa-lock" style={{ display: (activityRight === 'Admin' || activityRight === 'SuperAdmin') ? 'block' : 'none' }} />
             <div label="Utilities" route="confirmservicerequest" icon="fa-wrench" style={{ display: activityRight === 'SuperAdmin' ? 'block' : 'none' }} />
             <div label="Access Request" route="AccessRequest" icon="fa-key" style={{ display: canManageAccessReq ? 'block' : 'none' }} />
             <div label="Help" route="help" icon="fa-info-circle" onClick={openPopupWindow} />
           </div>
         </div>
       </div>
     )}
   </div>
 );
};

export default App;