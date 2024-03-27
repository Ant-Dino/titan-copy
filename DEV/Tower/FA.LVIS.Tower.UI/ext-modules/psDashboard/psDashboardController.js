import React, { useState, useEffect } from 'react';
import DashboardService from 'DEV/Tower/FA.LVIS.Tower.UI/src/services/psDashboard.service.ts';
function PsDashboard() {
  // State variables converted from $scope and $rootScope
  const [activityRight, setActivityRight] = useState('');
  const [canManageTEQ, setCanManageTEQ] = useState(false);
  const [canManageBEQ, setCanManageBEQ] = useState(false);
  const [BEQSummaryList, setBEQSummaryList] = useState([]);
  const [TEQSummaryList, setTEQSummaryList] = useState([]);
  // Derived state from the above variables
  const [hasAccess, setHasAccess] = useState(false);
  const [hasBEQAccess, setHasBEQAccess] = useState(false);
  const [hasTEQAccess, setHasTEQAccess] = useState(false);
  // Functions converted from DashBoardCtrl's methods
  const getCurrentUser = () => {
    DashboardService.getCurrentUser().then(response => {
      const userData = response.data;
      setActivityRight(userData.ActivityRight);
      setCanManageTEQ(userData.CanManageTEQ);
      setCanManageBEQ(userData.CanManageBEQ);
      loadBEQExceptions();
      loadTEQExceptions();
    }).catch(error => {
      console.log(error);
    });
  };
  const loadBEQExceptions = () => {
    DashboardService.loadBEQExceptions().then(response => {
      setBEQSummaryList(response.data);
    });
  };
  const loadTEQExceptions = () => {
    DashboardService.loadTEQExceptions().then(response => {
      setTEQSummaryList(response.data);
    });
  };
  // UseEffect hooks to replicate AngularJS's $onInit lifecycle hook
  useEffect(() => {
    getCurrentUser();
  }, []);
  // Derived states updates based on the response
  useEffect(() => {
    setHasBEQAccess(canManageBEQ);
    setHasTEQAccess(canManageTEQ);
    setHasAccess(['Admin', 'SuperAdmin'].includes(activityRight));
  }, [canManageBEQ, canManageTEQ, activityRight]);
  return (
    <div>
      {/* UI Components and JSX go here */}
      <h2>Dashboard</h2>
      {BEQSummaryList && BEQSummaryList.length > 0 && (
        <div>BEQ Exceptions Loaded</div>
      )}
      {TEQSummaryList && TEQSummaryList.length > 0 && (
        <div>TEQ Exceptions Loaded</div>
      )}
    </div>
  );
}
export default PsDashboard;