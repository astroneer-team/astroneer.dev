import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type TopicsState = {
  inView: string[];
};

const initialState: TopicsState = {
  inView: [],
};

const topicsSlice = createSlice({
  name: 'topics',
  initialState,
  reducers: {
    attach: (state, action: PayloadAction<string>) => {
      state.inView.push(action.payload);
    },
    detach: (state, action: PayloadAction<string>) => {
      state.inView = state.inView.filter((topic) => topic !== action.payload);
    },
    clear: (state) => {
      state.inView = [];
    },
  },
});

export const { attach, detach, clear } = topicsSlice.actions;
export default topicsSlice.reducer;
