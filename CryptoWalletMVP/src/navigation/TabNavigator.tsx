import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Screens, TabParamList } from './types';
import { WalletScreen, MarketScreen, NewsScreen, SettingsScreen } from '../screens';
import { useTheme } from '../shared/theme/ThemeProvider';
import { WalletIcon } from '../shared/components/icons/WalletIcon';
import { MarketIcon } from '../shared/components/icons/MarketIcon';
import { NewsIcon } from '../shared/components/icons/NewsIcon';
import { SettingsIcon } from '../shared/components/icons/SettingsIcon';

const Tab = createBottomTabNavigator<TabParamList>();

export const TabNavigator: React.FC = () => {
  const { theme } = useTheme();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: theme.colors.background,
          borderTopColor: theme.colors.border,
        },
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.text,
      }}>
      <Tab.Screen
        name={Screens.Wallet}
        component={WalletScreen}
        options={{
          tabBarIcon: ({ color, size }) => <WalletIcon color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name={Screens.Market}
        component={MarketScreen}
        options={{
          tabBarIcon: ({ color, size }) => <MarketIcon color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name={Screens.News}
        component={NewsScreen}
        options={{
          tabBarIcon: ({ color, size }) => <NewsIcon color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name={Screens.Settings}
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ color, size }) => <SettingsIcon color={color} size={size} />,
        }}
      />
    </Tab.Navigator>
  );
}; 