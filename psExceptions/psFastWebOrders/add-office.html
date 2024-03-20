import React, { useState, useEffect } from 'react';
interface Props {
  fetchData: () => Promise<any>;
  onSubmit: (data: any) => void;
  title: string;
}
const MyDataComponent: React.FC<Props> = ({ fetchData, onSubmit, title }) => {
  const [data, setData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    setIsLoading(true);
    fetchData()
      .then(data => {
        setData(data);
        setIsLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setIsLoading(false);
      });
  }, [fetchData]);
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    const dataObject = Object.fromEntries(formData.entries());
    onSubmit(dataObject);
  };
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  return (
    <div>
      <h1>{title}</h1>
      <form onSubmit={handleSubmit}>
        {data.map((item, index) => 
          <div key={index}>
            <label>
              {item.label}:
              <input name={item.name} defaultValue={item.value} required />
            </label>
          </div>
        )}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default MyDataComponent;