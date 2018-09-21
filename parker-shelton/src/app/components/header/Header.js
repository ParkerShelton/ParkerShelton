import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <ul className="links">
          <li>Home</li>
          <li>About</li>
        </ul>
      </div>
    );
  }
}

export default Header;
