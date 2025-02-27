import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '../../shared/theme/ThemeProvider';
import { Typography } from '../../shared/components/Typography';
import { WalletBalanceCard } from '../../features/wallet/components/WalletBalanceCard';
import { QuickActions } from '../../features/wallet/components/QuickActions';
import { BackupBanner } from '../../features/wallet/components/BackupBanner';
import { TransactionList, Transaction } from '../../features/wallet/components/TransactionList';
import { Wallet } from '../../features/wallet/components/WalletDropdown';
import { NavigationProp } from '@react-navigation/native';
import { RootStackParamList, Screens } from '../../navigation/types';

type WalletScreenNavigationProp = NavigationProp<RootStackParamList>;

interface WalletScreenProps {
  navigation: WalletScreenNavigationProp;
}

export const WalletScreen: React.FC<WalletScreenProps> = ({ navigation }) => {
  const { theme } = useTheme();

  // Моковые данные для кошельков
  const [wallets] = useState<Wallet[]>([
    { id: '1', symbol: 'AVIA', name: 'Aviacoin' },
    { id: '2', symbol: 'BTC', name: 'Bitcoin' },
    { id: '3', symbol: 'ETH', name: 'Ethereum' },
    { id: '4', symbol: 'USDT', name: 'Tether' },
    { id: '5', symbol: 'TRX', name: 'Tron' },
  ]);
  
  const [selectedWallet, setSelectedWallet] = useState<Wallet>(wallets[0]);
  const [balance] = useState<number>(1250.75);
  const [balanceUSD] = useState<number>(1250.75);
  
  // Моковые данные для транзакций
  const [transactions] = useState<Transaction[]>([
    {
      id: '1',
      type: 'receive',
      amount: 0.25,
      symbol: 'AVIA',
      date: '12.05.2023',
      status: 'completed',
      address: '0x123...789',
    },
    {
      id: '2',
      type: 'send',
      amount: 0.15,
      symbol: 'AVIA',
      date: '10.05.2023',
      status: 'completed',
      address: '0x456...321',
    },
    {
      id: '3',
      type: 'swap',
      amount: 0.1,
      symbol: 'AVIA',
      date: '05.05.2023',
      status: 'pending',
      address: 'Swap AVIA to BTC',
    },
  ]);

  // Обработчики событий
  const handleSelectWallet = (wallet: Wallet) => {
    setSelectedWallet(wallet);
    // В реальном приложении здесь должна быть логика для получения баланса выбранного кошелька
  };

  const handlePressSend = () => {
    navigation.navigate(Screens.SendScreen);
  };

  const handlePressReceive = () => {
    navigation.navigate(Screens.ReceiveScreen);
  };

  const handlePressSwap = () => {
    navigation.navigate(Screens.SwapScreen);
  };

  const handlePressStake = () => {
    navigation.navigate(Screens.StakeScreen);
  };

  const handlePressBackup = () => {
    navigation.navigate(Screens.BackupScreen);
  };

  const handlePressTransaction = (transaction: Transaction) => {
    navigation.navigate(Screens.TransactionDetails, { transactionId: transaction.id });
  };

  const handlePressViewAll = () => {
    navigation.navigate(Screens.TransactionsScreen);
  };

  const handlePressWalletDetails = () => {
    navigation.navigate(Screens.WalletDetails, { walletId: selectedWallet.id });
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },
    scrollView: {
      flex: 1,
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 16,
      paddingTop: 16,
      paddingBottom: 8,
    },
    avatar: {
      width: 40,
      height: 40,
      borderRadius: 20,
      backgroundColor: 'rgba(235, 184, 19, 0.2)',
    },
    greeting: {
      flexDirection: 'column',
      flex: 1,
      marginLeft: 12,
    },
  });

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.avatar} />
        <View style={styles.greeting}>
          <Typography variant="smallText" color={theme.colors.graySmallText}>
            <Text>Добро пожаловать</Text>
          </Typography>
          <Typography variant="h4" color={theme.colors.white}>
            <Text>Пользователь</Text>
          </Typography>
        </View>
        <TouchableOpacity>
          <View
            style={{
              width: 24,
              height: 24,
              backgroundColor: 'rgba(235, 184, 19, 0.2)',
              borderRadius: 12,
            }}
          />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.scrollView}>
        <WalletBalanceCard
          balance={balance}
          balanceUSD={balanceUSD}
          selectedWallet={selectedWallet}
          wallets={wallets}
          onSelectWallet={handleSelectWallet}
          onPressDetails={handlePressWalletDetails}
        />

        <QuickActions
          onPressSend={handlePressSend}
          onPressReceive={handlePressReceive}
          onPressSwap={handlePressSwap}
          onPressStake={handlePressStake}
        />

        <BackupBanner onPressBackup={handlePressBackup} />

        <TransactionList
          transactions={transactions}
          onPressTransaction={handlePressTransaction}
          onPressViewAll={handlePressViewAll}
        />
      </ScrollView>
    </SafeAreaView>
  );
};
