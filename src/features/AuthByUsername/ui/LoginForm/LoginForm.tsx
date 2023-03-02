import { useCallback, memo, useEffect } from 'react';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { cx } from 'shared/lib/cx';
import { Input } from 'shared/ui/Input/Input';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { Button } from 'shared/ui/Button/Button';
import {
  DynamicModuleLoader,
  ReducersList
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import { selectLoginUsername } from '../../model/selectors/selectLoginUsername/selectLoginUsername';
import { selectLoginPassword } from '../../model/selectors/selectLoginPassword/selectLoginPassword';
import { selectLoginIsLoading } from '../../model/selectors/selectLoginIsLoading/selectLoginIsLoading';
import { selectLoginError } from '../../model/selectors/selectLoginError/selectLoginError';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';

import cls from './LoginForm.module.scss';

export interface LoginFormProps {
  className?: string;
  onSuccess: () => void;
}

const initialReducers: ReducersList = {
  loginForm: loginReducer
};

const LoginForm = memo(({ className, onSuccess }: LoginFormProps) => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  const username = useSelector(selectLoginUsername);
  const password = useSelector(selectLoginPassword);
  const isLoading = useSelector(selectLoginIsLoading);
  const error = useSelector(selectLoginError);

  // const store = useStore() as ReduxStoreWithManager;

  // useEffect(() => {
  //   store.reducerManager.add('loginForm', loginReducer);

  //   dispatch({ type: '@INIT loginForm reducer' });

  //   return () => {
  //     store.reducerManager.remove('loginForm');
  //     dispatch({ type: '@DESTROY loginForm reducer' });
  //   };
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

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

  const handleSubmit = useCallback(async () => {
    const result = await dispatch(loginByUsername({ username, password }));
    if (result.meta.requestStatus === 'fulfilled') {
      onSuccess();
    }
  }, [onSuccess, dispatch, password, username]);

  return (
    <DynamicModuleLoader removeAfterUnmount reducers={initialReducers}>
      <form className={cx(cls.loginForm, {}, [className])}>
        <Text title={t('Auth.form')} />
        {error && <Text text={t('Wrong username or password')} theme={TextTheme.ERROR} />}
        <Input
          label={t('username')}
          id="username"
          value={username}
          onChange={handleChangeUsername}
        />
        <Input
          label={t('password')}
          id="password"
          type="password"
          value={password}
          onChange={handleChangePassword}
        />

        <Button type="submit" className={cls.loginBtn} onClick={handleSubmit} disabled={isLoading}>
          {t('Login')}
        </Button>
      </form>
    </DynamicModuleLoader>
  );
});

export default LoginForm;
