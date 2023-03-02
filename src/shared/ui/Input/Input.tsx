import { InputHTMLAttributes, memo, ChangeEvent } from 'react';

import { cx } from 'shared/lib/cx';

import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>;

export interface InputProps extends HTMLInputProps {
  className?: string;
  label?: string;
  type?: 'text' | 'password';
  value?: string;
  onChange?: (value: string) => void;
}

export const Input = memo((props: InputProps) => {
  const { className, label, type = 'text', value, onChange, ...rest } = props;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
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
        className={cx(cls.input, {}, [className])}
        {...rest}
      />
    </div>
  );
});
