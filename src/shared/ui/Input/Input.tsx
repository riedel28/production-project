import { InputHTMLAttributes, memo, ChangeEvent } from 'react';

import { cx, Mods } from 'shared/lib/cx';

import cls from './Input.module.scss';

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'value' | 'onChange' | 'readOnly'
>;

export interface InputProps extends HTMLInputProps {
  className?: string;
  label?: string;
  type?: 'text' | 'password';
  value?: string | number;
  onChange?: (value: string) => void;
  readonly?: boolean;
}

export const Input = memo((props: InputProps) => {
  const { className, label, type = 'text', value, onChange, readonly, ...rest } = props;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  const mods: Mods = {
    [cls.readonly]: readonly
  };

  return (
    <div className={cls.inputWrapper}>
      {label && (
        <label htmlFor={rest.id} className={cls.label}>
          {label}
        </label>
      )}
      <input
        type={type}
        id={rest.id}
        value={value}
        onChange={handleChange}
        className={cx(cls.input, mods, [className])}
        readOnly={readonly}
        {...rest}
      />
    </div>
  );
});
