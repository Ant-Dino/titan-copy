import React, { useState, useEffect } from "react";
import axios from "axios";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { formatDate, getDateRange } from "./helpers/dateHelpers"; // Assume this helper exists for date formatting and calculations
import { useCookies } from "react-cookie"; // assuming react-cookie is used for cookie management
import { useLocation, useHistory } from "react-router-dom";
const AuditingComponent = () => {
  const [activityRight, setActivityRight] = useState(null);
  const [hasAccess, setHasAccess] = useState(false);
  const [fromDate, setFromDate] = useState(formatDate(new Date()));
  const [throughDate, setThroughDate] = useState(formatDate(new Date()));
  const [filterSection, setFilterSection] = useState('7');
  const [disableDate, setDisableDate] = useState(true);
  const [auditData, setAuditData] = useState([]);
  const [validateError, setValidateError] = useState(false);
  const [busy, setBusy] = useState(false);
  const [cookies, setCookie] = useCookies(['activityright']);
  const location = useLocation();
  const history = useHistory();
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get("/api/userInfo");
        const { ActivityRight, CanManageTEQ, CanManageBEQ } = response.data;
        setActivityRight(ActivityRight);
        checkAccess(ActivityRight);
      } catch (error) {
        console.error("Failed to fetch user info", error);
      }
    };

    const initActivityRight = cookies.activityright || activityRight;
    if (!initActivityRight) {
      fetchUser();
    } else {
      setActivityRight(initActivityRight);
      checkAccess(initActivityRight);
    }
  }, [activityRight, cookies.activityright]);
  const checkAccess = (right) => {
    if (right === "Admin" || right === "SuperAdmin") {
      setHasAccess(true);
    } else {
      alert("You are not authorized to view this page.");
      history.push('/dashboard');
    }
  };
  const validateDate = () => {
    const start = new Date(fromDate);
    const end = new Date(throughDate);
    setValidateError(end < start);
  };
  const changeSelect = (item) => {
    setDisableDate(item !== "1");
  };
  const search = async () => {
    if (filterSection === "1") {
      if (!fromDate || !throughDate || validateError) {
        console.error("Invalid date range");
        return;
      }
    }

    setBusy(true);
    try {
      let response;
      if (filterSection === "1") {
        response = await axios.post("/api/audit/GetAuditDetails", { search: "", fromDate, throughDate });
      } else {
        response = await axios.get(`/AuditController/GetAuditDetailsFilter/${filterSection}`);
      }
      setAuditData(response.data);
    } catch (error) {
      console.error("Failed to fetch audit details", error);
    } finally {
      setBusy(false);
    }
  };
  useEffect(() => {
    search();
  }, [filterSection, fromDate, throughDate]);
  return (
    <div>
      {hasAccess ? (
        <>
          {/* UI components and logic here */}
        </>
      ) : (
        <p>You do not have access to view this page.</p>
      )}
    </div>
  );
};
export default AuditingComponent;