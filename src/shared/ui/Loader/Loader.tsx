import { FC } from 'react';

import { cx } from 'shared/lib/cx';

import './Loader.scss';

interface LoaderProps {
  className?: string;
}

export const Loader: FC<LoaderProps> = ({ className }) => {
  return (
    <div className={cx('loader-ring', {}, [className])}>
      <div />
      <div />
      <div />
      <div />
    </div>
  );
};
