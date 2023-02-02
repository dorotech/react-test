import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { RadioFilter } from '.';

const options = [
  { label: 'A', value: 'a' },
  { label: 'B', value: 'b' },
];

describe('<RadioFilter />', () => {
  it('should display all options', () => {
    render(<RadioFilter name="test" options={options} onChange={() => null} />);

    options.forEach((option) => {
      expect(screen.getByRole('checkbox', { name: option.label })).toBeInTheDocument();
    });
  });

  it('should call onChange when a option is clicked', async () => {
    const onChange = jest.fn();
    const user = userEvent.setup();

    render(<RadioFilter name="test" options={options} onChange={onChange} />);

    const option1 = screen.getByText(options[0].label);

    await user.click(option1);

    expect(onChange).toBeCalledTimes(1);
  });
});
