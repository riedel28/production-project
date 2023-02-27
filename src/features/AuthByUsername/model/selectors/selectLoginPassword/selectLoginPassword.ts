import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

export const selectLoginPassword = (state: StateSchema) => {
  return state?.loginForm?.password || '';
};
