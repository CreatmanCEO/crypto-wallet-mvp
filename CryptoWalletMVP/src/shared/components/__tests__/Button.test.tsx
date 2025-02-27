import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Button } from '../Button';
import { ThemeProvider } from '../../theme/ThemeProvider';

const TestWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <ThemeProvider>{children}</ThemeProvider>
);

describe('Button', () => {
  it('renders correctly with default props', () => {
    const { getByText } = render(
      <TestWrapper>
        <Button>Test Button</Button>
      </TestWrapper>,
    );

    expect(getByText('Test Button')).toBeTruthy();
  });

  it('handles onPress correctly', () => {
    const onPress = jest.fn();
    const { getByText } = render(
      <TestWrapper>
        <Button onPress={onPress}>Test Button</Button>
      </TestWrapper>,
    );

    fireEvent.press(getByText('Test Button'));
    expect(onPress).toHaveBeenCalled();
  });

  it('does not call onPress when disabled', () => {
    const onPress = jest.fn();
    const { getByText } = render(
      <TestWrapper>
        <Button onPress={onPress} disabled>
          Test Button
        </Button>
      </TestWrapper>,
    );

    fireEvent.press(getByText('Test Button'));
    expect(onPress).not.toHaveBeenCalled();
  });

  it('shows loading indicator when loading', () => {
    const { getByTestId, queryByText } = render(
      <TestWrapper>
        <Button loading>Test Button</Button>
      </TestWrapper>,
    );

    expect(getByTestId('loading-indicator')).toBeTruthy();
    expect(queryByText('Test Button')).toBeNull();
  });

  it('renders different variants correctly', () => {
    const variants = ['contained', 'outlined', 'text'] as const;
    const { rerender, getByText } = render(
      <TestWrapper>
        <Button variant="contained">Test Button</Button>
      </TestWrapper>,
    );

    variants.forEach(variant => {
      rerender(
        <TestWrapper>
          <Button variant={variant}>Test Button</Button>
        </TestWrapper>,
      );
      expect(getByText('Test Button')).toBeTruthy();
    });
  });

  it('applies custom style correctly', () => {
    const customStyle = { marginTop: 10 };
    const { getByText } = render(
      <TestWrapper>
        <Button style={customStyle}>Test Button</Button>
      </TestWrapper>,
    );

    const buttonElement = getByText('Test Button').parent;
    expect(buttonElement?.props.style).toEqual(
      expect.arrayContaining([expect.objectContaining(customStyle)]),
    );
  });
});
