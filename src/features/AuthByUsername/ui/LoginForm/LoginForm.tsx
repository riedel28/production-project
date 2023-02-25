import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { cx } from 'shared/lib/cx';
import { Input } from 'shared/ui/Input/Input';
import { Button } from 'shared/ui/Button/Button';

import cls from './LoginForm.module.scss';

export interface LoginFormProps {
  className?: string;
}

export const LoginForm: FC<LoginFormProps> = (props) => {
  const { className } = props;

  const { t } = useTranslation();

  return (
    <form className={cx(cls.loginForm, {}, [className])}>
      <Input label={t('username')} id="username" />
      <Input label={t('password')} id="password" type="password" />

      <Button type="submit" className={cls.loginBtn}>
        {t('Login')}
      </Button>
    </form>
  );
};
