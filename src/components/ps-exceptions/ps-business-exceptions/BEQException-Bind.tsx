import React from 'react';

interface Props {
  data: any; // Specify a more detailed type based on actual data structure
  fetchData: () => void;
}

const MyReactComponent: React.FC<Props> = ({ data, fetchData }) => {
  React.useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div>
      {data && data.map((item: any, index: number) => (
        <div key={index}>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default MyReactComponent;