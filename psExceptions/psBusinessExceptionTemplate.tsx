import React, { useState, useEffect } from 'react';
interface YourComponentProps {
  fetchData: () => Promise<any>; // Assuming fetchData is a promise-based method
  onEvent: (data: any) => void;
}
const YourComponent: React.FC<YourComponentProps> = ({ fetchData, onEvent }) => {
  const [data, setData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      try {
        const result = await fetchData();
        setData(result);
        setError(null);
      } catch (err) {
        setError('An error occurred');
        setData(null);
      } finally {
        setIsLoading(false);
      }
    };
    loadData();
  }, [fetchData]);
  const handleEvent = (eventData: any) => {
    if (onEvent) {
      onEvent(eventData);
    }
  };
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>{error}</div>;
  }
  return (
    <div>
      {/* Assuming data is an array for demonstration */}
      {data && data.map((item: any, index: number) => (
        <div key={index} onClick={() => handleEvent(item)}>
          {item.name} {/* Example of displaying item name */}
        </div>
      ))}
    </div>
  );
};
export default YourComponent;