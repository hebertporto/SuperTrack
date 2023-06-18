import React from 'react';
import { Provider } from 'react-redux';
// import { useScheduleCheck } from './src/hooks/useScheduleCheck';
import { Timers } from './src/components/Timers';
import { Navigation } from './src/navigation';
import store from './src/store/store';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <Timers />
      <Navigation />
    </Provider>
  );
}

export default App;
