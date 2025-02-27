import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Экраны основной навигации
import { WalletScreen } from '../screens/main/WalletScreen';
import { TransactionsScreen } from '../screens/main/TransactionsScreen';
import { SwapScreen } from '../screens/main/SwapScreen';
import { StakeScreen } from '../screens/main/StakeScreen';
import { SettingsScreen } from '../screens/main/SettingsScreen';

// Модальные экраны
import { SendScreen } from '../screens/modal/SendScreen';
import { ReceiveScreen } from '../screens/modal/ReceiveScreen';
import { BackupScreen } from '../screens/modal/BackupScreen';
import { TransactionDetailsScreen } from '../screens/modal/TransactionDetailsScreen';
import { WalletDetailsScreen } from '../screens/modal/WalletDetailsScreen';

// Типы навигации
import { RootStackParamList, TabParamList, Screens } from './types';

// Провайдеры и утилиты
import { useTheme } from '../shared/theme/ThemeProvider';

// Создаем навигаторы
const Stack = createStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<TabParamList>();

// Табы нижней навигации
const TabNavigator = () => {
  const { theme } = useTheme();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: theme.colors.backgroundGray,
          borderTopColor: theme.colors.border,
          height: 60,
        },
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.graySmallText,
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Wallet"
        component={WalletScreen}
        options={{
          tabBarLabel: 'Кошелек',
          // tabBarIcon рендер будет добавлен позже
        }}
      />
      <Tab.Screen
        name="Transactions"
        component={TransactionsScreen}
        options={{
          tabBarLabel: 'Транзакции',
          // tabBarIcon рендер будет добавлен позже
        }}
      />
      <Tab.Screen
        name="Swap"
        component={SwapScreen}
        options={{
          tabBarLabel: 'Обмен',
          // tabBarIcon рендер будет добавлен позже
        }}
      />
      <Tab.Screen
        name="Stake"
        component={StakeScreen}
        options={{
          tabBarLabel: 'Стейкинг',
          // tabBarIcon рендер будет добавлен позже
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarLabel: 'Настройки',
          // tabBarIcon рендер будет добавлен позже
        }}
      />
    </Tab.Navigator>
  );
};

// Корневой навигатор
export const AppNavigator = () => {
  const { theme } = useTheme();

  const screenOptions = {
    headerStyle: {
      backgroundColor: theme.colors.background,
      shadowColor: 'transparent',
      elevation: 0,
    },
    headerTintColor: theme.colors.white,
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    cardStyle: {
      backgroundColor: theme.colors.background,
    },
  };

  const modalScreenOptions = {
    ...screenOptions,
    headerBackTitleVisible: false,
    presentation: 'modal',
    gestureEnabled: true,
    cardOverlayEnabled: true,
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={screenOptions}
        initialRouteName={Screens.TabNavigator}
      >
        {/* Основной таб-навигатор */}
        <Stack.Screen
          name={Screens.TabNavigator}
          component={TabNavigator}
          options={{ headerShown: false }}
        />

        {/* Модальные экраны */}
        <Stack.Screen
          name={Screens.Send}
          component={SendScreen}
          options={{
            ...modalScreenOptions,
            title: 'Отправить',
          }}
        />
        <Stack.Screen
          name={Screens.Receive}
          component={ReceiveScreen}
          options={{
            ...modalScreenOptions,
            title: 'Получить',
          }}
        />
        <Stack.Screen
          name={Screens.TransactionDetails}
          component={TransactionDetailsScreen}
          options={{
            ...modalScreenOptions,
            title: 'Детали транзакции',
          }}
        />
        <Stack.Screen
          name={Screens.WalletDetails}
          component={WalletDetailsScreen}
          options={{
            ...modalScreenOptions,
            title: 'Детали кошелька',
          }}
        />
        <Stack.Screen
          name={Screens.Backup}
          component={BackupScreen}
          options={{
            ...modalScreenOptions,
            title: 'Резервное копирование',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}; 