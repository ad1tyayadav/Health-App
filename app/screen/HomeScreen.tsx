import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

export default function HomeScreen({ navigation }: Props) {
  return (
    <View style={styles.screenContainer}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Welcome to Walk Tracker App</Text>
      </View>

      {/* Centered Image */}
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: 'https://images.pexels.com/photos/5407206/pexels-photo-5407206.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          }}
          style={styles.image}
        />
      </View>

      <Text style={styles.centerText}>
        This app helps you track your walking distance and monitor your health.
      </Text>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Registration')}>
        <Text style={styles.buttonText}>Start Test</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  // Screen Container
  screenContainer: {
    flex: 1,
    backgroundColor: '#f8f9fa', // Light background color
    padding: 20,
    alignItems: 'center', // Center content horizontally
  },

  // Header Styles
  header: {
    backgroundColor: '#007bff',
    paddingVertical: 20,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    alignItems: 'center',
    width: '100%', // Ensure the header takes full width
    marginBottom: 20,
  },
  headerText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },

  // Image Container to Center Image
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 30,
  },

  // Image Styling
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },

  // Centered Text
  centerText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#333',
    marginBottom: 30,
  },

  // Button Styling
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },

  // Button Hover and Disabled Styling are not applicable in React Native
});
