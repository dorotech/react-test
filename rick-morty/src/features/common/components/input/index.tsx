import { InputHTMLAttributes } from 'react';

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  icon?: JSX.Element;
}

export function Input({ className, icon, ...rest }: IInput) {
  return (
    <div className="flex items-center justify-between transition rounded border border-zinc-700 bg-zinc-800 p-2 pl-3 focus-within:ring-2 ring-amber-300 ring-offset-4 ring-offset-zinc-900">
      <input {...rest} className={`${className} bg-transparent outline-none`} />

      {!!icon && icon}
    </div>
  );
}
