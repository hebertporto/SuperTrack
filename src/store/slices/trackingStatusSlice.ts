import { createSlice } from '@reduxjs/toolkit';

interface TrackingStatusState {
  status: boolean;
  manualStatus: boolean;
}

const initialState: TrackingStatusState = {
  status: false, // Initially, tracking is off
  manualStatus: false,
};

export const trackingStatusSlice = createSlice({
  name: 'trackingStatus',
  initialState,
  reducers: {
    toggleTracking: state => {
      state.status = !state.status;
    },
    setManualStatus: (state, action) => {
      state.manualStatus = action.payload;
    },
  },
});

export const { toggleTracking, setManualStatus } = trackingStatusSlice.actions;
export default trackingStatusSlice.reducer;
