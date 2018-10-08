import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import {CopyToClipboard} from 'react-copy-to-clipboard';

import Button from '../button/Button';
import './Footer.css';

class Footer extends Component {

  clipboard = (text) => {
    alert(`Copied ${text} to clipboard.`)
  }

  reloadPage = () => {
    window.scrollTo(0, 0);
  }

  render() {

    return (
      <div className="Footer">
        <div className="column1">
          <div className="contactInfo">
            <img className="ciImg" alt="Contact Info" src={"/img/footer/info.png"} />
            <p className="ciTxt">Contact Info</p>
          </div>

          <ul className="contactList">
            <li>
              <CopyToClipboard text="7542655665" onCopy={(text) => this.clipboard(text)}>
                <img src={"/img/footer/phone.png"} alt="Phone" />
              </CopyToClipboard>
            </li>

            <li>
              <CopyToClipboard text="parkerkshelton@gmail.com" onCopy={(text) => this.clipboard(text)}>
                <img src={"/img/footer/email.png"} alt="Email" />
              </CopyToClipboard>              
            </li>

            <li><a href="https://plus.google.com/107301490763509617943" target="_blank" rel="noopener noreferrer"> <img src={"/img/footer/google.png"} alt="Google" /> </a></li>
            <li><a href="https://www.linkedin.com/in/parker-shelton-296179168/" target="_blank" rel="noopener noreferrer"> <img src={"/img/footer/linkedIn.png"} alt="LinkedIn" /> </a></li>
          </ul>
        </div>

        <div className="column2">
          <div className="nameContainer">
            <div className="titles">
              <p>Developer</p>
              <div className="vLine" />
              <p>Artist</p>
              <div className="vLine" />
              <p>Musician</p>
            </div>

            <h2>Parker Shelton</h2>

            <p className="thanks">Thank you for visiting my portfolio! I can't wait to see all that I can learn and maybe work with you someday. Contact me anytime if you have any questions I can answer or just want to get to know me!</p>

            <div className="buttonContainer">
              <NavLink to="/contact"><Button reloadPage={this.reloadPage} text="Contact Me"/></NavLink>
            </div>
          </div>
        </div>

        <div className="column3">
          <img alt="Profile" src={"/img/footer/profile.png"} />
        </div>        

        <div className="row">
          <ul>
            <li onClick={this.reloadPage}><NavLink to="/">Home</NavLink></li>
            <li onClick={this.reloadPage}><NavLink to="/about">About</NavLink></li>
            <li onClick={this.reloadPage}><NavLink to="/contact">Contact</NavLink></li>
            <li onClick={this.reloadPage}><NavLink to="/blog">Blog</NavLink></li>                        
          </ul>
        </div>
      </div>
    );
  }
}

export default Footer;
