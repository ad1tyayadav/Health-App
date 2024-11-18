import React from 'react';
import { View, Text, Button, StyleSheet, FlatList } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types';

type PreTestScreenNavigationProp = StackNavigationProp<RootStackParamList, 'PreTest'>;

type Props = {
  navigation: PreTestScreenNavigationProp;
};

// Instructions for Pre-Test
const instructions = [
  "Warm-up for at least 5 minutes.",
  "Ensure you have proper footwear.",
  "Stay hydrated before starting.",
  "Avoid heavy meals before the test.",
  "Make sure to track your distance accurately."
];

export default function PreTestScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Pre-Test</Text>
      <Text style={styles.instructions}>Prepare for the test by following these instructions:</Text>

      <FlatList
        data={instructions}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Text style={styles.instructionItem}>- {item}</Text>
        )}
      />

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
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 20,
  },
  instructions: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
    marginVertical: 10,
  },
  instructionItem: {
    fontSize: 14,
    color: '#555',
    marginBottom: 5,
  },
});
