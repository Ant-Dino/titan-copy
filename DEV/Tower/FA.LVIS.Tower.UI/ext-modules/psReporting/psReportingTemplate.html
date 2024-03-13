import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faBars, faSearch, faSpinner } from '@fortawesome/free-solid-svg-icons';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Select from 'react-select';
interface Props {
  loggedTenant: string;
  togglingTenant: string;
  title: string;
  hasAccess: boolean;
  inValidBtnEnable: boolean;
  switchGridInfo: (value: string) => void;
  search: () => void;
  loadRFOrder: () => void;
  searchByReferenceNo: () => void;
  inValidateConfirm: () => void;
  dateFilterOptions: Array<{ value: string; title: string }>;
  referenceNoFilterOptions: Array<{ value: string; title: string }>;
}
const PsReportingComponent: React.FC<Props> = ({
  loggedTenant,
  togglingTenant,
  title,
  hasAccess,
  inValidBtnEnable,
  switchGridInfo,
  search,
  loadRFOrder,
  searchByReferenceNo,
  inValidateConfirm,
  dateFilterOptions,
  referenceNoFilterOptions,
}) => {
  const [showDates, setShowDates] = useState(false);
  const [showRefNum, setShowRefNum] = useState(false);
  const [selectedDateFilter, setSelectedDateFilter] = useState<any>(null);
  const [selectedRefNoFilter, setSelectedRefNoFilter] = useState<any>(null);
  const [fromDate, setFromDate] = useState<Date | null>(null);
  const [toDate, setToDate] = useState<Date | null>(null);
  const [referenceNo, setReferenceNo] = useState('');
  const [isBusy, setIsBusy] = useState(false);
  const [isBusyRef, setIsBusyRef] = useState(false);
  const handleSearchClick = () => {
    togglingTenant === 'RF' ? loadRFOrder() : search();
  };
  const handleSearchByReferenceNoClick = () => {
    searchByReferenceNo();
  };
  return (
    <div>
      <div className="ps-dashboard-header">
        <ul className="breadcrumb">
          <li className="subbreadcrumb">
            {loggedTenant === 'LVIS' ? (
              <>
                {togglingTenant === 'LVIS' && (
                  <button onClick={() => switchGridInfo('')}>Orders Summary</button>
                )}
                {togglingTenant === 'RF' && (
                  <button onClick={() => switchGridInfo('')}>Orders Summary</button>
                )}
                {togglingTenant === 'LVIS' && (
                  <button onClick={() => switchGridInfo('RF')}>RF Orders Summary</button>
                )}
                {togglingTenant === 'RF' && (
                  <button onClick={() => switchGridInfo('RF')}>RF Orders Summary</button>
                )}
              </>
            ) : (
              <button onClick={() => search()}>Orders Summary</button>
            )}
          </li>
        </ul>
        <div className="wrapper">
          <div className="col-lg-10">
            <ul className="ps-page-title">
              <li>{title}</li>
            </ul>
            <div className="form-group">
              <div className="form-group" style={{ display: 'inline-block' }}>
                <FontAwesomeIcon icon={faCalendar} style={{ cursor: 'pointer' }} onClick={() => setShowDates(!showDates)} />
                |<FontAwesomeIcon icon={faBars} style={{ cursor: 'pointer' }} onClick={() => setShowRefNum(!showRefNum)} />
              </div>
              {showDates && (
                <div className="form-group" style={{ display: 'inline-block' }}>
                  <label>Start Date: </label>
                  <DatePicker selected={fromDate} onChange={date => setFromDate(date)} />
                  <label> End Date: </label>
                  <DatePicker selected={toDate} onChange={date => setToDate(date)} />
                  <label>Date Filter:</label>
                  <Select
                    options={dateFilterOptions}
                    value={selectedDateFilter}
                    onChange={setSelectedDateFilter}
                  />
                  <div style={{ display: 'inline-block', marginLeft: '0.5em', cursor: 'pointer' }} onClick={handleSearchClick}>
                    {!isBusy ? (
                      <FontAwesomeIcon icon={faSearch} />
                    ) : (
                      <FontAwesomeIcon icon={faSpinner} spin />
                    )}
                  </div>
                </div>
              )}
              {showRefNum && (
                <div className="form-group" style={{ display: 'inline-block' }}>
                  <label>Search By</label>
                  <Select
                    options={referenceNoFilterOptions}
                    value={selectedRefNoFilter}
                    onChange={setSelectedRefNoFilter}
                  />
                  <input
                    className="input"
                    disabled={isBusyRef}
                    type="text"
                    value={referenceNo}
                    onChange={(e) => setReferenceNo(e.target.value)}
                  />
                  <div style={{ display: 'inline-block', marginLeft: '0.5em', cursor: 'pointer' }} onClick={handleSearchByReferenceNoClick}>
                    {!isBusyRef ? (
                      <FontAwesomeIcon icon={faSearch} />
                    ) : (
                      <FontAwesomeIcon icon={faSpinner} spin />
                    )}
                  </div>
                </div>
              )}
              <div style={{ display: 'inline-block', float: 'right' }}>
                {hasAccess && (
                  <button className="btn btn-sm" onClick={inValidateConfirm} disabled={inValidBtnEnable}>
                    Invalidate Order
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PsReportingComponent;