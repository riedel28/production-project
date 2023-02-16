import React from 'react';
import { Story } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';

import 'app/styles/index.scss';

export const RouterDecorator = (story: () => Story) => {
  return <BrowserRouter>{story()}</BrowserRouter>;
};
