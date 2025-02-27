import React from 'react';
import { render } from '@testing-library/react-native';
import { Typography } from '../Typography';
import { ThemeProvider } from '../../theme/ThemeProvider';

const TestWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <ThemeProvider>{children}</ThemeProvider>
);

describe('Typography', () => {
  it('renders correctly with default props', () => {
    const { getByText } = render(
      <TestWrapper>
        <Typography>Test Text</Typography>
      </TestWrapper>,
    );

    expect(getByText('Test Text')).toBeTruthy();
  });

  it('renders different variants correctly', () => {
    const variants = ['h1', 'h2', 'h3', 'subtitle1', 'body1', 'body2', 'caption'] as const;
    const { rerender, getByText } = render(
      <TestWrapper>
        <Typography variant="h1">Test Text</Typography>
      </TestWrapper>,
    );

    variants.forEach(variant => {
      rerender(
        <TestWrapper>
          <Typography variant={variant}>Test Text</Typography>
        </TestWrapper>,
      );
      expect(getByText('Test Text')).toBeTruthy();
    });
  });

  it('applies custom color correctly', () => {
    const { getByText } = render(
      <TestWrapper>
        <Typography color="#FF0000">Test Text</Typography>
      </TestWrapper>,
    );

    const textElement = getByText('Test Text');
    expect(textElement.props.style).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          color: '#FF0000',
        }),
      ]),
    );
  });

  it('applies custom alignment correctly', () => {
    const { getByText } = render(
      <TestWrapper>
        <Typography align="center">Test Text</Typography>
      </TestWrapper>,
    );

    const textElement = getByText('Test Text');
    expect(textElement.props.style).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          textAlign: 'center',
        }),
      ]),
    );
  });

  it('applies custom style correctly', () => {
    const customStyle = { marginTop: 10 };
    const { getByText } = render(
      <TestWrapper>
        <Typography style={customStyle}>Test Text</Typography>
      </TestWrapper>,
    );

    const textElement = getByText('Test Text');
    expect(textElement.props.style).toEqual(expect.arrayContaining([customStyle]));
  });
});
