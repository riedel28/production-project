import { lazy } from 'react';

export const AboutPageAsync = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => {
      // @ts-expect-error
      resolve(import('./AboutPage'));
    }, 1500);
  });
});
