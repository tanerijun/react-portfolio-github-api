import React from 'react';
import './Header.css';
import logo from '../assets/logo.svg';

function Header() {
  return (
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>React Portfolio with Github API</h2>
    </div>
  );
}

export default Header;
