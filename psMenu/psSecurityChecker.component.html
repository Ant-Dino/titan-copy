import React, { useState, useEffect } from 'react';
interface YourComponentProps {
  fetchData: () => Promise<any>; // assuming fetchData is a function returning a promise
  // Add other props as per your requirement
const YourComponent: React.FC<YourComponentProps> = ({ fetchData }) => {
  const [data, setData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  useEffect(() => {
    setIsLoading(true);
    fetchData()
      .then((data) => {
        setData(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('There was an error!', error);
        setError('Failed to fetch data.');
        setIsLoading(false);
      });
  }, [fetchData]);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>{error}</div>;
  }
  return (
    <div>
      {/* Render your data here */}
      <div>Data loaded successfully</div>
      {/* Map through your data and display them */}
    </div>
  );
export default YourComponent;