import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { cx } from 'shared/lib/cx';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LanguageSwitcher } from 'widgets/LanguageSwitcher';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { LoginModal } from 'features/AuthByUsername';

import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleCloseModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  const handleShowModal = useCallback(() => {
    setIsOpen(true);
  }, []);

  return (
    <nav className={cx(cls.navbar, {}, [className])}>
      <div className={cx(cls.links)}>
        <LanguageSwitcher short />
        <ThemeSwitcher />
        <Button theme={ThemeButton.OUTLINE} onClick={handleShowModal}>
          {t('Login')}
        </Button>
        <LoginModal isOpen={isOpen} onClose={handleCloseModal} />
      </div>
    </nav>
  );
};
