import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

export const selectLoginIsLoading = (state: StateSchema) => {
  return state?.loginForm?.isLoading || false;
};
