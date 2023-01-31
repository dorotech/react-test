import { useEffect } from 'react';
import { RadioFilter } from '../radio-filter';
import { useInputs, INITIAL_STATE } from './use-inputs';

interface ISearchFilters {
  onChange(inputs: typeof INITIAL_STATE): void;
}

const STATUS = [
  {
    label: 'Alive',
    value: 'alive',
  },
  {
    label: 'Dead',
    value: 'dead',
  },
  {
    label: 'Unknown',
    value: 'unknown',
  },
];

const GENDER = [
  {
    label: 'Male',
    value: 'male',
  },
  {
    label: 'Female',
    value: 'female',
  },
  {
    label: 'Genderless',
    value: 'genderless',
  },
];

export function SearchFilters({ onChange }: ISearchFilters) {
  const { inputs, dispatch } = useInputs();

  useEffect(() => {
    onChange(inputs);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputs]);

  return (
    <div className="flex items-center gap-4">
      <RadioFilter
        name="Status"
        value={inputs.status}
        options={STATUS}
        onChange={(value) => dispatch({ key: 'status', value })}
      />

      <RadioFilter
        name="Gender"
        value={inputs.gender}
        options={GENDER}
        onChange={(value) => dispatch({ key: 'gender', value })}
      />
    </div>
  );
}
