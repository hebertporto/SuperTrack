import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

function ScheduleScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Text>Schedule Screen</Text>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export { ScheduleScreen };
