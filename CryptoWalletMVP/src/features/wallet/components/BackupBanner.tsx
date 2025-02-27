import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { useTheme } from '@/shared/theme/ThemeProvider';
import { Typography } from '@/shared/components/Typography';

interface BackupBannerProps {
  onPressBackup: () => void;
}

export const BackupBanner: React.FC<BackupBannerProps> = ({ onPressBackup }) => {
  const { theme } = useTheme();

  const styles = StyleSheet.create({
    container: {
      marginHorizontal: 16,
      marginVertical: 16,
      backgroundColor: 'rgba(235, 184, 19, 0.1)',
      borderRadius: 12,
      padding: 16,
      borderWidth: 1,
      borderColor: 'rgba(235, 184, 19, 0.3)',
    },
    content: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    textContainer: {
      flex: 1,
      marginRight: 12,
    },
    icon: {
      width: 32,
      height: 32,
      borderRadius: 16,
      backgroundColor: 'rgba(235, 184, 19, 0.2)',
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: 12,
    },
    button: {
      backgroundColor: theme.colors.yellow,
      paddingHorizontal: 16,
      paddingVertical: 8,
      borderRadius: 8,
    },
    row: {
      flexDirection: 'row',
      alignItems: 'center',
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.row}>
          <View style={styles.icon} />
          <View style={styles.textContainer}>
            <Typography variant="bodyText" color={theme.colors.white}>
              <Text>Создайте резервную копию</Text>
            </Typography>
            <Typography variant="smallText" color={theme.colors.graySmallText}>
              <Text>Сохраните секретную фразу для восстановления доступа к кошельку</Text>
            </Typography>
          </View>
        </View>
        <TouchableOpacity style={styles.button} onPress={onPressBackup}>
          <Typography variant="buttonText" color={theme.colors.black}>
            <Text>Создать</Text>
          </Typography>
        </TouchableOpacity>
      </View>
    </View>
  );
}; 