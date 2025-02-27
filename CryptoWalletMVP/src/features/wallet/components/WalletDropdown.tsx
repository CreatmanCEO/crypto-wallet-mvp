import React, { useState } from 'react';
import {
  View,
  TouchableOpacity,
  Modal,
  StyleSheet,
  FlatList,
  Animated,
  Dimensions,
  Text,
} from 'react-native';
import { Typography } from '@/shared/components/Typography';
import { useTheme } from '@/shared/theme/ThemeProvider';

export interface Wallet {
  id: string;
  symbol: string;
  name: string;
  icon?: string;
}

interface WalletDropdownProps {
  selectedWallet: Wallet;
  wallets: Wallet[];
  onSelectWallet: (wallet: Wallet) => void;
}

export const WalletDropdown: React.FC<WalletDropdownProps> = ({
  selectedWallet,
  wallets,
  onSelectWallet,
}) => {
  const { theme } = useTheme();
  const [modalVisible, setModalVisible] = useState(false);
  const [animation] = useState(new Animated.Value(0));

  const openModal = () => {
    setModalVisible(true);
    Animated.timing(animation, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const closeModal = () => {
    Animated.timing(animation, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start(() => {
      setModalVisible(false);
    });
  };

  const handleSelect = (wallet: Wallet) => {
    onSelectWallet(wallet);
    closeModal();
  };

  const translateY = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [300, 0],
  });

  const opacity = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.2)',
      borderRadius: 8,
      paddingHorizontal: 12,
      paddingVertical: 8,
    },
    arrowIcon: {
      marginLeft: 8,
      width: 0,
      height: 0,
      borderLeftWidth: 5,
      borderRightWidth: 5,
      borderTopWidth: 5,
      borderLeftColor: 'transparent',
      borderRightColor: 'transparent',
      borderTopColor: theme.colors.yellow,
    },
    modalOverlay: {
      flex: 1,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      justifyContent: 'flex-end',
    },
    modalContent: {
      backgroundColor: theme.colors.backgroundGray,
      borderTopLeftRadius: 16,
      borderTopRightRadius: 16,
      maxHeight: Dimensions.get('window').height * 0.6,
    },
    handle: {
      width: 40,
      height: 4,
      backgroundColor: theme.colors.grayBar,
      alignSelf: 'center',
      marginVertical: 12,
      borderRadius: 2,
    },
    walletOption: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 16,
      paddingHorizontal: 20,
      borderBottomWidth: 1,
      borderBottomColor: 'rgba(255, 255, 255, 0.05)',
    },
    selectedOption: {
      backgroundColor: 'rgba(235, 184, 19, 0.1)',
    },
    walletSymbol: {
      width: 40,
    },
  });

  return (
    <>
      <TouchableOpacity style={styles.container} onPress={openModal}>
        <Typography variant="bodyText" color={theme.colors.yellow}>
          <Text>{`${selectedWallet.symbol} wallet`}</Text>
        </Typography>
        <View style={styles.arrowIcon} />
      </TouchableOpacity>

      <Modal
        visible={modalVisible}
        transparent
        animationType="none"
        onRequestClose={closeModal}
      >
        <TouchableOpacity style={styles.modalOverlay} activeOpacity={1} onPress={closeModal}>
          <Animated.View
            style={[
              styles.modalContent,
              { opacity, transform: [{ translateY }] },
            ]}
          >
            <View style={styles.handle} />
            <FlatList
              data={wallets}
              keyExtractor={item => item.id}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={[
                    styles.walletOption,
                    item.id === selectedWallet.id ? styles.selectedOption : null,
                  ]}
                  onPress={() => handleSelect(item)}
                >
                  <View style={styles.walletSymbol}>
                    <Typography variant="bodyText" color={theme.colors.graySmallText}>
                      {item.symbol}
                    </Typography>
                  </View>
                  <Typography variant="bodyText">{item.name}</Typography>
                </TouchableOpacity>
              )}
            />
          </Animated.View>
        </TouchableOpacity>
      </Modal>
    </>
  );
}; 