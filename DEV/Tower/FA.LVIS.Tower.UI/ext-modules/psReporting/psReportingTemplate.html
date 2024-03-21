import React, { useState, useEffect } from 'react';
type Props = {
  title: string;
  loggedTenant: string;
  togglingTenant: string;
  hasAccess: boolean;
  inValidBtnEnable: boolean;
  fetchData: () => void;
  fetchRFOrder: () => void;
  searchByReferenceNo: () => void;
  invalidateOrder: () => void;
  dateFilterOptions: { value: string; title: string }[];
  referenceNoFilterOptions: { value: string; title: string }[];
const ReportingComponent: React.FC<Props> = ({ title, loggedTenant, togglingTenant, hasAccess, inValidBtnEnable, fetchData, fetchRFOrder, searchByReferenceNo, invalidateOrder, dateFilterOptions, referenceNoFilterOptions }) => {
  const [showDates, setShowDates] = useState(false);
  const [showRefNum, setShowRefNum] = useState(false);
  const [fromDate, setFromDate] = useState<string | null>(null);
  const [throughDate, setThroughDate] = useState<string | null>(null);
  const [filterSection, setFilterSection] = useState('');
  const [filterReferenceNoSection, setFilterReferenceNoSection] = useState('');
  const [referenceNo, setReferenceNo] = useState('');
  const [busy, setBusy] = useState(false);
  const [busyRef, setBusyRef] = useState(false);
  const [validateError, setValidateError] = useState(false);
  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>, type: string) => {
    if (type === 'from') {
      setFromDate(event.target.value);
    } else if (type === 'through') {
      setThroughDate(event.target.value);
    }
  };
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>, type: string) => {
    if (type === 'dateFilter') {
      setFilterSection(event.target.value);
    } else if (type === 'refNoFilter') {
      setFilterReferenceNoSection(event.target.value);
    }
  };
  const handleReferenceNoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setReferenceNo(event.target.value);
  };
  const search = () => {
    if (togglingTenant === 'RF') {
      fetchRFOrder();
    } else {
      fetchData();
    }
  };
  const searchByRef = () => {
    searchByReferenceNo();
  };
  return (
    <div className="ps-dashboard-header">
      <ul className="breadcrumb">
        <li className="subbreadcrumb">
          {loggedTenant === 'LVIS' ? (
            <>
              {togglingTenant === 'LVIS' && <button onClick={() => search()}>Orders Summary</button>}
              {togglingTenant === 'RF' && <button onClick={() => search()}>Orders Summary</button>}
              {togglingTenant === 'LVIS' && <button onClick={() => search()}>RF Orders Summary</button>}
              {togglingTenant === 'RF' && <button onClick={() => fetchRFOrder()}>RF Orders Summary</button>}
            </>
          ) : (
            <button onClick={() => fetchData()}>Orders Summary</button>
          )}
        </li>
      </ul>
      <div className="wrapper">
        <div className="col-lg-12">
          <ul className="ps-page-title">
            <li>{title}</li>
          </ul>
          <div className="form-group">
            <div className="form-group" style={{ display: 'inline-block' }}>
              <i style={{ cursor: 'pointer' }} onClick={() => setShowDates(!showDates)} className="fa fa-calendar" title="Search By Date Range"></i>|
              <i style={{ cursor: 'pointer' }} onClick={() => setShowRefNum(!showRefNum)} className="fa fa-bars" title="Search By Reference Number"></i>
            </div>
      {showDates && (
        <div className="form-group" style={{ display: 'inline-block' }}>
          <label>Start Date: </label>
          <input disabled={busy} value={fromDate || ''} onChange={(e) => handleDateChange(e, 'from')} type="date" />
          <label> End Date: </label>
          <input disabled={busy} value={throughDate || ''} onChange={(e) => handleDateChange(e, 'through')} type="date" />
          <label>Date Filter:</label>
          <select onChange={(e) => handleSelectChange(e, 'dateFilter')} value={filterSection}>
            {dateFilterOptions.map(option => (
              <option key={option.value} value={option.value}>{option.title}</option>
            ))}
          </select>
          <div style={{ display: 'inline-block', marginLeft: '0.5em', cursor: 'pointer' }} onClick={search}>
            {!busy ? <i className="fa fa-search"></i> : <i className="fa fa-spinner fa-spin"></i>}
          </div>
          {validateError && <span className="help-block with-errors">End date cannot be earlier than the Start date</span>}
        </div>
      )}
      {showRefNum && (
        <div className="form-group" style={{ display: 'inline-block' }}>
          <label>Search By</label>
          <select onChange={(e) => handleSelectChange(e, 'refNoFilter')} value={filterReferenceNoSection}>
            {referenceNoFilterOptions.map(option => (
              <option key={option.value} value={option.value}>{option.title}</option>
            ))}
          </select>
          <input className="input" disabled={busyRef} type="text" required value={referenceNo} onChange={handleReferenceNoChange} />
          <div style={{ display: 'inline-block', marginLeft: '0.5em', cursor: 'pointer' }} onClick={searchByRef}>
            {!busyRef ? <i className="fa fa-search"></i> : <i className="fa fa-spinner fa-spin"></i>}
          </div>
        </div>
      )}
      <div style={{ display: 'inline-block', float: 'right', cursor: 'pointer' }}>
        <button className="btn btn-sm" disabled={inValidBtnEnable} onClick={invalidateOrder}>Invalidate Order</button>
      </div>
    </div>
  </div>
</div>
</div>
  );
};
export default ReportingComponent;