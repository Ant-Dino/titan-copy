import React, { useState, useEffect } from 'react';
interface MyComponentProps {
  fetchData: () => Promise<any>; // A placeholder for your data fetching function, replace any with your data type
  onSomeEvent?: () => void; // Optional event handler prop, for example
}
const MyComponent: React.FC<MyComponentProps> = ({ fetchData, onSomeEvent }) => {
  const [data, setData] = useState<any>(null); // Replace any with your data type
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    setIsLoading(true);
    fetchData()
      .then((data) => {
        setData(data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error.toString());
        setIsLoading(false);
      });
  }, [fetchData]);
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  return (
    <div>
      <h1>Data Loaded</h1>
      {/* Replace this with your data display */}
      <pre>{JSON.stringify(data, null, 2)}</pre>
      {onSomeEvent && <button onClick={onSomeEvent}>Trigger Event</button>}
    </div>
  );
};
export default MyComponent;