import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';
import * as Sharing from 'expo-sharing';  // Ensure you have imported expo-sharing

export default function ShareScreen() {
  const [isSharingAvailable, setIsSharingAvailable] = useState(false);

  // Use useEffect to check if sharing is available when the component is mounted
  useEffect(() => {
    const checkSharingAvailability = async () => {
      const available = await Sharing.isAvailableAsync();
      setIsSharingAvailable(available);
    };

    checkSharingAvailability();
  }, []);

  const handleShare = async () => {
    try {
      if (isSharingAvailable) {
        // Add sharing functionality here, for example:
        await Sharing.shareAsync('https://example.com');  // Share a link
      } else {
        Alert.alert('Sharing not available', 'Sharing is not available on this device.');
      }
    } catch (error) {
      Alert.alert('Error', 'An error occurred while sharing.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Share Your Results</Text>
      <Button title="Share" onPress={handleShare} />
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
