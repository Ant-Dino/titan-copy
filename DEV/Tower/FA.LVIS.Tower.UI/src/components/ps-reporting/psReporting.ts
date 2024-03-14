import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import { useNavigate, useLocation } from 'react-router-dom';
import { Modal, Button, Form } from 'react-bootstrap';
import { toast } from 'react-toastify';
const PsReportingComponent: React.FC = () => {
  const [orderToInvalidate, setOrderToInvalidate] = useState<any[]>([]);
  const [inValidBtnEnable, setInValidBtnEnable] = useState<boolean>(true);
  const [hasAccess, setHasAccess] = useState<boolean>(false);
  const [hasSuperAccess, setHasSuperAccess] = useState<boolean>(false);
  const [fromDate, setFromDate] = useState<string>('');
  const [throughDate, setThroughDate] = useState<string>('');
  const [busy, setBusy] = useState<boolean>(false);
  const [filterSection, setFilterSection] = useState<string>('7');
  const [disableDate, setDisableDate] = useState<boolean>(true);
  const [validateError, setValidateError] = useState<boolean>(false);
  const [tenant, setTenant] = useState<string>('');
  const [togglingTenant, setTogglingTenant] = useState<string>('');
  const [cookies] = useCookies(['activityright']);
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    initializeDefaults();
    fetchTenant();
  }, []);
  const initializeDefaults = () => {
    const activityRight = cookies.activityright || 'User';
    const isHasAccess = ['Admin', 'SuperAdmin'].includes(activityRight);
    const isHasSuperAccess = activityRight === 'SuperAdmin';

    setHasAccess(isHasAccess);
    setHasSuperAccess(isHasSuperAccess);

    setFromDate(new Date().toLocaleDateString());
    setThroughDate(new Date().toLocaleDateString());

    if (!activityRight || activityRight === '') {
      fetchUserInfo();
    }
  };
  const fetchUserInfo = async () => {
    try {
      const response = await axios.get('/api/userinfo');
      handleUserRights(response.data);
    } catch (error) {
      console.error('Failed to fetch user info', error);
    }
  };
  const handleUserRights = (data: any) => {
    const activityRight = data.ActivityRight;
    const isHasAccess = ['Admin', 'SuperAdmin'].includes(activityRight);
    const isHasSuperAccess = activityRight === 'SuperAdmin';

    setHasAccess(isHasAccess);
    setHasSuperAccess(isHasSuperAccess);
  };
  const fetchTenant = async () => {
    try {
      const response = await axios.get('/api/tenant');
      setTenant(response.data);
      setTogglingTenant(response.data);
    } catch (error) {
      console.error('Failed to fetch tenant info', error);
    }
  };
  const navigateToEditReportRow = (rowId: any) => {
    // This should navigate to the detail/edit page with rowId
    navigate(`/edit-report/${rowId}`);
  };
  // Other functions can be similarly transformed and added here following React conventions
  // Here can be added the UI part using the states above with handlers
  return (
    <div className="reporting-component">
      {/* UI elements and logic */}
      {/* For example, a list rendered from state, inputs bound to state handlers, etc. */}
    </div>
  );
};
export default PsReportingComponent;