import { createStore, combineReducers } from 'redux';

// Define initial state
const initialState = {
  currentUser: null,
  activityRight: null,
  canManageTEQ: false,
  canManageBEQ: false,
  canAccessReq: false,
  hasAccess: false,
  isUser: true,
  hasBEQAccess: false,
  hasTEQAccess: false,
  BEQSummaryList: [],
  TEQSummaryList: [],
  currentUserName: '',
  TEQGraphData: [],
  BEQGraphData: []
};

// Action types
const SET_CURRENT_USER = 'SET_CURRENT_USER';
const SET_ACTIVITY_RIGHT = 'SET_ACTIVITY_RIGHT';
const SET_CAN_MANAGE_TEQ = 'SET_CAN_MANAGE_TEQ';
const SET_CAN_MANAGE_BEQ = 'SET_CAN_MANAGE_BEQ';
const SET_CAN_ACCESS_REQ = 'SET_CAN_ACCESS_REQ';
const SET_HAS_ACCESS = 'SET_HAS_ACCESS';
const SET_IS_USER = 'SET_IS_USER';
const SET_HAS_BEQ_ACCESS = 'SET_HAS_BEQ_ACCESS';
const SET_HAS_TEQ_ACCESS = 'SET_HAS_TEQ_ACCESS';
const SET_BEQ_SUMMARY_LIST = 'SET_BEQ_SUMMARY_LIST';
const SET_TEQ_SUMMARY_LIST = 'SET_TEQ_SUMMARY_LIST';
const SET_CURRENT_USER_NAME = 'SET_CURRENT_USER_NAME';
const SET_TEQ_GRAPH_DATA = 'SET_TEQ_GRAPH_DATA';
const SET_BEQ_GRAPH_DATA = 'SET_BEQ_GRAPH_DATA';

// Reducers
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return { ...state, currentUser: action.payload };
    case SET_ACTIVITY_RIGHT:
      return { ...state, activityRight: action.payload };
    case SET_CAN_MANAGE_TEQ:
      return { ...state, canManageTEQ: action.payload };
    case SET_CAN_MANAGE_BEQ:
      return { ...state, canManageBEQ: action.payload };
    case SET_CAN_ACCESS_REQ:
      return { ...state, canAccessReq: action.payload };
    case SET_HAS_ACCESS:
      return { ...state, hasAccess: action.payload };
    case SET_IS_USER:
      return { ...state, isUser: action.payload };
    case SET_HAS_BEQ_ACCESS:
      return { ...state, hasBEQAccess: action.payload };
    case SET_HAS_TEQ_ACCESS:
      return { ...state, hasTEQAccess: action.payload };
    case SET_BEQ_SUMMARY_LIST:
      return { ...state, BEQSummaryList: action.payload };
    case SET_TEQ_SUMMARY_LIST:
      return { ...state, TEQSummaryList: action.payload };
    case SET_CURRENT_USER_NAME:
      return { ...state, currentUserName: action.payload };
    case SET_TEQ_GRAPH_DATA:
      return { ...state, TEQGraphData: action.payload };
    case SET_BEQ_GRAPH_DATA:
      return { ...state, BEQGraphData: action.payload };
    default:
      return state;
  }
};

// Create store
const store = createStore(
  combineReducers({
    dashboard: rootReducer
  })
);

export default store;