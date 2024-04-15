import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  toneAnalysis: null,
};

const toneAnalysisSlice = createSlice({
  name: 'toneAnalysis',
  initialState,
  reducers: {
    setToneAnalysis: (state, action) => {
      state.toneAnalysis = action.payload;
    },
  },
});

export const { setToneAnalysis } = toneAnalysisSlice.actions;
export default toneAnalysisSlice.reducer;