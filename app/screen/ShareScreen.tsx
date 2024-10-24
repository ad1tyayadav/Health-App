import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types'; 

type ShareScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Share'>;

type Props = {
  navigation: ShareScreenNavigationProp;
};

export default function ShareScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Share Your Results</Text>
      <Button title="Back to Home" onPress={() => navigation.navigate('Home')} />
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
});
