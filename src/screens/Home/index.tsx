import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import TrackingStatus from './Components/TrackingStatus';

function HomeScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <TrackingStatus />
      <Text>Home Screen</Text>
      <Button
        title="Go to Schedule"
        onPress={() => navigation.navigate('Schedule')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 20,
  },
});

export { HomeScreen };
