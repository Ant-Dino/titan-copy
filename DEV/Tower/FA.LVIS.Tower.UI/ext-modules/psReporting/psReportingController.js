import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Modal from './Modal'; // Assume a Modal component exists
import { UserContext } from './UserContext'; // Assume a UserContext exists for global user data
interface ReportDetails {
  ServiceRequestId: string;
  CustomerName: string;
  ApplicationId: string;
  ExternalRefNum: string;
  createddate: string;
  InternalRefNum: string;
  service: string;
  OrderStatus: string;
  Tenant: string;
  LVISActionType: string;
}
interface FilterDetails {
  Fromdate: string;
  ThroughDate: string;
}
interface ReferenceFilterDetails {
  ReferenceNoType: string;
  ReferenceNo: string;
}
const ReportingComponent: React.FC = () => {
  const [data, setData] = useState<ReportDetails[]>([]);
  const [filterValue, setFilterValue] = useState<string>('7');
  const [fromDate, setFromDate] = useState<Date | null>(new Date());
  const [throughDate, setThroughDate] = useState<Date | null>(new Date());
  const [disableDate, setDisableDate] = useState<boolean>(true);
  const [orderToInvalidate, setOrderToInvalidate] = useState<ReportDetails[]>([]);
  const [invalidateBtnEnabled, setInvalidateBtnEnabled] = useState<boolean>(true);
  const [tenant, setTenant] = useState<string>('DefaultTenant');
  const [referenceFilter, setReferenceFilter] = useState<string>('0');
  const [referenceNo, setReferenceNo] = useState<string>('');
  const [busy, setBusy] = useState<boolean>(false);
  const [hasAccess, setHasAccess] = useState<boolean>(false);
  const [hasSuperAccess, setHasSuperAccess] = useState<boolean>(false);
  const { userInfo } = useContext(UserContext); // Assuming user information is stored globally
  useEffect(() => {
    setHasAccess(['Admin', 'SuperAdmin'].includes(userInfo.activityRight));
    setHasSuperAccess(userInfo.activityRight === 'SuperAdmin');
    loadData();
  }, [userInfo, filterValue, tenant]);
  const loadData = async () => {
    setBusy(true);
    try {
      const response = await axios.get<ReportDetails[]>(`/GetReportDetailsFilter/${filterValue}/${tenant}`);
      setData(response.data);
      setBusy(false);
    } catch (error) {
      toast.error("Error loading data");
      setBusy(false);
    }
  };
  const invalidateOrders = async () => {
    if (orderToInvalidate.length === 0) {
      toast.info('No orders selected for invalidation.');
      return;
    }
    try {
      const response = await axios.post('/InvalidateOrderData', orderToInvalidate);
      if (response.data.length > 0) {
        toast.error('Failed to Invalidate some orders');
      } else {
        toast.success('Selected orders invalidated successfully');
        setOrderToInvalidate([]);
        setInvalidateBtnEnabled(true);
        loadData();
      }
    } catch (error) {
      toast.error('Error invalidating orders');
    }
  };
  const handleChangeDateFilter = (value: string) => {
    setFilterValue(value);
    setDisableDate(value === '1' ? false : true);
  };
  const handleOrderSelection = (selectedOrder: ReportDetails, isSelected: boolean) => {
    if (isSelected) {
      setOrderToInvalidate(prev => [...prev, selectedOrder]);
      setInvalidateBtnEnabled(false);
    } else {
      setOrderToInvalidate(prev => prev.filter(order => order.ServiceRequestId !== selectedOrder.ServiceRequestId));
      if (orderToInvalidate.length === 1) setInvalidateBtnEnabled(true);
    }
  };
  return (
    <div>
      <ToastContainer />
      <Modal show={!busy && orderToInvalidate.length > 0} onClose={() => setOrderToInvalidate([])} onSave={invalidateOrders} />
      {/* Detailed component rendering */}
    </div>
  );
};
export default ReportingComponent;