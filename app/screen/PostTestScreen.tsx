import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type Props = {
  route: { params: { distanceWalked: number } };
};

export default function PostTestScreen({ route }: Props) {
  const { distanceWalked } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Post-Test Results</Text>
      <Text style={styles.resultText}>Distance Walked: {distanceWalked} meters</Text>
      <Text style={styles.adviceText}>Great job! Keep walking to improve your health.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E0F7FA',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 20,
  },
  resultText: {
    fontSize: 20,
    marginBottom: 20,
  },
  adviceText: {
    fontSize: 18,
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
  },
});
