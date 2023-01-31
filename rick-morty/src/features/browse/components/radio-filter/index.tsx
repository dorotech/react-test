import { Button } from '@/features/common/components/button';

interface IRadioFilter {
  name: string;
  onChange(value: string): void;
  value?: string;
  options: { value: string; label: string }[];
}

export function RadioFilter({ onChange, options, value, name }: IRadioFilter) {
  return (
    <div className="relative flex items-center gap-3 p-4 rounded border border-zinc-400 border-dashed">
      <span className="absolute top-0 left-2 leading-[1] translate-y-[-60%] bg-zinc-900">
        {name}
      </span>

      {options.map((option) => (
        <Button
          name={name}
          role="checkbox"
          aria-checked={option.value === value}
          type="button"
          key={option.value}
          className={`${option.value === value ? 'bg-amber-600' : undefined}`}
          onClick={() => onChange(option.value)}
        >
          {option.label}
        </Button>
      ))}
    </div>
  );
}
