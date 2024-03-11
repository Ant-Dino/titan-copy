import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Dashboard Component
const Dashboard = () => {
  // This is the Dashboard component, showing the main content
  return (
    <div>
      <h2>Dashboard</h2>
      <p>This is the Dashboard, where you can find the main information.</p>
    </div>
  );
};

// Help Component
const Help = () => {
  // This is the Help component, providing assistance
  return (
    <div>
      <h2>Help</h2>
      <p>This is the Help page, where you can find help and support.</p>
    </div>
  );
};

// App Component with Routing
const App = () => {
  // Here we define the App component that includes routing to Help and Dashboard
  return (
    <Router>
      <div>
        <Switch>
          {/* Route for Dashboard */}
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          {/* Route for Help */}
          <Route path="/help">
            <Help />
          </Route>
          {/* Default Route, redirects users to Dashboard if no other path matches */}
          <Route path="/">
            <Dashboard />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

// Exporting the App component
export default App;