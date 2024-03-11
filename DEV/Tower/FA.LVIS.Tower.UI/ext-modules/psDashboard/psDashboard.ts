import React, { useState, useEffect, useContext, createContext } from 'react';
import axios from 'axios';

// Creating a context for global state
const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState({});
    const [accessRights, setAccessRights] = useState({
        canManageTEQ: false,
        canManageBEQ: false,
        hasAccess: false,
    });

    const updateUser = (userInfo) => {
        setCurrentUser(userInfo);
        setAccessRights({
            canManageTEQ: userInfo.CanManageTEQ,
            canManageBEQ: userInfo.CanManageBEQ,
            hasAccess: ['Admin', 'SuperAdmin'].includes(userInfo.ActivityRight),
        });
    };

    return (
        <GlobalContext.Provider value={{ currentUser, accessRights, updateUser }}>
            {children}
        </GlobalContext.Provider>
    );
};

const useGlobal = () => useContext(GlobalContext);

const Dashboard = () => {
    const { updateUser, accessRights } = useGlobal();
    const [BEQExceptions, setBEQExceptions] = useState([]);
    const [TEQExceptions, setTEQExceptions] = useState([]);

    useEffect(() => {
        const loadUserInfo = async () => {
            try {
                const { data } = await axios.get('/api/userinfo');
                updateUser(data);
            } catch (error) {
                console.error("Failed to load user info", error);
            }
        };

        loadUserInfo();
    }, [updateUser]);

    useEffect(() => {
        const fetchExceptions = async () => {
            // Function to fetch BEQ and TEQ exceptions
            if (accessRights.canManageBEQ) {
                const { data: beqData } = await axios.get('Dashboard/BEQException/');
                setBEQExceptions(beqData);
            }
            if (accessRights.canManageTEQ) {
                const { data: teqData } = await axios.get('Dashboard/TEQException/');
                setTEQExceptions(teqData);
            }
        };

        fetchExceptions();
    }, [accessRights]);

    // Periodic data refresh could go here

    return (
        <div>
            {/* Dynamic rendering based on state */}
            {BEQExceptions.length > 0 && <div>BEQ Exceptions</div>}
            {TEQExceptions.length > 0 && <div>TEQ Exceptions</div>}
        </div>
    );
};

const TEQLineChart = () => {
    const { currentUser } = useGlobal();
    const [graphData, setGraphData] = useState([]);

    useEffect(() => {
        const loadTEQException = async () => {
            const { data } = await axios.get('Dashboard/GraphicalTEQException/');
            setGraphData(data);
        };
        loadTEQException();
    }, [currentUser]); // Dependency on currentUser to re-fetch when it changes

    // Logic for processing graphData and rendering chart would go here

    return <div>TEQ Line Chart</div>;
};

const BEQLineChart = () => {
    const { currentUser } = useGlobal();
    const [graphData, setGraphData] = useState([]);

    useEffect(() => {
        const loadBEQException = async () => {
            const { data } = await axios.get('Dashboard/GraphicalBEQException/');
            setGraphData(data);
        };
        loadBEQException();
    }, [currentUser]); // Dependency on currentUser to re-fetch when it changes

    // Logic for processing graphData and rendering chart would go here

    return <div>BEQ Line Chart</div>;
};

// Exporting components
export { Dashboard, TEQLineChart, BEQLineChart, GlobalProvider };