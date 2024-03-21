import React, { useState, useEffect } from 'react';
interface Props {
  loggedTenant: string;
  title: string;
  togglableTenants: { [key: string]: boolean };
  dateFilterSelection: Array<{ value: string; title: string }>;
  referenceNoFilterSelection: Array<{ value: string; title: string }>;
  hasAccess: boolean;
  invalidateOrder: () => void;
  searchOrders: (params: any) => void;
  searchOrdersByReference: (referenceNo: string) => void;
  loadRFOrder: () => void;
}
const DashboardHeader: React.FC<Props> = ({ loggedTenant, title, togglableTenants, dateFilterSelection, referenceNoFilterSelection, hasAccess, invalidateOrder, searchOrders, searchOrdersByReference, loadRFOrder }) => {
  const [showDates, setShowDates] = useState(false);
  const [showRefNum, setShowRefNum] = useState(false);
  const [fromDate, setFromDate] = useState('');
  const [throughDate, setThroughDate] = useState('');
  const [referenceNo, setReferenceNo] = useState('');
  const [filterSection, setFilterSection] = useState('');
  const [filterReferenceNoSection, setFilterReferenceNoSection] = useState('');
  const [busy, setBusy] = useState(false);
  const [busyRef, setBusyRef] = useState(false);
  const [validateError, setValidateError] = useState(false);
  const [inValidBtnEnable, setInValidBtnEnable] = useState(false);
  const toggleDateVisibility = () => setShowDates(!showDates);
  const toggleRefNumVisibility = () => setShowRefNum(!showRefNum);
  return (
    <div className="ps-dashboard-header">
      <ul className="breadcrumb">
        <li className="subbreadcrumb">
          {loggedTenant === 'LVIS' &&
            <div>
              {togglableTenants['LVIS'] && <button onClick={() => searchOrders('')}>Orders Summary</button>}
              {togglableTenants['RF'] && <button onClick={() => searchOrders('')}>Orders Summary</button>}
              <button onClick={() => loadRFOrder()}>RF Orders Summary</button>
            </div>
          }
          {loggedTenant !== 'LVIS' &&
            <button onClick={searchOrders}>Orders Summary</button>
          }
        </li>
      </ul>
      <div className="wrapper">
        <div className="col-lg-10">
          <ul className="ps-page-title">
            <li>{title}</li>
          </ul>
          <div className="form-group">
            <div className="form-group" style={{ display: 'inline-block' }}>
              <i onMouseOver={(e) => (e.currentTarget.style.cursor = 'pointer')} className="fa fa-calendar" title="Search By Date Range" onClick={toggleDateVisibility}></i>
              <i onMouseOver={(e) => (e.currentTarget.style.cursor = 'pointer')} className="fa fa-bars" title="Search By Reference Number" onClick={toggleRefNumVisibility}></i>
            </div>
            {showDates &&
              <div className="form-group" style={{ display: 'inline-block' }}>
                <label>Start Date: </label>
                <input type="date" value={fromDate} onChange={(e) => setFromDate(e.target.value)} />
                <label>End Date: </label>
                <input type="date" value={throughDate} onChange={(e) => setThroughDate(e.target.value)} />
                <select value={filterSection} onChange={(e) => setFilterSection(e.target.value)}>
                  {dateFilterSelection.map(option => (
                    <option key={option.value} value={option.value}>{option.title}</option>
                  ))}
                </select>
                {!busy ? <i className="fa fa-search" onClick={() => { setBusy(true); searchOrders({ fromDate, throughDate }); setTimeout(() => setBusy(false), 2000); }}></i> : <i className="fa fa-spinner fa-spin"></i>}
                {validateError && <span className="help-block with-errors">End date cannot be earlier than the Start date</span>}
              </div>
            }
            {showRefNum &&
              <div className="form-group" style={{ display: 'inline-block' }}>
                <label>Search By</label>
                <select value={filterReferenceNoSection} onChange={(e) => setFilterReferenceNoSection(e.target.value)}>
                  {referenceNoFilterSelection.map(option => (
                    <option key={option.value} value={option.value}>{option.title}</option>
                  ))}
                </select>
                <input type="text" value={referenceNo} onChange={(e) => setReferenceNo(e.target.value)} disabled={busyRef} />
                {!busyRef ? <i className="fa fa-search" onClick={() => { setBusyRef(true); searchOrdersByReference(referenceNo); setTimeout(() => setBusyRef(false), 2000); }}></i> : <i className="fa fa-spinner fa-spin"></i>}
              </div>
            }
            {hasAccess &&
              <button onClick={invalidateOrder} disabled={inValidBtnEnable}>Invalidate Order</button>
            }
          </div>
        </div>
      </div>
    </div>
  );
};
export default DashboardHeader;