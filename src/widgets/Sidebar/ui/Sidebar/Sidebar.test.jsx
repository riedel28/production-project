import { screen, fireEvent } from '@testing-library/react';

import { renderWithTranslation } from 'shared/lib/tests/renderWithTranslation';

import { Sidebar } from './Sidebar';

describe('Sidebar', () => {
  test('renders correctly', () => {
    renderWithTranslation(<Sidebar />);

    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  test('toggles sidebar', () => {
    renderWithTranslation(<Sidebar />);

    const toggleButton = screen.getByTestId('sidebar-toggle');

    fireEvent.click(toggleButton);

    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');

    fireEvent.click(toggleButton);

    expect(screen.getByTestId('sidebar')).not.toHaveClass('collapsed');
  });
});
