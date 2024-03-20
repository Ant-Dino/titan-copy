import React, { useState, useEffect } from 'react';
type MyComponentProps = {
  fetchData: () => Promise<any[]>; // Assume a function returning a promise of an array
  onItemClick: (item: any) => void;
  title: string;
const MyComponent: React.FC<MyComponentProps> = ({ fetchData, onItemClick, title }) => {
  const [items, setItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetchData()
      .then(data => {
        setItems(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Fetching data failed', error);
        setLoading(false);
      });
  }, [fetchData]);
  if (loading) {
    return <div>Loading...</div>;
  return (
    <div>
      <h3>{title}</h3>
      <ul>
        {items.map((item, index) => (
          <li key={index} onClick={() => onItemClick(item)}>
            {item.name} {/* Assuming items have a name property */}
          </li>
        ))}
      </ul>
    </div>
  );
export default MyComponent;