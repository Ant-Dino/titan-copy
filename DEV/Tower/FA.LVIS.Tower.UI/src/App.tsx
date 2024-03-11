import React, { useState, useEffect } from 'react';

type Props = {
  currentuser: string;
  tenantname: string;
};

const App: React.FC<Props> = ({ currentuser, tenantname }) => {
  const [unauthorized, setUnauthorized] = useState<boolean>(false);
  const [activityRight, setActivityRight] = useState<string>('');

  useEffect(() => {
    // Example of how you might retrieve and set state
    // You'd replace this with actual logic to determine if unauthorized or not
    setUnauthorized(false);
    // And to set activity right, replacing 'Admin' with actual logic to determine the right
    setActivityRight('Admin');
  }, []);

  const openPopupWindow = () => {
    console.log("Opening help popup"); // Replace with actual logic
  };

  return (
    <div className="container-fluid">
      {unauthorized ? (
        <div className="alert alert-danger">
          <div className="error"><i className="fa fa-lg fa-ban"> Authorization Error</i></div>
        </div>
      ) : (
        <>
          <ps-framework icon-file="images/FirstAmericanLogo.png" currentuser={currentuser} tenantname={tenantname}>
            <ps-menu>
              <ps-menu-item label="Home" route="dashboard" icon="fa-dashboard"></ps-menu-item>
              <ps-menu-item label="Reporting" route="reporting" icon="fa-line-chart"></ps-menu-item>
              <ps-menu-item label="Mapping Tables" route="Customermappings" icon="fa-cogs"></ps-menu-item>
              {['Admin', 'SuperAdmin'].includes(activityRight) && <ps-menu-item label="Auditing" route="auditing" icon="fa-bars"></ps-menu-item>}
              <ps-menu-item label="Exceptions" route="businessexception" icon="fa-exclamation-triangle"></ps-menu-item>
              {['Admin', 'SuperAdmin'].includes(activityRight) && <ps-menu-item label="Security" route="security" icon="fa-lock"></ps-menu-item>}
              {activityRight === 'SuperAdmin' && <ps-menu-item label="Utilities" route="confirmservicerequest" icon="fa-wrench"></ps-menu-item>}
              {/* Assuming canmanageaccessreq is another state you would manage similarly to unauthorized */}
              {/* <ps-menu-item label="Access Request" route="AccessRequest" icon="fa-key"></ps-menu-item> */}
              <ps-menu-item label="Help" route="help" icon="fa-info-circle" onClick={openPopupWindow}></ps-menu-item>
            </ps-menu>
          </ps-framework>
        </>
      )}
    </div>
  );
};

export default App;