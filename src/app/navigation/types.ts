export type RootStackParamList = {
  Auth: undefined;
  Main: undefined;
  CreateWallet: undefined;
  ImportWallet: undefined;
  Send: undefined;
  Receive: undefined;
  Settings: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}