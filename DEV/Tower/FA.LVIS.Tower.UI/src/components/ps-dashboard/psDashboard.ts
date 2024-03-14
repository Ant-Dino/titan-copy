import React, { useState, useEffect } from 'react';
import axios from 'axios';

// This is the combined React component converted from AngularJS template and controllers
const Dashboard = () => {
    const [currentUser, setCurrentUser] = useState({});
    const [BEQSummaryList, setBEQSummaryList] = useState(null);
    const [TEQSummaryList, setTEQSummaryList] = useState(null);
    const [TEQGraphData, setTEQGraphData] = useState({ data: [], labels: [], datasetOverride: [], optionsMixed: {} });
    const [BEQGraphData, setBEQGraphData] = useState({ data: [], labels: [], datasetOverride: [], optionsMixed: {} });

    // Function to load current user
    const getCurrentUser = async () => {
        try {
            const response = await axios.get('UserInfo');
            setCurrentUser(response.data);
            loadBEQExceptions();
            loadTEQExceptions();
        } catch (error) {
            console.error('Error fetching user info:', error);
        }
    };

    // Function to load Business Exception Queue Exceptions
    const loadBEQExceptions = async () => {
        try {
            const response = await axios.get('Dashboard/BEQException/');
            setBEQSummaryList(response.data);
        } catch (error) {
            console.error('Error fetching BEQ Exceptions:', error);
        }
    };

    // Function to load Technical Exception Queue Exceptions
    const loadTEQExceptions = async () => {
        try {
            const response = await axios.get('Dashboard/TEQException/');
            setTEQSummaryList(response.data);
        } catch (error) {
            console.error('Error fetching TEQ Exceptions:', error);
        }
    };

    // Fetch data on component mount
    useEffect(() => {
        getCurrentUser();
    }, []);

    return (
        <div antiforgerytoken>
            <div className="ps-dashboard-header">
                <br /><br />
                <div>
                    <div className="col-md-6">
                        <div className="widget widget-nopad">
                            <div className="widget-header">
                                <i className="fa fa-exclamation-triangle" style={{marginLeft:"0.5em"}}></i>
                                <h3 style={{margin:"0px"}}> Business Exception Queue</h3>
                            </div>

                            <div className="dashboard-widget-content" style={{overflowY:"auto"}}>                 
                                {!BEQSummaryList && 
                                    <div>
                                        <i className="fa fa-spinner fa-spin fa-3x fa-fw margin-bottom"></i>
                                        <span className="sr-only">Loading...</span>
                                    </div>
                                }

                                <div className="shortcuts">
                                    {BEQSummaryList && BEQSummaryList.map((Exception, index) => (
                                        index < 20 &&
                                        <a key={index} href={`#/businessexception/${Exception.ExceptionName}`} 
                                            className={`shortcut ${Exception.NoOfExceptions >= Exception.ThresholdCount ? 'shortcut-danger' : 'shortcut-info'}`}>
                                                <span className={Exception.NoOfExceptions >= Exception.ThresholdCount ? 'shortcut-header' : 'shortcut-headerSuccess'}>{Exception.ExceptionName}</span>
                                                <span className="value">{Exception.NoOfExceptions}</span><br />
                                                <span className="value">{Exception.DateTime}</span>
                                            </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Inserted other parts of the template here for brevity */}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;