import { combineReducers } from '@reduxjs/toolkit';
import cartReducer from './cartSlice'; // Import your cart slice or any other slices/reducers
import itemReducer from './itemSlice';
const rootReducer = combineReducers({
  cart: cartReducer,
  item: itemReducer
  // Add other reducers here if you have more slices
  // Example: otherReducer: otherReducerFunction
});

export default rootReducer;
