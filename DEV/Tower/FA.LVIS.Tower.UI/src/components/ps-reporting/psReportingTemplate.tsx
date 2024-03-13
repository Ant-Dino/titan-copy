import React, { useState, useEffect, CSSProperties } from 'react';
import { Button, Spinner, FormControl, FormGroup, Label, Input, FormText } from 'reactstrap';
import { FaCalendar, FaBars, FaSearch, FaSpinner } from 'react-icons/fa';
import DateTimePicker from 'react-datetime-picker';
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';
interface Props {
  loggedTenant: string;
  togglingTenant: string;
  title: string;
  search: () => void;
  loadRFOrder: () => void;
  searchbyReferenceNo: () => void;
  inValidateConfirm: () => void;
  hasAccess: boolean;
  inValidBtnEnable: boolean;
  DateFilterSelection: Array<{ value: string; title: string }>;
  ReferencenoFilterSelection: Array<{ value: string; title: string }>;
}
const DashboardHeader: React.FC<Props> = ({
  loggedTenant,
  togglingTenant,
  title,
  search,
  loadRFOrder,
  searchbyReferenceNo,
  inValidateConfirm,
  hasAccess,
  inValidBtnEnable,
  DateFilterSelection,
  ReferencenoFilterSelection,
}) => {
  const [showDates, setShowDates] = useState(false);
  const [showRefNum, setShowRefNum] = useState(false);
  const [fromDate, setFromDate] = useState(new Date());
  const [throughDate, setThroughDate] = useState(new Date());
  const [filterSection, setFilterSection] = useState('');
  const [referenceNo, setReferenceNo] = useState('');
  const [filterReferenceNoSection, setFilterReferenceNoSection] = useState('');
  const [busy, setBusy] = useState(false);
  const [busyRef, setBusyRef] = useState(false);
  const handleSearchClick = () => {
    if(togglingTenant === 'RF') {
      loadRFOrder();
    } else {
      search();
    }
  };
  const handleSearchByReferenceNo = () => {
    searchbyReferenceNo();
  };
  return (
    <div className="ps-dashboard-header">
      <ul className="breadcrumb">
        <li className="subbreadcrumb">
          {loggedTenant === 'LVIS' ? (
            <>
              {togglingTenant === 'LVIS' && <Button onClick={() => setShowDates(!showDates)}>Orders Summary</Button>}
              {togglingTenant === 'LVIS' && <Button onClick={() => setShowDates(!showDates)}>RF Orders Summary</Button>}
              {togglingTenant === 'RF' && <Button onClick={() => setShowDates(!showDates)}>Orders Summary</Button>}
              {togglingTenant === 'RF' && <Button onClick={() => setShowDates(!showDates)}>RF Orders Summary</Button>}
            </>
          ) : (
            <Button onClick={search}>Orders Summary</Button>
          )}
        </li>
      </ul>
      <div className="wrapper">
        <div className="col-lg-1"></div>
        <div className="col-lg-10">
          <ul className="ps-page-title">
            <li>{title}</li>
          </ul>
          <ToastContainer />
          <FormGroup>
            <div style={{ display: 'inline-block' }}>
              <FaCalendar title="Search By Date Range" style={{ cursor: 'pointer' }} onClick={() => setShowDates(!showDates)} />
              |<FaBars title="Search By Reference Number" style={{ cursor: 'pointer' }} onClick={() => setShowRefNum(!showRefNum)} />
            </div>
            {showDates && (
              <FormGroup style={{ display: 'inline-block' }}>
                <Label>Start Date: </Label>
                <DateTimePicker onChange={setFromDate} value={fromDate} />
                <Label> End Date: </Label>
                <DateTimePicker onChange={setThroughDate} value={throughDate} />
                <Label>Date Filter:</Label>
                <FormControl as="select" onChange={(e) => setFilterSection(e.target.value)} value={filterSection}>
                  {DateFilterSelection.map((option, key) => (
                    <option key={key} value={option.value}>
                      {option.title}
                    </option>
                  ))}
                </FormControl>

                <div style={{ display: 'inline-block', marginLeft: '0.5em', cursor: 'pointer' }} onClick={handleSearchClick}>
                  {!busy ? <FaSearch /> : <FaSpinner />}
                </div>
              </FormGroup>
            )}
            {showRefNum && (
              <FormGroup style={{ display: 'inline-block' }}>
                <Label>Search By</Label>
                <FormControl as="select" onChange={(e) => setFilterReferenceNoSection(e.target.value)} value={filterReferenceNoSection}>
                  {ReferencenoFilterSelection.map((option, key) => (
                    <option key={key} value={option.value}>
                      {option.title}
                    </option>
                  ))}
                </FormControl>
                <Input type="text" disabled={busyRef} value={referenceNo} onChange={(e) => setReferenceNo(e.target.value)} />
                <div style={{ display: 'inline-block', marginLeft: '0.5em', cursor: 'pointer' }} onClick={handleSearchByReferenceNo}>
                  {!busyRef ? <FaSearch /> : <FaSpinner />}
                </div>
              </FormGroup>
            )}
            {hasAccess && (
              <div style={{ display: 'inline-block', float: 'right', cursor: 'pointer' }}>
                <Button disabled={inValidBtnEnable} onClick={inValidateConfirm}>Invalidate Order</Button>
              </div>
            )}
          </FormGroup>
        </div>
        <div className="col-lg-1"></div>
      </div>
    </div>
  );
};
export default DashboardHeader;