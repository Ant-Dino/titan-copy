import React, { useState, useEffect } from 'react';
interface DataProps {
  dataFetching: () => Promise<any>; // This simulates the data fetching function which could be passed from parent component
  someData?: any; // This simulates any data that might be passed directly as a prop
  onSomeEvent?: () => void; // This simulates a function prop for handling some events
}
const MyReactComponent: React.FC<DataProps> = ({ dataFetching, someData, onSomeEvent }) => {
  const [data, setData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const result = await dataFetching();
        setData(result);
      } catch (err) {
        setError('An error occurred while fetching data');
      }
      setIsLoading(false);
    };

    fetchData();
  }, [dataFetching]);
  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div>
          <h2>Data has been loaded successfully</h2>
          <div>{JSON.stringify(data)}</div>
          <button onClick={onSomeEvent}>Do Something</button>
        </div>
      )}
    </div>
  );
};
export default MyReactComponent;