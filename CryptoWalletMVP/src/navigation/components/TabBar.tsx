import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { Typography } from '@/shared/components/Typography';
import { useTheme } from '@/shared/theme/ThemeProvider';
import { WalletIcon, MarketIcon, NewsIcon, SettingsIcon } from '@/shared/components/icons';

export const TabBar: React.FC<BottomTabBarProps> = ({
  state,
  descriptors,
  navigation,
}) => {
  const { theme } = useTheme();

  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      backgroundColor: theme.colors.background,
      borderTopWidth: 1,
      borderTopColor: theme.colors.border,
    },
    tab: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: theme.spacing.sm,
    },
  });

  const getIcon = (routeName: string, isFocused: boolean) => {
    const color = isFocused ? theme.colors.primary : theme.colors.text;
    const size = 24;

    switch (routeName) {
      case 'Wallet':
        return <WalletIcon size={size} color={color} />;
      case 'Market':
        return <MarketIcon size={size} color={color} />;
      case 'News':
        return <NewsIcon size={size} color={color} />;
      case 'Settings':
        return <SettingsIcon size={size} color={color} />;
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TouchableOpacity
            key={route.key}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            onPress={onPress}
            style={styles.tab}>
            {getIcon(route.name, isFocused)}
            <Typography
              variant="caption"
              color={isFocused ? theme.colors.primary : theme.colors.text}>
              {route.name}
            </Typography>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};
