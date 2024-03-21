import React, { useState, useEffect } from 'react';
import { getUser, getBEQException, getTEQException, getGraphicalBEQException, getGraphicalTEQException } from './services/dashboardService';
const Dashboard = () => {
  const [userInfo, setUserInfo] = useState({});
  const [BEQSummaryList, setBEQSummaryList] = useState([]);
  const [TEQSummaryList, setTEQSummaryList] = useState([]);
  const [hasAccess, setHasAccess] = useState(false);
  const [hasBEQAccess, setHasBEQAccess] = useState(false);
  const [hasTEQAccess, setHasTEQAccess] = useState(false);
  useEffect(() => {
    const fetchUser = async () => {
      const response = await getUser();
      setUserInfo(response);
      setHasBEQAccess(response.CanManageBEQ);
      setHasTEQAccess(response.CanManageTEQ);
      setHasAccess(['Admin', 'SuperAdmin'].includes(response.ActivityRight));
      loadBEQExceptions();
      loadTEQExceptions();
    };
    fetchUser();
  }, []);
  const loadBEQExceptions = async () => {
    const data = await getBEQException();
    setBEQSummaryList(data);
  };
  const loadTEQExceptions = async () => {
    const data = await getTEQException();
    setTEQSummaryList(data);
  };
  // The logic for handling date filtering, event handling, etc. would similarly be implemented using useState and useEffect hooks, or context for more complex state logic.
  return (
    <div>
      {hasAccess && (
        <div>
          {/* Render based on access control */}
        </div>
      )}
      {/* Components related to BEQ and TEQ exceptions would go here, passed necessary props */}
    </div>
  );
};
export default Dashboard;
// As the specific implementations for components like TEQLineCtrl and BEQLineCtrl are not provided, inferring their details involves creating similarly structured components receiving corresponding props.