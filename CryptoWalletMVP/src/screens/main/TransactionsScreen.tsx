import React, { useState } from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '../../shared/theme/ThemeProvider';
import { Typography } from '../../shared/components/Typography';
import { Transaction } from '../../features/wallet/components/TransactionList';
import { NavigationProp } from '@react-navigation/native';
import { RootStackParamList, Screens } from '../../navigation/types';

interface TransactionsScreenProps {
  navigation: NavigationProp<RootStackParamList>;
}

export const TransactionsScreen: React.FC<TransactionsScreenProps> = ({ navigation }) => {
  const { theme } = useTheme();

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
    {
      id: '4',
      type: 'receive',
      amount: 1.5,
      symbol: 'BTC',
      date: '01.05.2023',
      status: 'completed',
      address: '0x789...123',
    },
    {
      id: '5',
      type: 'stake',
      amount: 0.5,
      symbol: 'ETH',
      date: '27.04.2023',
      status: 'pending',
      address: 'Stake ETH',
    },
  ]);

  const handlePressTransaction = (transaction: Transaction) => {
    navigation.navigate(Screens.TransactionDetails, { transactionId: transaction.id });
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },
    header: {
      padding: 16,
      borderBottomWidth: 1,
      borderBottomColor: theme.colors.border,
    },
    listContainer: {
      flex: 1,
      paddingHorizontal: 16,
    },
    transactionItem: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingVertical: 12,
      borderBottomWidth: 1,
      borderBottomColor: theme.colors.border,
    },
    typeIconContainer: {
      width: 40,
      height: 40,
      borderRadius: 20,
      backgroundColor: theme.colors.backgroundGray,
      justifyContent: 'center',
      alignItems: 'center',
    },
    detailsContainer: {
      flex: 1,
      marginLeft: 12,
    },
  });

  const renderTransactionItem = ({ item }: { item: Transaction }) => {
    return (
      <View style={styles.transactionItem} onTouchEnd={() => handlePressTransaction(item)}>
        <View style={styles.typeIconContainer}>
          {/* Иконка будет добавлена позже */}
        </View>
        <View style={styles.detailsContainer}>
          <Typography variant="bodyText" color={theme.colors.white}>
            <Text>{item.type.charAt(0).toUpperCase() + item.type.slice(1)}</Text>
          </Typography>
          <Typography variant="smallText" color={theme.colors.graySmallText}>
            <Text>{item.date}</Text>
          </Typography>
        </View>
        <Typography variant="bodyText" color={item.type === 'receive' ? theme.colors.green : theme.colors.red}>
          <Text>{item.type === 'receive' ? '+' : '-'}{item.amount} {item.symbol}</Text>
        </Typography>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Typography variant="h2" color={theme.colors.white}>
          <Text>Транзакции</Text>
        </Typography>
      </View>
      <View style={styles.listContainer}>
        <FlatList
          data={transactions}
          keyExtractor={item => item.id}
          renderItem={renderTransactionItem}
        />
      </View>
    </SafeAreaView>
  );
};
