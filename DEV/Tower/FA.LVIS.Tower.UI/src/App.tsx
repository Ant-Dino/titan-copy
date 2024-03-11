import React, { useState, useEffect } from 'react';

const TowerApp: React.FC = () => {
 const [currentUser, setCurrentUser] = useState<string>('');
 const [tenantName, setTenantName] = useState<string>('');
 const [activityRight, setActivityRight] = useState<string>('');
 const [unauthorizedError, setUnauthorizedError] = useState<string>('');
 const [canManageAccessReq, setCanManageAccessReq] = useState<boolean>(false);

 // Assuming fetchUserData and fetchTenantData are functions that fetch user & tenant data
 useEffect(() => {
   // Logic to fetch user data and set state accordingly
   setCurrentUser('Example User');
   setTenantName('Example Tenant');
   setActivityRight('Admin'); // Example setting
   setUnauthorizedError(''); // Set based on auth logic, example assumes no error
   setCanManageAccessReq(true); // Example setting
 }, []);

 const OpenPopupWindow = () => {
   // Logic to open popup windows
 };

 return (
   <div className="container-fluid">
     <div></div> {/* antiforgerytoken equivalent can be handled via headers in React fetch/Axios calls */}
     {unauthorizedError ? (
       <div className="alert alert-danger">
         <div className="error"><i className="fa fa-lg fa-ban"> {unauthorizedError}</i></div>
       </div>
     ) : (
       <div>
         {/* ps-framework equivalent code here, using divs for demonstration */}
         <div icon-file="images/FirstAmericanLogo.png" currentuser={currentUser} tenantname={tenantName}>
           {/* ps-menu equivalent, could be a Component */}
           <div>
             {/* ps-menu-item equivalent, could be a Component */}
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
             <div label="Help" route="help" icon="fa-info-circle" onClick={OpenPopupWindow}></div>
           </div>
         </div>
       </div>
     )}
   </div>
 );
};

export default TowerApp;