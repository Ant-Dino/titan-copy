

import React, { useState } from 'react';
const MyComponent: React.FC = () => {
  const [message, setMessage] = useState('Hello, AngularJS!');
  const updateMessage = () => {
    setMessage('Message updated!');
  };
  return (
    <div>
      <p>{message}</p>
      <button onClick={updateMessage}>Update Message</button>
    </div>
  );
};
export default MyComponent;