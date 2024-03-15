import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { Modal, Button } from 'react-bootstrap';
import { NotificationManager } from 'react-notifications';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
type ReportDetails = {
  Fromdate: string;
  ThroughDate: string;
};
type ReferenceDetails = {
  ReferenceNoType: string;
  ReferenceNo: string;
};
interface PsReportingProps {
  userInfo: any;
  tenantName: string;
  onInvalidateOrders: (orders: any[]) => Promise<any>;
  onGetReportDetails: (details: ReportDetails | undefined, togglingTenant: string) => Promise<any>;
  onGetReportDetailsByReference: (details: ReferenceDetails, togglingTenant: string) => Promise<any>;
}
const PsReportingComponent: React.FC<PsReportingProps> = ({
  userInfo,
  tenantName,
  onInvalidateOrders,
  onGetReportDetails,
  onGetReportDetailsByReference,
}) => {
  const [orderToInvalidate, setOrderToInvalidate] = useState<any[]>([]);
  const [inValidBtnEnable, setInValidBtnEnable] = useState<boolean>(true);
  const [hasAccess, setHasAccess] = useState<boolean>(false);
  const [hasSuperAccess, setHasSuperAccess] = useState<boolean>(false);
  const [fromDate, setFromDate] = useState<Date>(new Date());
  const [throughDate, setThroughDate] = useState<Date>(new Date());
  const [isBusy, setIsBusy] = useState<boolean>(false);
  const [filterSection, setFilterSection] = useState<string>('7');
  const [disableDate, setDisableDate] = useState<boolean>(true);
  const [validateError, setValidateError] = useState<boolean>(false);
  const [reportData, setReportData] = useState<any[]>([]);
  const [referenceNoFilterSelection] = useState<string>('0');
  const [referenceNo, setReferenceNo] = useState<string>('');
  const [busyRef, setBusyRef] = useState<boolean>(false);
  const [disableReferenceNo, setDisableReferenceNo] = useState<boolean>(true);
  const [togglingTenant, setTogglingTenant] = useState<string>(tenantName);
  useEffect(() => {
    checkAccess();
    fetchInitialReport();
  }, []);
  const checkAccess = () => {
    if (userInfo?.activityRight === 'Admin' || userInfo?.activityRight === 'SuperAdmin') {
      setHasAccess(true);
    }
    if (userInfo?.activityRight === 'SuperAdmin') {
      setHasSuperAccess(true);
    }
  };
  const fetchInitialReport = async () => {
    setIsBusy(true);
    try {
      const response = await onGetReportDetails(undefined, togglingTenant);
      setReportData(response.data);
    } catch (error) {
      NotificationManager.error('Failed to fetch data');
    } finally {
      setIsBusy(false);
    }
  };
  const handleInvalidateConfirm = async () => {
    // Confirmation Modal Logic Here
    const confirmed = window.confirm('Are you sure you want to Invalidate selected order(s)?');
    if (confirmed) {
      await handleInvalidateProcess();
    }
  };
  const handleInvalidateProcess = async () => {
    setIsBusy(true);
    try {
      const result = await onInvalidateOrders(orderToInvalidate);
      setOrderToInvalidate([]);
      setInValidBtnEnable(true);
      NotificationManager.success('Order(s) invalidated successfully');
      await fetchInitialReport();
    } catch (error) {
      NotificationManager.error('Failed to invalidate orders');
    } finally {
      setIsBusy(false);
    }
  };
  const handleDateChange = (date: Date | null, type: 'from' | 'through') => {
    if (date) {
      if (type === 'from') {
        setFromDate(date);
      } else {
        setThroughDate(date);
      }
    }
  };
  const validateDate = () => {
    if (throughDate < fromDate) {
      setValidateError(true);
    } else {
      setValidateError(false);
    }
  };
  // Additional functionality for reference number search, date range selection etc. can be added here
  return (
    <div>
      {/* Your JSX Code with React Components corresponding to your AngularJS Template */}
      <Modal show={isBusy} onHide={() => {}}>
        <Modal.Header>
          <Modal.Title>Loading...</Modal.Title>
        </Modal.Header>
      </Modal>
      {/* Rest of the component */}
    </div>
  );
};
export default PsReportingComponent;