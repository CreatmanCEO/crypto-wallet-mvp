import React from 'react';
import { StatusBar } from 'react-native';
import { RootNavigator } from './src/navigation/RootNavigator';
import { ThemeProvider } from './src/shared/theme/ThemeProvider';

function App(): React.JSX.Element {
  return (
    <ThemeProvider>
      <StatusBar barStyle="dark-content" />
      <RootNavigator />
    </ThemeProvider>
  );
}

export default App;
