import React from 'react';
type MyComponentProps = {
  fetchData: () => Promise<any>;
  handleStateChange: (newState: any) => void;
  controlMethods: {
    open: () => void;
    close: () => void;
  };
  data: any;
};
export const MyComponent: React.FC<MyComponentProps> = ({ fetchData, handleStateChange, controlMethods, data }) => {
  const [componentData, setComponentData] = React.useState(data);
  React.useEffect(() => {
    fetchData().then((data) => {
      setComponentData(data);
      handleStateChange(data);
    });
  }, [fetchData, handleStateChange]);
  const handleOpen = () => {
    controlMethods.open();
  };
  const handleClose = () => {
    controlMethods.close();
  };
  return (
    <div>
      <button onClick={handleOpen}>Open</button>
      <button onClick={handleClose}>Close</button>
      <div>
        {componentData && componentData.map((item, index) => (
          <div key={index}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};