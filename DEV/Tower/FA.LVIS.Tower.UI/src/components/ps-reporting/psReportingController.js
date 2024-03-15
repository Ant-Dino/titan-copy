import React, { useState, useEffect, useContext, useCallback } from 'react';
import axios from 'axios';
import { Modal, Button, Alert } from 'react-bootstrap';
import { UserInfoContext } from './UserInfoContext';
import { useCookies } from 'react-cookie';
import { useToasts } from 'react-toast-notifications';
type Props = {
  onInvalidateSuccess?: () => void,
  tenantName: string,
};
const PsReportingComponent: React.FC<Props> = ({ onInvalidateSuccess, tenantName }) => {
  const [orderToInvalidate, setOrderToInvalidate] = useState<any[]>([]);
  const [inValidBtnEnable, setInValidBtnEnable] = useState<boolean>(true);
  const [activityRight, setActivityRight] = useState<string | null>(null);
  const [canManageTeq, setCanManageTeq] = useState<boolean>(false);
  const [canManageBeq, setCanManageBeq] = useState<boolean>(false);
  const [isBusy, setIsBusy] = useState<boolean>(false);
  const [dateFilter, setDateFilter] = useState('7');
  const [fromDate, setFromDate] = useState<string>('');
  const [throughDate, setThroughDate] = useState<string>('');
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [isDateDisabled, setIsDateDisabled] = useState<boolean>(true);
  const { userInfo, fetchUserInfo } = useContext(UserInfoContext);
  const [cookies] = useCookies(['activityright']);
  const { addToast } = useToasts();
  // Fetch user info if not available
  useEffect(() => {
    if (!activityRight) {
      setActivityRight(cookies.activityright || '');
      if (!userInfo) fetchUserInfo();
      else {
        setActivityRight(userInfo.activityRight);
        setCanManageTeq(userInfo.CanManageTEQ);
        setCanManageBeq(userInfo.CanManageBEQ);
      }
    }
  }, [activityRight, cookies.activityright, fetchUserInfo, userInfo]);
  const handleInvalidate = useCallback(async () => {
    setInValidBtnEnable(false);
    try {
      const response = await axios.post('/ReportingController/InvalidateOrderData', orderToInvalidate);
      if (response.data.length > 0) {
        addToast('Failed to Invalidate some Service Request IDs', { appearance: 'error' });
      } else {
        addToast('Orders invalidated successfully', { appearance: 'success' });
        onInvalidateSuccess?.();
      }
    } catch (error) {
      addToast('Failed to invalidate orders', { appearance: 'error' });
    } finally {
      setInValidBtnEnable(true);
    }
  }, [orderToInvalidate, addToast, onInvalidateSuccess]);
  const searchOrders = useCallback(async () => {
    setIsBusy(true);
    try {
      const response = await axios.get(`/ReportingController/GetReportDetailsFilter/${dateFilter}/${tenantName}`);
      setSearchResults(response.data);
    } catch (error) {
      addToast('Failed to fetch orders', { appearance: 'error' });
    } finally {
      setIsBusy(false);
    }
  }, [dateFilter, tenantName, addToast]);
  useEffect(() => {
    searchOrders();
  }, [searchOrders]);
  return (
    <div>
      {isBusy && <p>Loading...</p>}
      {!isBusy && (
        <>
          <Button disabled={inValidBtnEnable} onClick={handleInvalidate}>Invalidate Orders</Button>
          <div>
            {/* Display Search Results */}
          </div>
        </>
      )}
    </div>
  );
};
export default PsReportingComponent;