import { type FC } from 'react';

import { cx } from 'shared/lib/cx';
import { Loader } from 'shared/ui/Loader/Loader';

import './PageLoader.module.scss';

interface PageLoaderProps {
  className?: string;
}

export const PageLoader: FC<PageLoaderProps> = () => {
  return (
    <div className={cx('pageLoader', {}, [])}>
      <Loader />
    </div>
  );
};
