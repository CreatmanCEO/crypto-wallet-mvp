import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { useTheme } from '../../theme/ThemeProvider';
import { IconProps } from './types';

export const ExpandIcon: React.FC<IconProps> = ({ size = 24, color }) => {
  const { theme } = useTheme();
  const iconColor = color || theme.colors.text;

  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M6 9L12 15L18 9"
        stroke={iconColor}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
