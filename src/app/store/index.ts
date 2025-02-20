import { configureStore } from '@reduxjs/toolkit';
import { walletReducer } from '@/features/wallet/slice';
import { authReducer } from '@/features/auth/slice';

export const store = configureStore({
  reducer: {
    wallet: walletReducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;