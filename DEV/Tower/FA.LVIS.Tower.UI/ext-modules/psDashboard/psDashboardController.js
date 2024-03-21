import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Dashboard = () => {
    const [currentUser, setCurrentUser] = useState({});
    const [activityRight, setActivityRight] = useState('');
    const [canManageTEQ, setCanManageTEQ] = useState(false);
    const [canManageBEQ, setCanManageBEQ] = useState(false);
    const [hasAccess, setHasAccess] = useState(false);
    const [hasBEQAccess, setHasBEQAccess] = useState(false);
    const [hasTEQAccess, setHasTEQAccess] = useState(false);
    const [beqSummaryList, setBeqSummaryList] = useState([]);
    const [teqSummaryList, setTeqSummaryList] = useState([]);

    useEffect(() => {
        getCurrentUser();
    }, []);

    const getCurrentUser = async () => {
        try {
            const response = await UserInfo.getUser();
            setCurrentUser(response);
            setActivityRight(response.ActivityRight);
            setCanManageTEQ(response.CanManageTEQ);
            setCanManageBEQ(response.CanManageBEQ);
            loadBEQExceptions();
            loadTEQExceptions();

            if (response.CanManageBEQ) {
                setHasBEQAccess(true);
            }

            if (response.CanManageTEQ) {
                setHasTEQAccess(true);
            }

            if (response.ActivityRight === 'Admin' || response.ActivityRight === 'SuperAdmin') {
                setHasAccess(true);
            }
        } catch (error) {
            console.error('Failed to fetch user data:', error);
        }
    };

    const loadBEQExceptions = async () => {
        const { data } = await axios.get('/Dashboard/BEQException/');
        setBeqSummaryList(data);
    };

    const loadTEQExceptions = async () => {
        const { data } = await axios.get('/Dashboard/TEQException/');
        setTeqSummaryList(data);
    };

    return (
        <div>
            <h1>Dashboard</h1>
            {/* Display user data, Access rights and Exceptions */}
        </div>
    );
};

export default Dashboard;