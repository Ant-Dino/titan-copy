import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Chart from 'chart.js/auto';
interface ExceptionSummary {
    ExceptionName: string;
    NoOfExceptions: number;
    ThreshholdCount: number;
    DateTime: string;
}
interface DashboardProps {
    getCurrentUser: () => void;
    BEQSummaryList: ExceptionSummary[];
    TEQSummaryList: ExceptionSummary[];
    BEQLineChartData: Chart.ChartData;
    TEQLineChartData: Chart.ChartData;
}
const Dashboard: React.FC<DashboardProps> = ({ getCurrentUser, BEQSummaryList, TEQSummaryList, BEQLineChartData, TEQLineChartData }) => {
    useEffect(() => {
        getCurrentUser();
    }, [getCurrentUser]);
    const renderSummaryList = (list: ExceptionSummary[]) => {
        return list?.map((exception, index) => (
            <Link key={index} to={`/businessexception/${exception.ExceptionName}`} className={`shortcut ${exception.NoOfExceptions >= exception.ThreshholdCount ? 'shortcut-danger' : 'shortcut-info'}`}>
                <span className={`${exception.NoOfExceptions >= exception.ThreshholdCount ? 'shortcut-header' : 'shortcut-headerSuccess'}`}>
                    {exception.ExceptionName}
                </span>
                <span className="value">{exception.NoOfExceptions}</span><br />
                <span className="value">{exception.DateTime}</span>
            </Link>
        ));
    };
    const renderChart = (canvasId: string, chartData: Chart.ChartData) => {
        useEffect(() => {
            const ctx = (document.getElementById(canvasId) as HTMLCanvasElement).getContext('2d');
            if (ctx) {
                new Chart(ctx, {
                    type: 'bar',
                    data: chartData,
                    options: {
                        legend: {
                            display: true,
                        }
                    }
                });
            }
        }, [canvasId, chartData]);
    };
    return (
        <div>
            <div className="col-md-6">
                <div className="widget widget-nopad">
                    <div className="widget-header">
                        <i className="fa fa-exclamation-triangle" style={{ marginLeft: '0.5em' }}></i>
                        <h3 style={{ margin: '0px' }}> Business Exception Queue</h3>
                    </div>
                    <div className="dashboard-widget-content" style={{ overflowY: 'auto' }}>
                        {BEQSummaryList ? (
                            <div className="shortcuts">
                                {renderSummaryList(BEQSummaryList)}
                            </div>
                        ) : (
                            <div>
                                <i className="fa fa-spinner fa-spin fa-3x fa-fw margin-bottom"></i>
                                <span className="sr-only">Loading...</span>
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
                        {BEQLineChartData ? (
                            <canvas id="beqline" height="280" width="950"></canvas>
                        ) : (
                            <div>
                                <i className="fa fa-spinner fa-spin fa-3x fa-fw margin-bottom"></i>
                                <span className="sr-only">Loading...</span>
                            </div>
                        )}
                        {renderChart('beqline', BEQLineChartData)}
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <div className="widget widget-nopad">
                    <div className="widget-header">
                        <i className="fa fa-exclamation-triangle" style={{ marginLeft: '0.5em' }}></i>
                        <h3 style={{ margin: '0px' }}>Technical Exception Queue</h3>
                    </div>
                    <div className="dashboard-widget-content" style={{ overflowY: 'auto' }}>
                        {TEQSummaryList ? (
                            <div className="shortcuts">
                                {renderSummaryList(TEQSummaryList)}
                            </div>
                        ) : (
                            <div>
                                <i className="fa fa-spinner fa-spin fa-3x fa-fw margin-bottom"></i>
                                <span className="sr-only">Loading...</span>
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
                        {TEQLineChartData ? (
                            <canvas id="teqline" height="280" width="950"></canvas>
                        ) : (
                            <div>
                                <i className="fa fa-spinner fa-spin fa-3x fa-fw margin-bottom"></i>
                                <span className="sr-only">Loading...</span>
                            </div>
                        )}
                        {renderChart('teqline', TEQLineChartData)}
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Dashboard;