import { useDispatch, useSelector } from 'react-redux';
import { setSchedule } from '../slices/userScheduleSlice';
import { RootState } from '../store';

export function useUserSchedule() {
  const dispatch = useDispatch();
  const userSchedule = useSelector((state: RootState) => state.userSchedule);

  const setUserSchedule = (schedule: {
    startHour: number;
    endHour: number;
  }) => {
    dispatch(setSchedule(schedule));
  };

  return {
    userSchedule,
    setUserSchedule,
  };
}
