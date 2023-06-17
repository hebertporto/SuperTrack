import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserScheduleState {
  startHour: number;
  endHour: number;
}

const initialState: UserScheduleState = {
  // Default schedule is 9AM - 5PM
  startHour: 9,
  endHour: 17,
};

export const userScheduleSlice = createSlice({
  name: 'userSchedule',
  initialState,
  reducers: {
    setSchedule: (state, action: PayloadAction<UserScheduleState>) => {
      state.startHour = action.payload.startHour;
      state.endHour = action.payload.endHour;
    },
  },
});

export const { setSchedule } = userScheduleSlice.actions;

export default userScheduleSlice.reducer;
