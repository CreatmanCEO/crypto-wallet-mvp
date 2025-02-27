import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { OnboardingScreen } from '../OnboardingScreen';
import { ThemeProvider } from '../../../shared/theme/ThemeProvider';
import { NavigationContainer } from '@react-navigation/native';

// Мок для навигации
const mockNavigate = jest.fn();
jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: mockNavigate,
    }),
  };
});

describe('OnboardingScreen', () => {
  const renderScreen = () =>
    render(
      <NavigationContainer>
        <ThemeProvider>
          <OnboardingScreen />
        </ThemeProvider>
      </NavigationContainer>,
    );

  beforeEach(() => {
    mockNavigate.mockClear();
  });

  it('renders correctly', () => {
    const { getByText } = renderScreen();

    expect(getByText('CryptoWallet MVP')).toBeTruthy();
    expect(getByText('Безопасное хранение и управление криптовалютой')).toBeTruthy();
    expect(getByText('Создать кошелек')).toBeTruthy();
    expect(getByText('Импортировать кошелек')).toBeTruthy();
  });

  it('navigates to CreateWallet screen when create button is pressed', () => {
    const { getByText } = renderScreen();

    fireEvent.press(getByText('Создать кошелек'));
    expect(mockNavigate).toHaveBeenCalledWith('CreateWallet');
  });

  it('navigates to ImportWallet screen when import button is pressed', () => {
    const { getByText } = renderScreen();

    fireEvent.press(getByText('Импортировать кошелек'));
    expect(mockNavigate).toHaveBeenCalledWith('ImportWallet');
  });
});
