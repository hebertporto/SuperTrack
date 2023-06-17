import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { HomeScreen } from '../screens/Home';
import { ScheduleScreen } from '../screens/Schedule';
import { TrackTripScreen } from '../screens/TrackTrip';

const Stack = createNativeStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Schedule" component={ScheduleScreen} />
        <Stack.Screen name="TrackTrip" component={TrackTripScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export { Navigation };
