import { useDispatch, useSelector } from 'react-redux';
import { toggleTracking } from '../slices/trackingStatusSlice';
import { RootState } from '../store';

export function useTrackingStatus() {
  const dispatch = useDispatch();
  const trackingStatus = useSelector(
    (state: RootState) => state.trackingStatus.status,
  );

  const toggleTrackingStatus = () => {
    dispatch(toggleTracking());
  };

  return {
    trackingStatus,
    toggleTrackingStatus,
  };
}
