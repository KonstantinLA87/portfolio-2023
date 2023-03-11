import { FC, ReactNode, useMemo, useState } from 'react';
import { Theme, LOCAL_STORAGE_THEME_KEY, ThemeContext } from '../lib/ThemeContext';

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT;

interface ThemeProviderProps {
  initialTheme?: Theme;
  children?: ReactNode;
}

const ThemeProvider: FC<ThemeProviderProps> = ({ initialTheme, children }) => {
  
  const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme);

  const defaultProps = useMemo(() => ({
    theme,
    setTheme
  }), [theme])

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;