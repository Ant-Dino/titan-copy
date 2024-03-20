import React from 'react';
interface MyComponentProps {
  data: any; // Define a proper type based on the data structure
  fetchData: () => void;
const MyComponent: React.FC<MyComponentProps> = ({ data, fetchData }) => {
  React.useEffect(() => {
    fetchData();
  }, [fetchData]);
  return (
    <div>
      {data.map((item: any, index: number) => ( // Define a proper type for item
        <div key={index}>
          <h1>{item.title}</h1> // Example property, adjust based on actual data structure
          <p>{item.description}</p> // Example property, adjust based on actual data structure
        </div>
      ))}
    </div>
  );
export default MyComponent;