import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

export const selectLoginError = (state: StateSchema) => {
  return state?.loginForm?.error || '';
};
