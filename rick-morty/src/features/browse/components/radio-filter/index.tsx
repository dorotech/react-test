import { Button } from '@/features/common/components/button';

interface IRadioFilter {
  name: string;
  onChange(value?: string): void;
  value?: string;
  options: { value: string; label: string }[];
}

export function RadioFilter({ onChange, options, value, name }: IRadioFilter) {
  return (
    <div className="flex-1 relative flex items-center justify-center gap-3 p-4 rounded border border-zinc-400 border-dashed">
      <span className="absolute top-0 left-2 leading-[1] translate-y-[-60%] bg-zinc-100 dark:bg-zinc-900">
        {name}
      </span>

      {options.map((option) => {
        const isChecked = option.value === value;
        return (
          <Button
            name={name}
            role="checkbox"
            aria-checked={isChecked}
            type="button"
            key={option.value}
            className={`${isChecked ? 'bg-amber-600' : undefined}`}
            onClick={() => onChange(isChecked ? undefined : option.value)}
          >
            {option.label}
          </Button>
        );
      })}
    </div>
  );
}
