import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useTrackingStatus } from '../../../store/hooks/useTrackingStatus';

const TrackingStatus = () => {
  const { trackingStatus, toggleTrackingStatus } = useTrackingStatus();
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.textH1}>Tracking Status</Text>
      </View>
      <TouchableOpacity
        style={[styles.button, trackingStatus ? styles.green : styles.red]}
        onPress={toggleTrackingStatus}>
        <Text style={styles.text}>{trackingStatus ? 'ON' : 'OFF'}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
    marginBottom: 20,
  },
  textH1: {
    fontSize: 20,
  },
  button: {
    width: 100,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  text: {
    fontSize: 20,
    color: '#ffffff',
  },
  green: {
    backgroundColor: 'green',
  },
  red: {
    backgroundColor: 'red',
  },
});

export default TrackingStatus;
