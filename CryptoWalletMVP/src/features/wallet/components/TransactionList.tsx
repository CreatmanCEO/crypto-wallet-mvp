import React from 'react';
import { View, StyleSheet, FlatList, TouchableOpacity, Text } from 'react-native';
import { useTheme } from '@/shared/theme/ThemeProvider';
import { Typography } from '@/shared/components/Typography';

export interface Transaction {
  id: string;
  type: 'send' | 'receive' | 'swap' | 'stake';
  amount: number;
  symbol: string;
  date: string;
  status: 'completed' | 'pending' | 'failed';
  address: string;
}

interface TransactionListProps {
  transactions: Transaction[];
  onPressTransaction: (transaction: Transaction) => void;
  onPressViewAll: () => void;
}

const TransactionItem: React.FC<{
  transaction: Transaction;
  onPress: () => void;
}> = ({ transaction, onPress }) => {
  const { theme } = useTheme();

  const getStatusColor = (status: Transaction['status']) => {
    switch (status) {
      case 'completed':
        return theme.colors.green;
      case 'pending':
        return theme.colors.yellow;
      case 'failed':
        return theme.colors.red;
      default:
        return theme.colors.graySmallText;
    }
  };

  const getTypeLabel = (type: Transaction['type']) => {
    switch (type) {
      case 'send':
        return 'Отправлено';
      case 'receive':
        return 'Получено';
      case 'swap':
        return 'Обмен';
      case 'stake':
        return 'Стейкинг';
      default:
        return '';
    }
  };

  const getAmountPrefix = (type: Transaction['type']) => {
    return type === 'send' ? '-' : type === 'receive' ? '+' : '';
  };

  const styles = StyleSheet.create({
    item: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 12,
      borderBottomWidth: 1,
      borderBottomColor: 'rgba(255, 255, 255, 0.05)',
    },
    icon: {
      width: 40,
      height: 40,
      borderRadius: 20,
      backgroundColor: 'rgba(235, 184, 19, 0.1)',
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: 12,
    },
    content: {
      flex: 1,
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    addressText: {
      opacity: 0.6,
    },
  });

  return (
    <TouchableOpacity style={styles.item} onPress={onPress}>
      <View style={styles.icon} />
      <View style={styles.content}>
        <View style={styles.row}>
          <Typography variant="bodyText" color={theme.colors.white}>
            <Text>{getTypeLabel(transaction.type)}</Text>
          </Typography>
          <Typography variant="bodyText" color={getStatusColor(transaction.status)}>
            <Text>{`${getAmountPrefix(transaction.type)}${transaction.amount} ${transaction.symbol}`}</Text>
          </Typography>
        </View>
        <View style={styles.row}>
          <Typography variant="smallText" color={theme.colors.graySmallText} style={styles.addressText}>
            <Text>{transaction.address}</Text>
          </Typography>
          <Typography variant="smallText" color={theme.colors.graySmallText}>
            <Text>{transaction.date}</Text>
          </Typography>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export const TransactionList: React.FC<TransactionListProps> = ({
  transactions,
  onPressTransaction,
  onPressViewAll,
}) => {
  const { theme } = useTheme();

  const styles = StyleSheet.create({
    container: {
      marginHorizontal: 16,
      marginTop: 24,
      marginBottom: 16,
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 16,
    },
    viewAll: {
      paddingVertical: 4,
      paddingHorizontal: 8,
    },
    emptyText: {
      textAlign: 'center',
      paddingVertical: 24,
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Typography variant="h4" color={theme.colors.white}>
          <Text>Последние транзакции</Text>
        </Typography>
        <TouchableOpacity style={styles.viewAll} onPress={onPressViewAll}>
          <Typography variant="smallText" color={theme.colors.yellow}>
            <Text>Смотреть все</Text>
          </Typography>
        </TouchableOpacity>
      </View>

      {transactions.length > 0 ? (
        <FlatList
          data={transactions}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TransactionItem
              transaction={item}
              onPress={() => onPressTransaction(item)}
            />
          )}
          scrollEnabled={false}
        />
      ) : (
        <Typography variant="bodyText" color={theme.colors.graySmallText} style={styles.emptyText}>
          <Text>У вас пока нет транзакций</Text>
        </Typography>
      )}
    </View>
  );
}; 