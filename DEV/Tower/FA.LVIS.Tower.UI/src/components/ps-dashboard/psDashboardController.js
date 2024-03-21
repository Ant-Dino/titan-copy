import React, { useState, useEffect } from 'react';
import axios from 'axios';
const PsDashboard = () => {
  const [currentUser, setCurrentUser] = useState({});
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
  useEffect(() => {
    getCurrentUser();
  }, []);
  const getCurrentUser = async () => {
    try {
      const response = await axios.get('UserInfo/getUser');
      setCurrentUser(response.data);
      setActivityRight(response.data.ActivityRight);
      setCanManageTEQ(response.data.CanManageTEQ);
      setCanManageBEQ(response.data.CanManageBEQ);
      setCanManageAccessReq(response.data.CanAccessReq);
      loadBEQExceptions();
      loadTEQExceptions();
      if (response.data.CanManageBEQ) setHasBEQAccess(true);
      if (response.data.CanManageTEQ) setHasTEQAccess(true);
      if (['Admin', 'SuperAdmin'].includes(response.data.ActivityRight)) setHasAccess(true);
      if (!['Admin', 'SuperAdmin', 'User'].includes(response.data.ActivityRight)) setIsUser(false);
    } catch (error) {
      console.error(error);
    }
  };
  const loadBEQExceptions = async () => {
    const response = await axios.get('Dashboard/BEQException/');
    setBEQSummaryList(response.data);
  };
  const loadTEQExceptions = async () => {
    const response = await axios.get('Dashboard/TEQException/');
    setTEQSummaryList(response.data);
  };
  // The interval function for loading exceptions can be implemented using useEffect with a cleanup to clear the interval when the component unmounts. This is an example for TEQException:
  useEffect(() => {
    const intervalId = setInterval(() => {
      loadTEQExceptions();
    }, 900000); // 15 minutes
    return () => clearInterval(intervalId);
  }, []);
  // Repeat the same useEffect structure for BEQException if needed.
  // Add other functionalities as needed...
  return (
    <div>
      {/* Add your component structure here */}
    </div>
  );
};
export default PsDashboard;