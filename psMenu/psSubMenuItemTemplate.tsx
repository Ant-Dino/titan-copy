import React, { useState, useEffect } from 'react';
interface DataProps {
  fetchData: () => Promise<any>; // Example function to fetch data, replace any type with your data type
  someFunction?: () => void; // Example optional function prop for any UI control methods
  data?: any; // Your incoming data prop, replace any with your data type
const MyReactComponent: React.FC<DataProps> = ({ fetchData, someFunction, data }) => {
  const [localData, setLocalData] = useState<any>(); // Initialize local state, replace any with your data type
  useEffect(() => {
    const loadData = async () => {
      if (!data) { // Checking if data is passed as prop
        const fetchedData = await fetchData(); // Fetch data if not provided
        setLocalData(fetchedData);
      } else {
        setLocalData(data); // Use provided data
      }
    };
    
    loadData();
  }, [data, fetchData]);
  return (
    <div>
      {localData ? (
        <div>
          {/* Example content - tailor according to your data structure */}
          <h1>Data Loaded</h1>
          <p>{JSON.stringify(localData)}</p>
          {someFunction && (
            <button onClick={someFunction}>Click Me</button>
          )}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
export default MyReactComponent;