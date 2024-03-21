import React, { useEffect, useState } from 'react';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
Chart.register(ArcElement, Tooltip, Legend);
interface ExceptionSummary {
  ExceptionName: string;
  NoOfExceptions: number;
  DateTime: string;
  ThreshholdCount: number;
}
interface BEQLineProps {
  data: number[];
  labels: string[];
  Colours: string[];
  optionsMixed: any;
}
interface DashboardProps {
  fetchCurrentUser: () => void;
  BEQSummaryList: ExceptionSummary[];
  TEQSummaryList: ExceptionSummary[];
  BEQLineData: BEQLineProps;
  TEQLineData: BEQLineProps;
}
function DashboardComponent({
  fetchCurrentUser,
  BEQSummaryList,
  TEQSummaryList,
  BEQLineData,
  TEQLineData,
}: DashboardProps) {
  useEffect(() => {
    fetchCurrentUser();
  }, [fetchCurrentUser]);
  const renderExceptionLink = (Exception: ExceptionSummary) => {
    const isDanger = Exception.NoOfExceptions >= Exception.ThreshholdCount;
    return (
      <a href={`#/Exceptions/${Exception.ExceptionName}`} key={Exception.ExceptionName} className={`shortcut ${isDanger ? 'shortcut-danger' : 'shortcut-info'}`}>
        <span className={`shortcut-header ${isDanger ? '' : 'shortcut-headerSuccess'}`}>{Exception.ExceptionName}</span>
        <span className="value">{Exception.NoOfExceptions}</span><br />
        <span className="value">{Exception.DateTime}</span>
      </a>
    );
  };
  return (
    <div>
      <div className="ps-dashboard-header">
        <div><br /><br />
          <div className="col-md-6">
            <div className="widget widget-nopad">
              <div className="widget-header">
                <i className="fa fa-exclamation-triangle" style={{ marginLeft: '0.5em' }}></i>
                <h3 style={{ margin: '0px' }}> Business Exception Queue</h3>
              </div>
              <div className="dashboard-widget-content" style={{ overflowY: 'auto' }}>
                {!BEQSummaryList && <div><i className="fa fa-spinner fa-spin fa-3x fa-fw margin-bottom"></i><span className="sr-only">Loading...</span></div>}
                <div className="shortcuts">
                  {BEQSummaryList?.map(renderExceptionLink)}
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
                {!BEQLineData.data && <div><i className="fa fa-spinner fa-spin fa-3x fa-fw margin-bottom"></i><span className="sr-only">Loading...</span></div>}
                <Bar data={BEQLineData.data} options={BEQLineData.optionsMixed} height={280} width={950} />
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
                {!TEQSummaryList && <div><i className="fa fa-spinner fa-spin fa-3x fa-fw margin-bottom"></i><span className="sr-only">Loading...</span></div>}
                <div className="shortcuts">
                  {TEQSummaryList?.map(renderExceptionLink)}
                </div>
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
                {!TEQLineData.data && <div><i className="fa fa-spinner fa-spin fa-3x fa-fw margin-bottom"></i><span className="sr-only">Loading...</span></div>}
                <Bar data={TEQLineData.data} options={TEQLineData.optionsMixed} height={280} width={950} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default DashboardComponent;