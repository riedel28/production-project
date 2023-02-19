import React from 'react';
import { Story } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProvider';

export const ThemeDecorator = (theme: Theme) => {
  return (StoryComponent: Story) => {
    return (
      <div className={`app ${theme}`}>
        <StoryComponent />
      </div>
    );
  };
};

ThemeDecorator.displayName = 'ThemeDecorator';