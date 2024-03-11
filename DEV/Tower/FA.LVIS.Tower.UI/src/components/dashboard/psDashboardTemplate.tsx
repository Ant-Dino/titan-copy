// Import React, useState, and useEffect from React
import React, { useState, useEffect } from 'react';
// Import Chart components from react-chartjs-2
import { Bar } from 'react-chartjs-2';
// Import Chart.js library
import Chart from 'chart.js/auto';

// Define the TypeScript interface for ExceptionType
interface ExceptionType {
  ExceptionName: string;
  NoOfExceptions: number;
  ThreshholdCount: number;
  DateTime: string;
}

// Define the TypeScript interface for LineChartData
interface LineChartData {
  labels: string[];
  datasets: Chart.ChartDataSets[];
}

// Define the React Functional Component
const DashboardComponent: React.FC = () => {
  // useState hooks for data storage
  const [beqSummaryList, setBeqSummaryList] = useState<ExceptionType[] | null>(null);
  const [teqSummaryList, setTeqSummaryList] = useState<ExceptionType[] | null>(null);
  const [lnData, setLnData] = useState<LineChartData | null>(null);
  const [teqLnData, setTeqLnData] = useState<LineChartData | null>(null);

  // Dummy fetch data function to simulate getting data
  // This should be replaced with actual API calls
  useEffect(() => {
    // Simulate fetching data
    const fetchData = async () => {
      // Sample data, replace with actual API call
      const beqDummyData: ExceptionType[] = [
        { ExceptionName: 'Exception A', NoOfExceptions: 5, ThreshholdCount: 10, DateTime: '2021-03-15T12:00:00' },
        { ExceptionName: 'Exception B', NoOfExceptions: 12, ThreshholdCount: 10, DateTime: '2021-03-16T13:00:00' }
      ];

      const teqDummyData: ExceptionType[] = [
        { ExceptionName: 'Exception C', NoOfExceptions: 7, ThreshholdCount: 15, DateTime: '2021-03-17T14:00:00' },
        { ExceptionName: 'Exception D', NoOfExceptions: 3, ThreshholdCount: 5, DateTime: '2021-03-18T15:00:00' }
      ];

      const lnDummyData: LineChartData = {
        labels: ['January', 'February', 'March'],
        datasets: [{
          label: 'Dataset 1',
          backgroundColor: '#42A5F5',
          data: [10, 20, 30]
        }]
      };

      const teqLnDummyData: LineChartData = {
        labels: ['April', 'May', 'June'],
        datasets: [{
          label: 'Dataset 2',
          backgroundColor: '#FFA726',
          data: [30, 20, 10]
        }]
      };

      // Simulate setting fetched data
      setBeqSummaryList(beqDummyData);
      setTeqSummaryList(teqDummyData);
      setLnData(lnDummyData);
      setTeqLnData(teqLnDummyData);
    };

    fetchData();
  }, []);

  // Rendering
  return (
    <div>
      {/* Dashboard header */}
      <div className="ps-dashboard-header">
        {/* Business Exception Queue */}
        <div className="col-md-6">
          <div className="widget widget-nopad">
            <div className="widget-header">
              <i className="fa fa-exclamation-triangle" style={{ marginLeft: '0.5em' }}></i>
              <h3 style={{ margin: '0px' }}>Business Exception Queue</h3>
            </div>
            <div className="dashboard-widget-content" style={{ overflowY: 'auto' }}>
              {/* Loading animation */}
              {!beqSummaryList && (
                <div>
                  <i className="fa fa-spinner fa-spin fa-3x fa-fw margin-bottom"></i>
                  <span className="sr-only">Loading...</span>
                </div>
              )}
              {/* List of Exceptions */}
              <div className="shortcuts">
                {beqSummaryList && beqSummaryList.map((Exception, index) => (
                  <a key={index} href={`#/businessexception/${Exception.ExceptionName}`}
                     className={'shortcut ' + (Exception.NoOfExceptions >= Exception.ThreshholdCount ? 'shortcut-danger' : 'shortcut-info')}>
                    <span className={Exception.NoOfExceptions >= Exception.ThreshholdCount ? 'shortcut-header' : 'shortcut-headerSuccess'}>
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
        {/* Business Exceptions Chart */}
        <div className="col-md-6">
          <div className="widget">
            <div className="widget-header">
              <i className="icon-signal"></i>
              <h3 style={{ margin: '0px' }}>Business Exceptions</h3>
            </div>
            {!lnData && (
              <div>
                <i className="fa fa-spinner fa-spin fa-3x fa-fw margin-bottom"></i>
                <span className="sr-only">Loading...</span>
              </div>
            )}
            {lnData && (
              <Bar data={lnData} height={280} width={950} />
            )}
          </div>
        </div>
      </div>
      {/* Similar structure for Technical Exception Queue and Technical Exceptions Chart */}
      {/* This part would replicate the above with teqSummaryList and teqLnData being used */}
    </div>
  );
};

export default DashboardComponent;