import React from 'react';
type Props = {
  fetchData: () => Promise<any>;
  onItemSelected: (itemId: number) => void;
  items: Array<{ id: number; name: string }>;
};
const MyComponent: React.FC<Props> = ({ fetchData, onItemSelected, items }) => {
  const [loading, setLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string | null>(null);
  React.useEffect(() => {
    const doFetch = async () => {
      setLoading(true);
      try {
        await fetchData();
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError('An error occurred while fetching data');
      }
    };
    doFetch();
  }, [fetchData]);
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <div>
      <ul>
        {items.map(item => (
          <li key={item.id} onClick={() => onItemSelected(item.id)}>
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default MyComponent;