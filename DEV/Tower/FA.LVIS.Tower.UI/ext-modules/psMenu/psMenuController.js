// React component converted from the AngularJS controller
import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Defining types for the state
interface IBiztalkPort {
  Active: boolean;
}

const defaultBiztalkPorts: IBiztalkPort[] = [];

const PsMenuComponent: React.FC = () => {
  const [isVertical, setIsVertical] = useState(false);
  const [showMenu, setShowMenu] = useState(true);
  const [allowHorizontalToggle, setAllowHorizontalToggle] = useState(false);
  const [applicationStatusDisabled, setApplicationStatusDisabled] = useState(false);
  const [biztalkPortList, setBiztalkPortList] = useState<IBiztalkPort[]>(defaultBiztalkPorts);

  // Mocking the event listener similar to `angular.element(document).bind()` in AngularJS
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Your logic to handle click outside here
      console.log('Clicked outside: ', event);
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  // Replacing the AngularJS $interval service
  useEffect(() => {
    const interval = setInterval(() => {
      loadApplicationStatus();
    }, 300000); // Updating every 5 minutes

    return () => clearInterval(interval);
  }, []);

  const loadApplicationStatus = async () => {
    try {
      const response = await axios.get('ApplicationController/GetApplicationStatus/');
      const data = response.data;
      if (data.length !== 0) {
        let count = 0;
        // Process each item to check if it's not active and increment the count
        data.forEach((item: IBiztalkPort) => {
          if (!item.Active) {
            count += 1;
          }
        });
        setBiztalkPortList(data);
        setApplicationStatusDisabled(count > 0);
      } else {
        // Handle error case here
        console.error("Unable to retrieve application information at this time.");
      }
    } catch (error) {
      // Handle error here
      console.error("Error fetching application status: ", error);
    }
  };

  // Call the function to load application status when the component mounts
  useEffect(() => {
    loadApplicationStatus();
  }, []);

  // Function to simulate AngularJS $rootScope.$broadcast for setting route
  const setRoute = (route: string) => {
    // Implement your logic to handle route change
    console.log('Route selected: ', route);
  };

  return (
    <div>
      {/* Component UI goes here */}
      <h1>PS Menu Component</h1>
      {/* Example usage */}
      <button onClick={() => setRoute('/some-route')}>Change Route</button>
    </div>
  );
};

export default PsMenuComponent;