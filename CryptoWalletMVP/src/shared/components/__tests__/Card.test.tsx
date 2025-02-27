import React from 'react';
import { Text } from 'react-native';
import { render, fireEvent } from '@testing-library/react-native';
import { Card } from '../Card';
import { ThemeProvider } from '../../theme/ThemeProvider';

const TestWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <ThemeProvider>{children}</ThemeProvider>
);

describe('Card', () => {
  it('renders correctly with default props', () => {
    const { getByTestId } = render(
      <TestWrapper>
        <Card testID="test-card">
          <Card.Content>
            <Text>Test Content</Text>
          </Card.Content>
        </Card>
      </TestWrapper>,
    );

    expect(getByTestId('test-card')).toBeTruthy();
  });

  it('handles onPress correctly', () => {
    const onPress = jest.fn();
    const { getByTestId } = render(
      <TestWrapper>
        <Card testID="test-card" onPress={onPress}>
          <Card.Content>
            <Text>Test Content</Text>
          </Card.Content>
        </Card>
      </TestWrapper>,
    );

    fireEvent.press(getByTestId('test-card'));
    expect(onPress).toHaveBeenCalled();
  });

  it('renders Card.Content correctly', () => {
    const { getByText } = render(
      <TestWrapper>
        <Card>
          <Card.Content>
            <Text>Test Content</Text>
          </Card.Content>
        </Card>
      </TestWrapper>,
    );

    expect(getByText('Test Content')).toBeTruthy();
  });

  it('applies custom style correctly', () => {
    const customStyle = { marginTop: 10 };
    const { getByTestId } = render(
      <TestWrapper>
        <Card testID="test-card" style={customStyle}>
          <Card.Content>
            <Text>Test Content</Text>
          </Card.Content>
        </Card>
      </TestWrapper>,
    );

    const cardElement = getByTestId('test-card');
    expect(cardElement.props.style).toEqual(
      expect.arrayContaining([expect.objectContaining(customStyle)]),
    );
  });
});
