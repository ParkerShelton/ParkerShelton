import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import profile from './img/tempProfile.png';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        
        <div className="headerContainer">
          <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/">About</NavLink></li>
          </ul>

          <img alt="Profile" src={profile} />

          <ul>
            <li><NavLink to="/">Contact</NavLink></li>
            <li><NavLink to="/">Blog</NavLink></li>
          </ul>        
        </div>

      </div>
    );
  }
}

export default Header;
