import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Typography } from '@/shared/components/Typography';
import { useTheme } from '@/shared/theme/ThemeProvider';

export const MarketScreen: React.FC = () => {
  const { theme } = useTheme();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.colors.background,
    },
  });

  return (
    <View style={styles.container}>
      <Typography variant="h2">
        <Text>Market Screen</Text>
      </Typography>
      <Typography variant="body1">
        <Text>Coming soon...</Text>
      </Typography>
    </View>
  );
};
