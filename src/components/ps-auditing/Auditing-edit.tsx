import React, { useState, useEffect } from 'react';
interface Props {
  fetchData: () => Promise<any>;
  someFunction: () => void;
  data: any; // Specify a more detailed type based on the actual data structure
}
const MyReactComponent: React.FC<Props> = ({ fetchData, someFunction, data }) => {
  const [localData, setLocalData] = useState<any>(null); // Specify a more detailed type if possible
  useEffect(() => {
    fetchData().then((data) => {
      setLocalData(data);
    }).catch((error) => {
      console.error("An error occurred while fetching data:", error);
    });
  }, [fetchData]);
  return (
    <div>
      <button onClick={someFunction}>Click Me</button>
      <div>
        {localData ? (
          <ul>
            {localData.map((item: any, index: number) => ( // Specify a more detailed type for item if possible
              <li key={index}>{item.name}</li> // Assuming 'name' is a field in your data objects
            ))}
          </ul>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};
export default MyReactComponent;