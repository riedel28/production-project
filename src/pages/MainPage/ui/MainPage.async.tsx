import { lazy } from 'react';

export const MainPageAsync = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => {
      // @ts-expect-error
      resolve(import('./MainPage'));
    }, 1500);
  });
});
