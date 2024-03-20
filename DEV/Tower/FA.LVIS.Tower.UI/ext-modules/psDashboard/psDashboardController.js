import React, { useState, useEffect } from 'react';
import axios from 'axios';
// Assuming UserInfo equivalent exists or API utility for fetching user info
// Import a chart library if you used charts in your AngularJS app, for example, Chart.js
// import { Chart } from 'react-chartjs-2';
const Dashboard = () => {
  const [currentUser, setCurrentUser] = useState({});
  const [canManageTEQ, setCanManageTEQ] = useState(false);
  const [canManageBEQ, setCanManageBEQ] = useState(false);
  const [hasAccess, setHasAccess] = useState(false);
  const [hasBEQAccess, setHasBEQAccess] = useState(false);
  const [hasTEQAccess, setHasTEQAccess] = useState(false);
  const [BEQSummaryList, setBEQSummaryList] = useState([]);
  const [TEQSummaryList, setTEQSummaryList] = useState([]);
  const [TEQGraphData, setTEQGraphData] = useState({ labels1: [], data1: [], data2: [], data3: [], data4: [], data5: [] });
  const [BEQGraphData, setBEQGraphData] = useState({ labels1: [], data1: [], data2: [], data3: [], data4: [], data5: [] });
  useEffect(() => {
    UserInfo.getUser().then(response => {
      setCurrentUser(response);
      setCanManageTEQ(response.CanManageTEQ);
      setCanManageBEQ(response.CanManageBEQ);
      loadBEQExceptions();
      loadTEQExceptions();
      const access = response.ActivityRight === 'Admin' || response.ActivityRight === 'SuperAdmin';
      setHasAccess(access);
      setHasBEQAccess(!!response.CanManageBEQ);
      setHasTEQAccess(!!response.CanManageTEQ);
    });
  }, []);
  const loadBEQExceptions = () => {
    axios.get('Dashboard/BEQException/')
      .then((response) => {
        setBEQSummaryList(response.data);
      })
      .catch((error) => console.error(error));
  };
  const loadTEQExceptions = () => {
    axios.get('Dashboard/TEQException/')
      .then((response) => {
        setTEQSummaryList(response.data);
      })
      .catch((error) => console.error(error));
  };
  // Use similar approaches to load and manage TEQ and BEQ graph data
  
  // Render components based on your logic above. Example for Dashboard Lists:
  return (
    <div>
      <h2>Dashboard</h2>
      {canManageTEQ && <div>TEQ Management Area</div>}
      {canManageBEQ && <div>BEQ Management Area</div>}
      {hasAccess && (
        <div>
          <h3>BEQ Summary List</h3>
          {BEQSummaryList.map((item, index) => (
            <div key={index}>{item.name}</div>
          ))}
          <h3>TEQ Summary List</h3>
          {TEQSummaryList.map((item, index) => (
            <div key={index}>{item.name}</div>
          ))}
        </div>
      )}
    </div>
  );
};
export default Dashboard;