import { createStore, combineReducers } from 'redux';

// Define initial state
const initialState = {
  activityright: null,
  canmanageteq: false,
  canmanagebeq: false,
  hasAccess: false,
  hasModifyAccess: false,
  Tenant: null,
};

// Action Types
const SET_ACTIVITY_RIGHT = 'SET_ACTIVITY_RIGHT';
const SET_CAN_MANAGE_TEQ = 'SET_CAN_MANAGE_TEQ';
const SET_CAN_MANAGE_BEQ = 'SET_CAN_MANAGE_BEQ';
const SET_HAS_ACCESS = 'SET_HAS_ACCESS';
const SET_HAS_MODIFY_ACCESS = 'SET_HAS_MODIFY_ACCESS';
const SET_TENANT = 'SET_TENANT';

// Reducers
const activityRightReducer = (state = initialState.activityright, action) => {
  switch (action.type) {
    case SET_ACTIVITY_RIGHT:
      return action.payload;
    default:
      return state;
  }
};

const canManageTeqReducer = (state = initialState.canmanageteq, action) => {
  switch (action.type) {
    case SET_CAN_MANAGE_TEQ:
      return action.payload;
    default:
      return state;
  }
};

const canManageBeqReducer = (state = initialState.canmanagebeq, action) => {
  switch (action.type) {
    case SET_CAN_MANAGE_BEQ:
      return action.payload;
    default:
      return state;
  }
};

const hasAccessReducer = (state = initialState.hasAccess, action) => {
  switch (action.type) {
    case SET_HAS_ACCESS:
      return action.payload;
    default:
      return state;
  }
};

const hasModifyAccessReducer = (state = initialState.hasModifyAccess, action) => {
  switch (action.type) {
    case SET_HAS_MODIFY_ACCESS:
      return action.payload;
    default:
      return state;
  }
};

const tenantReducer = (state = initialState.Tenant, action) => {
  switch (action.type) {
    case SET_TENANT:
      return action.payload;
    default:
      return state;
  }
};

// Combine Reducers
const rootReducer = combineReducers({
  activityright: activityRightReducer,
  canmanageteq: canManageTeqReducer,
  canmanagebeq: canManageBeqReducer,
  hasAccess: hasAccessReducer,
  hasModifyAccess: hasModifyAccessReducer,
  Tenant: tenantReducer,
});

// Create Store
const store = createStore(rootReducer);

export default store;