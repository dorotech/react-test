import { cva } from 'class-variance-authority';
import { ButtonHTMLAttributes } from 'react';

const styles = cva(
  'flex items-center justify-center bg-zinc-800 hover:bg-zinc-700 py-2 px-3 rounded border border-zinc-600 transition focus:ring-2 ring-offset-2 ring-offset-black ring-amber-300'
);

type IButton = ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ children, className, ...rest }: IButton) {
  return (
    <button {...rest} className={styles({ className })}>
      {children}
    </button>
  );
}
