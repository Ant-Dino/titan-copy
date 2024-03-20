import React, { useState, useEffect } from 'react';
interface MyComponentProps {
  fetchData: () => Promise<any>;
  handleStateChange: (newState: any) => void;
  controlMethod: () => void;
const MyComponent = ({ fetchData, handleStateChange, controlMethod }: MyComponentProps) => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      try {
        const result = await fetchData();
        setData(result);
        handleStateChange({ fetched: true });
      } catch (error) {
        console.error('Error fetching data: ', error);
        handleStateChange({ fetched: false, error });
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, [fetchData, handleStateChange]);
  if (loading) return <div>Loading...</div>;
  return (
    <div>
      <h1>Data Fetched</h1>
      <button onClick={controlMethod}>Control Action</button>
      {data && (
        <ul>
          {data.map((item: any) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
export default MyComponent;