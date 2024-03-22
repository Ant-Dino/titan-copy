import React, { useState, useEffect } from 'react';
import { Modal } from 'react-bootstrap';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import Growl from 'react-growl-notification'; // Assuming a custom Growl component or a library for notifications
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { useHistory } from 'react-router-dom';
function AuditingComponent() {
  const [activityRight, setActivityRight] = useState(null);
  const [canManageTEQ, setCanManageTEQ] = useState(false);
  const [canManageBEQ, setCanManageBEQ] = useState(false);
  const [hasAccess, setHasAccess] = useState(false);
  const [fromDate, setFromDate] = useState(new Date());
  const [throughDate, setThroughDate] = useState(new Date());
  const [filterSection, setFilterSection] = useState('7');
  const [disableDate, setDisableDate] = useState(true);
  const [busy, setBusy] = useState(false);
  const [auditData, setAuditData] = useState([]);
  const [validateError, setValidateError] = useState(false);
  const [cookies, setCookie, removeCookie] = useCookies(['activityright']);
  const history = useHistory();
  useEffect(() => {
    let userRight = cookies.activityright || null;
    if (!userRight) {
      UserInfo.getUser().then(response => {
        setActivityRights(response);
      });
    } else {
      setActivityRights({ ActivityRight: userRight });
    }
  }, []);
  const setActivityRights = (response) => {
    setActivityRight(response.ActivityRight);
    setCanManageTEQ(response.CanManageTEQ);
    setCanManageBEQ(response.CanManageBEQ);
    if (['Admin', 'SuperAdmin'].includes(response.ActivityRight)) {
      setHasAccess(true);
    } else {
      alert('You are not authorized to view this page.');
      history.push('/dashboard');
    }
  };
  const validateDate = () => {
    setValidateError(throughDate < fromDate);
  };
  const changeSelect = (item) => {
    setDisableDate(item !== '1');
  };
  const search = async () => {
    setBusy(true);
    try {
      let response;
      if (filterSection === "1") {
        validateDate();
        if (validateError) return;
        let details = { search: "", Fromdate: fromDate.toString(), ThroughDate: throughDate.toString() };
        response = await axios.post('api/audit/GetAuditDetails', details);
      } else {
        response = await axios.get(`AuditController/GetAuditDetailsFilter/${filterSection}`);
      }
      setAuditData(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setBusy(false);
    }
  };
  return (
    <div>
      {hasAccess ? (
        <div>
          <DatePicker selected={fromDate} onChange={(date) => setFromDate(date)} />
          <DatePicker selected={throughDate} onChange={(date) => setThroughDate(date)} />
          <button onClick={search}>Search</button>
          {busy ? <p>Loading...</p> : <div>{auditData.map((item, index) => <p key={index}>{item.UserName}</p>)}</div>}
          {validateError && <p>End date cannot be earlier than the start date.</p>}
        </div>
      ) : (
        <p>You do not have permission to view this content.</p>
      )}
    </div>
  );
}
export default AuditingComponent;