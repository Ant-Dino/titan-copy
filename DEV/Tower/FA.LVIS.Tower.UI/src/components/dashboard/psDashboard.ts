// Import necessary React and TypeScript modules
import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Assuming use of axios for HTTP requests

// Let's assume `psDashboardTemplate` is now a React component and has been exported from another file
import PsDashboardTemplate from './psDashboardTemplate'; 

// Define interfaces to represent the structure of data we expect to work with
interface UserInfo {
  ActivityRight: string;
  CanManageTEQ: boolean;
  CanManageBEQ: boolean;
  CanAccessReq: boolean;
}

interface ExceptionData {
  NewCount: number;
  ActiveCount: number;
  HoldCount: number;
  ArchiveCount: number;
  QueueCount: number;
}

// Convert DashboardController to a React component
const DashboardController: React.FC = () => {
  const [activityRight, setActivityRight] = useState<string>('');
  const [canManageTEQ, setCanManageTEQ] = useState<boolean>(false);
  const [canManageBEQ, setCanManageBEQ] = useState<boolean>(false);
  const [BEQSummaryList, setBEQSummaryList] = useState<ExceptionData[]>([]);
  const [TEQSummaryList, setTEQSummaryList] = useState<ExceptionData[]>([]);

// Fetch current user info initially and set up state accordingly
  useEffect(() => {
    const getCurrentUser = async () => {
      try {
        const response = await axios.get<UserInfo>('UserInfo/getUser');
        broadcastUserInfo(response.data); // Assuming this triggers some global state change, consider using Context or another state management library
        setActivityRight(response.data.ActivityRight);
        setCanManageTEQ(response.data.CanManageTEQ);
        setCanManageBEQ(response.data.CanManageBEQ);
        loadBEQExceptions();
        loadTEQExceptions();
} catch (error) {
        console.error('Failed to fetch user info', error);
}
};
    getCurrentUser();
}, []);

// Define function to load BEQ Exceptions
  const loadBEQExceptions = async () => {
    const response = await axios.get<ExceptionData[]>('Dashboard/BEQException/');
    setBEQSummaryList(response.data);
};

// Define function to load TEQ Exceptions
  const loadTEQExceptions = async () => {
    const response = await axios.get<ExceptionData[]>('Dashboard/TEQException/');
    setTEQSummaryList(response.data);
};

// Render
  return (
    <PsDashboardTemplate>
      <div>Activity Right: {activityRight}</div>
      <div>Can Manage TEQ: {canManageTEQ ? 'Yes' : 'No'}</div>
      <div>Can Manage BEQ: {canManageBEQ ? 'Yes' : 'No'}</div>
// Add more JSX as needed to reflect the rest of your component design
    </PsDashboardTemplate>
);
};

// Export the component
export default DashboardController;