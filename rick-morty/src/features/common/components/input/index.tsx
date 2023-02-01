import { InputHTMLAttributes } from 'react';

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  icon?: JSX.Element;
  label?: string;
}

export function Input({ label, className, icon, ...rest }: IInput) {
  return (
    <div className="flex flex-col gap-1">
      {!!label && <label htmlFor={rest.id}>{label}</label>}
      <div className="flex items-center justify-between pr-2 transition rounded border border-zinc-700 bg-zinc-800 focus-within:ring-2 ring-amber-300 ring-offset-4 ring-offset-zinc-900">
        <input {...rest} className={`${className} w-full p-2 pl-3 bg-transparent outline-none`} />

        {!!icon && icon}
      </div>
    </div>
  );
}
