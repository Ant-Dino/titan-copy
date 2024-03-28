import { createStore, combineReducers } from 'redux';

// Define initial state
const initialState = {
    activityright: null,
    canmanageteq: false,
    canmanagebeq: false,
    hasAccess: false,
    Fromdate: '',
    ThroughDate: '',
    DateFilterSelection: [
        { 'title': 'Custom', 'value': '1' },
        { 'title': 'Last 90 Days', 'value': '90' },
        { 'title': 'Last 60 Days', 'value': '60' },
        { 'title': 'Last 30 Days', 'value': '30' },
        { 'title': 'Last 15 Days', 'value': '15' },
        { 'title': 'Last 7 Days', 'value': '7' },
        { 'title': '24 hrs', 'value': '24' },
        { 'title': 'Today', 'value': '0' }
    ],
    FilterSection: '7',
    Disabledate: true,
    Busy: false,
    ValidateError: false,
    serviceGridData: [],
};

// Define actions
const SET_ACTIVITY_RIGHT = 'SET_ACTIVITY_RIGHT';
const SET_CAN_MANAGE_TEQ = 'SET_CAN_MANAGE_TEQ';
const SET_CAN_MANAGE_BEQ = 'SET_CAN_MANAGE_BEQ';
const SET_HAS_ACCESS = 'SET_HAS_ACCESS';
const SET_FROM_DATE = 'SET_FROM_DATE';
const SET_THROUGH_DATE = 'SET_THROUGH_DATE';
const SET_FILTER_SECTION = 'SET_FILTER_SECTION';
const SET_DISABLE_DATE = 'SET_DISABLE_DATE';
const SET_BUSY = 'SET_BUSY';
const SET_VALIDATE_ERROR = 'SET_VALIDATE_ERROR';
const SET_SERVICE_GRID_DATA = 'SET_SERVICE_GRID_DATA';

// Define reducers
function rootReducer(state = initialState, action) {
    switch (action.type) {
        case SET_ACTIVITY_RIGHT:
            return { ...state, activityright: action.payload };
        case SET_CAN_MANAGE_TEQ:
            return { ...state, canmanageteq: action.payload };
        case SET_CAN_MANAGE_BEQ:
            return { ...state, canmanagebeq: action.payload };
        case SET_HAS_ACCESS:
            return { ...state, hasAccess: action.payload };
        case SET_FROM_DATE:
            return { ...state, Fromdate: action.payload };
        case SET_THROUGH_DATE:
            return { ...state, ThroughDate: action.payload };
        case SET_FILTER_SECTION:
            return { ...state, FilterSection: action.payload };
        case SET_DISABLE_DATE:
            return { ...state, Disabledate: action.payload };
        case SET_BUSY:
            return { ...state, Busy: action.payload };
        case SET_VALIDATE_ERROR:
            return { ...state, ValidateError: action.payload };
        case SET_SERVICE_GRID_DATA:
            return { ...state, serviceGridData: action.payload };
        default:
            return state;
    }
}

// Combine reducers
const combinedReducers = combineReducers({
    app: rootReducer,
});

// Create store
const store = createStore(combinedReducers);

export default store;