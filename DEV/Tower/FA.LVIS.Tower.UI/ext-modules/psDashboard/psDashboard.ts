import React, { useState, useEffect, useContext, useCallback } from 'react';
import axios from 'axios';
import { UserContext } from './UserContext'; // Make sure to create a context for global state

function Dashboard() {
  const [currentUser, setCurrentUser] = useState({});
  const [beqSummaryList, setBeqSummaryList] = useState([]);
  const [teqSummaryList, setTeqSummaryList] = useState([]);
  const [hasAccess, setHasAccess] = useState(false);
  const [hasBEQAccess, setHasBEQAccess] = useState(false);
  const [hasTEQAccess, setHasTEQAccess] = useState(false);

  const { user, setUser } = useContext(UserContext); // Assuming UserContext is set up for global user state

  const getCurrentUser = useCallback(() => {
    UserInfo.getUser() // Replace UserInfo.getUser() with your axios call
      .then((response) => {
        setUser(response);
        setCurrentUser(response);
        setHasAccess(['Admin', 'SuperAdmin'].includes(response.ActivityRight));
        setHasBEQAccess(response.CanManageBEQ);
        setHasTEQAccess(response.CanManageTEQ);
        loadBEQExceptions();
        loadTEQExceptions();
      })
      .catch((error) => console.error(error));
  }, [setUser]);

  useEffect(() => {
    const intervalBEQ = setInterval(() => {
      loadBEQExceptions();
    }, 900000); // every 15 minutes

    const intervalTEQ = setInterval(() => {
      loadTEQExceptions();
    }, 900000); // every 15 minutes

    return () => {
      clearInterval(intervalBEQ);
      clearInterval(intervalTEQ);
    };
  }, []);

  const loadBEQExceptions = () => {
    axios.get('Dashboard/BEQException/')
      .then(response => setBeqSummaryList(response.data))
      .catch(error => console.error(error));
  };

  const loadTEQExceptions = () => {
    axios.get('Dashboard/TEQException/')
      .then(response => setTeqSummaryList(response.data))
      .catch(error => console.error(error));
  };

  useEffect(() => {
    getCurrentUser();
  }, [getCurrentUser]);

  // Code for TEQLineCtrl and BEQLineCtrl goes here or in separate components
  // Make sure to pass necessary props or use context for shared state

  return (
    <div>
      {/* Render your UI here using state variables */}
    </div>
  );
}

export default Dashboard;