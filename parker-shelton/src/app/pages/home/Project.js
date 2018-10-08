import React, { Component } from 'react';
// import {NavLink} from 'react-router-dom';
import './Home.css';

class Project extends Component {

  render() {

    return (
      <li className="Project" onClick={() => this.props.selectProject(this.props.project)}>
        <img src={this.props.project.img} />
      </li>
    );
  }
}

export default Project;
