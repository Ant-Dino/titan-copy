import React, { useState, useEffect } from 'react';
type Props = {
  fromDate: Date;
  throughDate: Date;
  disableDate: boolean;
  dateFilterSelection: Array<{ value: string; title: string }>;
  filterSection: string;
  busy: boolean;
  validateError: boolean;
  search: () => void;
  changeSelect: (value: any) => void;
};
function AuditSummary({ fromDate, throughDate, disableDate, dateFilterSelection, filterSection, busy, validateError, search, changeSelect }: Props) {
  const [fromDateState, setFromDate] = useState<Date>(fromDate);
  const [throughDateState, setThroughDate] = useState<Date>(throughDate);
  const [filterSectionState, setFilterSection] = useState<string>(filterSection);
  useEffect(() => {
    setFromDate(fromDate);
    setThroughDate(throughDate);
    setFilterSection(filterSection);
  }, [fromDate, throughDate, filterSection]);
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    changeSelect(value);
    setFilterSection(value);
  };
  return (
    <div className="ps-dashboard-header">
      <ul className="breadcrumb">
        <li className="subbreadcrumb">
          {/* Simulating ps-sub-menu and ps-sub-menu-item */}
          <div>Auditing Summary</div>
        </li>
      </ul>
      <div className="wrapper">
        <div className="col-lg-1"></div>
        <div className="col-lg-10">
          <ul className="ps-page-title">
            <li>Auditing Summary</li>
          </ul>

          <div className={busy ? "hidden" : ""}>
            <i className="fa fa-search" onClick={search}></i>
          </div>
          <div className={busy ? "" : "hidden"}>
            <i className="fa fa-spinner fa-spin"></i>
          </div>
          {validateError && (
            <span className="help-block with-errors">
              End date cannot be earlier than the Start date
            </span>
          )}
          <div className="form-group">
            <label>Start Date: </label>
            <input
              disabled={disableDate}
              type="date"
              value={fromDateState.toISOString().slice(0, 10)}
              onChange={(e) => setFromDate(new Date(e.target.value))}
            />
            <label> End Date: </label>
            <input
              disabled={disableDate}
              type="date"
              value={throughDateState.toISOString().slice(0, 10)}
              onChange={(e) => setThroughDate(new Date(e.target.value))}
            />
            <label>Date Filter:</label>
            <select
              onChange={handleSelectChange}
              value={filterSectionState}
            >
              {dateFilterSelection.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.title}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="col-lg-1"></div>
      </div>
    </div>
  );
}
export default AuditSummary;