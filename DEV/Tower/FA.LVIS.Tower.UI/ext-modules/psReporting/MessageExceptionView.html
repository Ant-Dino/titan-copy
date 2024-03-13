
import React, { useState, useEffect } from 'react';
type User = {
  id: number;
  name: string;
type Props = {
  fetchUsers: () => Promise<User[]>;
const UsersComponent: React.FC<Props> = ({ fetchUsers }) => {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    setIsLoading(true);
    fetchUsers()
      .then((fetchedUsers) => {
        setUsers(fetchedUsers);
        setIsLoading(false);
      .catch((err) => {
        setError('Failed to fetch users.');
        setIsLoading(false);
  if (isLoading) {
    return <div>Loading...</div>;
  if (error) {
    return <div>{error}</div>;
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
export default UsersComponent;