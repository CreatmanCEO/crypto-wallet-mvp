import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Typography } from '@/shared/components/Typography';
import { useTheme } from '@/shared/theme/ThemeProvider';

export const SettingsScreen: React.FC = () => {
  const { theme } = useTheme();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
      padding: theme.spacing.md,
    },
  });

  return (
    <View style={styles.container}>
      <Typography variant="h2">
        <Text>Настройки</Text>
      </Typography>
      <Typography variant="body1">
        <Text>Раздел в разработке</Text>
      </Typography>
    </View>
  );
}; 