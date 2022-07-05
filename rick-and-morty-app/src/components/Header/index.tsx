import Logo from '../Logo';
import { Moon } from '../IconsTheme';

export default function Header() {
  return (
    <header>
      <div className="logo">
        <Logo />
        <span>Rick and Morty</span>
      </div>
      <button type="button" className="change-theme">
        <Moon />
      </button>
    </header>
  );
}
