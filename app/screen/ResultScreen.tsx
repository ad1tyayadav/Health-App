import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../types';

type ResultScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Result'>;
type ResultScreenRouteProp = RouteProp<RootStackParamList, 'Result'>;

type Props = {
  navigation: ResultScreenNavigationProp;
  route: ResultScreenRouteProp;
};

export default function ResultScreen({ navigation, route }: Props) {
  const { distance } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Test Results</Text>
      <Text style={styles.resultText}>Distance Walked: {distance} meters</Text>
      <Text style={styles.adviceText}>Great job! Keep walking to improve your health.</Text>
      <Button title="Go Home" onPress={() => navigation.navigate('Home')} />
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
