import React, { FC } from 'react';

interface PsSubMenuProps {
 label: string;
 activetab: string;
 route: string;
}

const PsSubMenu: FC<PsSubMenuProps> = ({ children }) => <>{children}</>;

const PsSubMenuItem: FC<PsSubMenuProps> = ({ label }) => <li>{label}</li>;

const PsHelpComponent: FC = () => {
 return (
   <div className="ps-dashboard-header">
     <ul className="breadcrumb">
       <li className="subbreadcrumb">
         <PsSubMenu>
           <PsSubMenu>
             <PsSubMenuItem label="Users Guide" activetab="Users Guide" route="help" />
           </PsSubMenu>
         </PsSubMenu>
       </li>
     </ul>
     <div>
       <iframe className="col-lg-12" src="/TowerUserGuide/help.html" frameborder="0" scrolling="no" height="1024"></iframe>
     </div>
   </div>
 );
};

export default PsHelpComponent;