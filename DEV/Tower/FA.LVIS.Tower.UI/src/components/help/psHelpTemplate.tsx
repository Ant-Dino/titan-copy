import React from 'react';

// Assuming PsSubMenu and PsSubMenuItem are React components to be used in place of
// the Angular components. These are simple placeholders for the actual React components.
const PsSubMenu: React.FC = ({children}) => <div>{children}</div>;
const PsSubMenuItem: React.FC<{label: string; activetab: string; route: string}> = ({label, activetab, route, children}) => <div>{children}</div>;

// Main React component replacing the AngularJS template
const PsHelpComponent: React.FC = () => {
  return (
    <div className="ps-dashboard-header">
      <ul className="breadcrumb">
        <li className="subbreadcrumb">
          <PsSubMenu>
            <PsSubMenuItem label="Users Guide" activetab="Users Guide" route="help">Users Guide</PsSubMenuItem>
          </PsSubMenu>
        </li>
      </ul>
      <div>
        <iframe className="col-lg-12" src="/TowerUserGuide/help.html" frameBorder="0" scrolling="no" height="1024"></iframe>
      </div>
    </div>
  );
};

export default PsHelpComponent;