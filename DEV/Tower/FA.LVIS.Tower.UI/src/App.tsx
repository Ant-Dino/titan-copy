import React, { useState, useEffect } from 'react';
import './App.css'; // Assuming the CSS from Tower is moved to App.css

const App: React.FC = () => {
   const [unauthorized, setUnauthorized] = useState(false); // Simulate error state
   const [currentUser, setCurrentUser] = useState<string>('');
   const [tenantName, setTenantName] = useState<string>('');
   const [activityRight, setActivityRight] = useState<string>('');
   const [canManageAccessReq, setCanManageAccessReq] = useState<boolean>(false);

   // Simulate fetching user details / handling errors here
   useEffect(() => {
       // Placeholder: fetch data and update state
   }, []);

   const openPopupWindow = () => {
       //Placeholder: Open popup logic
   };

   return (
       <div className="container-fluid">
           { unauthorized ? (
               <div className="alert alert-danger">
                   <div className="error"><i className="fa fa-lg fa-ban">Unauthorized</i></div>
               </div>
           ) : (
               <div>
                   {/* Simulate ps-framework */}
                   {/* Placeholder for menu and menu-item components */}
                   <div>
                       {/* This would be converted to a React Menu component */}
                       <div label="Home" route="dashboard" icon="fa-dashboard"></div>
                       <div label="Reporting" route="reporting" icon="fa-line-chart"></div>
                       <div label="Mapping Tables" route="Customermappings" icon="fa-cogs"></div>
                       {(activityRight === 'Admin' || activityRight === 'SuperAdmin') &&
                           <div label="Auditing" route="auditing" icon="fa-bars"></div>
                       }
                       <div label="Exceptions" route="businessexception" icon="fa-exclamation-triangle"></div>
                       {(activityRight === 'Admin' || activityRight === 'SuperAdmin') &&
                           <div label="Security" route="security" icon="fa-lock"></div>
                       }
                       { activityRight === 'SuperAdmin' &&
                           <div label="Utilities" route="confirmservicerequest" icon="fa-wrench"></div>
                       }
                       { canManageAccessReq &&
                           <div label="Access Request" route="AccessRequest" icon="fa-key"></div>
                       }
                       <div label="Help" route="help" icon="fa-info-circle" onClick={openPopupWindow}></div>
                   </div>
               </div>
           )}
       </div>
   );
};

export default App;