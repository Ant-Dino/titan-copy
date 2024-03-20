import React, { useState, useEffect } from 'react';
interface MyComponentProps {
  fetchData: () => Promise<any>;
  someStateHandler: (state: any) => void;
  someUiMethod: () => void;
const MyReactComponent: React.FC<MyComponentProps> = ({
  fetchData,
  someStateHandler,
  someUiMethod,
  const [data, setData] = useState<any>(null);
  useEffect(() => {
    const getData = async () => {
      const result = await fetchData();
      setData(result);
    };
    getData();
  }, [fetchData]);
  return (
    <div>
      <button onClick={someUiMethod}>Click me</button>
      {data && (
        <div>
          <p>Data fetched successfully!</p>
          {Object.keys(data).map((key) => (
            <div key={key}>
              <span>{key}: </span>
              <span>{data[key]}</span>
            </div>
          ))}
        </div>
      )}
      {!data && (
        <p>Loading data...</p>
      )}
    </div>
  );
export default MyReactComponent;