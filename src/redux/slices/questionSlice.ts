import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

// Define a type for the slice state
interface questionState {
  value: number;
}

// Define the initial state using that type
const initialState: questionState = {
  value: 0,
};

export const questionSlice = createSlice({
  name: 'question',
  initialState,
  reducers: {
    increment: (state) => {},
    decrement: (state) => {},
    incrementByAmount: (state, action: PayloadAction<number>) => {},
  },
});

export const { increment, decrement, incrementByAmount } = questionSlice.actions;

export default questionSlice.reducer;
