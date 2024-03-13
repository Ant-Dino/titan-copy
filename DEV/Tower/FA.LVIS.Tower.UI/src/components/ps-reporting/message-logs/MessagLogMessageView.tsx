import React, { useState } from 'react';
type Item = {
  id: number;
  name: string;
};
const MyListComponent: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [itemName, setItemName] = useState('');
  const handleAddItem = () => {
    const newItem: Item = {
      id: items.length + 1,
      name: itemName,
    };
    setItems([...items, newItem]);
    setItemName('');
  };
  return (
    <div>
      <ul>
        {items.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      <input
        type="text"
        value={itemName}
        onChange={e => setItemName(e.target.value)}
      />
      <button onClick={handleAddItem}>Add Item</button>
    </div>
  );
};
export default MyListComponent;