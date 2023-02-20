import { FC, ButtonHTMLAttributes } from 'react';

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
}

export const Button: FC<ButtonProps> = (props) => {
  const {
    children,
    className,
    theme,
    square,
    size = SizeButton.MEDIUM,
    ...rest
  } = props;

  const mods: Record<string, boolean> = {
    [cls[theme]]: true,
    [cls.square]: square,
    [cls[size]]: true
  };

  return (
    <button
      type="button"
      className={cx(cls.button, mods, [className, cls[theme]])}
      {...rest}
    >
      {children}
    </button>
  );
};
