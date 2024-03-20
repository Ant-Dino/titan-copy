import React, { useState, useEffect } from 'react';

interface MyComponentProps {
  fetchData: () => Promise<any>;  // Type should be adjusted to the expected data structure
  onActionTrigger: (id: number) => void;
  title: string;
  initialItems: any[];  // Type should be adjusted to the expected data structure
}

const MyComponent: React.FC<MyComponentProps> = ({ fetchData, onActionTrigger, title, initialItems }) => {
  const [items, setItems] = useState(initialItems);

  useEffect(() => {
    fetchData().then(data => {
      setItems(data);
    });
  }, [fetchData]);

  return (
    <div>
      <h1>{title}</h1>
      <ul>
        {items.map((item, index) => (
          <li key={index} onClick={() => onActionTrigger(item.id)}>
            {item.name} - Click Me
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MyComponent;