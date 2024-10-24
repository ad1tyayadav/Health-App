import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types';

type PreTestScreenNavigationProp = StackNavigationProp<RootStackParamList, 'PreTest'>;

type Props = {
  navigation: PreTestScreenNavigationProp;
};

export default function PreTestScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Pre-Test</Text>
      <Text style={styles.instructions}>Prepare for the test by following these instructions:</Text>
      <Text style={styles.dummyData}>1. Warm-up for at least 5 minutes.</Text>
      <Text style={styles.dummyData}>2. Ensure you have proper footwear.</Text>
      <Button title="Start Test" onPress={() => navigation.navigate('Test')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#BFDBFE',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  instructions: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
    marginVertical: 10,
  },
  dummyData: {
    fontSize: 14,
    color: '#555',
  },
});
