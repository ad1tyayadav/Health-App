import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

const instructions = [
  "The test should be performed indoors/outdoors, along a long, flat, straight surface",
  "Wear comfortable clothing",
  "Wear comfortable walking shoes",
  "Use your usual walking aids during the test (cane, walker, etc.)",
  "Do not exercise vigorously or eat a meal within 2 hours before the test",
  "Mark your level of exertion on the modified Borg Scale before starting",
  "Walk as far as possible for 6 minutes. You may slow down, stop, and rest if needed",
  "You may lean against the wall while resting, but resume walking when able",
  "After completing the walk, record your post-test Borg score"
];

export default function HomeScreen({ navigation }: Props) {
  return (
    <View style={styles.screenContainer}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Test Instructions</Text>
      </View>
      
      <ScrollView style={styles.scrollContainer}>
        {instructions.map((instruction, index) => (
          <View key={index} style={styles.instructionItem}>
            <Text style={styles.bulletPoint}>•</Text>
            <Text style={styles.instructionText}>{instruction}</Text>
          </View>
        ))}
      </ScrollView>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Registration')}
        >
          <Text style={styles.buttonText}>I Understand</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    backgroundColor: '#007bff',
    paddingVertical: 20,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    alignItems: 'center',
  },
  headerText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  scrollContainer: {
    flex: 1,
    padding: 20,
  },
  instructionItem: {
    flexDirection: 'row',
    marginBottom: 15,
    paddingRight: 10,
  },
  bulletPoint: {
    fontSize: 18,
    marginRight: 10,
    color: '#007bff',
  },
  instructionText: {
    flex: 1,
    fontSize: 16,
    lineHeight: 24,
    color: '#333',
  },
  buttonContainer: {
    padding: 20,
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});