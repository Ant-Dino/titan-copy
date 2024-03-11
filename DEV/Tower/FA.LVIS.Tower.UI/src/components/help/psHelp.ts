import React, { FC } from 'react'; 
import PsHelpTemplate from 'DEV/Tower/FA.LVIS.Tower.UI/ext-modules/psHelp/psHelpTemplate'; 

// Define the Props interface (if the component accepted props)
interface PsHelpProps {
    // definitions of any props e.g.
    // name: string;
}

/**
* Converts the AngularJS psHelp directive to a React component.
* This React component does not accept any props for now as the original directive 
* did not have an isolated scope that accepted inputs.
*/
const PsHelp: FC<PsHelpProps> = () => {
   // Any state or effect hooks would be defined here if necessary
    // e.g., const [state, setState] = useState(initialState);

   // Render the PsHelp template
   return <PsHelpTemplate />;
};

export default PsHelp;