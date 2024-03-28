import { createAction } from '@reduxjs/toolkit';

// Actions for updating user rights and access
export const setUserRights = createAction('SET_USER_RIGHTS', function prepare(activityRight, canManageTEQ, canManageBEQ) {
  return {
    payload: {
      activityRight,
      canManageTEQ,
      canManageBEQ,
    },
  };
});

// Actions for handling audit date filters
export const setAuditDateFilter = createAction('SET_AUDIT_DATE_FILTER', function prepare(fromDate, throughDate) {
  return {
    payload: {
      fromDate,
      throughDate,
    },
  };
});

// Actions for handling audit filter section
export const setAuditFilterSection = createAction('SET_AUDIT_FILTER_SECTION', function prepare(filterSection) {
  return {
    payload: {
      filterSection,
    },
  };
});

// Actions for enabling/disabling date selection
export const setDisableDate = createAction('SET_DISABLE_DATE', function prepare(disableDate) {
  return {
    payload: {
      disableDate,
    },
  };
});

// Actions for handling audit search and validation error
export const setSearchAndValidate = createAction('SET_SEARCH_AND_VALIDATE', function prepare(validateError, searchDetails) {
  return {
    payload: {
      validateError,
      searchDetails,
    },
  };
});

// Actions for handling busy state
export const setBusyState = createAction('SET_BUSY_STATE', function prepare(isBusy) {
  return {
    payload: {
      isBusy,
    },
  };
});

// Actions for handling audit grid data
export const setAuditGridData = createAction('SET_AUDIT_GRID_DATA', function prepare(gridData) {
  return {
    payload: {
      gridData,
    },
  };
});