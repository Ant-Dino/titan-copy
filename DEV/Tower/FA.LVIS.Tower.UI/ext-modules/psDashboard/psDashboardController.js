import React, { useState, useEffect } from 'react';
import axios from 'axios';
const Dashboard = () => {  
    const [currentUser, setCurrentUser] = useState({});
    const [hasAccess, setHasAccess] = useState(false);
    const [isUser, setIsUser] = useState(true);
    const [hasBEQAccess, setHasBEQAccess] = useState(false);
    const [hasTEQAccess, setHasTEQAccess] = useState(false);
    const [BEQSummaryList, setBEQSummaryList] = useState([]);
    const [TEQSummaryList, setTEQSummaryList] = useState([]);
    useEffect(() => {
        getCurrentUser();
    }, []);
    const getCurrentUser = () => {
        UserInfo.getUser().then(response => {
            setCurrentUser(response);
            setHasAccess(['Admin', 'SuperAdmin'].includes(response.ActivityRight));
            setIsUser(['Admin', 'SuperAdmin', 'User'].includes(response.ActivityRight));
            setHasBEQAccess(response.CanManageBEQ);
            setHasTEQAccess(response.CanManageTEQ);
            loadBEQExceptions();
            loadTEQExceptions();
        })
        .catch(error => {
            console.error("Failed to fetch user data", error);
        });
    };
    const loadBEQExceptions = () => {
        axios.get('Dashboard/BEQException/')
        .then(data => {
            setBEQSummaryList(data);
        })
        .catch(error => {
            console.error("Failed to fetch BEQ exceptions", error);
        });
    };
    const loadTEQExceptions = () => {
        axios.get('Dashboard/TEQException/')
        .then(data => {
            setTEQSummaryList(data);
        })
        .catch(error => {
            console.error("Failed to fetch TEQ exceptions", error);
        });
    };
    return (
        <div>
            {/* Display the necessary information by accessing the state */}
        </div>
    );
};
export default Dashboard;