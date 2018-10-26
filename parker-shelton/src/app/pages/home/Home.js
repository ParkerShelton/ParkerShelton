import React, { Component } from 'react';
import Project from '../../components/project/Project';
// import Modal from '../../components/modal/Modal';  
import './Home.css';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedProj: null,
    }
  }

  renderProjects = () => {
    if(this.props.projects !== null) {
      let projectList = this.props.projects.map((project) => {
        return <Project selectProject={this.props.selectProject} key={project.name} project={project}/>
      });
      return projectList;
      
    } else {
      return null;
    }
  }

  render() {
    return (
      <div className="Home">
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

      </div>
    );
  }
}

export default Home;
