import React, { useState, useEffect } from 'react';
interface MyComponentProps {
  fetchData: () => Promise<any>; // Replace with the correct type for fetched data
  someFunction?: () => void;
  anotherProp?: any; // Replace with a more specific type as needed
const MyComponent: React.FC<MyComponentProps> = ({ fetchData, someFunction, anotherProp }) => {
  const [data, setData] = useState<any>(null); // Replace 'any' with a more specific type as needed
  const [isLoading, setIsLoading] = useState<boolean>(true);
  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      try {
        const result = await fetchData();
        setData(result);
      } catch (error) {
        console.error("Error fetching data: ", error);
      } finally {
        setIsLoading(false);
      }
    };
    
    loadData();
  }, [fetchData]);
  if (isLoading) {
    return <div>Loading...</div>;
  if (!data) {
    return <div>No data available</div>;
  return (
    <div>
      {/* Render your data-based UI here */}
      <button onClick={someFunction}>Click me</button>
      {/* Example of using anotherProp */}
      {anotherProp && <div>Another prop is used</div>}
    </div>
  );
export default MyComponent;