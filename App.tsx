import React from 'react';
import { SafeAreaView } from 'react-native';
import { MainScreen } from './src/features/wallet/screens/MainScreen';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <MainScreen />
    </SafeAreaView>
  );
}

export default App;