import { createStore, combineReducers } from 'redux';

// Define action types
const SET_ACTIVITY_RIGHT = 'SET_ACTIVITY_RIGHT';
const SET_CAN_MANAGE_TEQ = 'SET_CAN_MANAGE_TEQ';
const SET_CAN_MANAGE_BEQ = 'SET_CAN_MANAGE_BEQ';
const SET_HAS_ACCESS = 'SET_HAS_ACCESS';
const SET_HAS_MODIFY_ACCESS = 'SET_HAS_MODIFY_ACCESS';

// Define initial state
const initialState = {
  activityRight: null,
  canManageTEQ: false,
  canManageBEQ: false,
  hasAccess: false,
  hasModifyAccess: false,
};

// Define reducers
const activityRightReducer = (state = initialState.activityRight, action) => {
  switch (action.type) {
    case SET_ACTIVITY_RIGHT:
      return action.payload;
    default:
      return state;
  }
};

const canManageTEQReducer = (state = initialState.canManageTEQ, action) => {
  switch (action.type) {
    case SET_CAN_MANAGE_TEQ:
      return action.payload;
    default:
      return state;
  }
};

const canManageBEQReducer = (state = initialState.canManageBEQ, action) => {
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

// Combine reducers
const rootReducer = combineReducers({
  activityRight: activityRightReducer,
  canManageTEQ: canManageTEQReducer,
  canManageBEQ: canManageBEQReducer,
  hasAccess: hasAccessReducer,
  hasModifyAccess: hasModifyAccessReducer,
});

// Create store
const store = createStore(rootReducer);

export default store;