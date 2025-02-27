import { NavigationProp, RouteProp } from '@react-navigation/native';

export enum Screens {
  // Initial Screen
  Splash = 'Splash',

  // Tab Screens
  Wallet = 'Wallet',
  Market = 'Market',
  News = 'News',
  Settings = 'Settings',

  // Modal Screens
  Send = 'Send',
  Receive = 'Receive',
  Transactions = 'Transactions',
  Security = 'Security',
  Currency = 'Currency',
  NetworkSettings = 'NetworkSettings',
  
  // Auth Screens
  CreateWallet = 'CreateWallet',
  ImportWallet = 'ImportWallet',

  // New Screens
  SendScreen = 'SendScreen',
  ReceiveScreen = 'ReceiveScreen',
  SwapScreen = 'SwapScreen',
  StakeScreen = 'StakeScreen',
  BackupScreen = 'BackupScreen',
  TransactionDetails = 'TransactionDetails',
  TransactionsScreen = 'TransactionsScreen',
  WalletDetails = 'WalletDetails',
  TabNavigator = 'TabNavigator',
  Swap = 'Swap',
  Stake = 'Stake',
  Backup = 'Backup',
}

export type TabParamList = {
  [Screens.Wallet]: undefined;
  [Screens.Transactions]: undefined;
  [Screens.Swap]: undefined;
  [Screens.Stake]: undefined;
  [Screens.Settings]: undefined;
};

export type RootStackParamList = {
  [Screens.Splash]: undefined;
  [Screens.TabNavigator]: undefined;
  [Screens.Send]: { walletId?: string; amount?: string; token?: string };
  [Screens.Receive]: { walletId?: string; token?: string };
  [Screens.Transactions]: undefined;
  [Screens.Security]: undefined;
  [Screens.Currency]: undefined;
  [Screens.NetworkSettings]: undefined;
  [Screens.CreateWallet]: undefined;
  [Screens.ImportWallet]: undefined;
  // New screens params
  [Screens.SendScreen]: undefined;
  [Screens.ReceiveScreen]: undefined;
  [Screens.SwapScreen]: undefined;
  [Screens.StakeScreen]: undefined;
  [Screens.BackupScreen]: undefined;
  [Screens.TransactionDetails]: { transactionId: string };
  [Screens.TransactionsScreen]: undefined;
  [Screens.WalletDetails]: { walletId: string };
  [Screens.Backup]: undefined;
};

export type RootStackScreenProps<T extends keyof RootStackParamList> = {
  navigation: NavigationProp<RootStackParamList, T>;
  route: RouteProp<RootStackParamList, T>;
};

// Extend React Navigation types
declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
