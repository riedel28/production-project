import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LanguageSwitcher } from 'widgets/LanguageSwitcher';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { cx } from 'shared/lib/cx';

import { Modal } from 'shared/ui/Modal/Modal';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleToggleModal = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  return (
    <nav className={cx(cls.navbar, {}, [className])}>
      <div className={cx(cls.links)}>
        <LanguageSwitcher short />
        <ThemeSwitcher />
        <Button
          theme={ThemeButton.OUTLINE}
          onClick={() => {
            setIsOpen(true);
          }}
        >
          {t('Login')}
        </Button>
        <Modal isOpen={isOpen} onClose={handleToggleModal}>
          123
        </Modal>
      </div>
    </nav>
  );
};
