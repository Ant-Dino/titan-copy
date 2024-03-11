import React, { useState, useEffect } from 'react';
import './App.css'; // Assume custom styles similar to "towercss" are here

const App = () => {
 const [currentUser, setCurrentUser] = useState<string>('');
 const [tenantName, setTenantName] = useState<string>('');
 const [activityRight, setActivityRight] = useState<string>('');
 const [unauthorizedError, setUnauthorizedError] = useState<string>('');
 const [canManageAccessReq, setCanManageAccessReq] = useState<boolean>(false);

 useEffect(() => {
   // Dummy hooks to mimic fetching user rights, etc.
   setCurrentUser('John Doe');
   setTenantName('Tenant XYZ');
   setActivityRight('Admin');
   setUnauthorizedError('');
   setCanManageAccessReq(true);
 }, []);

 const openPopupWindow = () => {
   console.log('Popup window opened');
 };

 return (
   <div className="App container-fluid">
     <div></div> {/* Antiforgery token placeholder */}
     {unauthorizedError && (
       <div className="alert alert-danger">
         <div className="error"><i className="fa fa-lg fa-ban"> {unauthorizedError}</i></div>
       </div>
     )}

     {!unauthorizedError && (
       <div>
         {/* ps-framework equivalent */}
         <div iconFile="images/FirstAmericanLogo.png" currentUser={currentUser} tenantName={tenantName}>
           {/* ps-menu equivalent */}
           <div>
             <div label="Home" route="dashboard" icon="fa-dashboard"></div>
             <div label="Reporting" route="reporting" icon="fa-line-chart"></div>
             <div label="Mapping Tables" route="Customermappings" icon="fa-cogs"></div>
             {['Admin', 'SuperAdmin'].includes(activityRight) && <div label="Auditing" route="auditing" icon="fa-bars"></div>}
             <div label="Exceptions" route="businessexception" icon="fa-exclamation-triangle"></div>
             {['Admin', 'SuperAdmin'].includes(activityRight) && <div label="Security" route="security" icon="fa-lock"></div>}
             {activityRight === 'SuperAdmin' && <div label="Utilities" route="confirmservicerequest" icon="fa-wrench"></div>}
             {canManageAccessReq && <div label="Access Request" route="AccessRequest" icon="fa-key"></div>}
             <div label="Help" route="help" icon="fa-info-circle" onClick={openPopupWindow}></div>
           </div>
         </div>
       </div>
     )}
   </div>
 );
};

export default App;