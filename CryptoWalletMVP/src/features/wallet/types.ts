export type NetworkType = 'ethereum' | 'bsc' | 'ton';

export interface Network {
  id: string;
  name: string;
  type: NetworkType;
  icon: string;
  isTestnet: boolean;
}

export interface Token {
  id: string;
  symbol: string;
  name: string;
  icon: string;
  balance: string;
  price: number;
  priceChange: number;
  network: NetworkType;
}

export interface QuickAction {
  id: string;
  title: string;
  icon: string;
  action: () => void;
}

export interface WalletBalance {
  total: string;
  totalUsd: number;
  change: number;
}

export type TabType = 'tokens' | 'collectibles';
