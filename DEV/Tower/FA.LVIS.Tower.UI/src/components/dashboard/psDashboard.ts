import React, { useState, useEffect } from 'react';
import { UserInfo, getBEQException, getTEQException, getGraphicalBEQException, getGraphicalTEQException } from './services'; // Assuming these are the adapted services for API calls
import psDashboardTemplate from './psDashboardTemplate'; // Importing the psDashboardTemplate as React component

const useCurrentUser = () => {
  const [currentUser, setCurrentUser] = useState<any>(null);
  
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const user = await UserInfo.getUser();
        setCurrentUser(user);
      } catch (error) {
        console.error('Failed to fetch user', error);
      }
    };
    
    fetchUser();
  }, []);
  
  return currentUser;
};

const useBEQExceptions = () => {
  const [BEQExceptions, setBEQExceptions] = useState([]);
  
  useEffect(() => {
    const fetchBEQExceptions = async () => {
      const data = await getBEQException();
      setBEQExceptions(data);
    };
    
    fetchBEQExceptions();
  }, []);
  
  return BEQExceptions;
};

const useTEQExceptions = () => {
  const [TEQExceptions, setTEQExceptions] = useState([]);
  
  useEffect(() => {
    const fetchTEQExceptions = async () => {
      const data = await getTEQException();
      setTEQExceptions(data);
    };
    
    fetchTEQExceptions();
  }, []);
  
  return TEQExceptions;
};

interface DashboardProps {
  // Define props if needed
}

const DashboardComponent: React.FC<DashboardProps> = (props) => {
  const currentUser = useCurrentUser();
  const BEQExceptions = useBEQExceptions();
  const TEQExceptions = useTEQExceptions();
  
  // Additional logic or hooks can be added here, e.g., for handling intervals or more complex state
  
  return (
    <div>
      {psDashboardTemplate({ currentUser, BEQExceptions, TEQExceptions })}
      {/* Render more components or logic if necessary */}
    </div>
  );
};

export default DashboardComponent;