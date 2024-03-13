typescript
import React, { useState, useEffect } from 'react';

// Assuming Props Interface is defined as below
interface ReportingProps {
  loggedTenant: string;
  title: string;
  fetchOrders: (tenant?: string) => void;
  invalidateOrder: () => void;
  hasAccess: boolean;
  startAndEndDate: { start: string; end: string };
  referenceNo: string;
  searchByReference: (referenceNo: string) => void;
}

const ReportingComponent: React.FC<ReportingProps> = ({
  loggedTenant,
  title,
  fetchOrders,
  invalidateOrder,
  hasAccess,
  startAndEndDate,
  referenceNo,
  searchByReference,
}) => {

  const [isBusy, setIsBusy] = useState(false);
  const [isBusyRef, setIsBusyRef] = useState(false);
  const [showDates, setShowDates] = useState(false);
  const [showRefNum, setShowRefNum] = useState(false);

  useEffect(() => {
    fetchOrders();
  }, [fetchOrders]);

  const handleSearch = () => {
    setIsBusy(true);
    fetchOrders();
    setIsBusy(false);
  };

  const handleSearchByReference = () => {
    setIsBusyRef(true);
    searchByReference(referenceNo);
    setIsBusyRef(false);
  };

  return (
    <div className="reporting-dashboard">
      <ul className="breadcrumb">
        <li className="subbreadcrumb">
          {loggedTenant === 'LVIS' ? (
            <>
              <button onClick={() => handleSearch()}>Orders Summary</button>
              <button onClick={() => handleSearch('RF')}>RF Orders Summary</button>
            </>
          ) : (
            <button onClick={() => handleSearch()}>Orders Summary</button>
          )}
        </li>
      </ul>
      <div className="wrapper">
        <div className="col-lg-10">
          <ul className="ps-page-title">
            <li>{title}</li>
          </ul>
          <div className="form-group">
            <div className="form-group" style={{ display: 'inline-block' }}>
              <i style={{ cursor: 'pointer' }} title="Search By Date Range" onClick={() => setShowDates(!showDates)}>📅</i>|<i style={{ cursor: 'pointer' }} title="Search By Reference Number" onClick={() => setShowRefNum(!showRefNum)}>🔍</i>
            </div>
            {showDates && (
              <div className="form-group" name="OrderActivityForm" style={{ display: 'inline-block' }}>
                <label>Start Date: </label>
                {/* Input elements for dates */}
                <label> End Date: </label>
                {/* Input element for dates */}
                <label>Date Filter:</label>
                {/* Select element for date filter */}
                {isBusy ? (
                  <div style={{ display: 'inline-block', margin: '0 auto' }}>
                    <i>Loading...</i>
                  </div>
                ) : (
                  <div style={{ display: 'inline-block', margin: '0 auto'}} onClick={handleSearch}>
                    <i>Search</i>
                  </div>
                )}
              </div>
            )}
            {showRefNum && (
              <div className="form-group" style={{ display: 'inline-block' }}>
                <label>Search By</label>
                {/* Select and input elements for reference number search */}
                {isBusyRef ? (
                  <div style={{ display: 'inline-block', margin: '0 auto' }}>
                    <i>Loading...</i>
                  </div>
                ) : (
                  <div style={{ display: 'inline-block', margin: '0 auto'}} onClick={handleSearchByReference}>
                    <i>Search</i>
                  </div>
                )}
              </div>
            )}
            <div style={{ display: 'inline-block', float: 'right', cursor: 'pointer' }}>
              <button className="btn btn-sm" onClick={invalidateOrder} disabled={!hasAccess}>Invalidate Order</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportingComponent;
