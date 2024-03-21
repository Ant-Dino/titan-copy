import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faSpinner } from '@fortawesome/free-solid-svg-icons';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from "react-datepicker";
import Select from 'react-select';
interface AuditingSummaryProps {
  fromDate: Date;
  throughDate: Date;
  disableDate: boolean;
  dateFilterSelection: Array<{ value: string; title: string }>;
  busy: boolean;
  validateError: boolean;
  onChangeFromDate: (date: Date) => void;
  onChangeThroughDate: (date: Date) => void;
  onSearch: () => void;
  onChangeDateFilter: (selectedOption: any) => void;
}
const AuditingSummary: React.FC<AuditingSummaryProps> = ({
  fromDate,
  throughDate,
  disableDate,
  dateFilterSelection,
  busy,
  validateError,
  onChangeFromDate,
  onChangeThroughDate,
  onSearch,
  onChangeDateFilter,
}) => {
  const [selectedDateFilter, setSelectedDateFilter] = useState<{ value: string; title: string } | null>(null);
  useEffect(() => {
    if (dateFilterSelection.length > 0) {
      setSelectedDateFilter(dateFilterSelection[0]);
    }
  }, [dateFilterSelection]);
  const handleDateFilterChange = (selectedOption: any) => {
    setSelectedDateFilter(selectedOption);
    onChangeDateFilter(selectedOption);
  };
  return (
    <div className="ps-dashboard-header">
      <ul className="breadcrumb">
        <li className="subbreadcrumb">
          <ul>
            <li>Auditing Summary</li>
          </ul>
        </li>
      </ul>
      <div className="wrapper">
        <div className="col-lg-1"></div>
        <div className="col-lg-10">
          <ul className="ps-page-title">
            <li>Auditing Summary</li>
          </ul>

          <div className={`alert ${validateError ? 'show' : ''}`} role="alert">
            End date cannot be earlier than the start date
          </div>

          <div className="form-group">
            <label>Start Date: </label>
            <DatePicker
              selected={fromDate}
              onChange={onChangeFromDate}
              dateFormat="MM/dd/yyyy"
              disabled={disableDate}
            />
            <label> End Date: </label>
            <DatePicker
              selected={throughDate}
              onChange={onChangeThroughDate}
              dateFormat="MM/dd/yyyy"
              disabled={disableDate}
            />
            <label>Date Filter:</label>
            <Select
              value={selectedDateFilter}
              onChange={handleDateFilterChange}
              options={dateFilterSelection.map(df => ({ value: df.value, label: df.title }))}
            />
            {!busy ? (
              <div onClick={onSearch} style={{ display: 'inline-block', marginLeft: '0.5em', cursor: 'pointer' }}>
                <FontAwesomeIcon icon={faSearch} />
              </div>
            ) : (
              <div style={{ display: 'inline-block', margin: '0 auto' }}>
                <FontAwesomeIcon icon={faSpinner} spin />
              </div>
            )}
          </div>
        </div>
        <div className="col-lg-1"></div>
      </div>
    </div>
  );
};
export default AuditingSummary;