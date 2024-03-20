import React, { useState, useEffect } from 'react';
type MyComponentProps = {
  fetchData: () => Promise<any>; // Type definition for a prop function to fetch data
  handleStateChange: (newState: any) => void; // Type definition for a prop function to handle state changes
  toggleUIControl: () => void; // Type definition for a prop function to toggle some UI control
};
const MyComponent: React.FC<MyComponentProps> = ({ fetchData, handleStateChange, toggleUIControl }) => {
  const [data, setData] = useState<any[] | null>(null);
  
  useEffect(() => {
    const loadData = async () => {
      try {
        const result = await fetchData();
        setData(result);
        handleStateChange(result); // Assuming we want to propagate the state change upwards
      } catch (error) {
        console.error("Failed to fetch data", error);
      }
    };
    
    loadData();
  }, [fetchData, handleStateChange]);
  return (
    <div>
      <button onClick={toggleUIControl}>Toggle Control</button>
      {data ? (
        <ul>
          {data.map((item, index) => (
            <li key={index}>{item}</li> 
          ))}
        </ul>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};
export default MyComponent;