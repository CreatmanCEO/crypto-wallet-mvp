import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { useTheme } from '@/shared/theme/ThemeProvider';
import { Typography } from '@/shared/components/Typography';

// В реальном приложении здесь будут импорты иконок
const SendIcon = () => <View style={{ width: 24, height: 24, backgroundColor: 'rgba(235, 184, 19, 0.2)', borderRadius: 12 }} />;
const ReceiveIcon = () => <View style={{ width: 24, height: 24, backgroundColor: 'rgba(235, 184, 19, 0.2)', borderRadius: 12 }} />;
const SwapIcon = () => <View style={{ width: 24, height: 24, backgroundColor: 'rgba(235, 184, 19, 0.2)', borderRadius: 12 }} />;
const StakeIcon = () => <View style={{ width: 24, height: 24, backgroundColor: 'rgba(235, 184, 19, 0.2)', borderRadius: 12 }} />;

interface QuickActionProps {
  icon: React.ReactNode;
  label: string;
  onPress: () => void;
}

interface QuickActionsProps {
  onPressSend: () => void;
  onPressReceive: () => void;
  onPressSwap: () => void;
  onPressStake: () => void;
}

const QuickAction: React.FC<QuickActionProps> = ({ icon, label, onPress }) => {
  const { theme } = useTheme();
  
  const styles = StyleSheet.create({
    actionButton: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 10,
    },
    iconContainer: {
      width: 48,
      height: 48,
      borderRadius: 24,
      backgroundColor: 'rgba(235, 184, 19, 0.1)',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 8,
    },
  });

  return (
    <TouchableOpacity style={styles.actionButton} onPress={onPress}>
      <View style={styles.iconContainer}>
        {icon}
      </View>
      <Typography variant="buttonText" color={theme.colors.white}>
        <Text>{label}</Text>
      </Typography>
    </TouchableOpacity>
  );
};

export const QuickActions: React.FC<QuickActionsProps> = ({
  onPressSend,
  onPressReceive,
  onPressSwap,
  onPressStake,
}) => {
  const styles = StyleSheet.create({
    container: {
      marginHorizontal: 16,
      marginVertical: 20,
    },
    actionsRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: 16,
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.actionsRow}>
        <QuickAction
          icon={<SendIcon />}
          label="Send"
          onPress={onPressSend}
        />
        <QuickAction
          icon={<ReceiveIcon />}
          label="Receive"
          onPress={onPressReceive}
        />
        <QuickAction
          icon={<SwapIcon />}
          label="Swap"
          onPress={onPressSwap}
        />
        <QuickAction
          icon={<StakeIcon />}
          label="Stake"
          onPress={onPressStake}
        />
      </View>
    </View>
  );
};
