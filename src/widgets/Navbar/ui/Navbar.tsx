import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { cx } from 'shared/lib/cx';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LanguageSwitcher } from 'widgets/LanguageSwitcher';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { LoginModal } from 'features/AuthByUsername';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserAuthData, userActions } from 'entities/User';

import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const authData = useSelector(selectUserAuthData);

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleCloseModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  const handleShowModal = useCallback(() => {
    setIsOpen(true);
  }, []);

  const handleLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  if (authData) {
    return (
      <div className={cx(cls.navbar, {}, [className])}>
        <Button theme={ThemeButton.OUTLINE} className={cls.links} onClick={handleLogout}>
          {t('Logout')}
        </Button>
      </div>
    );
  }

  return (
    <nav className={cx(cls.navbar, {}, [className])}>
      <div className={cx(cls.links)}>
        <LanguageSwitcher short />
        <ThemeSwitcher />
        <Button theme={ThemeButton.OUTLINE} onClick={handleShowModal}>
          {t('Login')}
        </Button>
        {isOpen && <LoginModal isOpen={isOpen} onClose={handleCloseModal} />}
      </div>
    </nav>
  );
});
