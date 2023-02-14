import { render, screen } from '@testing-library/react';

import { Button, ThemeButton } from './Button';

describe('Button', () => {
  test('renders correctly', () => {
    render(<Button>TEST</Button>);

    expect(screen.getByText('TEST')).toBeInTheDocument();
  });

  test('to have default classname', () => {
    render(<Button theme={ThemeButton.DEFAULT}>TEST</Button>);

    expect(screen.getByText('TEST')).toHaveClass('default');
  });
});
