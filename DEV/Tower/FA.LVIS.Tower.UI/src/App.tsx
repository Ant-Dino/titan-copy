import React, { useState, useEffect } from 'react';

const App = () => {
 const [currentUser, setCurrentUser] = useState('');
 const [tenantName, setTenantName] = useState('');
 const [activityRight, setActivityRight] = useState('');
 const [canManageAccessReq, setCanManageAccessReq] = useState(false);
 const [unauthorizedError, setUnauthorizedError] = useState('');

 useEffect(() => {
   // Placeholder for any initial data fetching for currentUser, tenantName, etc.
   // Update state accordingly
 }, []);

 const openPopupWindow = () => {
   // Placeholder for your popup window logic
 };

 return (
   <>
     <div>
       {unauthorizedError && (
         <div className="alert alert-danger">
           <div className="error"><i className="fa fa-lg fa-ban"> {unauthorizedError}</i></div>
         </div>
       )}
       {!unauthorizedError && (
         <div>
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
               <div label="Help" route="help" icon="fa-info-circle" onClick={openPopupWindow}></div>
             </div>
           </div>
         </div>
       )}
     </div>
   </>
 );
};

export default App;