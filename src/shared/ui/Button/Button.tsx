import { ButtonHTMLAttributes, memo, ReactNode } from 'react';

import { cx } from 'shared/lib/cx';

import cls from './Button.module.scss';

export enum ThemeButton {
  DEFAULT = 'default',
  OUTLINE = 'outline',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'backgroundInverted'
}

export enum SizeButton {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
  square?: boolean;
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  children?: ReactNode;
}

export const Button = memo((props: ButtonProps) => {
  const { children, className, theme, square, disabled, size = SizeButton.MEDIUM, ...rest } = props;

  const mods: Record<string, boolean> = {
    [cls[theme]]: true,
    [cls.square]: square,
    [cls[size]]: true,
    [cls.disabled]: disabled
  };

  return (
    <button
      type="button"
      className={cx(cls.button, mods, [className, cls[theme]])}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
});
