import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, FlatList } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types';

type PostTestScreenNavigationProp = StackNavigationProp<RootStackParamList, 'PostTest'>;

type Props = {
  navigation: PostTestScreenNavigationProp;
};

// Dummy data for results and tips
const tips = [
  "Stay hydrated before your next test.",
  "Try to walk at a steady pace to get accurate results.",
  "Wearing comfortable shoes can improve your walking distance.",
  "Include a warm-up before the test for better performance.",
  "Maintain a balanced diet to improve endurance."
];

const previousResults = [
  { id: '1', date: '10-12-2023', distance: '500 meters' },
  { id: '2', date: '15-12-2023', distance: '530 meters' },
  { id: '3', date: '20-12-2023', distance: '490 meters' },
];

export default function PostTestScreen({ navigation }: Props) {
  const [distance, setDistance] = useState<string>('');

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Post-Test Values</Text>
      <Text style={styles.info}>Enter the distance walked during the test:</Text>
      <TextInput
        style={styles.input}
        placeholder="Distance Walked (meters)"
        value={distance}
        onChangeText={setDistance}
        keyboardType="numeric"
      />

      <Button title="See Results" onPress={() => navigation.navigate('Result', { distance })} />

      <Text style={styles.subheading}>Your Previous Results:</Text>
      <FlatList
        data={previousResults}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Text style={styles.resultItem}>
            {item.date} - {item.distance}
          </Text>
        )}
      />

      <Text style={styles.subheading}>Health Tips:</Text>
      <FlatList
        data={tips}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Text style={styles.tipItem}>
            - {item}
          </Text>
        )}
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
  info: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
    marginVertical: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    width: '80%',
    marginBottom: 20,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  subheading: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
    marginTop: 20,
    marginBottom: 10,
  },
  resultItem: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
  },
  tipItem: {
    fontSize: 16,
    color: '#555',
    marginBottom: 5,
  },
});
