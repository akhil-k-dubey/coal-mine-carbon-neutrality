import { configureStore } from '@reduxjs/toolkit';
import mineReducer from './slices/mineSlice';
import emissionReducer from './slices/emissionSlice';

const store = configureStore({
  reducer: {
    mines: mineReducer,
    emissions: emissionReducer,
  },
});

export default store;
