import React, { useState } from 'react';
import {
  View,
  TextInput,
  TextInputProps,
  StyleSheet,
  ViewStyle,
  TextStyle,
  TouchableOpacity,
} from 'react-native';
import { useTheme } from '../theme/ThemeProvider';
import { Typography } from './Typography';

interface InputProps extends TextInputProps {
  label?: string;
  error?: string;
  containerStyle?: ViewStyle;
  inputStyle?: TextStyle;
  rightIcon?: React.ReactNode;
  onRightIconPress?: () => void;
  testID?: string;
}

export const Input: React.FC<InputProps> = ({
  label,
  error,
  containerStyle,
  inputStyle,
  rightIcon,
  onRightIconPress,
  testID,
  ...props
}) => {
  const { theme } = useTheme();
  const [isFocused, setIsFocused] = useState(false);

  const styles = StyleSheet.create({
    container: {
      marginBottom: theme.spacing.md,
    },
    label: {
      marginBottom: theme.spacing.xs,
    },
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      borderWidth: 1,
      borderRadius: theme.spacing.xs,
      borderColor: error
        ? theme.colors.notification
        : isFocused
          ? theme.colors.primary
          : theme.colors.border,
      backgroundColor: theme.colors.background,
    },
    input: {
      flex: 1,
      padding: theme.spacing.sm,
      color: theme.colors.text,
      fontSize: 16,
    },
    rightIcon: {
      padding: theme.spacing.sm,
    },
    error: {
      marginTop: theme.spacing.xs,
      color: theme.colors.notification,
    },
  });

  return (
    <View style={[styles.container, containerStyle]} testID={`${testID}-container`}>
      {label && (
        <Typography variant="body2" style={styles.label}>
          {label}
        </Typography>
      )}
      <View style={styles.inputContainer}>
        <TextInput
          testID={testID}
          style={[styles.input, inputStyle]}
          placeholderTextColor={theme.colors.border}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          {...props}
        />
        {rightIcon && (
          <TouchableOpacity
            testID={`${testID}-right-icon`}
            style={styles.rightIcon}
            onPress={onRightIconPress}
            disabled={!onRightIconPress}>
            {rightIcon}
          </TouchableOpacity>
        )}
      </View>
      {error && (
        <Typography variant="caption" style={styles.error}>
          {error}
        </Typography>
      )}
    </View>
  );
};
