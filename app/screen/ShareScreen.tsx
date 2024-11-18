import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { RouteProp } from '@react-navigation/native';

type RootStackParamList = {
  Share: { distance: number; timeElapsed: number };
  Home: undefined;
};

type ShareScreenRouteProp = RouteProp<RootStackParamList, 'Share'>;

type Props = {
  route: ShareScreenRouteProp;
  navigation: any;
};

export default function ShareScreen({ route, navigation }: Props) {
  const { distance, timeElapsed } = route.params;

  // Share logic (You can implement platform-specific sharing functionality)
  const shareResults = () => {
    alert(`Sharing: Distance - ${distance}m, Time - ${timeElapsed}s`);
    // Add actual share logic here (e.g., using `Share` from `react-native`)
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Share Your Results</Text>
      <Text style={styles.resultText}>Distance Walked: {distance.toFixed(2)} meters</Text>
      <Text style={styles.resultText}>Time Taken: {timeElapsed} seconds</Text>

      <Button title="Share Results" onPress={shareResults} />
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  resultText: {
    fontSize: 18,
    marginBottom: 10,
  },
});
