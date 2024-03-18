import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { growl } from '@crave/farmblocks-growl';

const PsAuditing = () => {
  const [fromDate, setFromDate] = useState(new Date().toISOString().slice(0, 10));
  const [throughDate, setThroughDate] = useState(new Date().toISOString().slice(0, 10));
  const [filterSection, setFilterSection] = useState('7');
  const [disableDate, setDisableDate] = useState(true);
  const [busy, setBusy] = useState(false);
  const [validateError, setValidateError] = useState(false);
  const [data, setData] = useState([]);

  const dateFilterSelection = [
    { title: 'Custom', value: '1' },
    { title: 'Last 90 Days', value: '90' },
    { title: 'Last 60 Days', value: '60' },
    { title: 'Last 30 Days', value: '30' },
    { title: 'Last 15 Days', value: '15' },
    { title: 'Last 7 Days', value: '7' },
    { title: '24 hrs', value: '24' },
    { title: 'Today', value: '0' },
  ];

  const validateDate = () => {
    const startDate = new Date(fromDate);
    const endDate = new Date(throughDate);

    if (endDate < startDate) {
      setValidateError(true);
    } else {
      setValidateError(false);
    }
  };

  const changeSelect = (item) => {
    setFilterSection(item);
    setDisableDate(item !== '1');
  };

  const search = async () => {
    setBusy(true);
    try {
      let response;
      if (filterSection === '1') {
        validateDate();
        if (validateError) {
          growl({ text: 'End date cannot be earlier than the Start date', type: 'error' });
          setBusy(false);
          return;
        }

        response = await axios.post(`api/audit/GetAuditDetails/`, {
          search: '',
          Fromdate: fromDate,
          ThroughDate: throughDate,
        });
      } else {
        response = await axios.get(`AuditController/GetAuditDetailsFilter/${filterSection}`);
      }
      setData(response.data);
      setBusy(false);
    } catch (error) {
      growl({ text: error.message, type: 'error' });
      setBusy(false);
    }
  };

  useEffect(() => {
    search(); // Initial search with default params
  }, []);

  return (
    <div className="ps-dashboard-header">
      <ul className="breadcrumb">
        <li className="subbreadcrumb">
          {/* Placeholder for sub-menu component */}
        </li>
      </ul>
      <div className="wrapper">
        <div className="col-lg-10">
          <ul className="ps-page-title">
            <li>Auditing Summary</li>
          </ul>

          {/* Placeholder for growl notifications */}

          <div className="form-group">
            <label>Start Date: </label>
            <input disabled={disableDate} value={fromDate} onChange={(e) => setFromDate(e.target.value)} type="date" />
            <label> End Date: </label>
            <input disabled={disableDate} name="input" value={throughDate} onChange={(e) => setThroughDate(e.target.value)} type="date" />
            <label>Date Filter:</label>
            <select onChange={(e) => changeSelect(e.target.value)} value={filterSection}>
              {dateFilterSelection.map((obj, idx) => (
                <option key={idx} value={obj.value}>{obj.title}</option>
              ))}
            </select>

            {busy ? (
              <div style={{ display: 'inline-block', margin: '0 auto' }}>
                <i className="fa fa-spinner fa-spin"></i>
              </div>
            ) : (
              <div style={{ display: 'inline-block', marginLeft: '0.5em', cursor: 'pointer' }} onClick={search}>
                <i className="fa fa-search"></i>
              </div>
            )}

            {validateError && (
              <span className="help-block with-errors">
                End date cannot be earlier than the Start date
              </span>
            )}
          </div>

          {/* Placeholder for grid component */}
        </div>
      </div>
    </div>
  );
};

export default PsAuditing;