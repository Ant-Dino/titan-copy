import React, { useState, useEffect } from 'react';
interface MyComponentProps {
  fetchData: () => Promise<any>;
  handleStateChange: (newState: any) => void;
  title: string;
}
const MyComponent: React.FC<MyComponentProps> = ({ fetchData, handleStateChange, title }) => {
  const [data, setData] = useState<any>(null);
  useEffect(() => {
    const loadData = async () => {
      const result = await fetchData();
      setData(result);
      handleStateChange(result);
    };
    loadData();
  }, [fetchData, handleStateChange]);
  return (
    <div>
      <h1>{title}</h1>
      {data ? (
        <div>
          {data.map((item: any, index: number) => (
            <p key={index}>{item}</p>
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};
export default MyComponent;