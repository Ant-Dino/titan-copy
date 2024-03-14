import React, { useState, useEffect } from 'react';
import axios from 'axios';

type Exception = {
    ExceptionName: string;
    NoOfExceptions: number;
    DateTime: string;
    ThreshholdCount: number;
};

type TEQGraphData = {
    Hour: string;
    NewCount: number;
    ActiveCount: number;
    HoldCount: number;
    ArchiveCount: number;
    QueueCount: number;
};

const DashboardComponent: React.FC = () => {
    const [currentUser, setCurrentUser] = useState<null | any>(null);
    const [BEQSummaryList, setBEQSummaryList] = useState<Exception[]>([]);
    const [TEQSummaryList, setTEQSummaryList] = useState<Exception[]>([]);
    const [TEQGraphData, setTEQGraphData] = useState<TEQGraphData[]>([]);
    const [loadingBEQ, setLoadingBEQ] = useState<boolean>(true);
    const [loadingTEQ, setLoadingTEQ] = useState<boolean>(true);
    const [loadingGraphData, setLoadingGraphData] = useState<boolean>(true);

    const fetchCurrentUser = async () => {
        try {
            const response = await axios.get('/api/currentUser');
            setCurrentUser(response.data);
            fetchBEQExceptions();
            fetchTEQExceptions();
        } catch (error) {
            console.error('Error fetching current user', error);
        }
    };

    const fetchBEQExceptions = async () => {
        try {
            const response = await axios.get('/api/BEQException');
            setBEQSummaryList(response.data);
            setLoadingBEQ(false);
        } catch (error) {
            console.error('Error fetching BEQ Exceptions', error);
        }
    };

    const fetchTEQExceptions = async () => {
        try {
            const response = await axios.get('/api/TEQException');
            setTEQSummaryList(response.data);
            setLoadingTEQ(false);
        } catch (error) {
            console.error('Error fetching TEQ Exceptions', error);
        }
    };

    const fetchGraphData = async () => {
        try {
            const response = await axios.get('/api/GraphicalTEQException');
            setTEQGraphData(response.data);
            setLoadingGraphData(false);
        } catch (error) {
            console.error('Error fetching graph data', error);
        }
    };

    useEffect(() => {
        fetchCurrentUser();
        fetchGraphData();
        // Assuming we might want to refresh the data every 15 minutes:
        const intervalId = setInterval(() => {
            fetchBEQExceptions();
            fetchTEQExceptions();
            fetchGraphData();
        }, 15 * 60 * 1000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div>
            <div>
                {loadingBEQ
                    ? <i className="fa fa-spinner fa-spin fa-3x fa-fw margin-bottom"></i>
                    : BEQSummaryList.map((exception, index) => (
                        <div key={index}>
                            <h3>{exception.ExceptionName}</h3>
                            <p>{exception.NoOfExceptions}</p>
                        </div>
                    ))
                }
            </div>
            <div>
                {loadingTEQ
                    ? <i className="fa fa-spinner fa-spin fa-3x fa-fw margin-bottom"></i>
                    : TEQSummaryList.map((exception, index) => (
                        <div key={index}>
                            <h3>{exception.ExceptionName}</h3>
                            <p>{exception.NoOfExceptions}</p>
                        </div>
                    ))
                }
            </div>
            <div>
                {loadingGraphData
                    ? <i className="fa fa-spinner fa-spin fa-3x fa-fw margin-bottom"></i>
                    : TEQGraphData.map((data, index) => (
                        <div key={index}>
                            <h3>{data.Hour}</h3>
                            <p>New: {data.NewCount}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default DashboardComponent;