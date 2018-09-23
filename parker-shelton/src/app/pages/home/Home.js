import React, { Component } from 'react';
import name from './img/name.png';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="hero">
          <h1>Parker Shelton</h1>

          <div className="titles">
            <p>Developer</p>
            <div className="vLine" />
            <p>Artist</p>
            <div className="vLine" />
            <p>Musician</p>
          </div>
        </div>



      </div>
    );
  }
}

export default Home;
