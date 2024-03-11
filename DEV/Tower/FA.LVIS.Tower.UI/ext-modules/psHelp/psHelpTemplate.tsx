import React, { FC } from 'react';

const PsHelpComponent: FC = () => {
  return (
    <div className="ps-dashboard-header">
      <ul className="breadcrumb">
        <li className="subbreadcrumb">
          {/* ps-sub-menu could be another React component that you should create or replace with equivalent code */}
          <div className="ps-sub-menu">
            <div className="ps-sub-menu-item" data-activetab="Users Guide" data-route="help">Users Guide</div>
          </div>
        </li>
      </ul>
      <div>
        <iframe className="col-lg-12" src="/TowerUserGuide/help.html" frameBorder="0" scrolling="no" height="1024"></iframe>
      </div>
    </div>
  );
};

export default PsHelpComponent;