import React, { useState, useEffect } from 'react';
const App: React.FC = () => {
 const [currentUser, setCurrentUser] = useState('');
 const [tenantName, setTenantName] = useState('');
 const [activityRight, setActivityRight] = useState('');
 const [canManageAccessReq, setCanManageAccessReq] = useState(false);
 const [unauthorizedError, setUnauthorizedError] = useState('');
 useEffect(() => {
   // Assume these functions are async calls to fetch user data
   const fetchUserData = async () => {
     // Mocked data fetch
     setCurrentUser('John Doe');
     setTenantName('Acme Corporation');
     setActivityRight('Admin');
     setCanManageAccessReq(true);
     // Error handling for unauthorized access
     setUnauthorizedError('');
   };
   
   fetchUserData();
 }, []);
 const openPopupWindow = () => {
     console.log('Opening Help Popup...');
 };
 return (
   <div className="container-fluid">
     <div>{/* AntiforgeryToken equivalent here if necessary */}</div>
     {unauthorizedError && (
       <div className="alert alert-danger">
         <div className="error"><i className="fa fa-lg fa-ban"> {unauthorizedError}</i></div>
       </div>
     )}
     {!unauthorizedError && (
       <div>
         {/* Your framework components go here, replacing ps-framework and child components */}
         {/* Example static content shown below */}
         <div>
           <h1>Welcome to Tower v1.0, {currentUser}</h1>
           <p>Tenant: {tenantName}</p>
           {/* Conditional rendering based on user's rights */}
           {activityRight === 'Admin' || activityRight === 'SuperAdmin' ? (
             <p>You have admin or superadmin rights.</p>
           ) : (
             <p>Your rights are limited.</p>
           )}
           <button onClick={openPopupWindow}>Open Help</button>
         </div>
       </div>
     )}
   </div>
 );
};
export default App;