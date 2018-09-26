import React, { Component } from 'react';
import arrow from './img/contactArrow.png';
import './Button.css';

class Button extends Component {
  render() {
    return (
      <div className="Button">
        <button onClick={this.props.reloadPage} type={this.props.type}>{this.props.text}</button>

        <img alt="Arrow" src={arrow}/>
      </div>
    );
  }
}

export default Button;
