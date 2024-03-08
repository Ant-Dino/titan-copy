import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Since the question includes the path to the menu component, importing it directly here
import PsMenuTemplate from 'DEV/Tower/FA.LVIS.Tower.UI/ext-modules/psMenu/psMenuTemplate';

const PsMenuComponent: React.FC = () => {
    const [isVertical, setIsVertical] = useState(false);
    const [showMenu, setShowMenu] = useState(true);
    const [allowHorizontalToggle, setAllowHorizontalToggle] = useState(false);
    const [applicationStatusDisabled, setApplicationStatusDisabled] = useState(false);
    const [activeElement, setActiveElement] = useState(null);

    // Function to simulate $rootScope.$broadcast -> Doesn't exist in React so we use props or context if needed
    const setRoute = (route: any) => {
        // Example of how you might handle this in React
        // this.props.onRouteChange(route);
        console.log('Route changed to:', route);
    };

    const setOpenMenuScope = (scope: any) => {
        // Since React is declarative, we don't often use direct DOM manipulation like this
        console.log('OpenMenuScope set:', scope);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('ApplicationController/GetApplicationStatus/');
                const data = response.data;
                let count = 0;
                data.forEach((item: any) => {
                    if (!item.Active) {
                        count += 1;
                    }
                });
                setApplicationStatusDisabled(count > 0);
            } catch (error) {
                console.error("Unable to retrieve application information at this time.");
            }
        };

        fetchData();
        const interval = setInterval(() => {
            fetchData();
        }, 300000); // reload every 5 minutes

        return () => clearInterval(interval);
    }, []);

    const handleDocumentClick = (e: MouseEvent) => {
        if (!isVertical) {
            // if e.target matches expected selector, you can handle it
            console.log('Document clicked', e);
        }
    };

    useEffect(() => {
        // Effect for handling clicks outside the component in React
        document.addEventListener('click', handleDocumentClick);

        return () => {
            document.removeEventListener('click', handleDocumentClick);
        };
    }, [isVertical]);

    return (
        <div>
            {showMenu && (
                <PsMenuTemplate
                    isVertical={isVertical}
                    allowHorizontalToggle={allowHorizontalToggle}
                    applicationStatusDisabled={applicationStatusDisabled}
                    setActiveElement={setActiveElement}
                    activeElement={activeElement}
                />
            )}
        </div>
    );
};

export default PsMenuComponent;