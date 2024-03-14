import React, { useState, useEffect } from 'react';
import PsHelpTemplate from 'DEV/Tower/FA.LVIS.Tower.UI/ext-modules/psHelp/psHelpTemplate';
interface Props {
  // Define any props here if necessary
}
const MyComponent: React.FC<Props> = (props) => {
  // State variables and other component logic here
  const [someState, setSomeState] = useState<any>(null);
  useEffect(() => {
    // ComponentDidMount logic here

    return () => {
      // Cleanup logic here if necessary
    };
  }, []); // Empty dependency array means this effect runs once on mount
  return (
    <div>
      {/* Render logic and return statement here */}
      <PsHelpTemplate someProp={someState} />
    </div>
  );
}
export default MyComponent;