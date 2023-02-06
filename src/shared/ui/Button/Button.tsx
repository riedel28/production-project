import { FC, ButtonHTMLAttributes } from 'react';

import { cx } from 'shared/lib/cx';

import cls from './Button.module.scss';

export enum ThemeButton {
  DEFAULT = 'default'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
}

export const Button: FC<ButtonProps> = props => {
  const { children, className, theme, ...rest } = props;

  return (
    <button className={cx(cls.button, {}, [className, cls[theme]])} {...rest}>
      {children}
    </button>
  );
};
