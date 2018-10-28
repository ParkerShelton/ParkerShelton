import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import './ProjectCard.css';

class ProjectCard extends Component {

  render() {
    const projName = ((this.props.project.name).toLowerCase()).replace(/\s/g, '');

    return (
      <li className="ProjectCard" onClick={() => this.props.selectProject(this.props.project)}>
        <NavLink to={`/projects/${projName}`}><img alt="Project" src={this.props.project.img[0]} /></NavLink>
      </li>
    );
  }
}

export default ProjectCard;
