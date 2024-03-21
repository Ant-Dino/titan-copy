import React, { useEffect, useState } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, LineElement, Title, Tooltip, Legend, PointElement } from 'chart.js';
import { Bar, Line } from 'react-chartjs-2';
ChartJS.register(CategoryScale, LinearScale, BarElement, LineElement, PointElement, Title, Tooltip, Legend);
type ExceptionData = {
  ExceptionName: string;
  NoOfExceptions: number;
  DateTime: string;
  ThreshholdCount: number;
};
type DashboardProps = {
  getCurrentUser: () => void;
  BEQSummaryList: ExceptionData[];
  TEQSummaryList: ExceptionData[];
  BEQLineChartData: any; // Assuming structure is predefined or is dynamic
  TEQLineChartData: any; // Assuming structure is dynamic
};
const Dashboard: React.FC<DashboardProps> = ({ getCurrentUser, BEQSummaryList, TEQSummaryList, BEQLineChartData, TEQLineChartData }) => {
  useEffect(() => {
    getCurrentUser();
  }, [getCurrentUser]);
  return (
    <div>
      <div className="ps-dashboard-header">
        <div className="col-md-6">
          <div className="widget widget-nopad">
            <div className="widget-header">
              <i className="fa fa-exclamation-triangle" style={{marginLeft:"0.5em"}}></i>
              <h3 style={{margin:"0px"}}>Business Exception Queue</h3>
            </div>

            <div className="dashboard-widget-content" style={{overflowY:"auto"}}>
              {!BEQSummaryList && (
                <div>
                  <i className="fa fa-spinner fa-spin fa-3x fa-fw margin-bottom"></i>
                  <span className="sr-only">Loading...</span>
                </div>
              )}

              <div className="shortcuts">
                {BEQSummaryList?.slice(0, 20).map((Exception) => (
                  <a key={Exception.ExceptionName} href={`#/businessexception/${Exception.ExceptionName}`} 
                     className={`shortcut ${Exception.NoOfExceptions >= Exception.ThreshholdCount ? 'shortcut-danger' : 'shortcut-info'}`}>
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
          <div className="widget">
            <div className="widget-header">
              <i className="icon-signal"></i>
              <h3 style={{margin:"0px"}}>Business Exceptions</h3>
            </div>
            <div className="dashboard-widget-content">
              {!BEQLineChartData && (
                <div>
                  <i className="fa fa-spinner fa-spin fa-3x fa-fw margin-bottom"></i>
                  <span className="sr-only">Loading...</span>
                </div>
              )}
              <Bar data={BEQLineChartData} height={280} width={950} options={{ maintainAspectRatio: false }} />
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="widget widget-nopad">
            <div className="widget-header">
              <i className="fa fa-exclamation-triangle" style={{marginLeft:"0.5em"}}></i>
              <h3 style={{margin:"0px"}}>Technical Exception Queue</h3>
            </div>
            <div className="dashboard-widget-content" style={{overflowY:"auto"}}>
              {!TEQSummaryList && (
                <div>
                  <i className="fa fa-spinner fa-spin fa-3x fa-fw margin-bottom"></i>
                  <span className="sr-only">Loading...</span>
                </div>
              )}
              <div className="shortcuts">
                {TEQSummaryList?.slice(0, 100).map(Exception => (
                  <a key={Exception.ExceptionName} href={`#/Exceptions/${Exception.ExceptionName}`}
                     className={`shortcut ${Exception.NoOfExceptions >= Exception.ThreshholdCount ? 'shortcut-danger' : 'shortcut-info'}`}>
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
          <div className="widget">
            <div className="widget-header">
              <i className="icon-signal"></i>
              <h3 style={{margin:"0px"}}>Technical Exceptions</h3>
            </div>
            <div className="dashboard-widget-content">
              {!TEQLineChartData && (
                <div>
                  <i className="fa fa-spinner fa-spin fa-3x fa-fw margin-bottom"></i>
                  <span className="sr-only">Loading...</span>
                </div>
              )}
              <Bar data={TEQLineChartData} height={280} width={950} options={{ maintainAspectRatio: false }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;