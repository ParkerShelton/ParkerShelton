import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import profile from './img/profile.png';
import './Header.css';

class Header extends Component {

  reloadPage = () => {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="Header">
        
        <div className="headerContainer">
          <ul>
            <li onClick={this.reloadPage}><NavLink to="/">Home</NavLink></li>
            <li onClick={this.reloadPage}><NavLink to="/about">About</NavLink></li>
          </ul>

          <img alt="Profile" src={profile} />

          <ul>
            <li onClick={this.reloadPage}><NavLink to="/contact">Contact</NavLink></li>
            <li onClick={this.reloadPage}><NavLink to="/blog">Blog</NavLink></li>
          </ul>        
        </div>

      </div>
    );
  }
}

export default Header;
