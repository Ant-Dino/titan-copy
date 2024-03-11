import React, { useEffect, useState } from 'react';
import PsDashboardTemplate from './psDashboardTemplate'; // Assuming this is the React component conversion of the psDashboard template
import { getUserDetails, getBEQExceptions, getTEQExceptions } from '../services/UserInfoService'; // Mock services based on the provided AngularJS code

interface UserDetails {
  ActivityRight: string;
  CanManageTEQ: boolean;
  CanManageBEQ: boolean;
  CanAccessReq: boolean;
}

interface ExceptionData {
  // Define exception data structure based on AngularJS code expectations
}

const DashboardComponent: React.FC = () => {
  const [userDetails, setUserDetails] = useState<UserDetails | null>(null);
  const [BEQSummaryList, setBEQSummaryList] = useState<ExceptionData[]>([]);
  const [TEQSummaryList, setTEQSummaryList] = useState<ExceptionData[]>([]);

  useEffect(() => {
    getCurrentUser();
    // Example interval hooks are omitted due to complexity and scope. Consider useEffect with setInterval for similar functionality.
    }, []);

  const getCurrentUser = async () => {
    try {
      const response = await getUserDetails();
      setUserDetails(response);
      loadBEQExceptions();
      loadTEQExceptions();
    } catch (error) {
      console.error('Failed to fetch user details', error);
        }
    };

  const loadBEQExceptions = async () => {
    const data = await getBEQExceptions();
    setBEQSummaryList(data);
    };

  const loadTEQExceptions = async () => {
    const data = await getTEQExceptions();
    setTEQSummaryList(data);
    };

  return (
    <PsDashboardTemplate
      userDetails={userDetails}
      BEQSummaryList={BEQSummaryList}
      TEQSummaryList={TEQSummaryList}
        />
    );
};

export default DashboardComponent;