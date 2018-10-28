import React, { Component } from 'react';
import ProjectCard from '../../components/projectCard/ProjectCard';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import './Home.css';

class Home extends Component {

  renderProjects = () => {
    if(this.props.projects !== null) {
      let projectList = this.props.projects.filter(project => project.studentWork === false).map((project) => {
        return <ProjectCard selectProject={this.props.selectProject} key={project.name} project={project}/>
      });
      return projectList;
      
    } else {
      return null;
    }
  }

  render() {
    return (
      <div className="Home">
        <Header />

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

export default Home;
