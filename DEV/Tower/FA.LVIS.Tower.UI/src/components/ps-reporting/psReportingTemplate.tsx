import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faBars, faSearch, faSpinner } from '@fortawesome/free-solid-svg-icons';

type Props = {
  loggedTenant: string;
  title: string;
  hasAccess: boolean;
  inValidBtnEnable: boolean;
  search: () => void;
  searchbyReferenceNo: () => void;
  loadRFOrder: () => void;
  inValidateConfirm: () => void;
  Disabledate: boolean;
  DisableReferenceNo: boolean;
  Fromdate: string;
  ThroughDate: string;
  FilterSection: any;
  DateFilterSelection: Array<{ value: string; title: string }>;
  FilterReferenceNoSection: any;
  ReferencenoFilterSelection: Array<{ value: string; title: string }>;
  showdates: boolean;
  showrefnum: boolean;
  ValidateError: boolean;
  Busy: boolean;
  BusyRef: boolean;
};

const ReportingComponent: React.FC<Props> = ({
  loggedTenant,
  title,
  hasAccess,
  inValidBtnEnable,
  search,
  searchbyReferenceNo,
  loadRFOrder,
  inValidateConfirm,
  Disabledate,
  DisableReferenceNo,
  Fromdate,
  ThroughDate,
  FilterSection,
  DateFilterSelection,
  FilterReferenceNoSection,
  ReferencenoFilterSelection,
  showdates,
  showrefnum,
  ValidateError,
  Busy,
  BusyRef,
}) => {
  return (
    <div>
      <div className="ps-dashboard-header">
        <ul className="breadcrumb">
          <li className="subbreadcrumb">
            {loggedTenant === 'LVIS' ? (
              <>
                {togglingTenant === 'LVIS' && (
                  <button onClick={() => search()}>Orders Summary</button>
                )}
                {togglingTenant === 'RF' && (
                  <button onClick={() => search()}>Orders Summary</button>
                )}
                {togglingTenant === 'LVIS' && (
                  <button onClick={() => loadRFOrder()}>RF Orders Summary</button>
                )}
                {togglingTenant === 'RF' && (
                  <button onClick={() => loadRFOrder()}>RF Orders Summary</button>
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
              <div className="form-group" style={{ display: "inline-block" }}>
                <FontAwesomeIcon icon={faCalendar} style={{ cursor: 'pointer' }} title="Search By Date Range" onClick={() => setShowDates(!showdates)} />
                |
                <FontAwesomeIcon icon={faBars} style={{ cursor: 'pointer' }} title="Search By Reference Number" onClick={() => setShowRefnum(!showrefnum)} />
              </div>
              {showdates && (
                <div className="form-group" style={{ display: "inline-block" }}>
                  <label>Start Date: </label>
                  <input disabled={Disabledate} value={Fromdate} type="date" />
                  <label> End Date: </label>
                  <input disabled={Disabledate} value={ThroughDate} type="date" />
                  <label>Date Filter:</label>
                  <select value={FilterSection} onChange={(e) => setFilterSection(e.target.value)}>
                    {DateFilterSelection.map((option) => (
                      <option value={option.value}>{option.title}</option>
                    ))}
                  </select>
                  <div style={{ display: "inline-block", marginLeft: "0.5em", cursor: "pointer" }}>
                    {!Busy && (
                      <FontAwesomeIcon icon={faSearch} onClick={loggedTenant === 'RF' ? loadRFOrder : search} />
                    )}
                    {Busy && <FontAwesomeIcon icon={faSpinner} spin />}
                  </div>
                  {ValidateError && (
                    <span className="help-block with-errors">
                      End date cannot be earlier than the Start date
                    </span>
                  )}
                </div>
              )}
              {showrefnum && (
                <div className="form-group" style={{ display: "inline-block" }}>
                  <label>Search By</label>
                  <select value={FilterReferenceNoSection} onChange={(e) => setFilterReferenceNoSection(e.target.value)}>
                    {ReferencenoFilterSelection.map((option) => (
                      <option value={option.value}>{option.title}</option>
                    ))}
                  </select>
                  <input className="input" disabled={DisableReferenceNo} type="text" value={ReferenceNo} required />
                  <div style={{ display: "inline-block", marginLeft: "0.5em", cursor: "pointer" }}>
                    {!BusyRef && (
                      <FontAwesomeIcon icon={faSearch} onClick={searchbyReferenceNo} />
                    )}
                    {BusyRef && <FontAwesomeIcon icon={faSpinner} spin />}
                  </div>
                </div>
              )}
              <div style={{ display: "inline-block", float: "right", cursor: "pointer" }}>
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

export default ReportingComponent;