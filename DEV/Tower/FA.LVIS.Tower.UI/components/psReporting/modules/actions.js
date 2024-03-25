// Actions for psReporting Redux Store

// Action Types
export const ActionTypes = {
  SET_ORDER_TO_INVALIDATE: 'SET_ORDER_TO_INVALIDATE',
  TOGGLE_INVALID_BTN_ENABLE: 'TOGGLE_INVALID_BTN_ENABLE',
  SET_LOGGED_TENANT: 'SET_LOGGED_TENANT',
  SET_TOGGLING_TENANT: 'SET_TOGGLING_TENANT',
  SET_ACCESS_RIGHTS: 'SET_ACCESS_RIGHTS',
  SET_DATE_FILTER: 'SET_DATE_FILTER',
  SET_REFERENCE_NO_FILTER: 'SET_REFERENCE_NO_FILTER',
  SET_FILTER_SECTION: 'SET_FILTER_SECTION',
  SET_DISABLE_DATE: 'SET_DISABLE_DATE',
  SET_SERVICE_GRID_DATA: 'SET_SERVICE_GRID_DATA',
  SET_VALIDATE_ERROR: 'SET_VALIDATE_ERROR',
  SET_FILTER_REFERENCE_NO_SECTION: 'SET_FILTER_REFERENCE_NO_SECTION',
  SET_REFERENCE_NO: 'SET_REFERENCE_NO',
  SET_BUSY_REF: 'SET_BUSY_REF',
  SET_DISABLE_REFERENCE_NO: 'SET_DISABLE_REFERENCE_NO',
  SET_SHOW_REF_NUM: 'SET_SHOW_REF_NUM',
  SET_SHOW_DATES: 'SET_SHOW_DATES',
  SET_TENANT: 'SET_TENANT',
};

// Action Creators
export const setOrderToInvalidate = (orders) => ({
  type: ActionTypes.SET_ORDER_TO_INVALIDATE,
  payload: orders,
});

export const toggleInvalidBtnEnable = (isEnabled) => ({
  type: ActionTypes.TOGGLE_INVALID_BTN_ENABLE,
  payload: isEnabled,
});

export const setLoggedTenant = (tenant) => ({
  type: ActionTypes.SET_LOGGED_TENANT,
  payload: tenant,
});

export const setTogglingTenant = (tenant) => ({
  type: ActionTypes.SET_TOGGLING_TENANT,
  payload: tenant,
});

export const setAccessRights = (rights) => ({
  type: ActionTypes.SET_ACCESS_RIGHTS,
  payload: rights,
});

export const setDateFilter = (filter) => ({
  type: ActionTypes.SET_DATE_FILTER,
  payload: filter,
});

export const setReferenceNoFilter = (filter) => ({
  type: ActionTypes.SET_REFERENCE_NO_FILTER,
  payload: filter,
});

export const setFilterSection = (section) => ({
  type: ActionTypes.SET_FILTER_SECTION,
  payload: section,
});

export const setDisableDate = (isDisabled) => ({
  type: ActionTypes.SET_DISABLE_DATE,
  payload: isDisabled,
});

export const setServiceGridData = (data) => ({
  type: ActionTypes.SET_SERVICE_GRID_DATA,
  payload: data,
});

export const setValidateError = (hasError) => ({
  type: ActionTypes.SET_VALIDATE_ERROR,
  payload: hasError,
});

export const setFilterReferenceNoSection = (section) => ({
  type: ActionTypes.SET_FILTER_REFERENCE_NO_SECTION,
  payload: section,
});

export const setReferenceNo = (no) => ({
  type: ActionTypes.SET_REFERENCE_NO,
  payload: no,
});

export const setBusyRef = (isBusy) => ({
  type: ActionTypes.SET_BUSY_REF,
  payload: isBusy,
});

export const setDisableReferenceNo = (isDisabled) => ({
  type: ActionTypes.SET_DISABLE_REFERENCE_NO,
  payload: isDisabled,
});

export const setShowRefNum = (show) => ({
  type: ActionTypes.SET_SHOW_REF_NUM,
  payload: show,
});

export const setShowDates = (show) => ({
  type: ActionTypes.SET_SHOW_DATES,
  payload: show,
});

export const setTenant = (tenant) => ({
  type: ActionTypes.SET_TENANT,
  payload: tenant,
});