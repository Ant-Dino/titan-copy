import React, { useState, useEffect } from 'react';
import { Modal, Button, Alert } from 'react-bootstrap';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { format } from 'date-fns';
import { useCookies } from 'react-cookie';
import { useToasts } from 'react-toast-notifications';
import { CustomGrid } from './CustomGrid'; // Assuming CustomGrid is a component you've created for displaying the grid
type Props = {
  userInfo: any;
  searchOrders: (params: any) => Promise<any>;
  invalidateOrders: (orderIds: any[]) => Promise<any>;
};
const ReportingComponent: React.FC<Props> = ({ userInfo, searchOrders, invalidateOrders }) => {
  const [dateRange, setDateRange] = useState({
    from: new Date(),
    through: new Date(),
  });
  const [orders, setOrders] = useState<any[]>([]);
  const [selectedOrders, setSelectedOrders] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [cookies, setCookie] = useCookies(['activityright']);
  const { addToast } = useToasts();
  useEffect(() => {
    if (!userInfo.activityRight) {
      userInfo.activityRight = cookies.activityright;
    }
    loadOrders();
  }, []);
  const loadOrders = async () => {
    setIsLoading(true);
    try {
      const response = await searchOrders({ from: formatDate(dateRange.from), through: formatDate(dateRange.through) });
      setOrders(response.data);
      setIsLoading(false);
    } catch (error) {
      addToast('Error loading orders', { appearance: 'error' });
      setIsLoading(false);
    }
  };
  const handleInvalidate = async () => {
    setIsLoading(true);
    try {
      const invalidOrderIds = selectedOrders.map((order) => order.ServiceRequestId);
      await invalidateOrders(invalidOrderIds);
      addToast('Selected orders invalidated successfully', { appearance: 'success' });
      setSelectedOrders([]);
      loadOrders(); // Reload orders to reflect the invalidated ones
    } catch (error) {
      addToast('Error invalidating orders', { appearance: 'error' });
      setIsLoading(false);
    }
  };
  const formatDate = (date: Date) => {
    return format(date, 'MM/dd/yyyy');
  };
  const handleDateChange = (dates: [Date, Date]) => {
    const [start, end] = dates;
    setDateRange({ ...dateRange, from: start, through: end });
  };
  const handleOrderSelection = (selectedOrderIds: any[]) => {
    const selected = orders.filter((order) => selectedOrderIds.includes(order.ServiceRequestId));
    setSelectedOrders(selected);
  };
  return (
    <div>
      <h2>Reportings</h2>
      <DatePicker
        selected={dateRange.from}
        onChange={handleDateChange}
        startDate={dateRange.from}
        endDate={dateRange.through}
        selectsRange
        inline
      />
      <Button variant="primary" onClick={loadOrders} disabled={isLoading}>Load Orders</Button>
      <Button variant="danger" onClick={handleInvalidate} disabled={isLoading || selectedOrders.length === 0}>Invalidate Selected</Button>
      {isLoading ? <p>Loading...</p> : <CustomGrid orders={orders} onOrderSelectionChange={handleOrderSelection} />}
    </div>
  );
};
export default ReportingComponent;