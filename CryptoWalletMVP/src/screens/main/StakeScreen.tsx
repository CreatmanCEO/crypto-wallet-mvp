import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '../../shared/theme/ThemeProvider';
import { Typography } from '../../shared/components/Typography';

interface StakingOption {
  id: string;
  name: string;
  apy: number;
  lockPeriod: number;
  minAmount: number;
}

export const StakeScreen: React.FC = () => {
  const { theme } = useTheme();
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [amount, setAmount] = useState('0');

  // Моковые данные для стейкинга
  const stakingOptions: StakingOption[] = [
    {
      id: '1',
      name: 'AVIA Staking',
      apy: 12.5,
      lockPeriod: 30,
      minAmount: 100,
    },
    {
      id: '2',
      name: 'ETH 2.0 Staking',
      apy: 5.2,
      lockPeriod: 90,
      minAmount: 0.1,
    },
    {
      id: '3',
      name: 'BTC Yield',
      apy: 3.7,
      lockPeriod: 60,
      minAmount: 0.01,
    },
  ];

  const handleStake = () => {
    // Логика стейкинга будет добавлена позже
    console.log('Stake requested for option:', selectedOption);
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },
    content: {
      padding: 16,
    },
    header: {
      marginBottom: 24,
    },
    optionCard: {
      backgroundColor: theme.colors.backgroundGray,
      borderRadius: 12,
      padding: 16,
      marginBottom: 16,
      borderWidth: 1,
      borderColor: theme.colors.border,
    },
    selectedCard: {
      borderColor: theme.colors.primary,
    },
    optionHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 12,
    },
    optionDetails: {
      marginTop: 8,
    },
    detailRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 8,
    },
    amountSection: {
      marginTop: 24,
      backgroundColor: theme.colors.backgroundGray,
      borderRadius: 12,
      padding: 16,
    },
    stakeButton: {
      backgroundColor: theme.colors.primary,
      borderRadius: 8,
      padding: 16,
      alignItems: 'center',
      marginTop: 24,
    },
    disabledButton: {
      opacity: 0.5,
    },
  });

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.content}>
        <View style={styles.header}>
          <Typography variant="h2" color={theme.colors.white}>
            <Text>Стейкинг</Text>
          </Typography>
        </View>

        <Typography variant="bodyText" color={theme.colors.white} style={{ marginBottom: 16 }}>
          <Text>Выберите опцию стейкинга</Text>
        </Typography>

        {stakingOptions.map((option) => (
          <TouchableOpacity
            key={option.id}
            style={[
              styles.optionCard,
              selectedOption === option.id && styles.selectedCard,
            ]}
            onPress={() => setSelectedOption(option.id)}
          >
            <View style={styles.optionHeader}>
              <Typography variant="bodyText" color={theme.colors.white}>
                <Text>{option.name}</Text>
              </Typography>
              <Typography variant="h3" color={theme.colors.green}>
                <Text>{option.apy}% APY</Text>
              </Typography>
            </View>

            <View style={styles.optionDetails}>
              <View style={styles.detailRow}>
                <Typography variant="smallText" color={theme.colors.graySmallText}>
                  <Text>Период блокировки</Text>
                </Typography>
                <Typography variant="bodyText" color={theme.colors.white}>
                  <Text>{option.lockPeriod} дней</Text>
                </Typography>
              </View>
              <View style={styles.detailRow}>
                <Typography variant="smallText" color={theme.colors.graySmallText}>
                  <Text>Минимальная сумма</Text>
                </Typography>
                <Typography variant="bodyText" color={theme.colors.white}>
                  <Text>{option.minAmount}</Text>
                </Typography>
              </View>
            </View>
          </TouchableOpacity>
        ))}

        {selectedOption && (
          <View style={styles.amountSection}>
            <Typography variant="bodyText" color={theme.colors.white} style={{ marginBottom: 12 }}>
              <Text>Сумма для стейкинга</Text>
            </Typography>

            <View style={styles.detailRow}>
              <Typography variant="h3" color={theme.colors.white}>
                <Text>{amount || '0'}</Text>
              </Typography>
              <Typography variant="bodyText" color={theme.colors.graySmallText}>
                <Text>
                  {stakingOptions.find((o) => o.id === selectedOption)?.name.split(' ')[0] || ''}
                </Text>
              </Typography>
            </View>
          </View>
        )}

        <TouchableOpacity
          style={[styles.stakeButton, !selectedOption && styles.disabledButton]}
          onPress={handleStake}
          disabled={!selectedOption}
        >
          <Typography variant="bodyText" color={theme.colors.white}>
            <Text>Стейк</Text>
          </Typography>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}; 