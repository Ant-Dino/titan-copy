import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Button } from "react-bootstrap";

interface Props {
  loggedTenant: string;
  activityRight: string;
  canManageTEQ: boolean;
  canManageBEQ: boolean;
  onInvalidateOrder: (orderIds: string[]) => void;
  onSearch: () => void;
  onUpdateUser: (user: any) => void;
}

interface ReportData {
  ServiceRequestId: string;
  CustomerName: string;
  ApplicationId: string;
  ExternalRefNum: string;
  createddate: string;
  InternalRefNum?: string;
  service: string;
  OrderStatus: string;
  Tenant: string;
  LVISActionType?: string;
}

const PsReporting: React.FC<Props> = ({
  loggedTenant,
  activityRight,
  canManageTEQ,
  canManageBEQ,
  onInvalidateOrder,
  onSearch,
  onUpdateUser,
}) => {
  const [orderToInvalidate, setOrderToInvalidate] = useState<string[]>([]);
  const [inValidBtnEnable, setInValidBtnEnable] = useState<boolean>(true);
  const [hasAccess, setHasAccess] = useState<boolean>(false);
  const [hasSuperAccess, setHasSuperAccess] = useState<boolean>(false);
  const [reportData, setReportData] = useState<ReportData[]>([]);

  useEffect(() => {
    let isAccessAllowed = activityRight === 'Admin' || activityRight === 'SuperAdmin';
    setHasAccess(isAccessAllowed);
    setHasSuperAccess(activityRight === 'SuperAdmin');

    if (!activityRight) {
      // Fetch user
      const fetchUserInfo = async () => {
        try {
          const response = await axios.get("/user/info");
          onUpdateUser(response.data);
          onSearch();
        } catch (error) {
          console.error('Failed to fetch user info', error);
        }
      };
      fetchUserInfo();
    }
    // Initial data load
    onSearch();
  }, [activityRight, onSearch, onUpdateUser]);

  const handleSelectRow = (serviceRequestId: string, isSelected: boolean) => {
    if (isSelected) {
      setOrderToInvalidate((prev) => [...prev, serviceRequestId]);
      setInValidBtnEnable(false);
    } else {
      setOrderToInvalidate(orderToInvalidate.filter((id) => id !== serviceRequestId));
      setInValidBtnEnable(orderToInvalidate.length <= 1);
    }
  };

  const invalidateConfirm = () => {
    // Trigger modal or confirmation box here
    console.log("Invalidate confirm");
    // For simplicity, directly call the invalidate process
    inValidateProcess();
  };

  const inValidateProcess = async () => {
    try {
      await axios.post("/invalidate/orders", {
        orders: orderToInvalidate,
      });
      console.log("Orders invalidated successfully");
      setOrderToInvalidate([]);
      setInValidBtnEnable(true);
      onSearch(); // Refresh the data
    } catch (error) {
      console.error("Failed to invalidate orders", error);
    }
  };

  return (
    <div>
      {hasAccess && <Button onClick={invalidateConfirm} disabled={inValidBtnEnable}>Invalidate Selected Orders</Button>}
      <div>
        {/* Data grid or list to display ReportData goes here. You might use a library like ag-Grid, react-table, or similar */}
        {reportData.map((data) => (
          <div key={data.ServiceRequestId}>
            {/* Example item */}
            <span>{data.CustomerName}</span>
            {/* Checkbox for row selection */}
            <input
              type="checkbox"
              onChange={(e) => handleSelectRow(data.ServiceRequestId, e.target.checked)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PsReporting;