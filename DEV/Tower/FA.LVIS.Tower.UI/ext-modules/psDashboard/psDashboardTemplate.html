import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Chart } from 'react-chartjs-2';
import 'chartjs-plugin-datalabels';
interface Exception {
  ExceptionName: string;
  NoOfExceptions: number;
  DateTime: string;
  ThreshholdCount: number;
}
interface DashboardProps {
  getCurrentUser: () => void;
  BEQSummaryList: Exception[] | null;
  TEQSummaryList: Exception[] | null;
  BEQChartData: Chart.ChartData;
  TEQChartData: Chart.ChartData;
}
const DashboardComponent: React.FC<DashboardProps> = ({ getCurrentUser, BEQSummaryList, TEQSummaryList, BEQChartData, TEQChartData }) => {
  useEffect(() => {
    getCurrentUser();
  }, [getCurrentUser]);
  return (
    <div>
      <div className="col-md-6">
        <div className="widget widget-nopad">
          <div className="widget-header">
            <i className="fa fa-exclamation-triangle" style={{ marginLeft: '0.5em' }}></i>
            <h3 style={{ margin: '0px' }}> Business Exception Queue</h3>
          </div>
          <div className="dashboard-widget-content" style={{ overflowY: 'auto' }}>
            {BEQSummaryList === null ? (
              <>
                <i className="fa fa-spinner fa-spin fa-3x fa-fw margin-bottom"></i>
                <span className="sr-only">Loading...</span>
              </>
            ) : (
              <div className="shortcuts">
                {BEQSummaryList.slice(0, 20).map((Exception, index) => (
                  <Link
                    key={index}
                    to={`/businessexception/${Exception.ExceptionName}`}
                    className={`shortcut ${
                      Exception.NoOfExceptions >= Exception.ThreshholdCount ? 'shortcut-danger' : 'shortcut-info'
                    }`}
                  >
                    <span
                      className={`${
                        Exception.NoOfExceptions >= Exception.ThreshholdCount ? 'shortcut-header' : 'shortcut-headerSuccess'
                      }`}
                    >
                      {Exception.ExceptionName}
                    </span>
                    <span className="value">{Exception.NoOfExceptions}</span><br />
                    <span className="value">{Exception.DateTime}</span>
                  </Link>
                ))}
              </div>
            )}
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
              <>
                <i className="fa fa-spinner fa-spin fa-3x fa-fw margin-bottom"></i>
                <span className="sr-only">Loading...</span>
              </>
            ) : (
              <Chart
                type="bar"
                data={BEQChartData}
                height={280}
                width={950}
                options={{ legend: { display: true } }}
              />
            )}
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
              {TEQSummaryList === null ? (
                <>
                  <i className="fa fa-spinner fa-spin fa-3x fa-fw margin-bottom"></i>
                  <span className="sr-only">Loading...</span>
                </>
              ) : (
                <div className="shortcuts">
                  {TEQSummaryList.slice(0, 100).map((Exception, index) => (
                    <Link
                      key={index}
                      to={`/Exceptions/${Exception.ExceptionName}`}
                      className={`shortcut ${
                        Exception.NoOfExceptions >= Exception.ThreshholdCount ? 'shortcut-danger' : 'shortcut-info'
                      }`}
                    >
                      <span
                        className={`${
                          Exception.NoOfExceptions >= Exception.ThreshholdCount ? 'shortcut-header' : 'shortcut-headerSuccess'
                        }`}
                      >
                        {Exception.ExceptionName}
                      </span>
                      <span className="value">{Exception.NoOfExceptions}</span><br />
                      <span className="value">{Exception.DateTime}</span>
                    </Link>
                  ))}
                </div>
              )}
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
                <>
                  <i className="fa fa-spinner fa-spin fa-3x fa-fw margin-bottom"></i>
                  <span className="sr-only">Loading...</span>
                </>
              ) : (
                <Chart
                  type="bar"
                  data={TEQChartData}
                  height={280}
                  width={950}
                  options={{ legend: { display: true } }}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardComponent;