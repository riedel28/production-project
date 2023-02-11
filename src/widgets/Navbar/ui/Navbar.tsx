import { useTranslation } from 'react-i18next';

import { AppLink } from 'shared/ui/AppLink/AppLink';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LanguageSwitcher } from 'widgets/LanguageSwitcher';
import { cx } from 'shared/lib/cx';

import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();

  return (
    <nav className={cx(cls.navbar, {}, [className])}>
      <div className={cx(cls.links)}>
        <AppLink to="/">{t('MainPage.title')}</AppLink>
        <AppLink to="/about">{t('AboutPage.title')}</AppLink>
        <LanguageSwitcher />
        <ThemeSwitcher />
      </div>
    </nav>
  );
};
