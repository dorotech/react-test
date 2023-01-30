import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { ThemeToggler } from '.';

describe('<ThemeToggler />', () => {
  it('should toggle between light and dark mode', async () => {
    const user = userEvent.setup();
    render(<ThemeToggler />);

    const toggler = screen.getByRole('button');

    expect(screen.getByTestId('dark')).toBeInTheDocument();
    await user.click(toggler);

    expect(screen.getByTestId('light')).toBeInTheDocument();
    await user.click(toggler);

    expect(screen.getByTestId('dark')).toBeInTheDocument();
  });
});
