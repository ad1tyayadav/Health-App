import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import * as Location from 'expo-location';

export default function TestScreen() {
  const [timer, setTimer] = useState(0);
  const [distance, setDistance] = useState(0);
  const [isTracking, setIsTracking] = useState(false);
  const [locationSubscription, setLocationSubscription] =
    useState<Location.LocationSubscription | null>(null);

  useEffect(() => {
    let timerInterval: NodeJS.Timeout | null = null;

    if (isTracking) {
      timerInterval = setInterval(() => setTimer((prev) => prev + 1), 1000);
    }

    return () => {
      if (timerInterval) {
        clearInterval(timerInterval);
      }
    };
  }, [isTracking]);

  const startTracking = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      alert('Permission to access location was denied');
      return;
    }

    setIsTracking(true);

    const subscription = await Location.watchPositionAsync(
      {
        accuracy: Location.Accuracy.High,
        distanceInterval: 1,
      },
      (location) => {
        const speed = location.coords.speed ?? 0; // Use 0 if speed is null
        setDistance((prevDistance) => prevDistance + speed);
      }
    );

    setLocationSubscription(subscription);
  };


  const stopTracking = () => {
    setIsTracking(false);
    if (locationSubscription) {
      locationSubscription.remove(); // Correctly removes the subscription
      setLocationSubscription(null);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Walking Test</Text>
      <Text style={styles.timer}>Time Elapsed: {timer} seconds</Text>
      <Text style={styles.distance}>Distance Walked: {distance.toFixed(2)} meters</Text>
      <Button title={isTracking ? 'Stop Test' : 'Start Test'} onPress={isTracking ? stopTracking : startTracking} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#BFDBFE',
    paddingHorizontal: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 20,
  },
  timer: {
    fontSize: 18,
    color: '#333',
    marginBottom: 20,
  },
  distance: {
    fontSize: 18,
    color: '#333',
    marginBottom: 20,
  },
});
