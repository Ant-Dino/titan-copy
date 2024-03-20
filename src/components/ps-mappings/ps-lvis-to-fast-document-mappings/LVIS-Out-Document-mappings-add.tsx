import React, { useState, useEffect } from 'react';
interface MyComponentProps {
  fetchData: () => Promise<any>; // Assuming fetchData returns a promise
  onSubmit: (data: any) => void;
  title: string;
const MyComponent: React.FC<MyComponentProps> = ({ fetchData, onSubmit, title }) => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      try {
        const result = await fetchData();
        setData(result);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, [fetchData]);
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!data) return;
    onSubmit(data);
  };
  if (loading) return <div>Loading...</div>;
  return (
    <div>
      <h1>{title}</h1>
      <form onSubmit={handleFormSubmit}>
        <label>
          Data:
          <input 
            type="text" 
            value={data} 
            onChange={(e) => setData(e.target.value)} 
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
export default MyComponent;