import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Typography } from '@/shared/components/Typography';
import { useTheme } from '@/shared/theme/ThemeProvider';
import { WalletBalance as WalletBalanceType } from '../types';

interface WalletBalanceProps {
  balance: WalletBalanceType;
}

export const WalletBalance: React.FC<WalletBalanceProps> = ({ balance }) => {
  const { theme } = useTheme();

  const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      paddingVertical: theme.spacing.lg,
    },
    balanceContainer: {
      alignItems: 'center',
      marginBottom: theme.spacing.md,
    },
    usdContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    changePositive: {
      color: '#4CAF50',
    },
    changeNegative: {
      color: '#F44336',
    },
  });

  const formatUSD = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(amount);
  };

  const formatChange = (change: number) => {
    const sign = change >= 0 ? '+' : '';
    return `${sign}${change.toFixed(2)}%`;
  };

  return (
    <View style={styles.container}>
      <View style={styles.balanceContainer}>
        <Typography variant="h1" testID="balance-amount">
          {balance.total}
        </Typography>
      </View>

      <View style={styles.usdContainer}>
        <Typography variant="h3" testID="balance-usd">
          {formatUSD(balance.totalUsd)}
        </Typography>
        <Typography
          variant="body1"
          style={balance.change >= 0 ? styles.changePositive : styles.changeNegative}
          testID="balance-change">
          {' '}
          {formatChange(balance.change)}
        </Typography>
      </View>
    </View>
  );
};
