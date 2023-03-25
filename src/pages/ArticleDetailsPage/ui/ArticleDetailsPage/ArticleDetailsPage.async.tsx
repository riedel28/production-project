import { lazy } from 'react';

export const ArticleDetailsPageAsync = lazy(() => {
  return new Promise((resolve) => {
    // @ts-ignore
    setTimeout(() => resolve(import('./ArticleDetailsPage')), 400);
  });
});
