import React, { useState, useEffect } from 'react';
interface MyComponentProps {
  fetchData: () => Promise<any>; // This is a placeholder type, replace 'any' with actual data type
  onActionComplete: (data: any) => void;
}
const MyComponent: React.FC<MyComponentProps> = ({ fetchData, onActionComplete }) => {
  const [data, setData] = useState<any>(null); // This is a placeholder type, replace 'any' with actual data type
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    setIsLoading(true);
    fetchData()
      .then(response => {
        setData(response);
        setIsLoading(false);
      })
      .catch(err => {
        setError(err.toString());
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
      <div>
        {data && (
          <ul>
            {/* Replace the following with actual data rendering logic */}
            {data.map((item: any, index: number) => ( // Replace 'any' with the actual data type
              <li key={index}>{JSON.stringify(item)}</li> // Customize rendering as necessary
            ))}
          </ul>
        )}
        <button onClick={() => onActionComplete(data)}>Complete Action</button>
      </div>
    </div>
  );
};
export default MyComponent;