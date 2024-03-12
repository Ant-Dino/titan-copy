import React, { useState, useEffect } from 'react';
import './Content/bootstrap.min.css';
import './Content/ui-grid.css';
import './Content/font-awesome.min.css';
import './towercss.css';

// Assume these scripts are now converted to React components or hooks
// import './towerjqscripts';
// import './towerangularscripts';
// import './towerscripts';
// import './towersubmenuscripts';

const App: React.FC = () => {
 const [unauthorized, setUnauthorized] = useState(false);
 const [currentUser, setCurrentUser] = useState('');
 const [tenantName, setTenantName] = useState('');
 const [activityRight, setActivityRight] = useState('');
 const [canManageAccessReq, setCanManageAccessReq] = useState(false);

 useEffect(() => {
   // Placeholder for any initialization logic that was in AngularJS
   // e.g., fetching user details, tenant details, etc.
 }, []);

 const OpenPopupWindow = () => {
   // Placeholder for function logic
 };

 return (
   <div className="container-fluid">
     <div>AntiForgeryTokenPlaceholder</div>
     {unauthorized ? (
       <div className="alert alert-danger">
         <div className="error"><i className="fa fa-lg fa-ban">{unauthorized}</i></div>
       </div>
     ) : (
       <div>
         {/* Assuming ps-framework, ps-menu, and ps-menu-item are now React components */}
         {/* For simplicity, they are not implemented here */}
         <div iconFile="images/FirstAmericanLogo.png" currentUser={currentUser} tenantName={tenantName}>
           <div>
             <div label="Home" route="dashboard" icon="fa-dashboard"></div>
             <div label="Reporting" route="reporting" icon="fa-line-chart"></div>
             <div label="Mapping Tables" route="Customermappings" icon="fa-cogs"></div>
             {["Admin", "SuperAdmin"].includes(activityRight) && (
               <>
                 <div label="Auditing" route="auditing" icon="fa-bars"></div>
                 <div label="Security" route="security" icon="fa-lock"></div>
               </>
             )}
             <div label="Exceptions" route="businessexception" icon="fa-exclamation-triangle"></div>
             {activityRight === "SuperAdmin" && <div label="Utilities" route="confirmservicerequest" icon="fa-wrench"></div>}
             {canManageAccessReq && <div label="Access Request" route="AccessRequest" icon="fa-key"></div>}
             <div label="Help" route="help" icon="fa-info-circle" onClick={OpenPopupWindow}></div>
           </div>
         </div>
       </div>
     )}
   </div>
 );
};

export default App;