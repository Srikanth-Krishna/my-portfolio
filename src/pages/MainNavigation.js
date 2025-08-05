import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

export default function MainNavigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  function handleClick() {
    setMenuOpen(false);
  }

  return (
    <header className='main-header'>
      <div className='logo' onClick={() => navigate('/')}>
        SK
      </div>
      <button
        className='menu-toggle'
        onClick={() => setMenuOpen((prev) => !prev)}
        aria-label='Toggle navigation'
      >
        ☰
      </button>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
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
        <button className='resume-btn'>Resume</button>
      </div>
    </header>
  );
}
