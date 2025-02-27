import React from 'react';
import Svg, { Path, Circle } from 'react-native-svg';
import { useTheme } from '@/shared/theme/ThemeProvider';

interface IconProps {
  size?: number;
  color?: string;
}

export const BuyIcon: React.FC<IconProps> = ({ size = 24, color }) => {
  const { theme } = useTheme();
  const iconColor = color || theme.colors.text;

  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Circle cx="12" cy="12" r="10" stroke={iconColor} strokeWidth="2" />
      <Path d="M12 8V16" stroke={iconColor} strokeWidth="2" strokeLinecap="round" />
      <Path d="M8 12H16" stroke={iconColor} strokeWidth="2" strokeLinecap="round" />
    </Svg>
  );
};
