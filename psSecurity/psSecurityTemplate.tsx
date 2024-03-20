import React, { useState, useEffect } from 'react';
interface MyComponentProps {
  fetchData: () => Promise<any>; // Assume this method fetches the needed data
  someFunction: () => void; // Another function prop, could be for handling UI actions like click
}
const MyComponent: React.FC<MyComponentProps> = ({ fetchData, someFunction }) => {
  const [data, setData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    setIsLoading(true);
    fetchData()
      .then((response) => {
        setData(response);
        setIsLoading(false);
      })
      .catch((err) => {
        setError('An error occurred while fetching data');
        setIsLoading(false);
      });
  }, [fetchData]);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <div>
      <h1>Data Loaded</h1>
      <button onClick={someFunction}>Click Me</button>
      <div>{JSON.stringify(data)}</div>
    </div>
  );
};
export default MyComponent;