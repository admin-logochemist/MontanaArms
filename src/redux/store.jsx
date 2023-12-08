import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer'; // Create this file or use your own reducer setup

const store = configureStore({
  reducer: rootReducer, 
  
});

export default store;
