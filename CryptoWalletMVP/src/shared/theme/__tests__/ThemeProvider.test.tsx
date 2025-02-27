import React from 'react';
import { render, act } from '@testing-library/react-native';
import { ThemeProvider, useTheme } from '../ThemeProvider';
import { Text } from 'react-native';

const TestComponent = () => {
  const { theme, isDark, toggleTheme } = useTheme();
  return (
    <Text testID="test-component" onPress={toggleTheme}>
      {isDark ? 'dark' : 'light'}-{theme.colors.background}
    </Text>
  );
};

describe('ThemeProvider', () => {
  it('provides theme context to children', () => {
    const { getByTestId } = render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>,
    );

    const component = getByTestId('test-component');
    expect(component.props.children).toContain('light');
  });

  it('toggles theme correctly', () => {
    const { getByTestId } = render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>,
    );

    const component = getByTestId('test-component');
    expect(component.props.children).toContain('light');

    act(() => {
      component.props.onPress();
    });

    expect(component.props.children).toContain('dark');
  });

  it('throws error when useTheme is used outside ThemeProvider', () => {
    const consoleError = console.error;
    console.error = jest.fn(); // Подавляем вывод ошибки в консоль

    expect(() => {
      render(<TestComponent />);
    }).toThrow('useTheme must be used within a ThemeProvider');

    console.error = consoleError; // Восстанавливаем console.error
  });

  it('provides correct theme values', () => {
    const { getByTestId } = render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>,
    );

    const component = getByTestId('test-component');
    const text = component.props.children;

    // Проверяем значения светлой темы
    expect(text).toContain('light');
    expect(text).toContain('#FFFFFF'); // background color для светлой темы

    // Переключаем на темную тему
    act(() => {
      component.props.onPress();
    });

    // Проверяем значения темной темы
    const updatedText = getByTestId('test-component').props.children;
    expect(updatedText).toContain('dark');
    expect(updatedText).toContain('#121212'); // background color для темной темы
  });
});
