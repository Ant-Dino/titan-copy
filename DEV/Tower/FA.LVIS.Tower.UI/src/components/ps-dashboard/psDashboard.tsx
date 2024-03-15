import React, { useState, useEffect } from 'react';
import axios from 'axios';
const DashboardComponent = () => {
  const [BEQSummaryList, setBEQSummaryList] = useState(null);
  const [TEQSummaryList, setTEQSummaryList] = useState(null);
  const [currentUser, setCurrentUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  // Function to get current user and load exceptions
  const getCurrentUser = async () => {
    try {
      const response = await axios.get('UserInfo/getUser');
      setCurrentUser(response.data);
      loadBEQExceptions();
      loadTEQExceptions();
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };
  // Function to load Business Exception Queue Summary List
  const loadBEQExceptions = async () => {
    try {
      const response = await axios.get('Dashboard/BEQException/');
      setBEQSummaryList(response.data);
    } catch (error) {
      console.error("Error fetching BEQ Exceptions:", error);
    }
  };
  // Function to load Technical Exception Queue Summary List
  const loadTEQExceptions = async () => {
    try {
      const response = await axios.get('Dashboard/TEQException/');
      setTEQSummaryList(response.data);
    } catch (error) {
      console.error("Error fetching TEQ Exceptions:", error);
    }
  };
  useEffect(() => {
    getCurrentUser();
  }, []);
  return (
    <div>
      <div className="col-md-6">
        <div className="widget widget-nopad">
          <div className="widget-header">
            <i className="fa fa-exclamation-triangle" style={{marginLeft: '0.5em'}}></i>
            <h3 style={{margin: '0px'}}> Business Exception Queue</h3>
          </div>
          <div className="dashboard-widget-content" style={{overflowY: 'auto'}}>
            {!BEQSummaryList && (
              <div>
                <i className="fa fa-spinner fa-spin fa-3x fa-fw margin-bottom"></i>
                <span className="sr-only">Loading...</span>
              </div>
            )}
            <div className="shortcuts">
              {BEQSummaryList && BEQSummaryList.map((Exception, index) => (
                <a key={index} href={`#/businessexception/${Exception.ExceptionName}`} className={`shortcut ${Exception.NoOfExceptions >= Exception.ThreshholdCount ? 'shortcut-danger' : 'shortcut-info'}`}>
                  <span className={`${Exception.NoOfExceptions >= Exception.ThreshholdCount ? 'shortcut-header' : 'shortcut-headerSuccess'}`}>{Exception.ExceptionName}</span>
                  <span className="value">{Exception.NoOfExceptions}</span><br />
                  <span className="value">{Exception.DateTime}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Other sections removed for brevity */}
    </div>
  );
};
export default DashboardComponent;