import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { NotFoundPage } from './NotFoundPage';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'pages/NotFoundPage',
  component: NotFoundPage,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof NotFoundPage>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof NotFoundPage> = args => (
  <NotFoundPage {...args} />
);

export const Light = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Light.args = {};
