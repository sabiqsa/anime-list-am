import React, { useRef } from 'react';
import Menu from '../../assets/hamburger-menu.png.png';
import { NavLink } from 'react-router-dom';

import './Navbar.css';

export default function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle('menu');
  };
  return (
    <div className="navbar">
      <div className="menu-mobile">
        <NavLink exact to="/">
          <span>Anime List - Sabi</span>
        </NavLink>

        <div className="toggle" onClick={showNavbar}>
          <img src={Menu} alt="menu" />
        </div>
      </div>

      <ul ref={navRef} className="menu">
        <li>
          <NavLink
            exact
            className={({ isActive }) => (isActive ? 'navbar-active' : '')}
            to="/"
          >
            Home
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
