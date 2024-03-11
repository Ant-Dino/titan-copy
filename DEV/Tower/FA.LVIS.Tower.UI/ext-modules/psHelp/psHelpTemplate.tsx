import React from 'react';

interface PsSubMenuProps {
  label: string;
  activetab: string;
  route: string;
}

const PsSubMenu: React.FC<PsSubMenuProps> = ({ label, activetab, route }) => {
  return (
    <div>
      {/* Assuming the routing logic or functionality is implemented elsewhere */}
      <a href={`#${route}`} className={activetab === label ? 'active' : ''}>{label}</a>
    </div>
  );
};

const PsHelpComponent: React.FC = () => {
  return (
    <div className="ps-dashboard-header">
      <ul className="breadcrumb">
        <li className="subbreadcrumb">
          <PsSubMenu label="Users Guide" activetab="Users Guide" route="help" />
        </li>
      </ul>
      <div>
        <iframe className="col-lg-12" src="/TowerUserGuide/help.html" frameborder="0" scrolling="no" height="1024"></iframe>
      </div>
    </div>
  );
}

export default PsHelpComponent;