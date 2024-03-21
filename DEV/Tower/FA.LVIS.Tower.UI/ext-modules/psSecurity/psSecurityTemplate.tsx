import React, { useEffect } from 'react';
import { Button } from 'react-bootstrap'; // Assuming you're using React-Bootstrap for UI components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { AgGridReact } from 'ag-grid-react'; // Assuming AG Grid for React to replace ui-grid
import 'ag-grid-community/styles/ag-grid.css'; // Core CSS for AG Grid
import 'ag-grid-community/styles/ag-theme-alpine.css'; // Theme CSS for AG Grid

type Props = {
  getCurrentUser: () => void,
  hasModifyAccess: boolean,
  addRow: () => void,
  gridOptions: any, // You might want to replace 'any' with a more specific type based on your grid config
};

const SecurityProfilesComponent = ({ getCurrentUser, hasModifyAccess, addRow, gridOptions }: Props) => {
  useEffect(() => {
    getCurrentUser();
  }, [getCurrentUser]);

  return (
    <div className="ps-dashboard-header">
      <ul className="breadcrumb">
        <li className="subbreadcrumb">
          <div>
            <ul>
              <li>Security Profiles</li>
            </ul>
          </div>
        </li>
      </ul>
      <div className="wrapper">
        <div className="col-lg-1"></div>
        <div className="col-lg-10">
          <ul className="ps-page-title">
            <li>Security Profiles</li>
          </ul>
          <Button variant="sm" style={{ cursor: 'pointer' }} onClick={addRow} disabled={!hasModifyAccess}>
            <FontAwesomeIcon icon={faUserPlus} /> Add New User
          </Button>

          <div
            className="ag-theme-alpine"
            style={{ height: '400px', width: '100%' }}
          >
            <AgGridReact
              {...gridOptions}
            />
          </div>
        </div>
        <div className="col-lg-1"> </div>
      </div>
    </div>
  );
};

export default SecurityProfilesComponent;