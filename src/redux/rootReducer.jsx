import { combineReducers } from '@reduxjs/toolkit';
import cartReducer from './cartSlice'; // Import your cart slice or any other slices/reducers

const rootReducer = combineReducers({
  cart: cartReducer,
  // Add other reducers here if you have more slices
  // Example: otherReducer: otherReducerFunction
});

export default rootReducer;
