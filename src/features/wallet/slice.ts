import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface WalletState {
  address: string | null;
  balance: string;
  isLoading: boolean;
  error: string | null;
  transactions: Array<{
    hash: string;
    type: 'send' | 'receive';
    amount: string;
    timestamp: number;
  }>;
}

const initialState: WalletState = {
  address: null,
  balance: '0',
  isLoading: false,
  error: null,
  transactions: [],
};

export const walletSlice = createSlice({
  name: 'wallet',
  initialState,
  reducers: {
    setAddress: (state, action: PayloadAction<string>) => {
      state.address = action.payload;
    },
    setBalance: (state, action: PayloadAction<string>) => {
      state.balance = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
    addTransaction: (state, action: PayloadAction<WalletState['transactions'][0]>) => {
      state.transactions.unshift(action.payload);
    },
  },
});

export const { setAddress, setBalance, setLoading, setError, addTransaction } = walletSlice.actions;
export const walletReducer = walletSlice.reducer;