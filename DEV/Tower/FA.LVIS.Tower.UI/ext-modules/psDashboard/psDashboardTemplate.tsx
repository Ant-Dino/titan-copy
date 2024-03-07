import React, { useState, useEffect } from 'react';

const Dashboard = () => {
  const [BEQSummaryList, setBEQSummaryList] = useState(null);
  const [TEQSummaryList, setTEQSummaryList] = useState(null);
  const [LnCtrlData, setLnCtrlData] = useState(null);
  const [TeqLnchartCtrlData, setTeqLnchartCtrlData] = useState(null);

  // Simulating AngularJS's 'ng-init' and controllers data fetching logic
  useEffect(() => {
    // Assuming 'getCurrentUser' fetches data that updates 'BEQSummaryList' and 'TEQSummaryList'
    // Replace with actual data fetching logic
    const fetchBEQSummaryList = async () => {
      // Placeholder for actual API call
      const summaryList = []; // Simulated data
      setBEQSummaryList(summaryList);
    };

    const fetchTEQSummaryList = async () => {
      // Placeholder for actual API call
      const summaryList = []; // Simulated data
      setTEQSummaryList(summaryList);
    };

    const fetchLnCtrlData = async () => {
      // Placeholder for actual data fetching
      const data = {}; // Simulated data
      setLnCtrlData(data);
    };

    const fetchTeqLnchartCtrlData = async () => {
      // Placeholder for actual data fetching
      const data = {}; // Simulated data
      setTeqLnchartCtrlData(data);
    };

    fetchBEQSummaryList();
    fetchTEQSummaryList();
    fetchLnCtrlData();
    fetchTeqLnchartCtrlData();
  }, []);

  return (
    <div className="ps-dashboard-header">
      <div>
        <div className="col-md-6">
          <div className="widget widget-nopad">
            <div className="widget-header">
              <i className="fa fa-exclamation-triangle" style={{ marginLeft: "0.5em" }}></i>
              <h3 style={{ margin: "0px" }}> Business Exception Queue</h3>
            </div>

            <div className="dashboard-widget-content" style={{ overflowY: "auto" }}>
              {!BEQSummaryList && (
                <>
                  <i className="fa fa-spinner fa-spin fa-3x fa-fw margin-bottom"></i>
                  <span className="sr-only">Loading...</span>
                </>
              )}

              <div className="shortcuts">
                {BEQSummaryList && BEQSummaryList.slice(0, 20).map((Exception) => (
                  <a key={Exception.ExceptionName} href={`#/businessexception/${Exception.ExceptionName}`}
                    className={`shortcut ${Exception.NoOfExceptions >= Exception.ThreshholdCount ? 'shortcut-danger' : 'shortcut-info'}`}>
                    <span className={`${Exception.NoOfExceptions >= Exception.ThreshholdCount ? 'shortcut-header' : 'shortcut-headerSuccess'}`}>
                      {Exception.ExceptionName}
                    </span>
                    <span className="value">{Exception.NoOfExceptions}</span><br />
                    <span className="value">{Exception.DateTime}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="widget">
            <div className="widget-header">
              <i className="icon-signal"></i>
              <h3 style={{ margin: "0px" }}>Business Exceptions</h3>
            </div>
            <div className="dashboard-widget-content">
              {!LnCtrlData && (
                <>
                  <i className="fa fa-spinner fa-spin fa-3x fa-fw margin-bottom"></i>
                  <span className="sr-only">Loading...</span>
                </>
              )}
              {/* Implement chart logic here using your preferred charting library */}
              <canvas id="beqline"></canvas>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="col-md-6">
          <div className="widget widget-nopad">
            <div className="widget-header">
              <i className="fa fa-exclamation-triangle" style={{ marginLeft: "0.5em" }}></i>
              <h3 style={{ margin: "0px" }}>Technical Exception Queue</h3>
            </div>
            <div className="dashboard-widget-content" style={{ overflowY: "auto" }}>
              {!TEQSummaryList && (
                <>
                  <i className="fa fa-spinner fa-spin fa-3x fa-fw margin-bottom"></i>
                  <span className="sr-only">Loading...</span>
                </>
              )}
              <div className="shortcuts">
                {TEQSummaryList && TEQSummaryList.slice(0, 100).map((Exception) => (
                  <a key={Exception.ExceptionName} href={`#/Exceptions/${Exception.ExceptionName}`}
                    className={`shortcut ${Exception.NoOfExceptions >= Exception.ThreshholdCount ? 'shortcut-danger' : 'shortcut-info'}`}>
                    <span className={`${Exception.NoOfExceptions >= Exception.ThreshholdCount ? 'shortcut-header' : 'shortcut-headerSuccess'}`}>
                      {Exception.ExceptionName}
                    </span>
                    <span className="value">{Exception.NoOfExceptions}</span><br />
                    <span className="value">{Exception.DateTime}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="widget">
            <div className="widget-header">
              <i className="icon-signal"></i>
              <h3 style={{ margin: "0px" }}>Technical Exceptions</h3>
            </div>
            <div className="dashboard-widget-content">
              {!TeqLnchartCtrlData && (
                <>
                  <i className="fa fa-spinner fa-spin fa-3x fa-fw margin-bottom"></i>
                  <span className="sr-only">Loading...</span>
                </>
              )}
              {/* Implement chart logic here using your preferred charting library */}
              <canvas id="teqline"></canvas>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;