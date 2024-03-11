import React from 'react';

// Define types for any props used, if necessary.
// Since no specific props are specified here, we'll assume none are needed.
interface PsHelpComponentProps {}

// PsHelpComponent: React function component, converted from AngularJS template
const PsHelpComponent: React.FC<PsHelpComponentProps> = (props) => {
    // Logic for component behavior (e.g., React hooks) goes here.
    // For this static example, no hooks or state management are used.

    // Return JSX structure converted from given Angular template
   return (
       <div className="ps-dashboard-header">
           <ul className="breadcrumb">
               <li className="subbreadcrumb">
                   {/* Assuming ps-sub-menu and ps-sub-menu-item are specific to Angular and replacing */}
                   {/* them with equivalent HTML structure for React */}
                   <div className="ps-sub-menu">
                       <div className="ps-sub-menu-item" data-activetab="Users Guide">
                           {/* Assuming 'route' translates to an onClick event in React */}
                           {/* This implementation might change based on routing library in use. */}
                           <a href="/help">Users Guide</a>
                       </div>
                   </div>
               </li>
           </ul>
           <div>
               <iframe className="col-lg-12" src="/TowerUserGuide/help.html" frameBorder="0" scrolling="no" height="1024"></iframe>
           </div>
       </div>
   );
};

// Export the PsHelpComponent
export default PsHelpComponent;