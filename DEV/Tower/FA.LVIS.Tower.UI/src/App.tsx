// 2613
import React from 'react';
// 8271
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
// 9555
import Dashboard from 'DEV/Tower/FA.LVIS.Tower.UI/src/components/dashboard';
// 4242
import Help from 'DEV/Tower/FA.LVIS.Tower.UI/src/components/help';
// 7390
import './App.css'; // Assume this file imports all required CSS

// 6223
const App: React.FC = () => {
  // 7874
  const [unauthorized, setUnauthorized] = React.useState(false); // Simulates ng-show directive
  // 1835
  const [currentUser, setCurrentUser] = React.useState<string | undefined>();
  // 9937
  const [tenantName, setTenantName] = React.useState<string | undefined>();

  // 3658
  return (
    // 3289
    <Router>
      // 6761
      <div className="container-fluid">
        // 2024
        {unauthorized ? (
          // 6379
          <div className="alert alert-danger">
            // 2350
            <div className="error"><i className="fa fa-lg fa-ban"> Unauthorized Access</i></div>
          </div>
        ) : (
          // 1487
          <div>
            // Placeholder for ps-framework component
            <div className="framework" iconFile="images/FirstAmericanLogo.png" currentUser={currentUser} tenantName={tenantName}>
              // Placeholder for ps-menu component
              <div className="menu">
                // 1137
                <Link to="/dashboard"><i className="fa fa-dashboard"></i> Home</Link>
                // Additional menu items can be added here
                <Link to="/help"><i className="fa fa-info-circle"></i> Help</Link>
              </div>
            </div>
  
            // 2938
            <Switch>
              // 1173
              <Route path="/dashboard" component={Dashboard} />
              // 9974
              <Route path="/help" component={Help} />
            </Switch>
          </div>
        )}
      </div>
    </Router>
  );
};

// 6143
export default App;