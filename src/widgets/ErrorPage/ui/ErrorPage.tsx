import { useTranslation } from 'react-i18next';

import { Button } from 'shared/ui/Button/Button';
import cls from './ErrorPage.module.scss';

import { cx } from 'shared/lib/cx';

interface ErrorPageProps {
  className?: string;
}

export const ErrorPage = ({ className }: ErrorPageProps) => {
  const { t } = useTranslation();

  const reloadPage = () => {
    window.location.reload();
  };

  return (
    <div className={cx(cls.errorPage, {}, [className])}>
      <p>{t('ErrorPage.title')}</p>
      <Button onClick={reloadPage}>{t('ErrorPage.button')}</Button>
    </div>
  );
};
