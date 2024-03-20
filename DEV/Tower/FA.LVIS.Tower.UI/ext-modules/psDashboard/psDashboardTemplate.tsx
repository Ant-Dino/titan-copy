import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Chart from 'chart.js/auto';
interface ExceptionSummary {
  ExceptionName: string;
  NoOfExceptions: number;
  DateTime: string;
  ThreshholdCount: number;
}
interface ExceptionQueueProps {
  BEQSummaryList?: ExceptionSummary[];
  TEQSummaryList?: ExceptionSummary[];
  fetchBEQSummaryList: () => Promise<ExceptionSummary[]>;
  fetchTEQSummaryList: () => Promise<ExceptionSummary[]>;
  LnCtrlData?: any; // Assuming it's a type for the chart data, it should be more specific
  TEQLnCtrlData?: any;
  fetchLnCtrlData: () => Promise<any>; // Same as above
  fetchTEQLnCtrlData: () => Promise<any>;
}
const DashboardWidget = ({
  BEQSummaryList,
  TEQSummaryList,
  fetchBEQSummaryList,
  fetchTEQSummaryList,
  LnCtrlData,
  TEQLnCtrlData,
  fetchLnCtrlData,
  fetchTEQLnCtrlData,
}: ExceptionQueueProps) => {
  const [beqData, setBeqData] = useState<ExceptionSummary[]>();
  const [teqData, setTeqData] = useState<ExceptionSummary[]>();
  const [lnData, setLnData] = useState<any>();
  const [teqLnData, setTeqLnData] = useState<any>();
  useEffect(() => {
    fetchBEQSummaryList().then(data => {
      setBeqData(data);
    });
    fetchTEQSummaryList().then(data => {
      setTeqData(data);
    });
    fetchLnCtrlData().then(data => {
      setLnData(data);
    });
    fetchTEQLnCtrlData().then(data => {
      setTeqLnData(data);
    });
  }, []);
  return (
    <div>
      <div className="row">
        {/* Business Exception Queue Widget */}
        <div className="col-md-6">
          <div className="widget widget-nopad">
            <div className="widget-header">
              <i className="fa fa-exclamation-triangle" style={{ marginLeft: '0.5em' }}></i>
              <h3 style={{ margin: '0px' }}> Business Exception Queue</h3>
            </div>

            <div className="dashboard-widget-content" style={{ overflowY: 'auto' }}>
              {!beqData ? (
                <div>
                  <i className="fa fa-spinner fa-spin fa-3x fa-fw margin-bottom"></i>
                  <span className="sr-only">Loading...</span>
                </div>
              ) : (
                <div className="shortcuts">
                  {beqData.slice(0, 20).map((Exception, index) => (
                    <Link key={index} to={`/businessexception/${Exception.ExceptionName}`}
                      className={`shortcut ${Exception.NoOfExceptions >= Exception.ThreshholdCount ? 'shortcut-danger' : 'shortcut-info'}`}>
                      <span className={`${Exception.NoOfExceptions >= Exception.ThreshholdCount ? 'shortcut-header' : 'shortcut-headerSuccess'}`}>{Exception.ExceptionName}</span>
                      <span className="value">{Exception.NoOfExceptions}</span><br />
                      <span className="value">{Exception.DateTime}</span>
                    </Link>
                  ))}
                </div>
              )}
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

            <div className="dashboard-widget-content">
              {!lnData ? (
                <div>
                  <i className="fa fa-spinner fa-spin fa-3x fa-fw margin-bottom"></i>
                  <span className="sr-only">Loading...</span>
                </div>
              ) : (
                <canvas id="beqline"></canvas> // Setup of this canvas as a Chart.js line chart would be done in a useEffect() or similar lifecycle method
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        {/* Technical Exception Queue Widget */}
        <div className="col-md-6">
          <div className="widget widget-nopad">
            <div className="widget-header">
              <i className="fa fa-exclamation-triangle" style={{ marginLeft: '0.5em' }}></i>
              <h3 style={{ margin: '0px' }}>Technical Exception Queue</h3>
            </div>

            <div className="dashboard-widget-content" style={{ overflowY: 'auto' }}>
              {!teqData ? (
                <div>
                  <i className="fa fa-spinner fa-spin fa-3x fa-fw margin-bottom"></i>
                  <span className="sr-only">Loading...</span>
                </div>
              ) : (
                <div className="shortcuts">
                  {teqData.map((Exception, index) => (
                    <Link key={index} to={`/Exceptions/${Exception.ExceptionName}`}
                      className={`shortcut ${Exception.NoOfExceptions >= Exception.ThreshholdCount ? 'shortcut-danger' : 'shortcut-info'}`}>
                      <span className={`${Exception.NoOfExceptions >= Exception.ThreshholdCount ? 'shortcut-header' : 'shortcut-headerSuccess'}`}>{Exception.ExceptionName}</span>
                      <span className="value">{Exception.NoOfExceptions}</span><br />
                      <span className="value">{Exception.DateTime}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Technical Exceptions Chart */}
        <div className="col-md-6">
          <div className="widget">
            <div className="widget-header">
              <i className="icon-signal"></i>
              <h3 style={{ margin: '0px' }}>Technical Exceptions</h3>
            </div>

            <div className="dashboard-widget-content">
              {!teqLnData ? (
                <div>
                  <i className="fa fa-spinner fa-spin fa-3x fa-fw margin-bottom"></i>
                  <span className="sr-only">Loading...</span>
                </div>
              ) : (
                <canvas id="teqline"></canvas> // Setup of this canvas as a Chart.js line chart would be done in a useEffect() or similar lifecycle method
               )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DashboardWidget;