import { type FC } from 'react';
import { useTranslation } from 'react-i18next';

import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { cx } from 'shared/lib/cx';

import cls from './LanguageSwitcher.module.scss';

interface LanguageSwitcherProps {
  className?: string
}

export const LanguageSwitcher: FC<LanguageSwitcherProps> = ({ className }) => {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const currentLanguage = i18n.language;
    const nextLanguage = currentLanguage === 'en' ? 'ru' : 'en';

    i18n.changeLanguage(nextLanguage);
  };

  return (
    <div className={cx(cls.languageSwitcher, {}, [className])}>
      <Button theme={ThemeButton.DEFAULT} onClick={toggleLanguage}>
        {t('Language')}
      </Button>
    </div>
  );
};
