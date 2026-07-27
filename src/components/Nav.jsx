import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { contact } from '../data/contact';
import './Nav.css';

const links = [
  { to: '/#research', label: 'Research' },
  { to: '/#news', label: 'News' },
  { to: '/#publications', label: 'Publications' },
  { to: '/#work', label: 'Work' },
  { to: '/#experience', label: 'Experience' },
  { to: '/#contact', label: 'Contact' },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="nav">
      <div className="nav__brand">{contact.name}</div>

      <div className="nav__links nav__links--desktop">
        {links.map((l) => (
          <NavLink key={l.to} to={l.to} className="nav__link">{l.label}</NavLink>
        ))}
      </div>

      <button
        className="nav__toggle"
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
      >
        <span className={`nav__toggle-bar${open ? ' nav__toggle-bar--open-1' : ''}`} />
        <span className={`nav__toggle-bar${open ? ' nav__toggle-bar--open-2' : ''}`} />
        <span className={`nav__toggle-bar${open ? ' nav__toggle-bar--open-3' : ''}`} />
      </button>

      {open && (
        <div className="nav__links nav__links--mobile">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} className="nav__link" onClick={() => setOpen(false)}>
              {l.label}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
}
