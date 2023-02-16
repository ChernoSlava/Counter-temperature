import { configureStore } from '@reduxjs/toolkit';
import { CounterSliceReducer, InitialCounter } from './CounterSlice';

export const store = configureStore({
  reducer: CounterSliceReducer,
  preloadedState: InitialCounter,
});
