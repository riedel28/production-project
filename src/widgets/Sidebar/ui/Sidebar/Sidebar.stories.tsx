import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Sidebar } from './Sidebar';

export default {
  title: 'widget/Sidebar',
  component: Sidebar,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = (args) => {
  return <Sidebar {...args} />;
};

export const Light = Template.bind({});
Light.args = {
  children: 'Button'
};

export const Dark = Template.bind({});
Dark.args = {
  children: 'Button'
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
