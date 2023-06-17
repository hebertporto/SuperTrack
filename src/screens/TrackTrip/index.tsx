import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

function TrackTripScreen({ navigation }: { navigation: any }) {
  return (
    <View style={styles.container}>
      <Text>Track Screen</Text>
      <Button title="Go Back" onPress={() => navigation.navigate('Home')} />
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

export { TrackTripScreen };
