
import React, { useState, useEffect } from 'react';
interface User {
  id: number;
  name: string;
  email: string;
interface UserProps {
  fetchUsers: () => Promise<User[]>; // Assuming this function is passed via props
const UsersComponent: React.FC<UserProps> = ({ fetchUsers }) => {
  const [users, setUsers] = useState<User[]>([]);
  useEffect(() => {
    const loadUsers = async () => {
      try {
        const fetchedUsers = await fetchUsers();
        setUsers(fetchedUsers);
      } catch (error) {
        console.error('Failed to fetch users:', error);
      }
    };
    loadUsers();
  }, [fetchUsers]);
  return (
    <div>
      {users.map(user => (
        <div key={user.id}>
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
};
export default UsersComponent;