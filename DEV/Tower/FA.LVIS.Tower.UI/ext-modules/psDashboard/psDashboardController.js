import React, { useState, useEffect } from 'react';
import axios from 'axios';

function DashboardComponent() {
  // converted $scope and $rootScope variables into React state
  const [activityRight, setActivityRight] = useState('');
  const [canManageTEQ, setCanManageTEQ] = useState(false);
  const [canManageBEQ, setCanManageBEQ] = useState(false);
  const [canManageAccessReq, setCanManageAccessReq] = useState(false);
  const [hasAccess, setHasAccess] = useState(false);
  const [isUser, setIsUser] = useState(true);
  const [hasBEQAccess, setHasBEQAccess] = useState(false);
  const [hasTEQAccess, setHasTEQAccess] = useState(false);
  const [BEQSummaryList, setBEQSummaryList] = useState([]);
  const [TEQSummaryList, setTEQSummaryList] = useState([]);

  // Mock UserInfo service in AngularJS converted to a function in React
  const UserInfo = {
    getUser: function() {
      // Mocked user info fetching, could be Axios HTTP call
      return axios.get('/api/userinfo').then(response => response.data);
    }
  };

  // Function converted from DashBoardCtrl.getCurrentUser
  const getCurrentUser = () => {
    UserInfo.getUser().then((response) => {
      // Broadcast event removed since React manages state internally rather than through events
      setActivityRight(response.ActivityRight);
      setCanManageTEQ(response.CanManageTEQ);
      setCanManageBEQ(response.CanManageBEQ);
      setCanManageAccessReq(response.CanAccessReq);
      loadBEQExceptions();
      loadTEQExceptions();

      // Setting access rights based on user roles
      setHasBEQAccess(response.CanManageBEQ);
      setHasTEQAccess(response.CanManageTEQ);
      setHasAccess(['Admin', 'SuperAdmin'].includes(response.ActivityRight));
      setIsUser(!['Admin', 'SuperAdmin', 'User'].includes(response.ActivityRight));
    }, (error) => {
      // Error handling could be implemented here
      console.error('Failed to fetch user info:', error);
    });
  };

  // Function converted from DashBoardCtrl.LoadBEQExceptions
  const loadBEQExceptions = () => {
    axios.get('Dashboard/BEQException/')
      .then(response => {
        setBEQSummaryList(response.data);
      })
      .catch(error => console.error('Failed to load BEQ exceptions:', error));
  };

  // Function converted from DashBoardCtrl.loadTEQExceptions
  const loadTEQExceptions = () => {
    axios.get('Dashboard/TEQException/')
      .then(response => {
        setTEQSummaryList(response.data);
      })
      .catch(error => console.error('Failed to load TEQ exceptions:', error));
  };

  useEffect(() => {
    getCurrentUser();
    // The commented $interval functions from AngularJS could be converted using setInterval in useEffect hook if required. Shown below is a pseudo-implementation for periodic data fetching.
    // const intervalId = setInterval(loadTEQExceptions, 900000); // for TEQ exceptions loading every 15 minutes
    // return () => clearInterval(intervalId); // Cleanup on component unmount
  }, []); // Empty dependency array means this useEffect hook runs once on mount.

  return (
    <div>
      <h1>Dashboard Component</h1>
      {/* Render logic based on state can go here. Example: */}
      {hasAccess && <p>User has access.</p>}
      {/* Further UI elements based on state here */}
    </div>
  );
}

export default DashboardComponent;