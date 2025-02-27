import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '../../shared/theme/ThemeProvider';
import { Typography } from '../../shared/components/Typography';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList, Screens } from '../../navigation/types';

type WalletDetailsScreenRouteProp = RouteProp<RootStackParamList, Screens.WalletDetails>;

interface WalletDetailsScreenProps {
  route: WalletDetailsScreenRouteProp;
}

export const WalletDetailsScreen: React.FC<WalletDetailsScreenProps> = ({ route }) => {
  const { walletId } = route.params;
  const { theme } = useTheme();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
      padding: 16,
    },
    content: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Typography variant="h2" color={theme.colors.white}>
          <Text>Детали кошелька</Text>
        </Typography>
        <Typography variant="bodyText" color={theme.colors.white}>
          <Text>ID: {walletId}</Text>
        </Typography>
        <Typography variant="bodyText" color={theme.colors.graySmallText}>
          <Text>Этот экран находится в разработке</Text>
        </Typography>
      </View>
    </SafeAreaView>
  );
}; 