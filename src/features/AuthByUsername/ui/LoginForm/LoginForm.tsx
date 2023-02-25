import { useCallback, memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { cx } from 'shared/lib/cx';
import { Input } from 'shared/ui/Input/Input';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { Button } from 'shared/ui/Button/Button';
import { loginActions } from '../../model/slice/loginSlice';
import { selectLoginState } from '../../model/selectors/selectLoginState/selectLoginState';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';

import cls from './LoginForm.module.scss';

export interface LoginFormProps {
  className?: string;
}

export const LoginForm = memo(({ className }: LoginFormProps) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const loginForm = useSelector(selectLoginState);

  const handleChangeUsername = useCallback(
    (value: string) => {
      dispatch(loginActions.setUsername(value));
    },
    [dispatch]
  );

  const handleChangePassword = useCallback(
    (value: string) => {
      dispatch(loginActions.setPassword(value));
    },
    [dispatch]
  );

  const handleSubmit = useCallback(() => {
    dispatch(loginByUsername({ username: loginForm.username, password: loginForm.password }));
  }, [dispatch, loginForm.username, loginForm.password]);

  return (
    <form className={cx(cls.loginForm, {}, [className])}>
      <Text title={t('Auth.form')} />
      {loginForm.error && <Text text={t('Wrong username or password')} theme={TextTheme.ERROR} />}
      <Input
        label={t('username')}
        id="username"
        value={loginForm.username}
        onChange={handleChangeUsername}
      />
      <Input
        label={t('password')}
        id="password"
        type="password"
        value={loginForm.password}
        onChange={handleChangePassword}
      />

      <Button
        type="submit"
        className={cls.loginBtn}
        onClick={handleSubmit}
        disabled={loginForm.isLoading}
      >
        {t('Login')}
      </Button>
    </form>
  );
});
