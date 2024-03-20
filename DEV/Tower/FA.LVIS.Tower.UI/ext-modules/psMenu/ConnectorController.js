import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
const ConnectorComponent = () => {
    const [biztalkPortList, setBiztalkPortList] = useState([]);
    const [applicationStatusCount, setApplicationStatusCount] = useState(0);
    const loadApplicationStatus = async () => {
        try {
            const response = await axios.get('ApplicationController/GetApplicationStatus/');
            const data = response.data;
            if (data.length !== 0) {
                setBiztalkPortList(data);
                let count = 0;
                data.forEach((item) => {
                    if (!item.Active) {
                        count = count + 1;
                    }
                });
                setApplicationStatusCount(count);
            } else {
                toast.error("Unable to retrieve application information at this time.");
            }
        } catch (error) {
            toast.error("Unable to retrieve application information at this time.");
        }
    };
    useEffect(() => {
        loadApplicationStatus();
        const intervalId = setInterval(() => {
            loadApplicationStatus();
        }, 30000);

        return () => clearInterval(intervalId);
    }, []);
    return (
        <div>
            {/* Render your component UI based on biztalkPortList and applicationStatusCount */}
        </div>
    );
};
export default ConnectorComponent;