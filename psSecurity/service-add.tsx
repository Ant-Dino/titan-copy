import React, { useState, useEffect } from 'react';
type MyComponentProps = {
  fetchData: () => Promise<any>; // Example of a function prop to fetch data, adjust the type accordingly.
  handleSelect: (item: any) => void; // Example of a function prop for handling selections.
  data?: any[]; // Optionally, data could be received as a prop.
};
const MyComponent: React.FC<MyComponentProps> = ({ fetchData, handleSelect, data }) => {
  const [items, setItems] = useState<any[]>([]);
  // Effect to fetch data when the component mounts or fetchData changes.
  useEffect(() => {
    if (!data) {
      fetchData().then(setItems).catch(console.error);
    }
  }, [fetchData, data]);
  const handleItemClick = (item: any) => {
    // Custom logic when an item is clicked.
    handleSelect(item);
  };
  return (
    <div>
      <ul>
        {(data || items).map((item, index) => (
          <li key={index} onClick={() => handleItemClick(item)}>
            {item.name} {/* Adjust item property based on actual data structure */}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default MyComponent;