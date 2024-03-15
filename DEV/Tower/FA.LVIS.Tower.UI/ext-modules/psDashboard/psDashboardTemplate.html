import React, { Component } from 'react';
import axios from 'axios';

class Dashboard extends Component {
    state = {
        currentUser: {},
        BEQSummaryList: [],
        TEQSummaryList: [],
        hasAccess: false,
        hasBEQAccess: false,
        hasTEQAccess: false,
        BEQGraphData: [],
        TEQGraphData: [],
    };

    componentDidMount() {
        this.getCurrentUser();
    }

    getCurrentUser = () => {
        // Replace UserInfo.getUser() with the respective API endpoint
        axios.get('/api/currentUser').then(response => {
            const { ActivityRight, CanManageTEQ, CanManageBEQ } = response.data;
            this.setState({
                currentUser: response.data,
                hasAccess: ['Admin', 'SuperAdmin'].includes(ActivityRight),
                hasBEQAccess: CanManageBEQ,
                hasTEQAccess: CanManageTEQ,
            });
            this.loadBEQExceptions();
            this.loadTEQExceptions();
        }).catch(error => console.error("There was an error fetching the current user", error));
    };

    loadBEQExceptions = () => {
        // Replace 'Dashboard/BEQException/' with the respective API endpoint
        axios.get('/api/BEQExceptions').then(response => {
            this.setState({ BEQSummaryList: response.data });
        }).catch(error => console.error("Error loading BEQ exceptions", error));
    };

    loadTEQExceptions = () => {
        // Replace 'Dashboard/TEQException/' with the respective API endpoint
        axios.get('/api/TEQExceptions').then(response => {
            this.setState({ TEQSummaryList: response.data });
        }).catch(error => console.error("Error loading TEQ exceptions", error));
    };

    render() {
        const { BEQSummaryList, TEQSummaryList, hasAccess, hasBEQAccess, hasTEQAccess } = this.state;
        return (
            <div>
                <div className="col-md-6">
                    {/* Business Exception Queue */}
                    <div className="widget widget-nopad">
                        <div className="widget-header">
                            <i className="fa fa-exclamation-triangle" style={{ marginLeft: '0.5em'}}></i>
                            <h3 style={{ margin: '0px' }}> Business Exception Queue</h3>
                        </div>
                        <div className="dashboard-widget-content" style={{ overflowY: 'auto' }}>
                            {!BEQSummaryList && (
                                <div>
                                    <i className="fa fa-spinner fa-spin fa-3x fa-fw margin-bottom"></i>
                                    <span className="sr-only">Loading...</span>
                                </div>
                            )}
                            <div className="shortcuts">
                                {BEQSummaryList.map((Exception, index) => (
                                    <a key={index} href={`#/businessexception/${Exception.ExceptionName}`} className={`shortcut ${Exception.NoOfExceptions >= Exception.ThreshholdCount ? 'shortcut-danger' : 'shortcut-info'}`}>
                                        <span className={Exception.NoOfExceptions >= Exception.ThreshholdCount ? 'shortcut-header' : 'shortcut-headerSuccess'}>{Exception.ExceptionName}</span>
                                        <span className="value">{Exception.NoOfExceptions}</span><br />
                                        <span className="value">{Exception.DateTime}</span>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    {/* Business Exceptions Graph */}
                    {/* This part would be replaced by your chart component rendered with TEQ/BEQ data */}
                </div>
            </div>
        );
    }
}

export default Dashboard;