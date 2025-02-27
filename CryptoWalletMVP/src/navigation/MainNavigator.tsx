import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TabBar } from './components/TabBar';
import { TabParamList, Screens } from './types';
import { WalletScreen, MarketScreen, NewsScreen, SettingsScreen } from '../screens';

const Tab = createBottomTabNavigator<TabParamList>();

export const MainNavigator: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBar={props => <TabBar {...props} />}>
      <Tab.Screen name={Screens.Wallet} component={WalletScreen} />
      <Tab.Screen name={Screens.Market} component={MarketScreen} />
      <Tab.Screen name={Screens.News} component={NewsScreen} />
      <Tab.Screen name={Screens.Settings} component={SettingsScreen} />
    </Tab.Navigator>
  );
};
