import React from 'react';
import { Text, TextStyle, StyleSheet, TextProps } from 'react-native';
import { useTheme } from '../theme/ThemeProvider';

type TypographyVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'bodyText' | 'buttonText' | 'smallText';

interface TypographyProps extends TextProps {
  variant?: TypographyVariant;
  color?: string;
  align?: 'auto' | 'left' | 'right' | 'center' | 'justify';
  style?: TextStyle;
  children: React.ReactNode;
}

export const Typography: React.FC<TypographyProps> = ({
  variant = 'bodyText',
  color,
  align = 'left',
  style,
  children,
  ...props
}) => {
  const { theme } = useTheme();

  const styles = StyleSheet.create({
    base: {
      color: color || theme.colors.text,
      textAlign: align,
      ...(theme.typography[variant] || {}),
    },
  });

  return (
    <Text style={[styles.base, style]} {...props}>
      {children}
    </Text>
  );
};
