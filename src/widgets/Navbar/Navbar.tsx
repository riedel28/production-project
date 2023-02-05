import { AppLink } from 'shared/ui/AppLink/AppLink';
import { useTheme } from 'app/providers/ThemeProvider';
import { cx } from 'shared/lib/cx';

import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const { toggleTheme } = useTheme();

  return (
    <nav className={cx(cls.navbar, {}, [className])}>
      <div className={cx(cls.links)}>
        <button onClick={toggleTheme}>Toggle theme</button>
        <AppLink to="/">Main</AppLink>
        <AppLink to="/about">About</AppLink>
      </div>
    </nav>
  );
};
