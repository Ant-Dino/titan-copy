import React, { useState, useEffect } from 'react';
interface DataItem { // Define the data structure expected as props, adapt it according to your needs
  id: number;
  name: string;
  // other fields...
interface MyComponentProps {
  fetchData: () => Promise<DataItem[]>; // A function prop for data fetching
  handleSelect: (item: DataItem) => void; // A function prop to handle item selection
  title: string; // A simple string prop for title
const MyComponent: React.FC<MyComponentProps> = ({ fetchData, handleSelect, title }) => {
  const [data, setData] = useState<DataItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      try {
        const result = await fetchData();
        setData(result);
        setIsLoading(false);
      } catch (error) {
        console.error('Fetching data failed:', error);
        setError('Failed to load data.');
        setIsLoading(false);
      }
    };
    loadData();
  }, [fetchData]);
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  return (
    <div>
      <h1>{title}</h1>
      <ul>
        {data.map(item => (
          <li key={item.id} onClick={() => handleSelect(item)}>
            {item.name}
            {/* Render other fields as necessary */}
          </li>
        ))}
      </ul>
    </div>
  );
export default MyComponent;