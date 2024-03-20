import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Modal } from 'react-bootstrap'; // Assuming you're using react-bootstrap for Modal
import DatePicker from 'react-datepicker'; // Assume using react-datepicker for date inputs
import 'react-datepicker/dist/react-datepicker.css';
import { toast } from 'react-toastify'; // Assuming react-toastify for growl notifications
const auditingApiUri = 'api/audit/GetAuditDetails/';
const PsAuditingComponent = () => {
  const [accessRights, setAccessRights] = useState({ activityright: '', canmanageteq: false, canmanagebeq: false });
  const [hasAccess, setHasAccess] = useState(false);
  const [fromDate, setFromDate] = useState(new Date());
  const [throughDate, setThroughDate] = useState(new Date());
  const [filterSection, setFilterSection] = useState('7');
  const [disableDate, setDisableDate] = useState(true);
  const [auditData, setAuditData] = useState([]);
  const [busy, setBusy] = useState(false);
  const [validateError, setValidateError] = useState(false);
  useEffect(() => {
    // Assuming you have a method to fetch user info
    fetchUserAccessRights().then(access => {
      setAccessRights(access);
      const { activityright } = access;
      if (activityright === 'SuperAdmin' || activityright === 'Admin') {
        setHasAccess(true);
      } else {
        alert("You are not authorized to view this page.");
        // Redirect logic here
      }
    });
  }, []);
  const validateDate = () => {
    setValidateError(throughDate < fromDate);
  };
  const changeSelect = (item) => {
    setDisableDate(item === '1');
  };
  const searchAudits = () => {
    if (filterSection === "1") {
      if (!fromDate || !throughDate) {
        toast.error("Please enter a valid Start/End date");
        return;
      }
      validateDate();

      if (validateError) {
        toast.error("End date cannot be earlier than the Start date");
        return;
      }
    }

    setBusy(true);
    const params = filterSection === "1" ? {
      search: '', // Assuming an input for search text
      Fromdate: fromDate.toString(),
      ThroughDate: throughDate.toString(),
    } : {};

    axios.post(`${auditingApiUri}${filterSection === "1" ? '' : `GetAuditDetailsFilter/${filterSection}`}`, params)
      .then(response => {
        setAuditData(response.data);
        setBusy(false);
      })
      .catch(error => {
        toast.error(error.message);
        setBusy(false);
      });
  };
  return (
    <div>
      {!hasAccess && <div>You do not have access to view this page.</div>}
      {hasAccess &&
        <div>
          {/* Your UI components for displaying and managing audits */}
          <DatePicker selected={fromDate} onChange={date => setFromDate(date)} />
          <DatePicker selected={throughDate} onChange={date => setThroughDate(date)} />
          <button onClick={searchAudits}>Search</button>
          {validateError && <div>End date cannot be earlier than the Start date.</div>}
          {/* Display audit data */}
        </div>
      }
    </div>
  );
};
export default PsAuditingComponent;