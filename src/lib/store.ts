import { combineReducers, configureStore } from '@reduxjs/toolkit';
import topicsSlice from './features/topics/topicsSlice';

export function makeStore() {
  return configureStore({
    reducer: combineReducers({
      topics: topicsSlice,
    }),
  });
}

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
