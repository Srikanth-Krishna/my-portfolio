import { useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function MainNavigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className='main-header'>
      <div className='logo'>SK</div>
      <button
        className='menu-toggle'
        onClick={() => setMenuOpen((prev) => !prev)}
        aria-label='Toggle navigation'
      >
        ☰
      </button>
      <nav className={`nav ${menuOpen ? 'open' : ''}`}>
        <ul>
          <li>
            <NavLink to='/' onClick={() => setMenuOpen(false)}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to='/about' onClick={() => setMenuOpen(false)}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to='/skills' onClick={() => setMenuOpen(false)}>
              Skills
            </NavLink>
          </li>
          <li>
            <NavLink to='/projects' onClick={() => setMenuOpen(false)}>
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink to='/contact' onClick={() => setMenuOpen(false)}>
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
