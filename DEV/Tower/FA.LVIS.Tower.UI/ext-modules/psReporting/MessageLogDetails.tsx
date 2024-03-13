

import React, { useState } from 'react';
const SimpleComponent: React.FC = () => {
  const [message, setMessage] = useState<string>("Hello, AngularJS!");
  const updateMessage = () => {
    setMessage("Message updated!");
  };
  return (
    <div>
      <p>{message}</p>
      <button onClick={updateMessage}>Update Message</button>
    </div>
  );
}
export default SimpleComponent;