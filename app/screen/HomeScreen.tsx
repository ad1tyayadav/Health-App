import React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

export default function HomeScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://images.pexels.com/photos/5407206/pexels-photo-5407206.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' }}
        style={styles.image}
      />
      <Text style={styles.heading}>Welcome to Health App</Text>
      <Text style={styles.info}>
        This app helps you track your walking distance and monitor your health.
      </Text>
      <Text style={styles.features}>Features:</Text>
      <Text style={styles.bullet}>- Track your walking distance</Text>
      <Text style={styles.bullet}>- View health tips and exercise routines</Text>
      <Text style={styles.bullet}>- Monitor your health progress over time</Text>
      <Button title="Start Test" onPress={() => navigation.navigate('Registration')} />
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
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
    borderRadius: 100,
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 20,
  },
  info: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
  },
  features: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
  },
  bullet: {
    fontSize: 16,
    color: '#555',
    marginBottom: 5,
  },
});
