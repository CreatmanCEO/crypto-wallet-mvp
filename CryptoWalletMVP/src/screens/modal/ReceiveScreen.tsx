import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Share } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '../../shared/theme/ThemeProvider';
import { Typography } from '../../shared/components/Typography';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../../navigation/types';

type ReceiveScreenRouteProp = RouteProp<RootStackParamList, 'Receive'>;

interface ReceiveScreenProps {
  route: ReceiveScreenRouteProp;
}

export const ReceiveScreen: React.FC<ReceiveScreenProps> = ({ route }) => {
  const { theme } = useTheme();
  const [selectedCrypto, setSelectedCrypto] = useState('BTC');
  
  // Моковый адрес кошелька
  const walletAddress = '0x1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t';
  
  const handleShare = async () => {
    try {
      await Share.share({
        message: `Мой ${selectedCrypto} адрес: ${walletAddress}`,
      });
    } catch (error) {
      console.error('Ошибка при попытке поделиться:', error);
    }
  };

  const cryptoOptions = [
    { id: 'BTC', name: 'Bitcoin' },
    { id: 'ETH', name: 'Ethereum' },
    { id: 'AVIA', name: 'Aviator' },
  ];

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
      padding: 16,
    },
    header: {
      marginBottom: 24,
    },
    qrContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: theme.colors.white,
      width: 220,
      height: 220,
      alignSelf: 'center',
      borderRadius: 12,
      marginVertical: 32,
    },
    qrPlaceholder: {
      width: 180,
      height: 180,
      backgroundColor: theme.colors.backgroundGray,
      justifyContent: 'center',
      alignItems: 'center',
    },
    addressContainer: {
      backgroundColor: theme.colors.backgroundGray,
      borderRadius: 8,
      padding: 16,
      marginBottom: 24,
    },
    addressText: {
      color: theme.colors.white,
      fontSize: 14,
      marginVertical: 8,
    },
    buttonsContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 12,
    },
    button: {
      flex: 1,
      backgroundColor: theme.colors.primary,
      padding: 12,
      borderRadius: 8,
      alignItems: 'center',
      marginHorizontal: 6,
    },
    cryptoSelector: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginBottom: 24,
    },
    cryptoOption: {
      paddingHorizontal: 16,
      paddingVertical: 8,
      borderRadius: 20,
      marginHorizontal: 4,
    },
    selectedOption: {
      backgroundColor: theme.colors.primary,
    },
  });

  const renderQRPlaceholder = () => (
    <View style={styles.qrPlaceholder}>
      <Typography variant="bodyText" color={theme.colors.white}>
        <Text>QR-код будет здесь</Text>
      </Typography>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Typography variant="h2" color={theme.colors.white}>
          <Text>Получить</Text>
        </Typography>
      </View>

      <View style={styles.cryptoSelector}>
        {cryptoOptions.map(option => (
          <TouchableOpacity
            key={option.id}
            style={[
              styles.cryptoOption,
              selectedCrypto === option.id && styles.selectedOption,
            ]}
            onPress={() => setSelectedCrypto(option.id)}
          >
            <Typography 
              variant="bodyText" 
              color={selectedCrypto === option.id ? theme.colors.white : theme.colors.graySmallText}
            >
              <Text>{option.id}</Text>
            </Typography>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.qrContainer}>
        {renderQRPlaceholder()}
      </View>

      <View style={styles.addressContainer}>
        <Typography variant="smallText" color={theme.colors.graySmallText}>
          <Text>{selectedCrypto} адрес</Text>
        </Typography>
        <Text style={styles.addressText}>{walletAddress}</Text>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.button} onPress={handleShare}>
            <Typography variant="smallText" color={theme.colors.white}>
              <Text>Поделиться</Text>
            </Typography>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Typography variant="smallText" color={theme.colors.white}>
              <Text>Копировать</Text>
            </Typography>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}; 