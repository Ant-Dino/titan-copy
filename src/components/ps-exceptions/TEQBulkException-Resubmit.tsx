import React, { useState, useEffect } from 'react';
type DataProps = {
  fetchData: () => Promise<any>; // Assuming fetchData returns a promise of any data structure
};
const MyComponent: React.FC<DataProps> = ({ fetchData }) => {
  const [data, setData] = useState<any | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    const fetchMyData = async () => {
      setIsLoading(true);
      try {
        const result = await fetchData();
        setData(result);
        setIsLoading(false);
      } catch (err) {
        setError('An error occurred while fetching data');
        setIsLoading(false);
      }
    };
    fetchMyData();
  }, [fetchData]);
  if (isLoading) return <div> Loading... </div>;
  if (error) return <div>Error: {error}</div>;
  // Assuming the data is an array of items for simplification
  return (
    <div>
      {data && data.map((item: any, index: number) => (
        <div key={index}>
          {/* Rendering some data, example: */}
          <p>{item.name}</p>
        </div>
      ))}
    </div>
  );
};
export default MyComponent;