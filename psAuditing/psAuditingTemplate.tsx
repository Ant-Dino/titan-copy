import React, { useState, useEffect } from 'react';
interface DataProps {
  fetchData: () => Promise<any>; // Define the type according to what fetchData returns in your project
  controlMethod: () => void;
  someData: any; // Define this type according to the data you expect
}
const MyComponent: React.FC<DataProps> = ({ fetchData, controlMethod, someData }) => {
  const [data, setData] = useState<any>(null); // Define the state type according to your data
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);
  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      try {
        const result = await fetchData();
        setData(result);
        setIsLoading(false);
      } catch (error) {
        setError(error as Error);
        setIsLoading(false);
      }
    };
    loadData();
  }, [fetchData]);
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <h1>Data Loaded</h1>
      <button onClick={controlMethod}>Control Action</button>
      {/* Render your data here */}
      <pre>{JSON.stringify(someData, null, 2)}</pre>
      {/* Assume someData is also a piece of state you want to display */}
    </div>
  );
};
export default MyComponent;