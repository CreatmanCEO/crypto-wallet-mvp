import React from 'react';
import {
  TouchableOpacity,
  TouchableOpacityProps,
  StyleSheet,
  ActivityIndicator,
  ViewStyle,
} from 'react-native';
import { useTheme } from '../theme/ThemeProvider';
import { Typography } from './Typography';

interface ButtonProps extends TouchableOpacityProps {
  variant?: 'contained' | 'outlined' | 'text';
  size?: 'small' | 'medium' | 'large';
  loading?: boolean;
  style?: ViewStyle;
  textColor?: string;
  children: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'contained',
  size = 'medium',
  loading = false,
  disabled = false,
  style,
  textColor,
  children,
  ...props
}) => {
  const { theme } = useTheme();

  const getBackgroundColor = () => {
    if (disabled) return theme.colors.border;
    switch (variant) {
      case 'contained':
        return theme.colors.primary;
      case 'outlined':
      case 'text':
        return 'transparent';
      default:
        return theme.colors.primary;
    }
  };

  const getTextColor = () => {
    if (disabled) return theme.colors.text;
    if (textColor) return textColor;
    switch (variant) {
      case 'contained':
        return '#FFFFFF';
      case 'outlined':
      case 'text':
        return theme.colors.primary;
      default:
        return theme.colors.primary;
    }
  };

  const getPadding = () => {
    switch (size) {
      case 'small':
        return theme.spacing.sm;
      case 'large':
        return theme.spacing.lg;
      default:
        return theme.spacing.md;
    }
  };

  const styles = StyleSheet.create({
    button: {
      backgroundColor: getBackgroundColor(),
      borderRadius: theme.spacing.sm,
      padding: getPadding(),
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: variant === 'outlined' ? 1 : 0,
      borderColor: variant === 'outlined' ? theme.colors.primary : undefined,
      opacity: disabled ? 0.6 : 1,
    },
  });

  return (
    <TouchableOpacity style={[styles.button, style]} disabled={disabled || loading} {...props}>
      {loading ? (
        <ActivityIndicator testID="loading-indicator" color={getTextColor()} />
      ) : (
        <Typography variant="body1" color={getTextColor()} style={{ textAlign: 'center' }}>
          {children}
        </Typography>
      )}
    </TouchableOpacity>
  );
};
