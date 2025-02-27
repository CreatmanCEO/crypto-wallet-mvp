import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '../../shared/theme/ThemeProvider';
import { Typography } from '../../shared/components/Typography';

export const SwapScreen: React.FC = () => {
  const { theme } = useTheme();
  const [fromCrypto, setFromCrypto] = useState('BTC');
  const [toCrypto, setToCrypto] = useState('ETH');
  const [amount, setAmount] = useState('0.01');
  const [rate, setRate] = useState(16.42);

  const handleSwap = () => {
    // Логика обмена будет добавлена позже
    console.log('Swap requested:', { fromCrypto, toCrypto, amount });
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
      padding: 16,
    },
    title: {
      marginBottom: 24,
    },
    card: {
      backgroundColor: theme.colors.backgroundGray,
      borderRadius: 12,
      padding: 16,
      marginBottom: 24,
    },
    inputRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 16,
    },
    selectButton: {
      backgroundColor: theme.colors.primary,
      borderRadius: 8,
      paddingHorizontal: 12,
      paddingVertical: 8,
    },
    amountInput: {
      fontSize: 24,
      color: theme.colors.white,
    },
    swapButton: {
      backgroundColor: theme.colors.primary,
      borderRadius: 8,
      padding: 16,
      alignItems: 'center',
      marginTop: 24,
    },
    rateInfo: {
      marginTop: 12,
      padding: 12,
      backgroundColor: theme.colors.backgroundGray,
      borderRadius: 8,
    },
  });

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.title}>
        <Typography variant="h2" color={theme.colors.white}>
          <Text>Обмен</Text>
        </Typography>
      </View>

      <View style={styles.card}>
        <Typography variant="bodyText" color={theme.colors.graySmallText}>
          <Text>Вы отправляете</Text>
        </Typography>
        
        <View style={styles.inputRow}>
          <Text style={styles.amountInput}>{amount}</Text>
          <TouchableOpacity style={styles.selectButton}>
            <Typography variant="bodyText" color={theme.colors.white}>
              <Text>{fromCrypto}</Text>
            </Typography>
          </TouchableOpacity>
        </View>
        
        <Typography variant="smallText" color={theme.colors.graySmallText}>
          <Text>Доступно: 0.123 BTC</Text>
        </Typography>
      </View>

      <View style={styles.card}>
        <Typography variant="bodyText" color={theme.colors.graySmallText}>
          <Text>Вы получаете</Text>
        </Typography>
        
        <View style={styles.inputRow}>
          <Text style={styles.amountInput}>{parseFloat(amount) * rate}</Text>
          <TouchableOpacity style={styles.selectButton}>
            <Typography variant="bodyText" color={theme.colors.white}>
              <Text>{toCrypto}</Text>
            </Typography>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.rateInfo}>
        <Typography variant="smallText" color={theme.colors.graySmallText}>
          <Text>Курс обмена: 1 {fromCrypto} = {rate} {toCrypto}</Text>
        </Typography>
        <Typography variant="smallText" color={theme.colors.graySmallText}>
          <Text>Комиссия: 0.5%</Text>
        </Typography>
      </View>

      <TouchableOpacity style={styles.swapButton} onPress={handleSwap}>
        <Typography variant="bodyText" color={theme.colors.white}>
          <Text>Обменять</Text>
        </Typography>
      </TouchableOpacity>
    </SafeAreaView>
  );
}; 