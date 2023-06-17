import { createSlice } from '@reduxjs/toolkit';

interface TrackingStatusState {
  status: boolean;
}

const initialState: TrackingStatusState = {
  status: false, // Initially, tracking is off
};

export const trackingStatusSlice = createSlice({
  name: 'trackingStatus',
  initialState,
  reducers: {
    toggleTracking: state => {
      state.status = !state.status;
    },
  },
});

export const { toggleTracking } = trackingStatusSlice.actions;
export default trackingStatusSlice.reducer;
