import { type FC } from 'react';

import { cx } from 'shared/lib/cx';
import { useTheme, Theme } from 'app/providers/ThemeProvider';
import { Button, ThemeButton } from 'shared/ui/Button/Button';

import MoonIcon from 'shared/assets/icons/moon-icon.svg';
import SunIcon from 'shared/assets/icons/sun-icon.svg';

import cls from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
  className?: string
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = props => {
  const { className } = props;

  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      theme={ThemeButton.DEFAULT}
      className={cx(cls.themeSwitcher, {}, [className])}
      onClick={toggleTheme}
    >
      {theme === Theme.DARK
        ? (
          <MoonIcon className={cx(cls.themeIcon)} />
        )
        : (
          <SunIcon className={cx(cls.themeIcon)} />
        )}
    </Button>
  );
};
