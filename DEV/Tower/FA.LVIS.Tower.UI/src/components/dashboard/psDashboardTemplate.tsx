// Import necessary dependencies
import React, { useState, useEffect } from 'react';
import Chart from 'chart.js/auto'; // Depending on the version of Chart.js you are using, this import might differ

// Define the TypeScript interface for Exceptions (simplified for this example)
interface Exception {
  ExceptionName: string;
  NoOfExceptions: number;
  ThreshholdCount: number;
  DateTime: string;
}

// The React component
const DashboardComponent: React.FC = () => {

  // State for BEQSummaryList and TEQSummaryList
  const [BEQSummaryList, setBEQSummaryList] = useState<Exception[] | null>(null);
  const [TEQSummaryList, setTEQSummaryList] = useState<Exception[] | null>(null);

    // Dummy fetchData function to simulate fetching data
    // In a real application, you might use fetch or axios to get data from a server
  const fetchData = async () => {
    // Simulate API call to get data
    setBEQSummaryList([
      { ExceptionName: 'Exception 1', NoOfExceptions: 5, ThreshholdCount: 10, DateTime: '2022-07-31' },
      // Add more dummy data as needed
    ]);
    setTEQSummaryList([
      { ExceptionName: 'Technical 1', NoOfExceptions: 2, ThreshholdCount: 5, DateTime: '2022-07-31' },
      // Add more dummy data as needed
    ]);
    };

    // Equivalent to AngularJS's ngInit
  useEffect(() => {
    fetchData();
  }, []);

    // Render component
  return (
    <div>
      <div className="col-md-6">
        <div className="widget widget-nopad">
          <div className="widget-header">
            <i className="fa fa-exclamation-triangle" style={{ marginLeft: '0.5em' }}></i>
            <h3 style={{ margin: '0px' }}> Business Exception Queue</h3>
          </div>
          <div className="dashboard-widget-content" style={{ overflowY: 'auto' }}>
            {!BEQSummaryList && (
              <>
                <i className="fa fa-spinner fa-spin fa-3x fa-fw margin-bottom"></i>
                <span className="sr-only">Loading...</span>
              </>
            )}
            <div className="shortcuts">
              {BEQSummaryList && BEQSummaryList.slice(0, 20).map((Exception, index) => (
                <a key={index} href={`#/businessexception/${Exception.ExceptionName}`}
                     className={`shortcut ${Exception.NoOfExceptions >= Exception.ThreshholdCount ? 'shortcut-danger' : 'shortcut-info'}`}>
                  <span className={`${Exception.NoOfExceptions >= Exception.ThreshholdCount ? 'shortcut-header' : 'shortcut-headerSuccess'}`}>{Exception.ExceptionName}</span>
                  <span className="value">{Exception.NoOfExceptions}</span><br />
                  <span className="value">{Exception.DateTime}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Similar structure for TEQSummaryList and other components */}
    </div>
  );
}

// Export the component
export default DashboardComponent;