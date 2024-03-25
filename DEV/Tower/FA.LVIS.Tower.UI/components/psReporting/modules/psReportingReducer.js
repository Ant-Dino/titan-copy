// Import action types
// import { ACTION_TYPE_1, ACTION_TYPE_2 } from './actions';

const initialState = {
  // Define your initial state here
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    // case ACTION_TYPE_1:
    //   return {
    //     ...state,
    //     // Modify state based on action
    //   };
    // case ACTION_TYPE_2:
    //   return {
    //     ...state,
    //     // Modify state based on action
    //   };
    default:
      return state;
  }
}

export default rootReducer;