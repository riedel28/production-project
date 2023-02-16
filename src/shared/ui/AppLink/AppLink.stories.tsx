import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { AppLink, AppLinkTheme } from './AppLink';
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator/RouterDecorator';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'shared/AppLink',
  component: AppLink,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' }
  },
  args: {
    to: '/'
  }
} as ComponentMeta<typeof AppLink>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof AppLink> = args => <AppLink {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  children: 'Text',
  theme: AppLinkTheme.PRIMARY
};
Primary.decorators = [RouterDecorator];

export const Secondary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Secondary.args = {
  children: 'Text',
  theme: AppLinkTheme.SECONDARY
};
Secondary.decorators = [RouterDecorator];
