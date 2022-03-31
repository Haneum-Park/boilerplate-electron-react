import { combineReducers } from '@reduxjs/toolkit';

import sampleSlice from './slices/sample';

export const rootReducer = combineReducers({
  [sampleSlice.name]: sampleSlice.reducer,
});
