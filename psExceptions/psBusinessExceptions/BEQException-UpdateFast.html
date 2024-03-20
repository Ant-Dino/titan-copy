import React, { useState, useEffect } from 'react';
// Assuming the AngularJS template was meant for displaying a list of items and handling a click event.
// This is a simplified example to demonstrate the conversion process.
interface Item {
  id: number;
  name: string;
}
interface ItemListProps {
  getItems: () => Promise<Item[]>; // Function to fetch items, pretending it's replacing an AngularJS service
  onItemClick: (itemId: number) => void; // Function to handle item clicks
}
const ItemList: React.FC<ItemListProps> = ({ getItems, onItemClick }) => {
  const [items, setItems] = useState<Item[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  useEffect(() => {
    const fetchItems = async () => {
      try {
        setIsLoading(true);
        const itemsFromServer = await getItems();
        setItems(itemsFromServer);
      } catch (error) {
        console.error("Failed to fetch items", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchItems();
  }, [getItems]);
  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {items.map((item) => (
            <li key={item.id} onClick={() => onItemClick(item.id)}>
              {item.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default ItemList;