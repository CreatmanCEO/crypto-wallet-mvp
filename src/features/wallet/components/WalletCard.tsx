import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '@/app/store';

export const WalletCard = () => {
  const { balance, address } = useSelector((state: RootState) => state.wallet);

  const shortenAddress = (addr: string | null) => {
    if (!addr) return '';
    return `${addr.slice(0, 6)}...${addr.slice(-4)}`;
  };

  return (
    <View style={styles.container}>
      <View style={styles.balanceContainer}>
        <Text style={styles.balanceLabel}>Balance</Text>
        <Text style={styles.balanceAmount}>{balance}</Text>
      </View>
      <View style={styles.addressContainer}>
        <Text style={styles.addressLabel}>Address</Text>
        <TouchableOpacity>
          <Text style={styles.address}>{shortenAddress(address)}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1A1A1A',
    borderRadius: 16,
    padding: 20,
    margin: 16,
  },
  balanceContainer: {
    marginBottom: 16,
  },
  balanceLabel: {
    color: '#8F8F8F',
    fontSize: 14,
  },
  balanceAmount: {
    color: '#FFFFFF',
    fontSize: 32,
    fontWeight: 'bold',
  },
  addressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  addressLabel: {
    color: '#8F8F8F',
    fontSize: 14,
  },
  address: {
    color: '#FFFFFF',
    fontSize: 14,
  },
});