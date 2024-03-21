import React, { useState, useEffect } from 'react';
import { Spinner, Form, Button } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faSpinner } from '@fortawesome/free-solid-svg-icons';
import Select from 'react-select';
interface AuditingProps {
  FromDate: Date;
  ThroughDate: Date;
  DateFilterSelection: Array<{ value: string; title: string }>;
  DisableDate: boolean;
  Busy: boolean;
  ValidateError: boolean;
  changeSelect: (value: any) => void;
  search: () => void;
}
const AuditingSummary: React.FC<AuditingProps> = ({
  FromDate,
  ThroughDate,
  DateFilterSelection,
  DisableDate,
  Busy,
  ValidateError,
  changeSelect,
  search,
}) => {
  const [startDate, setStartDate] = useState<Date | null>(FromDate);
  const [endDate, setEndDate] = useState<Date | null>(ThroughDate);
  const options = DateFilterSelection.map(({ value, title }) => ({ value, label: title }));
  return (
    <div className="ps-dashboard-header">
      <ul className="breadcrumb">
        <li className="subbreadcrumb">
            Auditing Summary
        </li>
      </ul>
      <div className="wrapper">
        <div className="col-lg-1"></div>
        <div className="col-lg-10">
          <ul className="ps-page-title">
            <li>Auditing Summary</li>
          </ul>

          {Busy ? (
            <FontAwesomeIcon icon={faSpinner} spin />
          ) : (
            <div className="form-group">
              <Form.Label>Start Date: </Form.Label>
              <DatePicker
                selected={startDate}
                onChange={(date: Date) => setStartDate(date)}
                dateFormat="MM/dd/yyyy"
                disabled={DisableDate}
              />
              <Form.Label> End Date: </Form.Label>
              <DatePicker
                selected={endDate}
                onChange={(date: Date) => setEndDate(date)}
                dateFormat="MM/dd/yyyy"
                disabled={DisableDate}
              />
              <Form.Label>Date Filter:</Form.Label>
              <Select
                options={options}
                onChange={changeSelect}
              />

              <Button variant="light" onClick={search}>
                <FontAwesomeIcon icon={faSearch} />
              </Button>

              {ValidateError && (
                <span className="help-block with-errors">
                  End date cannot be earlier than the Start date
                </span>
              )}
            </div>
          )}
        </div>
        <div className="col-lg-1"></div>
      </div>
    </div>
  );
};

export default AuditingSummary;