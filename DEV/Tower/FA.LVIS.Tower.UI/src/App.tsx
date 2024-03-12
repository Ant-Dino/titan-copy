import React, { useState, useEffect } from 'react';
import './App.css'; // Assume your CSS is now within App.css or similar

// Simulating fetching some user and tenant data as might be present in a real app
const fetchUserData = async () => {
  return { currentUser: "Jane Doe", tenantName: "Acme Corp", activityRight: "Admin", canManageAccessReq: true, unauthorized: false };
};

const TowerApp: React.FC = () => {
  const [userData, setUserData] = useState<{ currentUser: string, tenantName: string, activityRight: string, canManageAccessReq: boolean, unauthorized: boolean }>({ currentUser: "", tenantName: "", activityRight: "", canManageAccessReq: false, unauthorized: true });

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchUserData();
      setUserData(result);
     };
    fetchData();
   }, []);

  const { currentUser, tenantName, activityRight, canManageAccessReq, unauthorized } = userData;

  const openPopupWindow = () => {
    console.log("Popup window opened");
   };

  return (
    <div className="container-fluid">
      {unauthorized && (
        <div className="alert alert-danger">
          <div className="error"><i className="fa fa-lg fa-ban"> Unauthorized</i></div>
           </div>
       )}
      {!unauthorized && (
        <div>
          <div>Logo: <img src="images/FirstAmericanLogo.png" alt="Logo" /></div>
          <div>User: {currentUser}</div>
          <div>Tenant: {tenantName}</div>
          <nav>
            <ul>
              <li>Home</li>
              <li>Reporting</li>
              <li>Mapping Tables</li>
              {(activityRight === 'Admin' || activityRight === 'SuperAdmin') && <li>Auditing</li>}
              <li>Exceptions</li>
              {(activityRight === 'Admin' || activityRight === 'SuperAdmin') && <li>Security</li>}
              {activityRight === 'SuperAdmin' && <li>Utilities</li>}
              {canManageAccessReq && <li>Access Request</li>}
              <li onClick={openPopupWindow}>Help</li>
               </ul>
           </nav>
         </div>
       )}
     </div>
   );
};

export default TowerApp;