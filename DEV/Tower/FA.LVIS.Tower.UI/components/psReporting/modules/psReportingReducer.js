import { ActionTypes } from './actions';

const initialState = {
  orderToInvalidate: [],
  inValidBtnEnable: true,
  loggedTenant: '',
  togglingTenant: '',
  hasAccess: false,
  hasSuperAccess: false,
  Fromdate: '',
  ThroughDate: '',
  Busy: false,
  DateFilterSelection: [
    { title: 'Custom', value: '1' },
    { title: 'Last 90 Days', value: '90' },
    { title: 'Last 60 Days', value: '60' },
    { title: 'Last 30 Days', value: '30' },
    { title: 'Last 15 Days', value: '15' },
    { title: 'Last 7 Days', value: '7' },
    { title: '24 hrs', value: '24' },
    { title: 'Today', value: '0' }
  ],
  ReferencenoFilterSelection: [
    { title: '---Select---', value: '0' },
    { title: 'External Reference Number', value: '1' },
    { title: 'Internal Reference Number', value: '2' },
    { title: 'Customer Reference Number', value: '3' },
    { title: 'Internal Reference Id', value: '4' }
  ],
  FilterSection: '7',
  Disabledate: true,
  serviceGrid: {
    data: []
  },
  ValidateError: false,
  FilterReferenceNoSection: '0',
  ReferenceNo: '',
  BusyRef: false,
  DisableReferenceNo: true,
  showrefnum: false,
  showdates: true,
  Tenant: '',
};

function reportingReducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.SET_ORDER_TO_INVALIDATE:
      return { ...state, orderToInvalidate: action.payload };
    case ActionTypes.TOGGLE_INVALID_BTN_ENABLE:
      return { ...state, inValidBtnEnable: action.payload };
    case ActionTypes.SET_LOGGED_TENANT:
      return { ...state, loggedTenant: action.payload };
    case ActionTypes.SET_TOGGLING_TENANT:
      return { ...state, togglingTenant: action.payload };
    case ActionTypes.SET_ACCESS_RIGHTS:
      const { hasAccess, hasSuperAccess } = action.payload;
      return { ...state, hasAccess, hasSuperAccess };
    case ActionTypes.SET_DATE_FILTER:
      return { ...state, Fromdate: action.payload.Fromdate, ThroughDate: action.payload.ThroughDate };
    case ActionTypes.SET_REFERENCE_NO_FILTER:
      return { ...state, ReferencenoFilterSelection: action.payload };
    case ActionTypes.SET_FILTER_SECTION:
      return { ...state, FilterSection: action.payload };
    case ActionTypes.SET_DISABLE_DATE:
      return { ...state, Disabledate: action.payload };
    case ActionTypes.SET_SERVICE_GRID_DATA:
      return { ...state, serviceGrid: { ...state.serviceGrid, data: action.payload } };
    case ActionTypes.SET_VALIDATE_ERROR:
      return { ...state, ValidateError: action.payload };
    case ActionTypes.SET_FILTER_REFERENCE_NO_SECTION:
      return { ...state, FilterReferenceNoSection: action.payload };
    case ActionTypes.SET_REFERENCE_NO:
      return { ...state, ReferenceNo: action.payload };
    case ActionTypes.SET_BUSY_REF:
      return { ...state, BusyRef: action.payload };
    case ActionTypes.SET_DISABLE_REFERENCE_NO:
      return { ...state, DisableReferenceNo: action.payload };
    case ActionTypes.SET_SHOW_REF_NUM:
      return { ...state, showrefnum: action.payload };
    case ActionTypes.SET_SHOW_DATES:
      return { ...state, showdates: action.payload };
    case ActionTypes.SET_TENANT:
      return { ...state, Tenant: action.payload };
    default:
      return state;
  }
}

export default reportingReducer;