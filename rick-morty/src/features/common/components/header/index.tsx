import { ThemeToggler } from '../theme-toggler';

export function Header() {
  return (
    <header className="flex items-center justify-between">
      <h1 className="text-3xl font-bold">
        Rick<span className="text-amber-400">and</span>Morty
      </h1>

      <ThemeToggler />
    </header>
  );
}
