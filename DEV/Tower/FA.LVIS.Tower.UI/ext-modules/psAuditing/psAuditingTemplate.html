import React, { useState } from 'react';

type DateFilterSelectionType = {
  value: string;
  title: string;
};

interface AuditingSummaryProps {
  fromDate: string;
  throughDate: string;
  isDisabled: boolean;
  isLoading: boolean;
  validateError: boolean;
  dateFilterSelection: DateFilterSelectionType[];
  changeSelect: (value: string) => void;
  search: () => void;
}

const AuditingSummary: React.FC<AuditingSummaryProps> = ({
  fromDate,
  throughDate,
  isDisabled,
  isLoading,
  validateError,
  dateFilterSelection,
  changeSelect,
  search,
}) => {
  const [startDate, setStartDate] = useState<string>(fromDate);
  const [endDate, setEndDate] = useState<string>(throughDate);
  const [filterSection, setFilterSection] = useState<string>('');

  return (
    <div className="ps-dashboard-header">
      <ul className="breadcrumb">
        <li className="subbreadcrumb">
          <div className="ps-sub-menu">
            <div className="ps-sub-menu-item">
              Auditing Summary
            </div>
          </div>
        </li>
      </ul>
      <div className="wrapper">
        <div className="col-lg-1"></div>
        <div className="col-lg-10">
          <ul className="ps-page-title">
            <li>Auditing Summary</li>
          </ul>
          
          <div className="form-group">
            <label>Start Date: </label>
            <input
              disabled={isDisabled}
              value={startDate}
              onChange={e => setStartDate(e.target.value)}
              type="date"
            />
            <label> End Date: </label>
            <input
              disabled={isDisabled}
              value={endDate}
              onChange={e => setEndDate(e.target.value)}
              type="date"
            />
            <label>Date Filter:</label>
            <select
              onChange={e => changeSelect(e.target.value)}
              value={filterSection}
              onChange={e => setFilterSection(e.target.value)}
            >
              {dateFilterSelection.map(option => (
                <option key={option.value} value={option.value}>
                  {option.title}
                </option>
              ))}
            </select>
            <div style={{ display: "inline-block", marginLeft: "0.5em", cursor: "pointer" }} onClick={search}>
              {!isLoading ? (
                <i className="fa fa-search"></i>
              ) : (
                <i className="fa fa-spinner fa-spin"></i>
              )}
            </div>
            {validateError && (
              <span className="help-block with-errors">
                End date cannot be earlier than the Start date
              </span>
            )}
          </div>
          {/* Placeholder for service grid equivalent in React */}
        </div>
        <div className="col-lg-1"></div>
      </div>
    </div>
  );
};

export default AuditingSummary;