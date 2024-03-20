import React, { useState, useEffect } from 'react';
// Assuming the data to be received via props is of the following type
interface DataProps {
  fetchData: () => Promise<any>; // Function to fetch data
  title: string; // Title to be displayed
  items: any[]; // Items to be displayed, assuming an array of objects but can be any type
}
const MyReactComponent: React.FC<DataProps> = ({ fetchData, title, items }) => {
  const [data, setData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      try {
        const result = await fetchData();
        setData(result);
      } catch (error) {
        console.error('Error fetching data: ', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, [fetchData]);
  return (
    <div>
      <h1>{title}</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {data.map((item, index) => (
            <li key={index}>{item.name}</li> // Assuming each item has a 'name' property
          ))}
        </ul>
      )}
    </div>
  );
};
export default MyReactComponent;