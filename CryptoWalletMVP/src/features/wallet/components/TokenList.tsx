import React from 'react';
import { View, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { Typography } from '@/shared/components/Typography';
import { useTheme } from '@/shared/theme/ThemeProvider';
import { Token } from '../types';

interface TokenListProps {
  tokens: Token[];
  onTokenPress: (token: Token) => void;
}

export const TokenList: React.FC<TokenListProps> = ({ tokens, onTokenPress }) => {
  const { theme } = useTheme();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    tokenItem: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: theme.spacing.md,
      borderBottomWidth: 1,
      borderBottomColor: theme.colors.border,
    },
    tokenIcon: {
      width: 40,
      height: 40,
      borderRadius: 20,
      marginRight: theme.spacing.md,
    },
    tokenInfo: {
      flex: 1,
    },
    tokenHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: theme.spacing.xs,
    },
    tokenBalance: {
      flexDirection: 'row',
      justifyContent: 'space-between',
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
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(amount);
  };

  const formatChange = (change: number) => {
    const sign = change >= 0 ? '+' : '';
    return `${sign}${change.toFixed(2)}%`;
  };

  const renderToken = ({ item }: { item: Token }) => (
    <TouchableOpacity
      style={styles.tokenItem}
      onPress={() => onTokenPress(item)}
      testID={`token-item-${item.id}`}>
      <Image
        source={{ uri: item.icon }}
        style={styles.tokenIcon}
        testID={`token-icon-${item.id}`}
      />
      <View style={styles.tokenInfo}>
        <View style={styles.tokenHeader}>
          <Typography variant="body1" testID={`token-name-${item.id}`}>
            {item.name}
          </Typography>
          <Typography
            variant="body2"
            style={item.priceChange >= 0 ? styles.changePositive : styles.changeNegative}
            testID={`token-change-${item.id}`}>
            {formatChange(item.priceChange)}
          </Typography>
        </View>
        <View style={styles.tokenBalance}>
          <Typography variant="h3" testID={`token-balance-${item.id}`}>
            {item.balance} {item.symbol}
          </Typography>
          <Typography variant="body2" testID={`token-price-${item.id}`}>
            {formatUSD(item.price * parseFloat(item.balance))}
          </Typography>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <FlatList
      style={styles.container}
      data={tokens}
      renderItem={renderToken}
      keyExtractor={item => item.id}
      testID="token-list"
    />
  );
};
