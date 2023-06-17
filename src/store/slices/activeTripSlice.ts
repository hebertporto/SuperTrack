import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ActiveTripState {
  // Define your trip properties here
}

const initialState: ActiveTripState | null = null; // No active trip initially

export const activeTripSlice = createSlice({
  name: 'activeTrip',
  initialState,
  reducers: {
    startTrip: (state, action: PayloadAction<ActiveTripState>) => {
      // Begin a new trip with the provided details
      return action.payload;
    },
    endTrip: () => null,
  },
});

export const { startTrip, endTrip } = activeTripSlice.actions;
export default activeTripSlice.reducer;
