// Import statements necessary for a React component with TypeScript
import React from 'react';

            /********* PsHelpComponent Component Definition **********/
const PsHelpComponent: React.FC = () => {
  // The core function of the React component starts here

  // Return Statement for rendering the JSX in React
  return (
    // React.Fragment is used to return multiple elements without adding extra nodes to the DOM
    <React.Fragment>
      {/* React does not use class for defining CSS classes, instead className attribute is used */}
      <div className="ps-dashboard-header">
        {/* Unordered list - converted from AngularJS syntax to JSX */}
        <ul className="breadcrumb">
          <li className="subbreadcrumb">
            {/* Assuming ps-sub-menu and ps-sub-menu-item are components that need to be converted or replaced. 
                  As full conversion instructions or equivalent React code for these components are not given, standard HTML is used as a placeholder. 
                  Ideally, these should be converted or replaced with corresponding React components. */}
            {/* Representing a submenu and menu item in React, using placeholders */}
            <div>
              <a href="#Users-Guide">Users Guide</a>
            </div>
          </li>
        </ul>
        {/* iframe to load the HTML page, similar to AngularJS template */}
        <div>
          <iframe className="col-lg-12" src="/TowerUserGuide/help.html" frameBorder="0" scrolling="no" height="1024"></iframe>
        </div>
      </div>
    </React.Fragment>
  );
};

            /********* Export Statement **********/
export default PsHelpComponent;