import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'; // Assuming data fetching from an API
import Chart from 'chart.js/auto';

interface Exception {
  ExceptionName: string;
  NoOfExceptions: number;
  DateTime: string;
  ThreshholdCount: number;
}

const Dashboard: React.FC = () => {
  const [beqSummaryList, setBeqSummaryList] = useState<Exception[]>([]);
  const [teqSummaryList, setTeqSummaryList] = useState<Exception[]>([]);
  const [beqLineData, setBeqLineData] = useState({});
  const [teqLineData, setTeqLineData] = useState({});

  useEffect(() => {
    // Placeholder for fetching data logic
    // Assume fetchData is a function that fetches data from an API
    const fetchBeqData = async () => {
      const result = await axios('api/beqSummaryList');
      setBeqSummaryList(result.data);
};
        
    const fetchTeqData = async () => {
      const result = await axios('api/teqSummaryList');
      setTeqSummaryList(result.data);
};

    fetchBeqData();
    fetchTeqData();
  }, []);

  useEffect(() => {
    // Setup for BEQ Line Chart using Chart.js
    // Ensure to have a ref to the canvas element for more refined control
    const ctx = document.getElementById('beqline').getContext('2d');
    const chart = new Chart(ctx, {
      type: 'bar', // Change accordingly
      data: beqLineData, // Data should be structured according to Chart.js requirements
    });
    return () => chart.destroy();
}, [beqLineData]);

  useEffect(() => {
    // Setup for TEQ Line Chart using Chart.js
    const ctx = document.getElementById('teqline').getContext('2d');
    const chart = new Chart(ctx, {
      type: 'bar', // Change accordingly
      data: teqLineData, // Data should be structured according to Chart.js requirements
    });
    return () => chart.destroy();
}, [teqLineData]);

  return (
    <div>
      <div className="col-md-6">
        <div className="widget widget-nopad">
          <div className="widget-header">
            <i className="fa fa-exclamation-triangle" style={{ marginLeft: '0.5em' }}></i>
            <h3 style={{ margin: '0px' }}>Business Exception Queue</h3>
          </div>
          <div className="dashboard-widget-content" style={{ overflowY: 'auto;' }}>
            {!beqSummaryList && (
              <div>
                <i className="fa fa-spinner fa-spin fa-3x fa-fw margin-bottom"></i>
                <span className="sr-only">Loading...</span>
                </div>
            )}
            <div className="shortcuts">
              {beqSummaryList.map((exception, index) => (
                <Link to={`/businessexception/${exception.ExceptionName}`} className={exception.NoOfExceptions >= exception.ThreshholdCount ? 'shortcut shortcut-danger' : 'shortcut shortcut-info'} key={index}>
                  <span className={exception.NoOfExceptions >= exception.ThreshholdCount ? 'shortcut-header' : 'shortcut-headerSuccess'}>{exception.ExceptionName}</span>
                  <span className="value">{exception.NoOfExceptions}</span><br />
                  <span className="value">{exception.DateTime}</span>
                    </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      <div className="col-md-6">
        <div className="widget">
          <div className="widget-header">
            <i className="icon-signal"></i>
            <h3 style={{ margin: '0px' }}>Business Exceptions</h3>
            </div>
          <div className="dashboard-widget-content">
            <canvas id="beqline" className="chart-bar" height="280" width="950"></canvas> 
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="widget widget-nopad">
            <div className="widget-header">
              <i className="fa fa-exclamation-triangle" style={{marginLeft: '0.5em'}}></i>
              <h3 style={{margin: '0px'}}>Technical Exception Queue</h3>
            </div>
            <div className="dashboard-widget-content" style={{overflowY: 'auto;'}}>
              {!teqSummaryList && (
                <div>
                  <i className="fa fa-spinner fa-spin fa-3x fa-fw margin-bottom"></i>
                  <span className="sr-only">Loading...</span>
                </div>
              )}
              <div className="shortcuts">
                {teqSummaryList.map((exception, index) => (
                  <Link to={`/Exceptions/${exception.ExceptionName}`} className={exception.NoOfExceptions >= exception.ThreshholdCount ? 'shortcut shortcut-danger' : 'shortcut shortcut-info'} key={index}>
                    <span className={exception.NoOfExceptions >= exception.ThreshholdCount ? 'shortcut-header' : 'shortcut-headerSuccess'}>{exception.ExceptionName}</span>
                    <span className="value">{exception.NoOfExceptions}</span><br />
                    <span className="value">{exception.DateTime}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="widget">
            <div className="widget-header">
              <i className="icon-signal"></i>
              <h3 style={{margin: '0px'}}>Technical Exceptions</h3>
            </div>
            <div className="dashboard-widget-content">
              <canvas id="teqline" className="chart-bar" height="280" width="950"></canvas> 
            </div>
          </div>
        </div>
      </div>
    );
}

export default Dashboard;