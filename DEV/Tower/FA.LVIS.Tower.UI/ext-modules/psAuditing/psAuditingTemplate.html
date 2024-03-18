import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useTable } from 'react-table';
const AuditingSummary = () => {
  const [fromDate, setFromDate] = useState('');
  const [throughDate, setThroughDate] = useState('');
  const [filterSection, setFilterSection] = useState('');
  const [dateFilterSelection, setDateFilterSelection] = useState([]);
  const [disableDate, setDisableDate] = useState(false);
  const [busy, setBusy] = useState(false);
  const [validateError, setValidateError] = useState(false);
  const [data, setData] = useState([]);
  useEffect(() => {
    // Fetch date filter selection options, replace this URL with your actual endpoint
    const fetchDateFilterSelection = async () => {
      try {
        const response = await axios.get('your-api-endpoint-for-date-filter-selection');
        setDateFilterSelection(response.data);
      } catch (error) {
        console.error("Error fetching date filter options", error);
      }
    };
    fetchDateFilterSelection();
  }, []);
  const search = async () => {
    if (new Date(fromDate) > new Date(throughDate)) {
      setValidateError(true);
    } else {
      setValidateError(false);
      setBusy(true);
      // Perform search, replace this URL with your actual search endpoint
      try {
        const response = await axios.get('your-api-endpoint-for-search', {
          params: {
            fromDate,
            throughDate,
            filterSection,
          },
        });
        setData(response.data);
        setBusy(false);
      } catch (error) {
        console.error("Error during search", error);
        setBusy(false);
      }
    }
  };
  const columns = React.useMemo(
    () => [
      {
        Header: 'Header Name',
        accessor: 'fieldName', // accessor is the "key" in the data
      },
      // Add more column definitions here
    ],
    []
  );
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
  });
  return (
    <div className="ps-dashboard-header">
      <ul className="breadcrumb">
        <li className="subbreadcrumb">
          <div> {/* Simulating ps-sub-menu with a simple div */}
            <div label="Auditing Summary" activetab="Auditing Summary" route="auditing">Auditing Summary</div>
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
            <input disabled={disableDate} value={fromDate} onChange={e => setFromDate(e.target.value)} type="date" />
            <label> End Date: </label>
            <input disabled={disableDate} name="input" value={throughDate} onChange={e => setThroughDate(e.target.value)} type="date" />
            <label>Date Filter:</label>
            <select onChange={e => setFilterSection(e.target.value)} value={filterSection}>
              {dateFilterSelection.map((option, index) => (
                <option key={index} value={option.value}>{option.title}</option>
              ))}
            </select>

            <div style={{ display: "inline-block", marginLeft: "0.5em", cursor: "pointer" }} onClick={search}>
              {!busy ? <i className="fa fa-search"></i> : <i className="fa fa-spinner fa-spin"></i>}
            </div>
            <span className="help-block with-errors">
              {validateError && 'End date cannot be earlier than the Start date'}
            </span>
          </div>

          <div id="serviceGrid">
            <table {...getTableProps()} className="ui-grid-selectable">
              <thead>
                {headerGroups.map(headerGroup => (
                  <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map(column => (
                      <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                    ))}
                  </tr>
                ))}
              </thead>
              <tbody {...getTableBodyProps()}>
                {rows.map(row => {
                  prepareRow(row);
                  return (
                    <tr {...row.getRowProps()}>
                      {row.cells.map(cell => {
                        return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
        <div className="col-lg-1"></div>
      </div>
    </div>
  );
};
export default AuditingSummary;