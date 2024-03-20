import React, { useState, useEffect } from 'react';

type MyComponentProps = {
  fetchData: () => Promise<any>; // Assuming fetchData is a function that returns a promise of data
  handleOnClick: () => void; // onClick event handler
  title: string; // Example of a simple prop
}

const MyComponent: React.FC<MyComponentProps> = ({ fetchData, handleOnClick, title }) => {
  const [data, setData] = useState<any | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setIsLoading(true);
    fetchData()
      .then(response => {
        setData(response);
        setIsLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setIsLoading(false);
      });
  }, [fetchData]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>{title}</h1>
      {data && (
        <div>
          <button onClick={handleOnClick}>Click Me</button>
          {/* Assuming the data structure is an array of items */}
          <ul>
            {data.map((item: any, index: number) => (
              <li key={index}>{item.name} - {item.value}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default MyComponent;