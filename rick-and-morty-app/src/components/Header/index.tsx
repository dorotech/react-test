import { Link } from 'react-router-dom';

import Logo from '../Logo';
import { Moon } from '../Icons';

import './styles.scss';

export default function Header() {
  return (
    <header>
      <Link to="/">
        <div className="logo">
          <Logo />
          <span>Rick and Morty</span>
        </div>
      </Link>

      <button type="button" className="change-theme">
        <Moon />
      </button>
    </header>
  );
}
