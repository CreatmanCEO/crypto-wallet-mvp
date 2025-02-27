import React from 'react';
import { View, TouchableOpacity, StyleSheet, ViewStyle } from 'react-native';
import { useTheme } from '../theme/ThemeProvider';

interface CardProps {
  children: React.ReactNode;
  style?: ViewStyle;
  onPress?: () => void;
  testID?: string;
}

interface CardContentProps {
  children: React.ReactNode;
  style?: ViewStyle;
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  content: {
    padding: 16,
  },
});

const CardContent: React.FC<CardContentProps> = ({ children, style }) => {
  return <View style={[styles.content, style]}>{children}</View>;
};

const Card: React.FC<CardProps> & {
  Content: typeof CardContent;
} = ({ children, style, onPress, testID }) => {
  const { theme } = useTheme();

  if (onPress) {
    return (
      <TouchableOpacity
        testID={testID}
        style={[styles.container, { backgroundColor: theme.colors.card }, style]}
        onPress={onPress}>
        {children}
      </TouchableOpacity>
    );
  }

  return (
    <View
      testID={testID}
      style={[styles.container, { backgroundColor: theme.colors.card }, style]}>
      {children}
    </View>
  );
};

Card.Content = CardContent;

export { Card };
