import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { useTheme } from '@/shared/theme/ThemeProvider';

interface IconProps {
  size?: number;
  color?: string;
}

export const ReceiveIcon: React.FC<IconProps> = ({ size = 24, color }) => {
  const { theme } = useTheme();
  const iconColor = color || theme.colors.text;

  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M22 15L11 4"
        stroke={iconColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M22 15L15 22L11 13L2 9L22 15Z"
        stroke={iconColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
