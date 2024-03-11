import React, { useEffect, useState } from 'react';
import Chart from 'chart.js/auto';

interface ExceptionItem {
 ExceptionName: string;
 NoOfExceptions: number;
 ThreshholdCount: number;
 DateTime: string;
}

const DashboardComponent: React.FC = () => {
 const [currentUser, setCurrentUser] = useState<string>('');
 const [BEQSummaryList, setBEQSummaryList] = useState<ExceptionItem[]>([]);
 const [TEQSummaryList, setTEQSummaryList] = useState<ExceptionItem[]>([]);
 const [BEQChartData, setBEQChartData] = useState<any>({});
 const [TEQChartData, setTEQChartData] = useState<any>({});

 // Simulate getting current user and summary data
 useEffect(() => {
   // Dummy function to simulate fetching current user
   const getCurrentUser = async () => 'John Doe';
   // Dummy function to simulate fetching BEQ and TEQ summary list
   const getSummaryLists = async () => ({
     BEQSummaryList: [
       { ExceptionName: 'Exception1', NoOfExceptions: 3, ThreshholdCount: 5, DateTime: '2023-04-01' },
       // Add more items as necessary
     ],
     TEQSummaryList: [
       { ExceptionName: 'ExceptionA', NoOfExceptions: 1, ThreshholdCount: 2, DateTime: '2023-04-02' },
       // Add more items as necessary
     ],
   });

   // Simulate fetching data
   getCurrentUser().then(user => setCurrentUser(user));
   getSummaryLists().then(summaries => {
     setBEQSummaryList(summaries.BEQSummaryList);
     setTEQSummaryList(summaries.TEQSummaryList);
   });
 }, []);

 // Dummy implementation, replace with actual chart setup
 useEffect(() => {
   const ctx = document.getElementById('beqline') as HTMLCanvasElement;
   new Chart(ctx, {
     type: 'bar',
     data: {} // Populate with your data
   });

   const ctx2 = document.getElementById('teqline') as HTMLCanvasElement;
   new Chart(ctx2, {
     type: 'bar',
     data: {} // Populate with your data
   });
 }, [BEQChartData, TEQChartData]);

 return (
   <div>
     <div className="col-md-6">
       <div className="widget widget-nopad">
         <div className="widget-header">
           <i className="fa fa-exclamation-triangle" style={{ marginLeft: '0.5em' }}></i>
           <h3 style={{ margin: '0px' }}> Business Exception Queue</h3>
         </div>
         <div className="dashboard-widget-content" style={{ overflowY: 'auto' }}>
           {!BEQSummaryList.length && (
             <div>
               <i className="fa fa-spinner fa-spin fa-3x fa-fw margin-bottom"></i>
               <span className="sr-only">Loading...</span>
             </div>
           )}
           <div className="shortcuts">
             {BEQSummaryList.map((Exception, index) => (
               <a href={`/businessexception/${Exception.ExceptionName}`} key={index} className={`shortcut ${Exception.NoOfExceptions >= Exception.ThreshholdCount ? 'shortcut-danger' : 'shortcut-info'}`}>
                 <span className={`shortcut-header ${Exception.NoOfExceptions >= Exception.ThreshholdCount ? 'shortcut-header' : 'shortcut-headerSuccess'}`}>{Exception.ExceptionName}</span>
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
           <h3 style={{ margin: '0px' }}>Business Exceptions</h3>
         </div>
         {/* Add the chart component here */}
         <canvas id="beqline"></canvas>
       </div>
     </div>
     <div className="col-md-6">
       <div className="widget widget-nopad">
         <div className="widget-header">
           <i className="fa fa-exclamation-triangle" style={{ marginLeft: '0.5em' }}></i>
           <h3 style={{ margin: '0px' }}>Technical Exception Queue</h3>
         </div>
         <div className="dashboard-widget-content" style={{ overflowY: 'auto' }}>
           {!TEQSummaryList.length && (
             <div>
               <i className="fa fa-spinner fa-spin fa-3x fa-fw margin-bottom"></i>
               <span className="sr-only">Loading...</span>
             </div>
           )}
           <div className="shortcuts">
             {TEQSummaryList.map((Exception, index) => (
               <a href={`/Exceptions/${Exception.ExceptionName}`} key={index} className={`shortcut ${Exception.NoOfExceptions >= Exception.ThreshholdCount ? 'shortcut-danger' : 'shortcut-info'}`}>
                 <span className={`shortcut-header ${Exception.NoOfExceptions >= Exception.ThreshholdCount ? 'shortcut-header' : 'shortcut-headerSuccess'}`}>{Exception.ExceptionName}</span>
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
           <h3 style={{ margin: '0px' }}>Technical Exceptions</h3>
         </div>
         {/* Add the chart component here */}
         <canvas id="teqline"></canvas>
       </div>
     </div>
   </div>
 );
};

export default DashboardComponent;