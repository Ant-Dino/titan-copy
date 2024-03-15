import React, { useState, useEffect } from 'react';
import axios from 'axios';
// Assuming Chart.js integration into React is done via a component like react-chartjs-2 or similar
import { Bar } from 'react-chartjs-2';
const DashboardComponent: React.FC = () => {
    const [currentUser, setCurrentUser] = useState<any>(null);
    const [BEQSummaryList, setBEQSummaryList] = useState<any[] | null>(null);
    const [TEQSummaryList, setTEQSummaryList] = useState<any[] | null>(null);
    const [TEQGraphData, setTEQGraphData] = useState<any[]>([]);
    const [BEQGraphData, setBEQGraphData] = useState<any[]>([]);
    // Fetch current user and exception summaries
    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await axios.get('/api/userInfo');
                setCurrentUser(response.data);
                fetchBEQExceptions();
                fetchTEQExceptions();
            } catch (error) {
                console.error('Failed to fetch user data', error);
            }
        };

        const fetchBEQExceptions = async () => {
            try {
                const response = await axios.get('/Dashboard/BEQException/');
                setBEQSummaryList(response.data);
            } catch (error) {
                console.error('Failed to fetch BEQ exceptions', error);
            }
        };

        const fetchTEQExceptions = async () => {
            try {
                const response = await axios.get('/Dashboard/TEQException/');
                setTEQSummaryList(response.data);
            } catch (error) {
                console.error('Failed to fetch TEQ exceptions', error);
            }
        };
        fetchUserData();
    }, []);
    // Fetch TEQ Graph Data
    useEffect(() => {
        const fetchTEQGraphData = async () => {
            try {
                const response = await axios.get('/Dashboard/GraphicalTEQException/');
                setTEQGraphData(response.data);
            } catch (error) {
                console.error('Failed to fetch TEQ graph data', error);
            }
        };
        if (currentUser?.canManageTEQ) {
            fetchTEQGraphData();
        }
    }, [currentUser]);
    // Fetch BEQ Graph Data
    useEffect(() => {
        const fetchBEQGraphData = async () => {
            try {
                const response = await axios.get('/Dashboard/GraphicalBEQException/');
                setBEQGraphData(response.data);
            } catch (error) {
                console.error('Failed to fetch BEQ graph data', error);
            }
        };
        if (currentUser?.canManageBEQ) {
            fetchBEQGraphData();
        }
    }, [currentUser]);
    // Example of transforming graph data for a chart
    const TEQChartData = {
        labels: TEQGraphData.map(data => data.Hour),
        datasets: [
            {
                label: 'New',
                data: TEQGraphData.map(data => data.NewCount),
                backgroundColor: 'rgba(244,210,209, 0.9)',
            },
            // Other datasets...
        ],
    };
    return (
        <div className="ps-dashboard">
            {/* Displaying Business Exception Queue */}
            <div className="business-exception-queue">
                {/* BEQ Summary List */}
                {BEQSummaryList ? (
                    BEQSummaryList.map((exception, index) => (
                        <div key={index}>
                            <div>{exception.ExceptionName}</div>
                            <div>{exception.NoOfExceptions}</div>
                            <div>{exception.DateTime}</div>
                        </div>
                    ))
                ) : (
                    <div>Loading...</div>
                )}
            </div>

            {/* Displaying Technical Exception Queue */}
            <div className="technical-exception-queue">
                {/* TEQ Summary List */}
                {TEQSummaryList ? (
                    TEQSummaryList.map((exception, index) => (
                        <div key={index}>
                            <div>{exception.ExceptionName}</div>
                            <div>{exception.NoOfExceptions}</div>
                            <div>{exception.DateTime}</div>
                        </div>
                    ))
                ) : (
                    <div>Loading...</div>
                )}
            </div>

            {/* TEQ Graph */}
            <div>
                <Bar data={TEQChartData} />
            </div>
        </div>
    );
};
export default DashboardComponent;