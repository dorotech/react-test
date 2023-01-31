import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { SearchFilters } from '.';

describe('<SearchFilters />', () => {
  it('should toggle an option when its clicked twice', async () => {
    const user = userEvent.setup();
    render(<SearchFilters onChange={() => null} />);

    const firstOption = screen.getAllByRole('checkbox')[0];

    expect(firstOption).not.toBeChecked();

    await user.click(firstOption);

    expect(firstOption).toBeChecked();
  });

  it('should call onChange when an option is clicked', async () => {
    const user = userEvent.setup();
    const onChange = jest.fn();

    render(<SearchFilters onChange={onChange} />);

    const firstOption = screen.getAllByRole('checkbox')[0];

    await user.click(firstOption);

    expect(onChange).toHaveBeenCalledTimes(2);
  });
});
