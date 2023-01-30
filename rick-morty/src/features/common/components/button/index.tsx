import { HTMLAttributes } from 'react';

type IButton = HTMLAttributes<HTMLButtonElement>;

export function Button({ children, className, ...rest }: IButton) {
  return (
    <button
      {...rest}
      className={`${className} flex items-center justify-center bg-zinc-800 p-2 rounded border border-zinc-600 transition focus:ring ring-offset-2 ring-offset-black ring-amber-300`}
    >
      {children}
    </button>
  );
}
