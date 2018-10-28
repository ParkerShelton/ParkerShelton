import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import {Redirect} from 'react-router-dom';
import ProjectPage from '../../components/projectPage/ProjectPage';
import Header from '../../components/header/Header';
import './Project.css';

class Project extends Component {

  renderPage = () => {
    if(this.props.projects !== null) {

      for(let i = 0; i < this.props.projects.length; i++) {
        if(this.props.projects[i].id === this.props.selectedProject.id) {
          return <ProjectPage project={this.props.projects[i]}/>
        }
      }

      return <Redirect to={{ pathname: "/home"}}/>;
    } else {

      return null;
    }
  }

  render() {
    return (
      <div className="Project">
        <Header />

        {this.renderPage()}

        <div className="simpleFooter">
          <ul>
            <li onClick={this.reloadPage}><NavLink to="/home">Home</NavLink></li>
            <li onClick={this.reloadPage}><NavLink to="/about">About</NavLink></li>
            <li onClick={this.reloadPage}><NavLink to="/contact">Contact</NavLink></li>
            <li onClick={this.reloadPage}><NavLink to="/studentwork">Student Work</NavLink></li>                        
          </ul>          
        </div>
      </div>
    );
  }
}

export default Project;