import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setManualStatus, toggleTracking } from '../slices/trackingStatusSlice';
import { RootState } from '../store';

export function useTrackingStatus() {
  const dispatch = useDispatch();
  const trackingState = useSelector((state: RootState) => state.trackingStatus);

  const toggleTrackingStatus = useCallback(() => {
    dispatch(toggleTracking());
  }, [dispatch]);

  const handleSetManualStatus = (status: boolean) => {
    dispatch(setManualStatus(status));
  };

  return {
    trackingState,
    toggleTrackingStatus,
    handleSetManualStatus,
  };
}
