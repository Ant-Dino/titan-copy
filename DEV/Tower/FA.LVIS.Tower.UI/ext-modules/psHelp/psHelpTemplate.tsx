import React, { useState } from 'react';
// This is the PsHelpComponent in React using TypeScript
const PsHelpComponent: React.FC = () => {
  // State declaration for maintaining help text visibility
  const [showHelp, setShowHelp] = useState<boolean>(false);
  // Function to toggle help text visibility
  const toggleHelp = () => {
    setShowHelp(!showHelp);
  };
  return (
    <div>
      <button onClick={toggleHelp}>
        {showHelp ? 'Hide Help' : 'Show Help'}
      </button>
      {showHelp && (
        <div>
          <p>This is a helpful text that gets shown when you click on 'Show Help'.</p>
        </div>
      )}
    </div>
  );
};

export default PsHelpComponent;