import React, { useEffect, useState, useRef } from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';
import * as Location from 'expo-location';

// Function to calculate distance between two points using the Haversine formula
function calculateDistance(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const R = 6371e3; // Earth's radius in meters
  const toRadians = (degrees: number) => (degrees * Math.PI) / 180;

  const φ1 = toRadians(lat1);
  const φ2 = toRadians(lat2);
  const Δφ = toRadians(lat2 - lat1);
  const Δλ = toRadians(lon2 - lon1);

  const a =
    Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
    Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return R * c; // Distance in meters
}

export default function TestScreen() {
  const [timer, setTimer] = useState(0);
  const [distance, setDistance] = useState(0);
  const [isTracking, setIsTracking] = useState(false);
  const [locationSubscription, setLocationSubscription] = 
    useState<Location.LocationSubscription | null>(null);

  // Use useRef instead of state for lastLocation to prevent closure issues
  const lastLocationRef = useRef<Location.LocationObject | null>(null);

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
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permission Denied', 'Location permission is required to track your distance.');
        return;
      }

      // Reset everything
      setTimer(0);
      setDistance(0);
      lastLocationRef.current = null;
      setIsTracking(true);

      // Configure location tracking with higher accuracy and smaller interval
      const subscription = await Location.watchPositionAsync(
        {
          accuracy: Location.Accuracy.BestForNavigation,
          timeInterval: 1000, // Update every second
          distanceInterval: 1, // Minimum distance (in meters) between updates
        },
        (location) => {
          if (lastLocationRef.current) {
            const newDistance = calculateDistance(
              lastLocationRef.current.coords.latitude,
              lastLocationRef.current.coords.longitude,
              location.coords.latitude,
              location.coords.longitude
            );

            // Only update distance if it's a reasonable value (to filter out GPS jumps)
            if (newDistance > 0 && newDistance < 100) { // Max 100m per second as a sanity check
              setDistance((prevDistance) => prevDistance + newDistance);
            }
          }
          lastLocationRef.current = location;
        }
      );

      setLocationSubscription(subscription);
    } catch (error) {
      Alert.alert('Error', 'Failed to start location tracking. Please try again.');
      console.error(error);
    }
  };

  const stopTracking = () => {
    setIsTracking(false);
    if (locationSubscription) {
      locationSubscription.remove();
      setLocationSubscription(null);
    }
    lastLocationRef.current = null;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>6-Minute Walk Test</Text>
      <Text style={styles.timer}>Time Elapsed: {timer} seconds</Text>
      <Text style={styles.distance}>Distance Walked: {distance.toFixed(2)} meters</Text>
      <Button
        title={isTracking ? 'Stop Test' : 'Start Test'}
        onPress={isTracking ? stopTracking : startTracking}
        color={isTracking ? '#e94560' : '#28a745'}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f4f8',
    paddingHorizontal: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  timer: {
    fontSize: 18,
    color: '#555',
    marginBottom: 10,
  },
  distance: {
    fontSize: 18,
    color: '#555',
    marginBottom: 20,
  },
});