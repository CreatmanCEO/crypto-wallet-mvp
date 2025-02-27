// Initial Screen
export { SplashScreen } from './auth/SplashScreen';

// Main Screen
export { WalletScreen } from './main/WalletScreen';

// Временные заглушки для остальных экранов
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    color: '#666',
  },
});

const createTempScreen = (name: string) => {
  const TempScreen = () => {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Section under development</Text>
      </View>
    );
  };
  TempScreen.displayName = name;
  return TempScreen;
};

// Tab Screens
export const MarketScreen = createTempScreen('Market');
export const NewsScreen = createTempScreen('News');
export const SettingsScreen = createTempScreen('Settings');

// Modal Screens
export const SendScreen = createTempScreen('Send');
export const ReceiveScreen = createTempScreen('Receive');
export const TransactionsScreen = createTempScreen('Transactions');
export const SecurityScreen = createTempScreen('Security');
export const CurrencyScreen = createTempScreen('Currency');
export const NetworkSettingsScreen = createTempScreen('Network Settings'); 