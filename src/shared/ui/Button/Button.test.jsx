import { render, screen } from '@testing-library/react';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';

describe('Button', () => {
  test('Test render', () => {
    render(<Button>123</Button>);
    expect(screen.getByText('123')).toBeInTheDocument();
  });

  test('Test clear theme', () => {
    render(<Button theme={ButtonTheme.CLEAR}>456</Button>);
    expect(screen.getByText('456')).toHaveClass('clear');
    screen.debug();
  });
});
