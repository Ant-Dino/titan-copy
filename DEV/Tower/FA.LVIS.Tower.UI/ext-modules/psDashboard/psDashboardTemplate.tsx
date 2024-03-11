import React, { useState, useEffect } from 'react';
import Chart from 'chart.js/auto';

const PsDashboardTemplate = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [beqSummaryList, setBeqSummaryList] = useState([]);
  const [teqSummaryList, setTeqSummaryList] = useState([]);
  const [beqLineData, setBeqLineData] = useState(null);
  const [teqLineData, setTeqLineData] = useState(null);

  useEffect(() => {
    // Suppose getCurrentUser, fetchBeqSummaryList, fetchTeqSummaryList, fetchBeqLineData, and fetchTeqLineData are API calls
    // These should be replaced with your actual data fetching logic
    const fetchUserData = async () => {
      const userData = await getCurrentUser();
      setCurrentUser(userData);
    };

    const fetchBeqData = async () => {
      const beqData = await fetchBeqSummaryList();
      setBeqSummaryList(beqData);
    };

    const fetchTeqData = async () => {
      const teqData = await fetchTeqSummaryList();
      setTeqSummaryList(teqData);
    };

    const fetchBeqLineChartData = async () => {
      const beqLineChartData = await fetchBeqLineData();
      setBeqLineData(beqLineChartData);
    };

    const fetchTeqLineChartData = async () => {
      const teqLineChartData = await fetchTeqLineData();
      setTeqLineData(teqLineChartData);
    };

    fetchUserData();
    fetchBeqData();
    fetchTeqData();
    fetchBeqLineChartData();
    fetchTeqLineChartData();
  }, []);

  
  return (
    <div>
      
      <div className="ps-dashboard-header">
        <br /><br />
        <div className="row">
      
          <div className="col-md-6">
            
            <div className="widget widget-nopad">
              
              <div className="widget-header">
                <i className="fa fa-exclamation-triangle" style={{ marginLeft: '0.5em' }}></i>
                <h3 style={{ margin: '0px' }}>Business Exception Queue</h3>
              </div>

              
              <div className="dashboard-widget-content" style={{ overflowY: 'auto' }}>
                {!beqSummaryList && (
                  <>
                    <i className="fa fa-spinner fa-spin fa-3x fa-fw margin-bottom"></i>
                    <span className="sr-only">Loading...</span>
                  </>
                )}

                <div className="shortcuts">
                  {beqSummaryList.slice(0, 20).map((Exception) => (
                    <a key={Exception.ExceptionName} href={`#/businessexception/${Exception.ExceptionName}`}
                      className={`shortcut ${Exception.NoOfExceptions >= Exception.ThresholdCount ? 'shortcut-danger' : 'shortcut-info'}`}>
                      <span className={`shortcut-header ${Exception.NoOfExceptions >= Exception.ThresholdCount ? '' : 'shortcut-headerSuccess'}`}>{Exception.ExceptionName}</span>
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
                <h3 style={{ margin: 0 }}>Business Exceptions</h3>
              </div>
              
              <div className="dashboard-widget-content">
                {!beqLineData && (
                  <>
                    <i className="fa fa-spinner fa-spin fa-3x fa-fw margin-bottom"></i>
                    <span className="sr-only">Loading...</span>
                  </>
                )}

                {beqLineData && (
                  <canvas id="beqline" />
                )}
              </div>
              
            </div>
          </div>
        </div>
        
        <div className="row">
          <div className="col-md-6">
            <div className="widget widget-nopad">
              <div className="widget-header">
                <i className="fa fa-exclamation-triangle" style={{ marginLeft: '0.5em' }}></i>
                <h3 style={{ margin: '0px' }}>Technical Exception Queue</h3>
              </div>

              <div className="dashboard-widget-content" style={{ overflowY: 'auto' }}>
                {!teqSummaryList && (
                  <>
                    <i className="fa fa-spinner fa-spin fa-3x fa-fw margin-bottom"></i>
                    <span className="sr-only">Loading...</span>
                  </>
                )}

                <div className="shortcuts">
                  {teqSummaryList.slice(0, 100).map((Exception) => (
                    <a key={Exception.ExceptionName} href={`#/Exceptions/${Exception.ExceptionName}`}
                      className={`shortcut ${Exception.NoOfExceptions >= Exception.ThresholdCount ? 'shortcut-danger' : 'shortcut-info'}`}>
                      <span className={`shortcut-header ${Exception.NoOfExceptions >= Exception.ThresholdCount ? '' : 'shortcut-headerSuccess'}`}>{Exception.ExceptionName}</span>
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
                <h3 style={{ margin: 0 }}>Technical Exceptions</h3>
              </div>
              
              <div className="dashboard-widget-content">
                {!teqLineData && (
                  <>
                    <i className="fa fa-spinner fa-spin fa-3x fa-fw margin-bottom"></i>
                    <span className="sr-only">Loading...</span>
                  </>
                )}

                {teqLineData && (
                  <canvas id="teqline" />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

async function getCurrentUser() {
  // This function should be replaced with the actual API call to get current user data.
  return {};
}

async function fetchBeqSummaryList() {
  // This function should be replaced with the actual API call to fetch BEQ summary list data.
  return [];
}

async function fetchTeqSummaryList() {
  // This function should be replaced with the actual API call to fetch TEQ summary list data.
  return [];
}

async function fetchBeqLineData() {
  // This function should be replaced with the actual API call to fetch BEQ line chart data.
  return null;
}

async function fetchTeqLineData() {
  // This function should be replaced with the actual API call to fetch TEQ line chart data.
  return null;
}

export default PsDashboardTemplate;