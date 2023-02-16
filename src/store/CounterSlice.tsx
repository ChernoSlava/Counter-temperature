/* eslint-disable no-param-reassign */
import { CounterStateType } from '@types';
import { createSlice } from '@reduxjs/toolkit';

export const InitialCounter: CounterStateType = {
  value: 0,
};

export const CounterSlice = createSlice({
  name: 'Counter_Temperature',
  initialState: InitialCounter,
  reducers: {
    plus: state => {
      state.value += 1;
    },
    minus: state => {
      state.value -= 1;
    },
  },
});

export const { plus, minus } = CounterSlice.actions;

const { reducer: CounterSliceReducer } = CounterSlice;
export { CounterSliceReducer };
