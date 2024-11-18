import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { RouteProp } from '@react-navigation/native';

type RootStackParamList = {
  Result: { distance: number; timeElapsed: number };
  Share: { distance: number; timeElapsed: number }; // Pass data to ShareScreen
};

type ResultScreenRouteProp = RouteProp<RootStackParamList, 'Result'>;

type Props = {
  route: ResultScreenRouteProp;
  navigation: any;
};

export default function ResultScreen({ route, navigation }: Props) {
  const { distance, timeElapsed } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Test Results</Text>
      <Text style={styles.resultText}>Distance Walked: {distance.toFixed(2)} meters</Text>
      <Text style={styles.resultText}>Time Taken: {timeElapsed} seconds</Text>

      {/* Navigate to Share Screen */}
      <Button
        title="Share Results"
        onPress={() => navigation.navigate('Share', { distance, timeElapsed })}
      />
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
