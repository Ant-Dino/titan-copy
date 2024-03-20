import React, { useState, useEffect } from 'react';
interface MyComponentProps {
  fetchData: () => Promise<any>; // Example of a prop for data fetching
  someStateHandler: (newState: any) => void; // State handler method
}
const MyComponent: React.FC<MyComponentProps> = ({ fetchData, someStateHandler }) => {
  const [data, setData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      try {
        const result = await fetchData();
        setData(result);
        setIsLoading(false);
      } catch (err: any) {
        setError(err.message);
        setIsLoading(false);
      }
    };
    loadData();
  }, [fetchData]);
  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {data && (
        <div>
          {/* Display data here. For simplicity, assuming it's an array of items. */}
          {data.map((item: any, index: number) => (
            <div key={index}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      )}
      <button onClick={() => someStateHandler([])}>Clear State</button>
    </div>
  );
};
export default MyComponent;