

import React, { useState, useEffect } from 'react';
interface User {
  name: string;
  email: string;
interface UserDetailsProps {
  fetchUserData: () => Promise<User>;
const UserDetails: React.FC<UserDetailsProps> = ({ fetchUserData }) => {
  const [user, setUser] = useState<User | null>(null);
  // Equivalent to AngularJS's $onInit, using React useEffect hook for initial data fetch
  useEffect(() => {
    const fetchData = async () => {
      const userData = await fetchUserData();
      setUser(userData);
    };

    fetchData();
  }, [fetchUserData]); // Dependency array ensures this effect runs only when fetchUserData changes
  return (
    <div>
      <h2>User Details</h2>
      {user ? (
        <>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
        </>
      ) : (
        <p>Loading user data...</p>
      )}
      <button onClick={() => fetchUserData().then(setUser)}>Refresh Data</button>
    </div>
  );
};
export default UserDetails;