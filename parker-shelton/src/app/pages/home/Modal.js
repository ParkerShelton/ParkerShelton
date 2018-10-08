import React, { Component } from 'react';
// import {NavLink} from 'react-router-dom';
import './Home.css';

class Modal extends Component {

  render() {
    return (
      <div className="Modal">
        <div className="modalContainer">
          <img alt="Close Button" src="/img/modal/closeBtn.png" className="closeBtn" onClick={() => this.props.closeModal()}></img>
          
          <div className="title">
            <h1>{this.props.project.name}</h1>
          </div>

          <div className="body">
            <img alt={this.props.project.name} src={this.props.project.img} />
            <p>{this.props.project.desc}</p>
          </div>

        </div>
      </div>
    );
  }
}

export default Modal;
