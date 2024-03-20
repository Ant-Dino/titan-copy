import React, { useState, useEffect } from 'react';
type Props = {
  fetchData: () => Promise<any>;
  onSubmit: (data: any) => void;
  title: string;
const MyReactComponent: React.FC<Props> = ({ fetchData, onSubmit, title }) => {
  const [data, setData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      try {
        const result = await fetchData();
        setData(result);
        setIsLoading(false);
      } catch (error) {
        console.error('Failed to fetch data: ', error);
        setIsLoading(false);
      }
    };
    loadData();
  }, [fetchData]);
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit(data);
  return (
    <div>
      <h1>{title}</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            {/* Display or interact with your data here */}
            <pre>{JSON.stringify(data, null, 2)}</pre>
          </div>
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
export default MyReactComponent;