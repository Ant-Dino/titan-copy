import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { PsDashboardTemplate } from 'path/to/psDashboardTemplate';

const PsDashboard: React.FC = () => {
    const [currentUserInfo, setCurrentUserInfo] = useState<any>({});
    const [hasAccess, setHasAccess] = useState<boolean>(false);
    const [isUser, setIsUser] = useState<boolean>(true);
    const [hasBEQAccess, setHasBEQAccess] = useState<boolean>(false);
    const [hasTEQAccess, setHasTEQAccess] = useState<boolean>(false);
    const [BEQSummaryList, setBEQSummaryList] = useState<any[]>([]);
    const [TEQSummaryList, setTEQSummaryList] = useState<any[]>([]);

    useEffect(() => {
        const getCurrentUser = async () => {
            try {
                const response = await axios.get('/UserInfo/getUser');
                setCurrentUserInfo(response.data);
                setHasAccess(['Admin', 'SuperAdmin'].includes(response.data.ActivityRight));
                setIsUser(['Admin', 'SuperAdmin', 'User'].includes(response.data.ActivityRight));
                setHasBEQAccess(response.data.CanManageBEQ);
                setHasTEQAccess(response.data.CanManageTEQ);
                loadBEQExceptions();
                loadTEQExceptions();
            } catch (error) {
                console.error("Failed to fetch user info:", error);
            }
        };
        getCurrentUser();
    }, []);

    const loadBEQExceptions = async () => {
        try {
            const response = await axios.get('/Dashboard/BEQException/');
            setBEQSummaryList(response.data);
        } catch (error) {
            console.error("Failed to load BEQ Exceptions:", error);
        }
    };

    const loadTEQExceptions = async () => {
        try {
            const response = await axios.get('/Dashboard/TEQException/');
            setTEQSummaryList(response.data);
        } catch (error) {
            console.error("Failed to load TEQ Exceptions:", error);
        }
    };

    // Not showing timed refresh logic for brevity. 
    // Could use useEffect with setInterval and cleanup
    // on both loadBEQExceptions and loadTEQExceptions

    return (
        <PsDashboardTemplate>
            <div>
                {/* Content based on state variables can be rendered here */}
                {hasAccess && <p>User has access.</p>}
                {isUser && <p>User is recognized.</p>}
                {hasBEQAccess && <p>Can manage BEQ.</p>}
                {hasTEQAccess && <p>Can manage TEQ.</p>}
                {/* Further implementation */}
            </div>
        </PsDashboardTemplate>
    );
};

export default PsDashboard;