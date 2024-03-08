import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MenuComponent: React.FC = () => {
  const [isVertical, setIsVertical] = useState<boolean>(false);
  const [openMenuScope, setOpenMenuScope] = useState<any>(null);
  const [showMenu, setShowMenu] = useState<boolean>(true);
  const [allowHorizontalToggle, setAllowHorizontalToggle] = useState<boolean>(false);
  const [applicationStatusDisabled, setApplicationStatusDisabled] = useState<boolean>(false);
  const [activeElement, setActiveElement] = useState<any>(null);
  const [biztalkPortList, setBiztalkPortList] = useState<any[]>([]);

  const getApplicationStatus = async () => {
    try {
      const response = await axios.get('ApplicationController/GetApplicationStatus/');
      setBiztalkPortList(response.data);
      let count = 0;
      response.data.forEach((item: any) => {
        if (!item.Active) {
          count += 1;
        }
      });
      setApplicationStatusDisabled(count > 0);
    } catch (error) {
      console.error("Unable to retrieve application information at this time.");
    }
  };

  useEffect(() => {
    getApplicationStatus();
    const interval = setInterval(() => {
      getApplicationStatus();
    }, 300000); // Refresh every 5 minutes
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleDocumentClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (openMenuScope && !isVertical && !target.closest('.ps-selectable-item')) {
        setOpenMenuScope(null); // Simulate closeMenu
      }
    };
    document.addEventListener('click', handleDocumentClick);
    return () => document.removeEventListener('click', handleDocumentClick);
  }, [openMenuScope, isVertical]);

  return (
    <div>
      {/* Render the menu component here */}
    </div>
  );
};
export default MenuComponent;