import React, { useState, useEffect } from 'react';

const App: React.FC = () => {
 const [currentUser, setCurrentUser] = useState<string>('');
 const [tenantName, setTenantName] = useState<string>('');
 const [activityRight, setActivityRight] = useState<string>('');
 const [errors, setErrors] = useState<{ unauthorized: string }>({ unauthorized: '' });
 const [canManageAccessReq, setCanManageAccessReq] = useState<boolean>(false);

 useEffect(() => {
   // Mock fetching data, replace with actual data fetching logic
   setCurrentUser('John Doe');
   setTenantName('TenantOne');
   setActivityRight('Admin');
   setCanManageAccessReq(true);
   setErrors({ unauthorized: 'Unauthorized Access' }); // Example error
 }, []);

 return (
   <div className="container-fluid">
     {errors.unauthorized && (
       <div className="alert alert-danger">
         <div className="error"><i className="fa fa-lg fa-ban"> {errors.unauthorized}</i></div>
       </div>
     )}
     {!errors.unauthorized && (
       <>
         <div>
           {/* Replace ps-framework and its children with your component structure */}
           {/* Example of a component that could replace ps-framework */}
           <div>
             <div>Logo</div>
             <div>{currentUser}</div>
             <div>{tenantName}</div>
             {/* Mock Menu */}
             <ul>
               <li>Home - Dashboard</li>
               <li>Reporting - Reports</li>
               <li>Mapping Tables - Custom Mappings</li>
               {(activityRight === 'Admin' || activityRight === 'SuperAdmin') && <li>Auditing</li>}
               <li>Exceptions - Business Exceptions</li>
               {(activityRight === 'Admin' || activityRight === 'SuperAdmin') && <li>Security</li>}
               {activityRight === 'SuperAdmin' && <li>Utilities</li>}
               {canManageAccessReq && <li>Access Request</li>}
               <li>Help</li>
             </ul>
           </div>
         </div>
       </>
     )}
   </div>
 );
};

export default App;