import React, { useState, useEffect } from 'react';

type Props = {
  fetchData: () => Promise<any>; // Assuming fetchData returns a promise.
  onItemSelected: (itemId: number) => void;
};

const MyReactComponent: React.FC<Props> = ({ fetchData, onItemSelected }) => {
  const [items, setItems] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchData();
        setItems(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    getData();
  }, [fetchData]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {items.map((item) => (
        <div key={item.id} onClick={() => onItemSelected(item.id)}>
          {item.name}
        </div>
      ))}
    </div>
  );
};

export default MyReactComponent;