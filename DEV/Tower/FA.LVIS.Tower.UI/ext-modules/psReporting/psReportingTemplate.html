import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faBars, faSearch, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
type Props = {
  loggedTenant: string;
  togglingTenant: string;
  title: string;
  hasAccess: boolean;
  inValidBtnEnable: boolean;
  search: () => void;
  searchbyReferenceNo: () => void;
  loadRFOrder: () => void;
  switchGridInfo: (info: string) => void;
  changeSelect: (selection: any) => void;
  changerefSelect: (selection: any) => void;
  dateFilterSelection: Array<{value: string; title: string}>;
  referencenoFilterSelection: Array<{value: string; title: string}>;
};
const ReportingComponent: React.FC<Props> = ({ loggedTenant, togglingTenant, title, hasAccess, inValidBtnEnable, 
  search, searchbyReferenceNo, loadRFOrder, switchGridInfo, changeSelect, changerefSelect,
  dateFilterSelection, referencenoFilterSelection }) => {
  const [showDates, setShowDates] = useState(false);
  const [showRefNum, setShowRefNum] = useState(false);
  const [fromDate, setFromDate] = useState<Date | null>(null);
  const [throughDate, setThroughDate] = useState<Date | null>(null);
  const [filterSection, setFilterSection] = useState('');
  const [filterReferenceNoSection, setFilterReferenceNoSection] = useState('');
  const [referenceNo, setReferenceNo] = useState('');
  const [busy, setBusy] = useState(false);
  const [busyRef, setBusyRef] = useState(false);

  useEffect(() => {
    // implement effect if necessary
  }, []); // You might want to add some dependencies here depending on your needs

  const handleSearchClick = () => {
    togglingTenant === 'RF' ? loadRFOrder() : search();
  };

  return (
    <div>
      <div className="ps-dashboard-header">
        <ul className="breadcrumb">
          <li className="subbreadcrumb">
            {loggedTenant === 'LVIS' && (
              <div>
                {togglingTenant === 'LVIS' && <div onClick={() => switchGridInfo('')}>Orders Summary</div>}
                {togglingTenant === 'RF' && <div onClick={() => switchGridInfo('')}>Orders Summary</div>}
                {togglingTenant === 'LVIS' && <div onClick={() => switchGridInfo('RF')}>RF Orders Summary</div>}
                {togglingTenant === 'RF' && <div onClick={() => switchGridInfo('RF')}>RF Orders Summary</div>}
              </div>
            )}
            {loggedTenant !== 'LVIS' && <div onClick={search}>Orders Summary</div>}
          </li>
        </ul>
        <div className="wrapper">
          <div className="col-lg-10">
            <ul className="ps-page-title">
              <li>{title}</li>
            </ul>
            <div className="form-group">
              <div className="form-group" style={{ display: 'inline-block' }}>
                <FontAwesomeIcon icon={faCalendar} title="Search By Date Range" style={{ cursor: 'pointer' }} onClick={() => setShowDates(!showDates)} />
                 | 
                <FontAwesomeIcon icon={faBars} title="Search By Reference Number" style={{ cursor: 'pointer' }} onClick={() => setShowRefNum(!showRefNum)} />
              </div>
              {showDates && (
                <div className="form-group" style={{ display: 'inline-block' }}>
                  <label>Start Date: </label>
                  <DatePicker selected={fromDate} onChange={date => setFromDate(date)} dateFormat="MM/dd/yyyy" />
                  <label> End Date: </label>
                  <DatePicker selected={throughDate} onChange={date => setThroughDate(date)} dateFormat="MM/dd/yyyy" />
                  <label>Date Filter:</label>
                  <select onChange={(e) => changeSelect(e.target.value)} value={filterSection}>
                    {dateFilterSelection.map(option => (
                      <option key={option.value} value={option.value}>{option.title}</option>
                    ))}
                  </select>
                  <div style={{ display: 'inline-block', marginLeft: '0.5em', cursor: 'pointer' }} onClick={handleSearchClick}>
                    {!busy ? <FontAwesomeIcon icon={faSearch} /> : <FontAwesomeIcon icon={faSpinner} spin />}
                  </div>
                </div>
              )}
              {showRefNum && (
                <div className="form-group" style={{ display: 'inline-block' }}>
                  <label>Search By: </label>
                  <select onChange={(e) => changerefSelect(e.target.value)} value={filterReferenceNoSection}>
                    {referencenoFilterSelection.map(option => (
                      <option key={option.value} value={option.value}>{option.title}</option>
                    ))}
                  </select>
                  <input className="input" disabled={busyRef} type="text" required value={referenceNo} onChange={(e) => setReferenceNo(e.target.value)} />
                  <div style={{ display: 'inline-block', marginLeft: '0.5em', cursor: 'pointer' }} onClick={searchbyReferenceNo}>
                    {!busyRef ? <FontAwesomeIcon icon={faSearch} /> : <FontAwesomeIcon icon={faSpinner} spin />}
                  </div>
                </div>
              )}
              <div style={{ display: 'inline-block', float: 'right', cursor: 'pointer' }}>
                {hasAccess && <Button size="sm" onClick={() => {}} disabled={inValidBtnEnable}>Invalidate Order</Button>}
              </div>
            </div>
            {/* Implement UI Grid or similar functionality here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportingComponent;