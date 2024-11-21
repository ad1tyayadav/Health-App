import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet, Alert, Linking, Platform } from 'react-native';
import * as Location from 'expo-location';

export default function TestScreen({ navigation }: { navigation: any }) {
  const [timer, setTimer] = useState(0);
  const [distance, setDistance] = useState(0);
  const [isTracking, setIsTracking] = useState(false);
  const [prevLocation, setPrevLocation] = useState<Location.LocationObject | null>(null);
  const [locationSubscription, setLocationSubscription] = useState<Location.LocationSubscription | null>(null);

  // Timer management
  useEffect(() => {
    let timerInterval: NodeJS.Timeout | null = null;

    if (isTracking) {
      timerInterval = setInterval(() => setTimer((prev) => prev + 1), 1000);
    }

    return () => {
      if (timerInterval) clearInterval(timerInterval);
    };
  }, [isTracking]);

  // Check if location services are enabled
  const checkLocationServices = async () => {
    const isEnabled = await Location.hasServicesEnabledAsync();
    if (!isEnabled) {
      Alert.alert(
        'Enable Location Services',
        'To continue, your device needs to use location services for accurate tracking.',
        [
          { text: 'No Thanks', style: 'cancel' },
          {
            text: 'Turn On',
            onPress: () => {
              if (Platform.OS === 'android') {
                Linking.openSettings(); // Redirect to device settings on Android
              } else {
                Alert.alert('Go to Settings', 'Enable location services in your device settings.');
              }
            },
          },
        ]
      );
      return false;
    }
    return true;
  };

  // Calculate the distance between two locations
  const calculateDistance = (loc1: Location.LocationObject, loc2: Location.LocationObject): number => {
    const R = 6371e3; // Radius of Earth in meters
    const lat1 = (loc1.coords.latitude * Math.PI) / 180;
    const lat2 = (loc2.coords.latitude * Math.PI) / 180;
    const deltaLat = lat2 - lat1;
    const deltaLon = ((loc2.coords.longitude - loc1.coords.longitude) * Math.PI) / 180;

    const a =
      Math.sin(deltaLat / 2) * Math.sin(deltaLat / 2) +
      Math.cos(lat1) * Math.cos(lat2) * Math.sin(deltaLon / 2) * Math.sin(deltaLon / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c; // Distance in meters
  };

  // Start tracking location
  const startTracking = async () => {
    const hasServices = await checkLocationServices();
    if (!hasServices) return;

    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permission Denied', 'Location permission is required to track your walk.');
      return;
    }

    setIsTracking(true);

    const subscription = await Location.watchPositionAsync(
      {
        accuracy: Location.Accuracy.High,
        distanceInterval: 1, // Minimum distance (in meters) for updates
      },
      (location) => {
        if (prevLocation) {
          const dist = calculateDistance(prevLocation, location);
          setDistance((prevDistance) => prevDistance + dist);
        }
        setPrevLocation(location); // Update the previous location
      }
    );

    setLocationSubscription(subscription);
  };

  // Stop tracking location
  const stopTracking = () => {
    setIsTracking(false);
    if (locationSubscription) {
      locationSubscription.remove();
      setLocationSubscription(null);
    }

    navigation.navigate('Result', { distance, timeElapsed: timer });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Walking Test</Text>
      <Text style={styles.timer}>Time Elapsed: {timer} seconds</Text>
      <Text style={styles.distance}>Distance Walked: {distance.toFixed(2)} meters</Text>
      <Button
        title={isTracking ? 'Stop Test' : 'Start Test'}
        onPress={isTracking ? stopTracking : startTracking}
      />
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
