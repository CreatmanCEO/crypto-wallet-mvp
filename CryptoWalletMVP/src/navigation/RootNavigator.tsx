import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Screens, RootStackParamList } from './types';
import { TabNavigator } from './TabNavigator';
import {
  SplashScreen,
  SendScreen,
  ReceiveScreen,
  TransactionsScreen,
  SecurityScreen,
  CurrencyScreen,
  NetworkSettingsScreen,
} from '../screens';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const RootNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={Screens.Splash}
        screenOptions={{
          headerShown: false,
          presentation: 'modal',
        }}>
        {/* Initial Screen */}
        <Stack.Screen
          name={Screens.Splash}
          component={SplashScreen}
          options={{
            presentation: 'card',
          }}
        />

        {/* Tab Navigator */}
        <Stack.Screen name="TabNavigator" component={TabNavigator} />

        {/* Modal Screens */}
        <Stack.Screen name={Screens.Send} component={SendScreen} />
        <Stack.Screen name={Screens.Receive} component={ReceiveScreen} />
        <Stack.Screen name={Screens.Transactions} component={TransactionsScreen} />
        <Stack.Screen name={Screens.Security} component={SecurityScreen} />
        <Stack.Screen name={Screens.Currency} component={CurrencyScreen} />
        <Stack.Screen name={Screens.NetworkSettings} component={NetworkSettingsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
