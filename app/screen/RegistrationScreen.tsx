import React, { useState, useRef } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
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

  const ageInputRef = useRef<TextInput>(null);
  const emailInputRef = useRef<TextInput>(null);

  // Function to validate the form inputs
  const validateForm = () => {
    if (!name || !age || !email) {
      Alert.alert('Error', 'Please fill in all fields.');
      return false;
    }

    if (isNaN(Number(age)) || Number(age) <= 0) {
      Alert.alert('Error', 'Please enter a valid age.');
      ageInputRef.current?.focus();
      return false;
    }

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!email.match(emailPattern)) {
      Alert.alert('Error', 'Please enter a valid email address.');
      emailInputRef.current?.focus();
      return false;
    }

    return true;
  };

  // Handle form submission and navigation
  const handleSubmit = () => {
    if (validateForm()) {
      // Clear input fields after successful validation
      setName('');
      setAge('');
      setEmail('');
      navigation.navigate('PreTest');
    }
  };

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
        ref={ageInputRef}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        ref={emailInputRef}
      />

      <Button title="Go to Pre-Test" onPress={handleSubmit} />
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
