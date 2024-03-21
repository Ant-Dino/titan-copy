import React, { useEffect, useState } from 'react';
import { Chart } from 'chart.js/auto';
import { Bar } from 'react-chartjs-2';

interface Exception {
  ExceptionName: string;
  NoOfExceptions: number;
  ThreshholdCount: number;
  DateTime: string;
}

interface DashboardProps {
  getCurrentUser: () => void; // This would typically involve setting the user's state
  BEQSummaryList: Exception[] | null;
  TEQSummaryList: Exception[] | null;
  BEQChartData: any; // Assuming this includes data, labels, and colors for the business exceptions chart
  TEQChartData: any; // Assuming this includes data, labels, and colors for the technical exceptions chart
}

const Dashboard: React.FC<DashboardProps> = ({
  getCurrentUser,
  BEQSummaryList,
  TEQSummaryList,
  BEQChartData,
  TEQChartData
}) => {
  useEffect(() => {
    getCurrentUser();
  }, [getCurrentUser]);

  const renderExceptions = (exceptionsList: Exception[] | null, type: string) => {
    if (!exceptionsList) {
      return <div><i className="fa fa-spinner fa-spin fa-3x fa-fw margin-bottom"></i><span className="sr-only">Loading...</span></div>;
    }
    return exceptionsList.slice(0, type === 'BEQ' ? 20 : 100).map((exception, index) => (
      <a key={index} href={`#/${type === 'BEQ' ? 'businessexception' : 'Exceptions'}/${exception.ExceptionName}`} 
         className={`shortcut ${exception.NoOfExceptions >= exception.ThreshholdCount ? 'shortcut-danger' : 'shortcut-info'}`}>
          <span className={`${exception.NoOfExceptions >= exception.ThreshholdCount ? 'shortcut-header' : 'shortcut-headerSuccess'}`}>
            {exception.ExceptionName}
          </span>
          <span className="value">{exception.NoOfExceptions}</span><br />
          <span className="value">{exception.DateTime}</span>
      </a>
    ));
  };

  return (
    <div>
      <div className="ps-dashboard-header">
        {/* Possible location to render user specific content */}
        <br /><br />
        <div className="col-md-6">
          <div className="widget widget-nopad">
            <div className="widget-header">
              <i className="fa fa-exclamation-triangle" style={{ marginLeft: '0.5em' }}></i>
              <h3 style={{ margin: '0px' }}>Business Exception Queue</h3>
            </div>

            <div className="dashboard-widget-content" style={{ overflowY: 'auto' }}>
              {renderExceptions(BEQSummaryList, 'BEQ')}
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
              {!BEQChartData ? (
                <div><i className="fa fa-spinner fa-spin fa-3x fa-fw margin-bottom"></i><span className="sr-only">Loading...</span></div>
              ) : (
                <Bar data={BEQChartData.data} options={BEQChartData.options} />
              )}
            </div>
          </div>
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
              {renderExceptions(TEQSummaryList, 'TEQ')}
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="widget">
            <div className="widget-header">
              <i className="icon-signal"></i>
              <h3 style={{ margin: '0px' }}>Technical Exceptions</h3>
            </div>
            <div className="dashboard-widget-content">
              {!TEQChartData ? (
                <div><i className="fa fa-spinner fa-spin fa-3x fa-fw margin-bottom"></i><span className="sr-only">Loading...</span></div>
              ) : (
                <Bar data={TEQChartData.data} options={TEQChartData.options} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;