import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import Button from '../../components/button/Button';
import './Intro.css';

class Intro extends Component {

  clipboard = (text) => {
    alert(`Copied ${text} to clipboard.`)
  }

  render() {
    return (

      <div className="Intro">

        <div className="container">
          <NavLink to="/home"><img className="heroImg" alt="Hero" src="/img/header/profile.png"></img></NavLink>

          <h1>Parker Shelton</h1> 

          <div className="lineContainer">
            <div className="line left"></div>
            <p>PS</p>
            <div className="line right"></div>
          </div>

          <NavLink to="/home"><Button text="Enter Site" /></NavLink>

          <ul className="iconContainer">
            <li className="iconOne">
              <CopyToClipboard text="7542655665" onCopy={(text) => this.clipboard(text)}>
                <img src={"/img/footer/phone.png"} alt="Phone" />
              </CopyToClipboard>
            </li>

            <li className="iconTwo">
              <CopyToClipboard text="parkerkshelton@gmail.com" onCopy={(text) => this.clipboard(text)}>
                <img src={"/img/footer/email.png"} alt="Email" />
              </CopyToClipboard>              
            </li>

            <li className="iconThree"><a href="https://plus.google.com/107301490763509617943" target="_blank" rel="noopener noreferrer"> <img src={"/img/footer/google.png"} alt="Google" /> </a></li>
            <li className="iconFour"><a href="https://www.linkedin.com/in/parker-shelton-296179168/" target="_blank" rel="noopener noreferrer"> <img src={"/img/footer/linkedIn.png"} alt="LinkedIn" /> </a></li>            
          </ul>

        </div>


   
      </div>
    );
  }
}

export default Intro;
