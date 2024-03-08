import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

const GetApplicationStatus = {
  getApplicationStatus: async () => {
    try {
      const response = await axios.get('ApplicationController/GetApplicationStatus/');
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

const PsMenuComponent: React.FC = () => {
  const [isVertical, setIsVertical] = useState<boolean>(false);
  const [openMenuScope, setOpenMenuScope] = useState<any>(null); // Consider refining the type
  const [showMenu, setShowMenu] = useState<boolean>(true);
  const [allowHorizontalToggle, setAllowHorizontalToggle] = useState<boolean>(false);
  const [applicationStatusDisabled, setApplicationStatusDisabled] = useState<boolean>(false);
  const [activeElement, setActiveElement] = useState<any>(null); // Consider refining the type

  const loadApplicationStatus = async () => {
    try {
      const data = await GetApplicationStatus.getApplicationStatus();
      if (data.length !== 0) {
        const biztalkPortList = data;
        let count = 0;
        biztalkPortList.forEach((item: any) => { // Consider refining the type of item
          if (!item.Active) {
            count += 1;
          }
        });
        setApplicationStatusDisabled(count > 0);
      } else {
        console.error("Unable to retrieve application information at this time.");
      }
    } catch (error) {
      console.error("Unable to retrieve application information at this time.");
    }
  };

  useEffect(() => {
    loadApplicationStatus();
    const intervalId = setInterval(() => {
      loadApplicationStatus();
    }, 300000); // Refresh every 5 minutes

    return () => clearInterval(intervalId);
  }, []);

  const documentClickHandler = (e: MouseEvent) => {
    if (openMenuScope && !isVertical) {
      // if e.target is part of 'ps-selectable-item', return
      // if not, setOpenMenuScope(null); consider refining logic
      e.preventDefault();
      e.stopPropagation();
    }
  };

  useEffect(() => {
    document.addEventListener('click', documentClickHandler);
    return () => document.removeEventListener('click', documentClickHandler);
  }, [openMenuScope, isVertical]);

  return (
    <div>
      {/* Your menu component JSX goes here */}
    </div>
  );
};

export default PsMenuComponent;