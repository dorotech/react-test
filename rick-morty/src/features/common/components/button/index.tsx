import { cva } from 'class-variance-authority';
import { ButtonHTMLAttributes } from 'react';

const styles = cva(
  'flex items-center justify-center bg-gray-300 hover:bg-gray-400 dark:bg-zinc-800 hover:dark:bg-zinc-700 py-2 px-3 rounded border border-transparent dark:border-zinc-600 transition focus:ring-2 ring-offset-2 ring-offset-black ring-amber-300'
);

type IButton = ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ children, className, ...rest }: IButton) {
  return (
    <button {...rest} className={styles({ className })}>
      {children}
    </button>
  );
}
