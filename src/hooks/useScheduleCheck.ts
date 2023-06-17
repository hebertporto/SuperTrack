// src/store/hooks/useScheduleCheck.ts

import { useEffect } from 'react';
import { useTrackingStatus } from '../store/hooks/useTrackingStatus';
import { useUserSchedule } from '../store/hooks/useUserSchedule';

export function useScheduleCheck(interval: number = 30000) {
  const { toggleTrackingStatus } = useTrackingStatus();
  const { userSchedule } = useUserSchedule();

  useEffect(() => {
    function checkSchedule() {
      const now = new Date();
      const currentHour = now.getHours();

      // If current time is outside of schedule, toggle tracking off
      if (
        currentHour < userSchedule.startHour ||
        currentHour >= userSchedule.endHour
      ) {
        toggleTrackingStatus();
      }
    }

    // Run the check immediately when the app loads
    checkSchedule();

    // And then every interval ms
    const id = setInterval(checkSchedule, interval);

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(id);
  }, [interval, toggleTrackingStatus, userSchedule]); // Rerun if these dependencies change
}
