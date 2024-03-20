import React from 'react';
type MyComponentProps = {
  data: any; // Define the proper type for 'data'
  fetchData: () => void;
  onSomeEvent: (event: any) => void; // Define the proper type for 'event'
const MyComponent: React.FC<MyComponentProps> = ({ data, fetchData, onSomeEvent }) => {

  React.useEffect(() => {
    fetchData();
  }, [fetchData]);
  const handleEvent = (event: any) => { // Define the proper type for 'event'
    onSomeEvent(event);
  };
  return (
    <div>
      {data.map((item: any, index: number) => ( // Define the proper type for 'item'
        <div key={index} onClick={() => handleEvent(item)}>
          {/* Render your UI based on item */}
        </div>
      ))}
    </div>
  );
export default MyComponent;