// src/store/store.js
import { configureStore } from '@reduxjs/toolkit';
import movieReducer from '../reducers/movieReducer';

const store = configureStore({
  reducer: movieReducer,
  // You can also configure middleware, devtools, and other options here
});

export default store;
