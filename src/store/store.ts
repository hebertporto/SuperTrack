import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { loggerMiddleware } from './middleware/loggerMiddleware';
import trackingMiddleware from './middleware/trackingMiddleware';
import activeTripReducer from './slices/activeTripSlice';
import trackingStatusReducer from './slices/trackingStatusSlice';
import userScheduleReducer from './slices/userScheduleSlice';

const rootReducer = combineReducers({
  trackingStatus: trackingStatusReducer,
  userSchedule: userScheduleReducer,
  activeTrip: activeTripReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(trackingMiddleware, loggerMiddleware),
});

export type RootState = ReturnType<typeof rootReducer>;

export default store;
