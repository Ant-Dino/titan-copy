// File path: components/modules/dashboardReducer.js

const initialState = {
  activityRight: '',
  canManageTEQ: false,
  canManageBEQ: false,
  canManageAccessReq: false,
  hasAccess: false,
  hasBEQAccess: false,
  hasTEQAccess: false,
  BEQSummaryList: [],
  TEQSummaryList: []
};

function dashboardReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_USER_INFO':
      return {
        ...state,
        activityRight: action.payload.activityRight,
        canManageTEQ: action.payload.canManageTEQ,
        canManageBEQ: action.payload.canManageBEQ,
        canManageAccessReq: action.payload.canManageAccessReq,
        hasAccess: action.payload.activityRight === 'Admin' || action.payload.activityRight === 'SuperAdmin',
        hasBEQAccess: action.payload.canManageBEQ,
        hasTEQAccess: action.payload.canManageTEQ
      };
    case 'LOAD_BEQ_SUMMARY':
      return {
        ...state,
        BEQSummaryList: action.payload
      };
    case 'LOAD_TEQ_SUMMARY':
      return {
        ...state,
        TEQSummaryList: action.payload
      };
    default:
      return state;
  }
}

export default dashboardReducer;