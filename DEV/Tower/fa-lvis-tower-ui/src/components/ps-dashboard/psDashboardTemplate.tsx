import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Chart } from 'react-chartjs-2';
interface ExceptionSummary {
  ExceptionName: string;
  NoOfExceptions: number;
  ThreshholdCount: number;
  DateTime: string;
}
interface Props {
  fetchCurrentUser: () => void;
  BEQSummaryList: ExceptionSummary[];
  TEQSummaryList: ExceptionSummary[];
  BEQLineData?: any; // Replace any with a more specific type if available
  TEQLineData?: any; // Replace any with a more specific type if available
}
const Dashboard: React.FC<Props> = ({ fetchCurrentUser, BEQSummaryList, TEQSummaryList, BEQLineData, TEQLineData }) => {
  useEffect(() => {
    fetchCurrentUser();
  }, [fetchCurrentUser]);
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
                {!BEQSummaryList && (
                  <div>
                    <i className="fa fa-spinner fa-spin fa-3x fa-fw margin-bottom"></i>
                    <span className="sr-only">Loading...</span>
                  </div>
                )}

                <div className="shortcuts">
                  {BEQSummaryList?.slice(0, 20).map((Exception) => (
                    <Link to={`/businessexception/${Exception.ExceptionName}`} key={Exception.ExceptionName}
                      className={`shortcut ${Exception.NoOfExceptions >= Exception.ThreshholdCount ? 'shortcut-danger' : 'shortcut-info'}`}>
                      <span className={Exception.NoOfExceptions >= Exception.ThreshholdCount ? 'shortcut-header' : 'shortcut-headerSuccess'}>
                        {Exception.ExceptionName}
                      </span>
                      <span className="value">{Exception.NoOfExceptions}</span><br />
                      <span className="value">{Exception.DateTime}</span>
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
               {!BEQLineData && (
                 <div>
                   <i className="fa fa-spinner fa-spin fa-3x fa-fw margin-bottom"></i>
                   <span className="sr-only">Loading...</span>
                 </div>
               )}
               {BEQLineData && (
                 <Chart type="bar" data={BEQLineData.data} options={BEQLineData.options} />
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
                {!TEQSummaryList && (
                  <div>
                    <i className="fa fa-spinner fa-spin fa-3x fa-fw margin-bottom"></i>
                    <span className="sr-only">Loading...</span>
                  </div>
                )}
                <div className="shortcuts">
                  {TEQSummaryList?.slice(0, 100).map((Exception) => (
                    <Link to={`/Exceptions/${Exception.ExceptionName}`} key={Exception.ExceptionName}
                      className={`shortcut ${Exception.NoOfExceptions >= Exception.ThreshholdCount ? 'shortcut-danger' : 'shortcut-info'}`}>
                      <span className={Exception.NoOfExceptions >= Exception.ThreshholdCount ? 'shortcut-header' : 'shortcut-headerSuccess'}>
                        {Exception.ExceptionName}
                      </span>
                      <span className="value">{Exception.NoOfExceptions}</span><br />
                      <span className="value">{Exception.DateTime}</span>
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
                <h3 style={{ margin: '0px' }}>Technical Exceptions</h3>
              </div>
              <div className="dashboard-widget-content">
                {!TEQLineData && (
                  <div>
                    <i className="fa fa-spinner fa-spin fa-3x fa-fw margin-bottom"></i>
                    <span className="sr-only">Loading...</span>
                  </div>
                )}
                {TEQLineData && (
                 <Chart type="bar" data={TEQLineData.data} options={TEQLineData.options} />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;