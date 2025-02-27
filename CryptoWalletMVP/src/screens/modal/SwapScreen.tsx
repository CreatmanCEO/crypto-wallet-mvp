import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '../../shared/theme/ThemeProvider';
import { Typography } from '../../shared/components/Typography';

export const SwapScreen: React.FC = () => {
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
          <Text>Обмен криптовалют</Text>
        </Typography>
        <Typography variant="bodyText" color={theme.colors.graySmallText}>
          <Text>Этот экран находится в разработке</Text>
        </Typography>
      </View>
    </SafeAreaView>
  );
}; 