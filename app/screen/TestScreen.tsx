import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types';

type TestScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Test'>;

type Props = {
  navigation: TestScreenNavigationProp;
};

export default function TestScreen({ navigation }: Props) {
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [distanceWalked, setDistanceWalked] = useState('');

  const startTest = () => {
    // Logic for starting the timer or test would go here.
    // For now, we'll simulate it with a placeholder message.
    alert('Test Started! Track your walk distance.');
  };

  const endTest = () => {
    // Simulate ending the test
    setTimeElapsed(360); // Simulating 6 minutes (360 seconds)
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Walking Test</Text>
      <Text style={styles.timer}>Time Elapsed: {timeElapsed} seconds</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Distance Walked (meters)"
        value={distanceWalked}
        onChangeText={setDistanceWalked}
        keyboardType="numeric"
      />
      <Button title="Start Test" onPress={startTest} />
      <Button title="End Test" onPress={endTest} />
      <Button
        title="Go to Post-Test"
        onPress={() => navigation.navigate('PostTest', { distanceWalked })}
        disabled={!distanceWalked}
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
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    width: '80%',
    marginBottom: 20,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
});
