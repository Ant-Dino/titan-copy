import React from 'react';
type MyComponentProps = {
  data?: any; // Consider specifying a more detailed type or interface depending on the data structure
  fetchData: () => Promise<any>; // Assume fetchData is an asynchronous function returning a promise
  onEvent?: (event: any) => void; // Specify a type for 'event' if possible
};
const MyComponent: React.FC<MyComponentProps> = ({ data, fetchData, onEvent }) => {
  const [localData, setLocalData] = React.useState<any>(data);
  React.useEffect(() => {
    const loadData = async () => {
      const dataFromFetch = await fetchData();
      setLocalData(dataFromFetch);
    };
    if (!data) {
      loadData();
    }
  }, [data, fetchData]);
  return (
    <div>
      {localData && (
        <div>
          {/* Replace with actual UI structure */}
          <p>Data loaded</p>
          {onEvent && (
            <button onClick={() => onEvent(localData)}>Trigger Event</button>
          )}
        </div>
      )}
      {!localData && <p>Loading...</p>}
    </div>
  );
};
export default MyComponent;