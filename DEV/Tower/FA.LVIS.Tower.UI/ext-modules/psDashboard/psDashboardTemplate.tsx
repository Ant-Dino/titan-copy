import React, { useState, useEffect } from 'react';
import Chart from 'react-chartjs-2';

const PsDashboardTemplate = () => {
 const [currentUser, setCurrentUser] = useState(null);
 const [beqSummaryList, setBeqSummaryList] = useState(null);
 const [teqSummaryList, setTeqSummaryList] = useState(null);
 const [beqLineData, setBeqLineData] = useState({});
 const [teqLineData, setTeqLineData] = useState({});

 useEffect(() => {
   // Assuming getCurrentUser is an API call to fetch user data
   // Replace this with actual API call
   //setCurrentUser(fetchCurrentUser());
   // Similarly, replace below placeholders with actual API calls
   // For BEQSummaryList, TEQSummaryList, BEQLineData, and TEQLineData
   // setBeqSummaryList(fetchBeqSummaryList());
   // setTeqSummaryList(fetchTeqSummaryList());
   // setBeqLineData(fetchBeqLineData());
   // setTeqLineData(fetchTeqLineData());
 }, []);

 const shortcutClasses = (noOfExceptions, threshholdCount) => noOfExceptions >= threshholdCount ? 'shortcut shortcut-danger' : 'shortcut shortcut-info';
 const headerClasses = (noOfExceptions, threshholdCount) => noOfExceptions >= threshholdCount ? 'shortcut-header' : 'shortcut-headerSuccess';

 return (
   <div>
     <div className="ps-dashboard-header">
       <br /><br />
       <div className="col-md-6">
         <div className="widget widget-nopad">
           <div className="widget-header">
             <i className="fa fa-exclamation-triangle" style={{ marginLeft: '0.5em' }}></i>
             <h3 style={{ margin: '0px' }}> Business Exception Queue</h3>
           </div>
           <div className="dashboard-widget-content" style={{ overflowY: 'auto' }}>
             {!beqSummaryList && <div><i className="fa fa-spinner fa-spin fa-3x fa-fw margin-bottom"></i><span className="sr-only">Loading...</span></div>}
             <div className="shortcuts">
               {beqSummaryList && beqSummaryList.slice(0, 20).map(Exception => (
                 <a key={Exception.ExceptionName} href={`#/businessexception/${Exception.ExceptionName}`} className={shortcutClasses(Exception.NoOfExceptions, Exception.ThreshholdCount)}>
                   <span className={headerClasses(Exception.NoOfExceptions, Exception.ThreshholdCount)}>{Exception.ExceptionName}</span>
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
           <div className="dashboard-widget-content">
             {!beqLineData && <div><i className="fa fa-spinner fa-spin fa-3x fa-fw margin-bottom"></i><span className="sr-only">Loading...</span></div>}
             <Chart type='bar' data={beqLineData} />
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
             {!teqSummaryList && <div><i className="fa fa-spinner fa-spin fa-3x fa-fw margin-bottom"></i><span className="sr-only">Loading...</span></div>}
             <div className="shortcuts">
               {teqSummaryList && teqSummaryList.slice(0, 100).map(Exception => (
                 <a key={Exception.ExceptionName} href={`#/Exceptions/${Exception.ExceptionName}`} className={shortcutClasses(Exception.NoOfExceptions, Exception.ThreshholdCount)}>
                   <span className={headerClasses(Exception.NoOfExceptions, Exception.ThreshholdCount)}>{Exception.ExceptionName}</span>
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
           <div className="dashboard-widget-content">
             {!teqLineData && <div><i className="fa fa-spinner fa-spin fa-3x fa-fw margin-bottom"></i><span className="sr-only">Loading...</span></div>}
             <Chart type='bar' data={teqLineData} />
           </div>
         </div>
       </div>
     </div>
   </div>
 );
};

export default PsDashboardTemplate;