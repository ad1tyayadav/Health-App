import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types';

type RegistrationScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Registration'>;

type Props = {
  navigation: RegistrationScreenNavigationProp;
};

export default function RegistrationScreen({ navigation }: Props) {
  const [name, setName] = useState<string>('');
  const [age, setAge] = useState<string>('');
  const [email, setEmail] = useState<string>('');

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>User Registration</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Age"
        value={age}
        onChangeText={setAge}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      <Button title="Go to Pre-Test" onPress={() => navigation.navigate('PreTest')} />
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
