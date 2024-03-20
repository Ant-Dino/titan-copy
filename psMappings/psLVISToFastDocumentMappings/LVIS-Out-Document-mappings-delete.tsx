import React, { useState, useEffect } from 'react';
type MyComponentProps = {
  fetchData: () => Promise<any>;
  onDataReceived: (data: any) => void;
  title: string;
};
const MyComponent: React.FC<MyComponentProps> = ({ fetchData, onDataReceived, title }) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    setIsLoading(true);
    fetchData()
      .then((response) => {
        setData(response);
        onDataReceived(response);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [fetchData, onDataReceived]);
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  return (
    <div>
      <h2>{title}</h2>
      {data && (
        <div>
          {/* Render your data here */}
          <p>Data has been successfully fetched and displayed.</p>
        </div>
      )}
    </div>
  );
};
export default MyComponent;