import React, { FC } from 'react';

const PsHelpComponent: FC = () => {
    return (
        <div className="ps-dashboard-header">
            <ul className="breadcrumb">
                <li className="subbreadcrumb">
                    {/* Assuming PsSubMenu and PsSubMenuItem are previously defined components or placeholders for actual components */}
                    <ps-sub-menu>
                        <ps-sub-menu-item label="Users Guide" activetab="Users Guide" route="help">Users Guide</ps-sub-menu-item>
                    </ps-sub-menu>
                </li>
            </ul>
            <div>
                <iframe className="col-lg-12" src="/TowerUserGuide/help.html" frameBorder="0" scrolling="no" height="1024"></iframe>
            </div>
        </div>
    );
};

export default PsHelpComponent;