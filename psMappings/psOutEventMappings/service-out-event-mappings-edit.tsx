import React from 'react';

type MyComponentProps = {
  data: any; // Specify a more detailed type based on actual data structure
  fetchData: () => void; // Assume fetchData is a function prop for fetching data
  onItemSelect: (itemId: number) => void; // Function prop for item selection handling
};

const MyComponent: React.FC<MyComponentProps> = ({ data, fetchData, onItemSelect }) => {
  React.useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleSelect = (itemId: number) => {
    onItemSelect(itemId);
  };

  return (
    <div>
      {data.map((item: any) => ( // Replace "any" with a more specific type for "item"
        <div key={item.id} onClick={() => handleSelect(item.id)}>
          {item.name}
        </div>
      ))}
    </div>
  );
};

export default MyComponent;