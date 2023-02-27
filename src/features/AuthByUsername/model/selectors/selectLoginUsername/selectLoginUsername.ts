import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

export const selectLoginUsername = (state: StateSchema) => {
  return state?.loginForm?.username || '';
};
