import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import './Header.css';
import logo from '../assets/logo.svg';

function Header() {
  return (
    <div className="App-header">
      <div className="title">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>React Github</h2>
      </div>
      <nav>
        <RouterLink class="app-link" to="/">
          About
        </RouterLink>
        <RouterLink class="app-link" to="/projects">
          Projects
        </RouterLink>
      </nav>
    </div>
  );
}

export default Header;
