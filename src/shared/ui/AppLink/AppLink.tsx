import { memo, ReactNode } from 'react';
import { Link, type LinkProps } from 'react-router-dom';

import { cx } from 'shared/lib/cx';

import cls from './AppLink.module.scss';

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary'
}

interface AppLinkProps extends LinkProps {
  className?: string
  theme?: AppLinkTheme;
  children?: ReactNode;
}

export const AppLink = memo((props: AppLinkProps) => {
  const {
    to,
    children,
    className,
    theme = AppLinkTheme.PRIMARY,
    ...restProps
  } = props;

  return (
    <Link
      to={to}
      className={cx(cls.link, {}, [className, cls[theme]])}
      {...restProps}
    >
      {children}
    </Link>
  );
});
