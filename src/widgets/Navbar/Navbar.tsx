import { AppLink } from 'shared/ui/AppLink/AppLink';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { cx } from 'shared/lib/cx';

import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  return (
    <nav className={cx(cls.navbar, {}, [className])}>
      <div className={cx(cls.links)}>
        <ThemeSwitcher />
        <AppLink to="/">Main</AppLink>
        <AppLink to="/about">About</AppLink>
      </div>
    </nav>
  );
};
