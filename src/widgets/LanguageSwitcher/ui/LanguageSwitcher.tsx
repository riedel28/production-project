import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { cx } from 'shared/lib/cx';

import cls from './LanguageSwitcher.module.scss';

interface LanguageSwitcherProps {
  className?: string;
  short?: boolean;
}

export const LanguageSwitcher = memo(({ className, short = false }: LanguageSwitcherProps) => {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const currentLanguage = i18n.language;
    const nextLanguage = currentLanguage === 'en' ? 'ru' : 'en';

    i18n.changeLanguage(nextLanguage);
  };

  return (
    <div className={cx(cls.languageSwitcher, {}, [className])}>
      <Button theme={ButtonTheme.DEFAULT} onClick={toggleLanguage}>
        {t(short ? 'Language.short' : 'Language')}
      </Button>
    </div>
  );
});
