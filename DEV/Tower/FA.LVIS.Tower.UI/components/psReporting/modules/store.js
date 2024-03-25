import { createStore, combineReducers } from 'redux';

// Define initial state
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

// Define reducers
const rootReducer = combineReducers({
  reportingState: (state = initialState, action) => {
    switch (action.type) {
      // Define actions here
      default:
        return state;
    }
  },
});

// Create store
const store = createStore(rootReducer);

export default store;