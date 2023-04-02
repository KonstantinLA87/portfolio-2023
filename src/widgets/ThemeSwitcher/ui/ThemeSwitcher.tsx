import './ThemeSwitcher.scss'
import { classNames } from 'shared/lib/classNames/classNames';
import { FC, memo } from 'react';
import { Theme, useTheme } from 'app/providers/ThemeProvider';
import { ReactComponent as LightIcon } from '../../../shared/assets/img/theme-light.svg';
import { ReactComponent as DarkIcon } from '../../../shared/assets/img/theme-dark.svg';

interface ThemeSwitcherProps {
  className?: string
}

export const ThemeSwitcher: FC = memo(({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className={classNames('ThemeSwitcher', {}, [theme === Theme.LIGHT ? 'light' : 'dark'])}
      onClick={toggleTheme}
      >
        <div>
          <DarkIcon />
        </div>
        <div>
          <LightIcon />
        </div>
    </button>
  );
});
