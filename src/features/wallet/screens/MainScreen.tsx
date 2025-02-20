import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const MainScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Wallet MVP</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1A1A1A',
  },
  text: {
    color: '#FFFFFF',
    fontSize: 24,
  },
});