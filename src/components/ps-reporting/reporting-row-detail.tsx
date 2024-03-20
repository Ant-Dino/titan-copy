import React from 'react';
interface MyComponentProps {
  data: any; // Specify a more detailed type based on the expected data
  fetchData: () => void;
  handleStateChange: (newState: any) => void; // Specify a more detailed type for newState
}
const MyComponent: React.FC<MyComponentProps> = ({ data, fetchData, handleStateChange }) => {
  React.useEffect(() => {
    fetchData();
  }, [fetchData]);
  const handleItemClick = (item: any) => { // Define a more specific type for item
    console.log('Item clicked', item); // Replace with actual implementation
    handleStateChange(item);
  };
  return (
    <div>
      {data.map((item: any, index: number) => ( // Define a more specific type for item
        <div key={index} onClick={() => handleItemClick(item)}>
          {item.name} {/* Replace 'name' with the actual property you need to display */}
        </div>
      ))}
    </div>
  );
};
export default MyComponent;