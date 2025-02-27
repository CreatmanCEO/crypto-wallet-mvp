import React, { createContext, useContext, useState, ReactNode } from 'react';
import { TextStyle } from 'react-native';

interface Theme {
  colors: {
    primary: string;
    secondary: string;
    background: string;
    backgroundGray: string;
    card: string;
    text: string;
    border: string;
    notification: string;
    graySmallText: string;
    tabBarBackground: string;
    grayBar: string;
    yellow: string;
    yellowTapbar: string;
    grayUI: string;
    greenComplete: string;
    redError: string;
    white: string;
    green: string;
    red: string;
    black: string;
  };
  typography: {
    h1: {
      fontFamily: string;
      fontSize: number;
      fontWeight: TextStyle['fontWeight'];
      lineHeight: number;
    };
    h2: {
      fontFamily: string;
      fontSize: number;
      fontWeight: TextStyle['fontWeight'];
      lineHeight: number;
    };
    h3: {
      fontFamily: string;
      fontSize: number;
      fontWeight: TextStyle['fontWeight'];
      lineHeight: number;
    };
    h4: {
      fontFamily: string;
      fontSize: number;
      fontWeight: TextStyle['fontWeight'];
      lineHeight: number;
    };
    bodyText: {
      fontFamily: string;
      fontSize: number;
      fontWeight: TextStyle['fontWeight'];
      lineHeight: number;
    };
    buttonText: {
      fontFamily: string;
      fontSize: number;
      fontWeight: TextStyle['fontWeight'];
      lineHeight: number;
    };
    smallText: {
      fontFamily: string;
      fontSize: number;
      fontWeight: TextStyle['fontWeight'];
      lineHeight: number;
    };
  };
  spacing: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
  };
}

const darkTheme: Theme = {
  colors: {
    primary: '#0A84FF',
    secondary: '#5E5CE6',
    background: '#0D0802',
    card: '#121212',
    text: '#FFFFFF',
    border: '#38383A',
    notification: '#FF453A',
    // Новые цвета
    backgroundGray: '#1C1C1E',
    tabBarBackground: '#1C1C1E',
    yellow: '#EBB813',
    yellowTapbar: '#EBB813',
    grayBar: '#48484A',
    graySmallText: '#8E8E93',
    grayUI: '#222222',
    greenComplete: '#40D332',
    redError: '#D33232',
    white: '#FFFFFF',
    green: '#40D332',
    red: '#D33232',
    black: '#000000',
  },
  typography: {
    h1: {
      fontFamily: 'Rubik',
      fontSize: 32,
      fontWeight: 'bold',
      lineHeight: 40,
    },
    h2: {
      fontFamily: 'Rubik',
      fontSize: 24,
      fontWeight: 'bold',
      lineHeight: 32,
    },
    h3: {
      fontFamily: 'Rubik',
      fontSize: 20,
      fontWeight: 'bold',
      lineHeight: 28,
    },
    h4: {
      fontFamily: 'Rubik',
      fontSize: 18,
      fontWeight: 'bold',
      lineHeight: 24,
    },
    bodyText: {
      fontFamily: 'Rubik',
      fontSize: 16,
      fontWeight: 'normal',
      lineHeight: 22,
    },
    buttonText: {
      fontFamily: 'Rubik',
      fontSize: 14,
      fontWeight: 'bold',
      lineHeight: 18,
    },
    smallText: {
      fontFamily: 'Rubik',
      fontSize: 12,
      fontWeight: 'normal',
      lineHeight: 16,
    },
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
  },
};

// Удаляем светлую тему, так как в дизайне используется только темная
// Но оставляем структуру в случае, если светлая тема понадобится в будущем
const lightTheme: Theme = {
  colors: {
    primary: '#007AFF',
    secondary: '#5856D6',
    background: '#F2F2F7',
    backgroundGray: '#1C1C1E',
    card: '#FFFFFF',
    text: '#000000',
    border: '#C7C7CC',
    notification: '#FF3B30',
    graySmallText: '#8E8E93',
    tabBarBackground: '#F9F9F9',
    grayBar: '#48484A',
    yellow: '#EBB813',
    yellowTapbar: '#EBB813',
    white: '#FFFFFF',
    green: '#40D332',
    red: '#D33232',
    black: '#000000',
    grayUI: '#EEEEEE',
    greenComplete: '#40D332',
    redError: '#D33232',
  },
  typography: {
    h1: {
      fontFamily: 'Rubik',
      fontSize: 32,
      fontWeight: 'bold',
      lineHeight: 40,
    },
    h2: {
      fontFamily: 'Rubik',
      fontSize: 24,
      fontWeight: 'bold',
      lineHeight: 32,
    },
    h3: {
      fontFamily: 'Rubik',
      fontSize: 20,
      fontWeight: 'bold',
      lineHeight: 28,
    },
    h4: {
      fontFamily: 'Rubik',
      fontSize: 18,
      fontWeight: 'bold',
      lineHeight: 24,
    },
    bodyText: {
      fontFamily: 'Rubik',
      fontSize: 16,
      fontWeight: 'normal',
      lineHeight: 22,
    },
    buttonText: {
      fontFamily: 'Rubik',
      fontSize: 14,
      fontWeight: 'bold',
      lineHeight: 18,
    },
    smallText: {
      fontFamily: 'Rubik',
      fontSize: 12,
      fontWeight: 'normal',
      lineHeight: 16,
    },
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
  },
};

interface ThemeContextType {
  theme: Theme;
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  // По умолчанию используем темную тему
  const [isDark, setIsDark] = useState(true);
  const theme = isDark ? darkTheme : lightTheme;

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <ThemeContext.Provider value={{ theme, isDarkMode: isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
