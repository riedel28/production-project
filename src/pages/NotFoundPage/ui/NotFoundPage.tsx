import { type FC } from 'react';
import { useTranslation } from 'react-i18next';

import { cx } from 'shared/lib/cx';

import cls from './NotFoundPage.module.scss';

interface NotFoundPageProps {
  className?: string;
}

export const NotFoundPage: FC<NotFoundPageProps> = () => {
  const { t } = useTranslation();

  return (
    <div className={cx(cls.notFound, {}, [])}>{t('NotFoundPage.title')}</div>
  );
};
