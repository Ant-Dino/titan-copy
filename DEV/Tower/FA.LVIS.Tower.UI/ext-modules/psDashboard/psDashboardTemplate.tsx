import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Chart from 'chart.js/auto';

// Assuming we have services to fetch data similar to AngularJS service
const fetchBEQSummaryList = () => axios.get('/api/BEQSummaryList');
const fetchTEQSummaryList = () => axios.get('/api/TEQSummaryList');
const fetchBEQLineData = () => axios.get('/api/BEQLineData');
const fetchTEQLineData = () => axios.get('/api/TEQLineData');

const Dashboard = () => {
 const [BEQSummaryList, setBEQSummaryList] = useState([]);
 const [TEQSummaryList, setTEQSummaryList] = useState([]);
 const [BEQLineData, setBEQLineData] = useState(null);
 const [TEQLineData, setTEQLineData] = useState(null);

 useEffect(() => {
   fetchBEQSummaryList().then(response => setBEQSummaryList(response.data));
   fetchTEQSummaryList().then(response => setTEQSummaryList(response.data));
   fetchBEQLineData().then(response => setBEQLineData(response.data));
   fetchTEQLineData().then(response => setTEQLineData(response.data));
 }, []);

 useEffect(() => {
   if (BEQLineData) {
     new Chart(document.getElementById('beqline'), {
       type: 'bar',
       data: BEQLineData.data,
       options: BEQLineData.optionsMixed
     });
   }
   if (TEQLineData) {
     new Chart(document.getElementById('teqline'), {
       type: 'bar',
       data: TEQLineData.data,
       options: TEQLineData.optionsMixed
     });
   }
 }, [BEQLineData, TEQLineData]);

 return (
   <div>
     <div className="col-md-6">
       <div className="widget widget-nopad">
         <div className="widget-header">Business Exception Queue</div>
         <div className="dashboard-widget-content" style={{ overflowY: 'auto' }}>
           {!BEQSummaryList && <span>Loading...</span>}
           <div className="shortcuts">
             {BEQSummaryList.map((Exception, index) => (
               <Link key={index} to={`/businessexception/${Exception.ExceptionName}`} className={Exception.NoOfExceptions >= Exception.ThreshholdCount ? 'shortcut shortcut-danger' : 'shortcut shortcut-info'}>
                 <span className={Exception.NoOfExceptions >= Exception.ThreshholdCount ? 'shortcut-header' : 'shortcut-headerSuccess'}>{Exception.ExceptionName}</span>
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
         <div className="widget-header">Business Exceptions</div>
         <div className="dashboard-widget-content">
           {!BEQLineData && <span>Loading...</span>}
           <canvas id="beqline" height="280" width="950"></canvas>
         </div>
       </div>
     </div>
     <div className="col-md-6">
       <div className="widget widget-nopad">
         <div className="widget-header">Technical Exception Queue</div>
         <div className="dashboard-widget-content" style={{ overflowY: 'auto' }}>
           {!TEQSummaryList && <span>Loading...</span>}
           <div className="shortcuts">
             {TEQSummaryList.map((Exception, index) => (
               <Link key={index} to={`/Exceptions/${Exception.ExceptionName}`} className={Exception.NoOfExceptions >= Exception.ThreshholdCount ? 'shortcut shortcut-danger' : 'shortcut shortcut-info'}>
                 <span className={Exception.NoOfExceptions >= Exception.ThreshholdCount ? 'shortcut-header' : 'shortcut-headerSuccess'}>{Exception.ExceptionName}</span>
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
         <div className="widget-header">Technical Exceptions</div>
         <div className="dashboard-widget-content">
           {!TEQLineData && <span>Loading...</span>}
           <canvas id="teqline" height="280" width="950"></canvas>
         </div>
       </div>
     </div>
   </div>
 );
};

export default Dashboard;