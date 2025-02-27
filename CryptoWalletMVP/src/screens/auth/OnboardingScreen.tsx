import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useTheme } from '../../shared/theme/ThemeProvider';
import { Typography } from '../../shared/components/Typography';
import { Button } from '../../shared/components/Button';
import { Card } from '../../shared/components/Card';
import { useNavigation } from '@react-navigation/native';
import { Screens } from '../../navigation/types';

export const OnboardingScreen: React.FC = () => {
  const { theme } = useTheme();
  const navigation = useNavigation();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
      padding: theme.spacing.md,
    },
    content: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      gap: theme.spacing.lg,
    },
    card: {
      width: '100%',
      marginBottom: theme.spacing.md,
    },
    buttonsContainer: {
      width: '100%',
      gap: theme.spacing.md,
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Typography variant="h1" align="center">
          CryptoWallet MVP
        </Typography>

        <Card style={styles.card}>
          <Typography variant="body1" align="center">
            Безопасное хранение и управление криптовалютой
          </Typography>
        </Card>

        <View style={styles.buttonsContainer}>
          <Button onPress={() => navigation.navigate(Screens.CreateWallet)} size="large">
            Создать кошелек
          </Button>

          <Button
            variant="outlined"
            onPress={() => navigation.navigate(Screens.ImportWallet)}
            size="large">
            Импортировать кошелек
          </Button>
        </View>
      </View>
    </View>
  );
};
