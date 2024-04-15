import { configureStore } from '@reduxjs/toolkit';
import toneAnalysisReducer from './slices/toneAnalysisSlice';
import tabReducer from './slices/tabSlice';
import getNewBlogReducer from './slices/getNewBlogSlice';

const store = configureStore({
  reducer: {
    toneAnalysis: toneAnalysisReducer,
    getNewBlog : getNewBlogReducer,
    tab: tabReducer,
  },
});

export default store;