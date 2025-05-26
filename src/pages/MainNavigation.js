import { useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function MainNavigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  function handleClick() {
    setMenuOpen(false);
  }

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
            <NavLink to='/' onClick={handleClick}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to='/about' onClick={handleClick}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to='/skills' onClick={handleClick}>
              Skills
            </NavLink>
          </li>
          <li>
            <NavLink to='/projects' onClick={handleClick}>
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink to='/contact' onClick={handleClick}>
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
