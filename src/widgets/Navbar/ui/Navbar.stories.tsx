import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { RouterDecorator } from 'shared/config/storybook/RouterDecorator/RouterDecorator';
import { Navbar } from './Navbar';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'widget/Navbar',
  component: Navbar,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof Navbar>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Navbar> = (args) => { return <Navbar {...args} />; };

export const Light = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Light.args = {
  children: 'Button'
};
Light.decorators = [RouterDecorator];
