import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Typography } from '@/shared/components/Typography';
import { useTheme } from '@/shared/theme/ThemeProvider';
import { ExpandIcon } from '@/shared/components/icons/ExpandIcon';
import { Network } from '../types';

interface WalletHeaderProps {
  userName: string;
  userAvatar: string;
  network: Network;
  onNetworkPress: () => void;
  onExpandPress: () => void;
}

export const WalletHeader: React.FC<WalletHeaderProps> = ({
  userName,
  userAvatar,
  network,
  onNetworkPress,
  onExpandPress,
}) => {
  const { theme } = useTheme();

  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: theme.spacing.md,
      paddingVertical: theme.spacing.sm,
    },
    leftSection: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    avatar: {
      width: 40,
      height: 40,
      borderRadius: 20,
      marginRight: theme.spacing.sm,
    },
    networkButton: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: theme.colors.card,
      borderRadius: theme.spacing.sm,
      padding: theme.spacing.xs,
    },
    networkIcon: {
      width: 16,
      height: 16,
      marginRight: theme.spacing.xs,
    },
    expandButton: {
      padding: theme.spacing.xs,
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.leftSection}>
        <Image source={{ uri: userAvatar }} style={styles.avatar} testID="user-avatar" />
        <Typography variant="h3">{userName}</Typography>
      </View>

      <TouchableOpacity
        style={styles.networkButton}
        onPress={onNetworkPress}
        testID="network-button">
        <Image source={{ uri: network.icon }} style={styles.networkIcon} testID="network-icon" />
        <Typography variant="body2">{network.name}</Typography>
      </TouchableOpacity>

      <TouchableOpacity style={styles.expandButton} onPress={onExpandPress} testID="expand-button">
        <ExpandIcon size={24} />
      </TouchableOpacity>
    </View>
  );
};
