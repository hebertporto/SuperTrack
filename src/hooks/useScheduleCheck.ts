import { useEffect } from 'react';
import { useTrackingStatus } from '../store/hooks/useTrackingStatus';
import { useUserSchedule } from '../store/hooks/useUserSchedule';

const CHECK_INTERVAL = 30000;

export function useScheduleCheck() {
  const { toggleTrackingStatus, trackingState } = useTrackingStatus();
  const { userSchedule } = useUserSchedule();

  const { status, manualStatus } = trackingState;

  useEffect(() => {
    function checkSchedule() {
      const now = new Date();
      const currentHour = now.getHours();

      const isOutsideSchedule =
        currentHour < userSchedule.startHour &&
        currentHour >= userSchedule.endHour;

      if (isOutsideSchedule && status && !manualStatus) {
        toggleTrackingStatus();
      }
    }

    checkSchedule();

    const id = setInterval(checkSchedule, CHECK_INTERVAL);

    return () => clearInterval(id);
  }, [userSchedule, toggleTrackingStatus, status, manualStatus]);
}
