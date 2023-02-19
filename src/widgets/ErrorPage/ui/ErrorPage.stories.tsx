import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ErrorPage } from './ErrorPage';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'widget/ErrorPage',
  component: ErrorPage,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof ErrorPage>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ErrorPage> = (args) => {
  return (
    <ErrorPage {...args} />
  );
};

export const Light = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Light.args = {
  children: 'Button'
};
