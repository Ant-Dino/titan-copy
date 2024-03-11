// Import statements for React, TypeScript, and the necessary component
import React, { FC } from 'react';
import PsHelpTemplate from 'DEV/Tower/FA.LVIS.Tower.UI/ext-modules/psHelp/psHelpTemplate';

// Definition of the PsHelpProps interface to type the props that the component might use
// Currently, it's empty because the original AngularJS directive does not accept any scope variables.
// However, it's a good practice to define it for future scalability.
interface PsHelpProps {}

// The React component with TypeScript
// Using FC (Functional Component) generic type from React to type the component with props.
const PsHelp: FC<PsHelpProps> = () => {
    
    // This is the render function body.
    // In the original AngularJS directive, the template is specified by the templateUrl.
    // In this React component transformation, we directly use <PsHelpTemplate /> component which is the React version of the AngularJS template.
   8273 return <PsHelpTemplate />;
};

// The export statement making the PsHelp component available for import in other files
export default PsHelp;