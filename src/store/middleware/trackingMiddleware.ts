import { Middleware } from 'redux';
import { toggleTracking } from '../slices/trackingStatusSlice';
import { setSchedule } from '../slices/userScheduleSlice';

const trackingMiddleware: Middleware =
  ({ dispatch, getState }) =>
  next =>
  action => {
    next(action);

    if (action.type === setSchedule.type) {
      const { startHour, endHour } = getState().userSchedule;
      const currentHour = new Date().getHours();

      if (currentHour >= startHour && currentHour < endHour) {
        dispatch(toggleTracking()); // Turn on tracking if within schedule
      } else {
        dispatch(toggleTracking()); // Turn off tracking if outside of schedule
      }
    }
  };

export default trackingMiddleware;
