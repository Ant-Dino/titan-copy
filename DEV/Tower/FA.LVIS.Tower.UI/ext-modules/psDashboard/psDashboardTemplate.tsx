import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Assuming axios is used for HTTP requests

type Exception = {
  ExceptionName: string;
  NoOfExceptions: number;
  ThreshholdCount: number;
  DateTime: string;
};


const DashboardComponent: React.FC = () => {
  const [BEQSummaryList, setBEQSummaryList] = useState<Exception[] | null>(null);
  const [TEQSummaryList, setTEQSummaryList] = useState<Exception[] | null>(null);

  useEffect(() => {
    // Example function to fetch data, replace with actual
    const getCurrentUser = async () => {
      try {
        // Assuming '/currentUser' endpoint returns both BEQSummaryList and TEQSummaryList 
        const response = await axios.get('/currentUser');
        setBEQSummaryList(response.data.BEQSummaryList);
        setTEQSummaryList(response.data.TEQSummaryList);
      } catch (error) {
        console.error('There was an error fetching the current user data', error);
      }
    };

    getCurrentUser();
  }, []);

  return (
    <div>
      <div className="ps-dashboard-header">
        <div>
          <div className="col-md-6">
            <div className="widget widget-nopad">
              <div className="widget-header">
                <i className="fa fa-exclamation-triangle" style={{ marginLeft: '0.5em' }}></i>
                <h3 style={{ margin: '0px' }}> Business Exception Queue</h3>
              </div>
              <div className="dashboard-widget-content" style={{ overflowY: 'auto' }}>
                { !BEQSummaryList && (
                  <div>
                    <i className="fa fa-spinner fa-spin fa-3x fa-fw margin-bottom"></i>
                    <span className="sr-only">Loading...</span>
                  </div>
                )}

                <div className="shortcuts">
                  { BEQSummaryList && BEQSummaryList.slice(0, 20).map((Exception) => (
                    <a 
                      key={Exception.ExceptionName}
                      href={`#/businessexception/${Exception.ExceptionName}`}
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
          {/* 
            The BEQ Line Chart section needs a specific component or library to render charts in React.
            This portion is commented out as it requires an implementation based on the library you choose to use (e.g., Chart.js, Recharts).
          */}
          <div className="col-md-6">
            {/* BEQ Line Chart Placeholder */}
          </div>
        </div>
        <div>
          <div className="col-md-6">
            <div className="widget widget-nopad">
              <div className="widget-header">
                <i className="fa fa-exclamation-triangle" style={{ marginLeft: '0.5em' }}></i>
                <h3 style={{ margin: '0px' }}>Technical Exception Queue</h3>
              </div>
              <div className="dashboard-widget-content" style={{ overflowY: 'auto' }}>
                { !TEQSummaryList && (
                  <div>
                    <i className="fa fa-spinner fa-spin fa-3x fa-fw margin-bottom"></i>
                    <span className="sr-only">Loading...</span>
                  </div>
                )}
                <div className="shortcuts">
                  { TEQSummaryList && TEQSummaryList.slice(0, 100).map((Exception) => (
                    <a 
                      key={Exception.ExceptionName}
                      href={`#/Exceptions/${Exception.ExceptionName}`}
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
          {/* 
            The TEQ Line Chart section is similar to BEQ in needing a specific chart component.
          */}
          <div className="col-md-6">
            {/* TEQ Line Chart Placeholder */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardComponent;