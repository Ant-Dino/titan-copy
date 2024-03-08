import React, { useState, useEffect } from 'react';

const App: React.FC = () => {
 const [errors, setErrors] = useState<{ unauthorized?: string }>({});
 const [currentUser, setCurrentUser] = useState<string>('');
 const [tenantName, setTenantName] = useState<string>('');
 const [activityRight, setActivityRight] = useState<string>('');
 const [canManageAccessReq, setCanManageAccessReq] = useState<boolean>(false);

 // Placeholder for logic to update these states
 useEffect(() => {
   // Simulate fetching data and setting states
   // setCurrentUser('Your logic here');
   // setTenantName('Your logic here');
   // setActivityRight('Your logic here');
   // setCanManageAccessReq(true/false based on your logic);
   // setErrors({ unauthorized: 'Your error message here or leave empty to simulate no errors' });
 }, []);

 return (
   <>
     <div>
       {/* This would be your antiforgerytoken equivalent in React */}
     </div>
     {errors.unauthorized ? (
       <div className="alert alert-danger">
         <div className="error"><i className="fa fa-lg fa-ban">{errors.unauthorized}</i></div>
       </div>
     ) : (
       <div>
         {/* This is a simplified translation. Assuming ps-framework, ps-menu, and ps-menu-item are components */}
         <ps-framework icon-file="images/FirstAmericanLogo.png" currentuser={currentUser} tenantname={tenantName}>
           <ps-menu>
             <ps-menu-item label="Home" route="dashboard" icon="fa-dashboard"></ps-menu-item>
             <ps-menu-item label="Reporting" route="reporting" icon="fa-line-chart"></ps-menu-item>
             <ps-menu-item label="Mapping Tables" route="Customermappings" icon="fa-cogs"></ps-menu-item>
             {['Admin', 'SuperAdmin'].includes(activityRight) && (
               <ps-menu-item label="Auditing" route="auditing" icon="fa-bars"></ps-menu-item>
             )}
             <ps-menu-item label="Exceptions" route="businessexception" icon="fa-exclamation-triangle"></ps-menu-item>
             {['Admin', 'SuperAdmin'].includes(activityRight) && (
               <ps-menu-item label="Security" route="security" icon="fa-lock"></ps-menu-item>
             )}
             {activityRight === 'SuperAdmin' && (
               <ps-menu-item label="Utilities" route="confirmservicerequest" icon="fa-wrench"></ps-menu-item>
             )}
             {canManageAccessReq && (
               <ps-menu-item label="Access Request" route="AccessRequest" icon="fa-key"></ps-menu-item>
             )}
             <ps-menu-item label="Help" route="help" icon="fa-info-circle" onClick={() => console.log('OpenPopupWindow')}>
             </ps-menu-item>
           </ps-menu>
         </ps-framework>
       </div>
     )}
   </>
 );
}

export default App;