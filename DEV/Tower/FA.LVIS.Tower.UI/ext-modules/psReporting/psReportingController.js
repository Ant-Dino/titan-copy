import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { Modal } from 'react-bootstrap';
import { toast } from 'react-toastify';

// Define component props
interface PsReportingProps {
  userInfo: any;
  onInvalidateOrders: (orders: any[]) => void;
  getReportDetails: (tenant: string, filter: any) => Promise<any>;
  getReportDetailsByReference: (tenant: string, filter: any) => Promise<any>;
  tenantName: string;
  activityRight: string;
  canManageTEQ: boolean;
  canManageBEQ: boolean;
}

// Define component state
interface ReportGridRow {
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

const PsReporting: React.FC<PsReportingProps> = ({ userInfo, onInvalidateOrders, getReportDetails, getReportDetailsByReference, tenantName, activityRight, canManageTEQ, canManageBEQ }) => {
  const [orderToInvalidate, setOrderToInvalidate] = useState<any[]>([]);
  const [inValidBtnEnable, setInValidBtnEnable] = useState<boolean>(true);
  const [reportGridData, setReportGridData] = useState<ReportGridRow[]>([]);
  const [filterSection, setFilterSection] = useState<string>('7');
  const [disableDate, setDisableDate] = useState<boolean>(true);
  const [referenceNoFilterSelection, setReferenceNoFilterSelection] = useState<string>('0');
  const [referenceNo, setReferenceNo] = useState<string>('');
  const [busy, setBusy] = useState<boolean>(false);
  const [validateError, setValidateError] = useState<boolean>(false);
  const [fromDate, setFromDate] = useState<string>(new Date().toLocaleDateString());
  const [throughDate, setThroughDate] = useState<string>(new Date().toLocaleDateString());
  const [hasAccess, setHasAccess] = useState<boolean>(false);
  const [hasSuperAccess, setHasSuperAccess] = useState<boolean>(false);

  useEffect(() => {
    const adminRights = ['Admin', 'SuperAdmin'];
    setHasAccess(adminRights.includes(activityRight));
    setHasSuperAccess(activityRight === 'SuperAdmin');
  }, [activityRight]);

  const inValidateProcess = useCallback(() => {
    onInvalidateOrders(orderToInvalidate);
    setOrderToInvalidate([]);
    setInValidBtnEnable(true);
  }, [orderToInvalidate, onInvalidateOrders]);

  const search = useCallback(() => {
    setBusy(true);
    const filter = filterSection === '1' ? { Fromdate: fromDate, ThroughDate: throughDate } : { filterSection };
    getReportDetails(tenantName, filter)
      .then(data => {
        setReportGridData(data);
        setBusy(false);
      })
      .catch(() => setBusy(false));
  }, [filterSection, fromDate, throughDate, tenantName, getReportDetails]);

  const searchByReferenceNo = useCallback(() => {
    if (referenceNo) {
      setBusy(true);
      const filter = { ReferenceNoType: referenceNoFilterSelection, ReferenceNo: referenceNo };
      getReportDetailsByReference(tenantName, filter)
        .then(data => {
          setReportGridData(data);
          setBusy(false);
        })
        .catch(() => setBusy(false));
    }
  }, [referenceNo, referenceNoFilterSelection, tenantName, getReportDetailsByReference]);

  const handleRowSelection = (row: any, isSelected: boolean) => {
    if (isSelected) {
      setOrderToInvalidate(prev => [...prev, row]);
      setInValidBtnEnable(false);
    } else {
      setOrderToInvalidate(prev => prev.filter(r => r.ServiceRequestId !== row.ServiceRequestId));
      if (orderToInvalidate.length === 1) {
        setInValidBtnEnable(true);
      }
    }
  };

  return (
    <div>
      {/* UI components such as filters, buttons, and the data grid will go here */}
      <button disabled={busy || !inValidBtnEnable} onClick={inValidateProcess}>Invalidate Orders</button>
      {/* Implement more UI components as needed */}
    </div>
  );
};

export default PsReporting;