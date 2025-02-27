import React from 'react';
import { View, StyleSheet, TouchableOpacity, ImageBackground, Text } from 'react-native';
import { useTheme } from '@/shared/theme/ThemeProvider';
import { Typography } from '@/shared/components/Typography';
import { WalletDropdown, Wallet } from './WalletDropdown';

// Градиентный фон для карточки баланса
import WalletCardBg from '@/assets/images/wallet-card-bg.png';

interface WalletBalanceCardProps {
  balance: number;
  balanceUSD: number;
  selectedWallet: Wallet;
  wallets: Wallet[];
  onSelectWallet: (wallet: Wallet) => void;
  onPressDetails: () => void;
}

export const WalletBalanceCard: React.FC<WalletBalanceCardProps> = ({
  balance,
  balanceUSD,
  selectedWallet,
  wallets,
  onSelectWallet,
  onPressDetails,
}) => {
  const { theme } = useTheme();

  const formatBalance = (value: number): string => {
    return value.toLocaleString('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 6,
    });
  };

  const styles = StyleSheet.create({
    container: {
      borderRadius: 16,
      overflow: 'hidden',
      marginHorizontal: 16,
      marginVertical: 20,
      elevation: 4,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 4,
    },
    backgroundImage: {
      width: '100%',
      aspectRatio: 1.9,
      justifyContent: 'space-between',
      padding: 20,
    },
    topRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    balanceContainer: {
      marginTop: 25,
    },
    detailsButton: {
      alignSelf: 'flex-end',
      paddingHorizontal: 16,
      paddingVertical: 8,
      backgroundColor: 'rgba(0, 0, 0, 0.3)',
      borderRadius: 8,
      marginTop: 20,
    },
  });

  return (
    <View style={styles.container}>
      <ImageBackground source={WalletCardBg} style={styles.backgroundImage} resizeMode="cover">
        <View style={styles.topRow}>
          <WalletDropdown
            selectedWallet={selectedWallet}
            wallets={wallets}
            onSelectWallet={onSelectWallet}
          />
        </View>

        <View style={styles.balanceContainer}>
          <Typography variant="h2" color={theme.colors.white}>
            <Text>{`${formatBalance(balance)} ${selectedWallet.symbol}`}</Text>
          </Typography>
          <Typography variant="bodyText" color={theme.colors.graySmallText}>
            <Text>{`$ ${formatBalance(balanceUSD)}`}</Text>
          </Typography>
        </View>

        <TouchableOpacity style={styles.detailsButton} onPress={onPressDetails}>
          <Typography variant="buttonText" color={theme.colors.white}>
            <Text>Details</Text>
          </Typography>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}; 