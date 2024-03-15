import React, { useState, useEffect } from 'react';
import axios from 'axios';
const DashboardComponent = () => {
    const [currentUser, setCurrentUser] = useState({});
    const [beqSummaryList, setBeqSummaryList] = useState(null);
    const [teqSummaryList, setTeqSummaryList] = useState(null);
    const [beqGraphData, setBeqGraphData] = useState([]);
    const [teqGraphData, setTeqGraphData] = useState([]);
    useEffect(() => {
        getCurrentUser();
        loadBEQExceptions();
        loadTEQExceptions();
        loadBEQGraphData();
        loadTEQGraphData();
    }, []);
    const getCurrentUser = () => {
        axios.get('Security/GetCurrentUser/')
            .then(response => {
                setCurrentUser(response.data);
            })
            .catch(error => console.error(error));
    };
    const loadBEQExceptions = () => {
        axios.get('Dashboard/BEQException/')
            .then(response => {
                setBeqSummaryList(response.data);
            })
            .catch(error => console.error(error));
    };
    const loadTEQExceptions = () => {
        axios.get('Dashboard/TEQException/')
            .then(response => {
                setTeqSummaryList(response.data);
            })
            .catch(error => console.error(error));
    };
    const loadBEQGraphData = () => {
        axios.get('Dashboard/GraphicalBEQException/')
            .then(response => {
                setBeqGraphData(response.data);
            })
            .catch(error => console.error(error));
    };
    const loadTEQGraphData = () => {
        axios.get('Dashboard/GraphicalTEQException/')
            .then(response => {
                setTeqGraphData(response.data);
            })
            .catch(error => console.error(error));
    };
    return (
        <div>
            <div className="col-md-6">
                <div className="widget widget-nopad">
                    <div className="widget-header">
                        <i className="fa fa-exclamation-triangle" style={{ marginLeft: '0.5em' }}></i>
                        <h3 style={{ margin: '0px' }}> Business Exception Queue</h3>
                    </div>

                    <div className="dashboard-widget-content" style={{ overflowY: 'auto' }}>
                        {!beqSummaryList && (
                            <div>
                                <i className="fa fa-spinner fa-spin fa-3x fa-fw margin-bottom"></i>
                                <span className="sr-only">Loading...</span>
                            </div>
                        )}

                        <div className="shortcuts">
                            {beqSummaryList && beqSummaryList.slice(0, 20).map((exception, index) => (
                                <a href={`#/businessexception/${exception.ExceptionName}`} key={index}
                                   className={`shortcut ${exception.NoOfExceptions >= exception.ThreshholdCount ? 'shortcut shortcut-danger' : 'shortcut shortcut-info'}`}>
                                    <span className={exception.NoOfExceptions >= exception.ThreshholdCount ? 'shortcut-header' : 'shortcut-headerSuccess'}>
                                        {exception.ExceptionName}
                                    </span>
                                    <span className="value">{exception.NoOfExceptions}</span><br />
                                    <span className="value">{exception.DateTime}</span>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            {/* other widget contents */}   
        </div>
    );
};
export default DashboardComponent;