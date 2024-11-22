import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack'; // Import correct typing from react-navigation

import { RootStackParamList } from '../types'; // Import the RootStackParamList

type PostTestScreenProps = StackScreenProps<RootStackParamList, 'PostTest'>; // Typing the props

const PostTestScreen: React.FC<PostTestScreenProps> = ({ route }) => {
  const { distanceWalked } = route.params; // Correctly accessing the params from route

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Post-Test Results</Text>
      <Text style={styles.resultText}>Distance Walked: {distanceWalked} meters</Text>
      <Text style={styles.adviceText}>Great job! Keep walking to improve your health.</Text>
    </View>
  );
};

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

export default PostTestScreen;
