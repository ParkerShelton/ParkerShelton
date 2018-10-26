import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import './Project.css';

class Project extends Component {

  render() {
    const projName = ((this.props.project.name).toLowerCase()).replace(/\s/g, '');

    return (
      <li className="Project" onClick={() => this.props.selectProject(this.props.project)}>
        <NavLink to={`/projects/${projName}`}><img alt="Project" src={this.props.project.img[0]} /></NavLink>
      </li>
    );
  }
}

export default Project;
