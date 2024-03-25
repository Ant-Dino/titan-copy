// Assuming you're using Redux Toolkit for simplicity
import { configureStore } from '@reduxjs/toolkit';

// Import reducers
// import someReducer from './pathToYourReducer';

export const store = configureStore({
  reducer: {
    // your reducers go here
    // someState: someReducer,
  },
});