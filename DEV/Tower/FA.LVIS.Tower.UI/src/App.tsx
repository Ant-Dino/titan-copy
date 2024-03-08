import React, { useState, useEffect } from 'react';

const Tower: React.FC = () => {
 const [unauthorized, setUnauthorized] = useState(false);
 const [currentUser, setCurrentUser] = useState('');
 const [tenantName, setTenantName] = useState('');
 const [activityRight, setActivityRight] = useState('');
 const [canManageAccessReq, setCanManageAccessReq] = useState(false);

 useEffect(() => {
   // Simulate fetching user data
   // Update state variables accordingly
   // This is just a placeholder. Implement according to your actual data source.
   setCurrentUser('JohnDoe');
   setTenantName('CompanyABC');
   setActivityRight('Admin');
   setCanManageAccessReq(true);
 }, []);

 return (
   <div className="container-fluid">
     {unauthorized ? (
       <div className="alert alert-danger">
         <div className="error"><i className="fa fa-lg fa-ban"></i> Unauthorized Access</div>
       </div>
     ) : (
       <div>
         <div>
           {/* Framework Component Placeholder */}
           {/* Menu Component Placeholder */}
           <ul>
             <li>Home</li>
             <li>Reporting</li>
             <li>Mapping Tables</li>
             {(activityRight === 'Admin' || activityRight === 'SuperAdmin') && <li>Auditing</li>}
             <li>Exceptions</li>
             {(activityRight === 'Admin' || activityRight === 'SuperAdmin') && <li>Security</li>}
             {activityRight === 'SuperAdmin' && <li>Utilities</li>}
             {canManageAccessReq && <li>Access Request</li>}
             <li onClick={() => alert('Opening help')}>Help</li>
           </ul>
         </div>
       </div>
     )}
   </div>
 );
};

export default Tower;