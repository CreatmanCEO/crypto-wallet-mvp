import { Network, Token, QuickAction, WalletBalance } from './types';

export const mockNetworks: Network[] = [
  {
    id: '1',
    name: 'Ethereum Main network',
    type: 'ethereum',
    icon: 'ethereum',
    isTestnet: false,
  },
  {
    id: '2',
    name: 'TON Mainnet',
    type: 'ton',
    icon: 'ton',
    isTestnet: false,
  },
];

export const mockTokens: Token[] = [
  {
    id: '1',
    symbol: 'ETH',
    name: 'Ethereum',
    icon: 'ethereum',
    balance: '70.42',
    price: 1721.65,
    priceChange: 5.42,
    network: 'ethereum',
  },
  {
    id: '2',
    symbol: 'USDT',
    name: 'Tether USD',
    icon: 'usdt',
    balance: '1000.00',
    price: 1.0,
    priceChange: 0.01,
    network: 'ethereum',
  },
  {
    id: '3',
    symbol: 'TON',
    name: 'Toncoin',
    icon: 'ton',
    balance: '150.00',
    price: 2.15,
    priceChange: -1.23,
    network: 'ton',
  },
];

export const mockQuickActions: QuickAction[] = [
  {
    id: 'send',
    title: 'Send',
    icon: 'send',
    action: () => console.log('Send'),
  },
  {
    id: 'receive',
    title: 'Receive',
    icon: 'receive',
    action: () => console.log('Receive'),
  },
  {
    id: 'buy',
    title: 'Buy',
    icon: 'buy',
    action: () => console.log('Buy'),
  },
];

export const mockWalletBalance: WalletBalance = {
  total: '70.42 ETH',
  totalUsd: 121330,
  change: 5.42,
};

export const mockUser = {
  id: '1',
  name: 'Floyd Miles',
  avatar: 'https://example.com/avatar.jpg',
};
