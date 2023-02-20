import { ReactNode } from 'react';
import { MemoryRouter } from 'react-router-dom';

import { render } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';

import i18nForTests from '../../config/i18n/i18nForTests';

export interface componentRenderOptions {
  route?: string;
}

export const componentRender = (
  ui: ReactNode,
  options: componentRenderOptions = {}
) => {
  const { route = '/' } = options;

  return render(
    <MemoryRouter initialEntries={[route]}>
      <I18nextProvider i18n={i18nForTests}>{ui}</I18nextProvider>
    </MemoryRouter>
  );
};
