import React, { useState, useEffect } from 'react';
interface YourComponentProps {
  fetchData: () => Promise<any>; // assuming fetchData is a prop for fetching data
  onSomeEvent: (data: any) => void; // assuming this is a callback prop for some event handling
}
const YourComponent: React.FC<YourComponentProps> = ({ fetchData, onSomeEvent }) => {
  const [data, setData] = useState<any>(null);
  useEffect(() => {
    const loadData = async () => {
      try {
        const result = await fetchData();
        setData(result);
      } catch (error) {
        console.error('Failed to fetch data', error);
      }
    };
    loadData();
  }, [fetchData]);
  const handleEvent = () => {
    if (data) {
      onSomeEvent(data);
    }
  };
  if (!data) return <div>Loading...</div>;
  return (
    <div>
      <h1>Data Viewer</h1>
      <div onClick={handleEvent}>
        {data.map((item: any, index: number) => (
          <div key={index}>
            {/* Assuming 'item' has 'name' and 'value' properties */}
            <h2>{item.name}</h2>
            <p>{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default YourComponent;