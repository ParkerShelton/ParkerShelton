import React, { Component } from 'react';
import ProjectCard from '../../components/projectCard/ProjectCard';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import './StudentWork.css';

class StudentWork extends Component {

  renderProjects = () => {
    if(this.props.projects !== null) {
      let projectList = this.props.projects.filter(project => project.studentWork === true).map((project) => {
        return <ProjectCard selectProject={this.props.selectProject} key={project.name} project={project}/>
      });
      return projectList;
      
    } else {
      return null;
    }
  }

  render() {
    return (
      <div className="StudentWork">
        <Header />

        <div className="projectContainer">
          <ul className="workContainer">
            {this.renderProjects()}
          </ul>
        </div>

        <Footer />
      </div>
    );
  }
}

export default StudentWork;
