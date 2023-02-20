import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Button, ThemeButton, SizeButton } from './Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'shared/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => {
  return <Button {...args} />;
};

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  children: 'Button'
};
Primary.decorators = [ThemeDecorator(Theme.DARK)];

export const Default = Template.bind({});
Default.args = {
  children: 'Button',
  theme: ThemeButton.DEFAULT
};

export const Outline = Template.bind({});
Outline.args = {
  children: 'Button',
  theme: ThemeButton.OUTLINE
};
Outline.decorators = [ThemeDecorator(Theme.DARK)];

export const BackgroundTheme = Template.bind({});
BackgroundTheme.args = {
  children: 'Button',
  theme: ThemeButton.BACKGROUND
};

export const BackgroundThemeInverted = Template.bind({});
BackgroundThemeInverted.args = {
  children: 'Button',
  theme: ThemeButton.BACKGROUND_INVERTED
};

export const Square = Template.bind({});
Square.args = {
  children: '',
  square: true
};

export const Small = Template.bind({});
Small.args = {
  children: 'Button',
  size: SizeButton.SMALL
};

export const Medium = Template.bind({});
Medium.args = {
  children: 'Button',
  size: SizeButton.MEDIUM
};

export const Large = Template.bind({});
Large.args = {
  children: 'Button',
  size: SizeButton.LARGE
};
