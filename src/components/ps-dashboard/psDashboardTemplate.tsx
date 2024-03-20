import React, { useState, useEffect } from 'react';
interface MyComponentProps {
  fetchData: () => Promise<any>;
  handleStateChange: (data: any) => void;
  buttonText: string;
}
const MyComponent: React.FC<MyComponentProps> = ({ fetchData, handleStateChange, buttonText }) => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    setLoading(true);
    fetchData()
      .then(newData => {
        setData(newData);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, [fetchData]);
  const handleButtonClick = () => {
    if (data) {
      handleStateChange(data);
    }
  };
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  return (
    <div>
      <button onClick={handleButtonClick}>{buttonText}</button>
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  );
};
export default MyComponent;