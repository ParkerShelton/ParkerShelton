import React, { Component } from 'react';
import Project from './Project';
import Modal from './Modal';
import './Home.css';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedProj: null,

      projects: [
        {
          name: "E-commerce",
          img: "/img/home/e-commerce.jpg",
          desc: "This project is the final project for Road to Hire. We had to create a database full of projects and fetch them to display on the front end. We also had to create the whole front-end. After we got that, we had to create an admin page that will allow you to add/remove/edit the products. Our contact page had to also save all the contacts to a database that will display on the admin page. After all of that we had to authenticate for the admin page so only admins can see the admin page.",
        },
        {
          name: "My Move",
          img: "/img/home/mymove.jpg",
          desc: "This project was a midterm test for Road to Hire. We were given a sketch file of an old version if the My Move website. The goal was to recreate the sketch file with html and css as close a pixel perfect as possoble.",
        },
        {
          name: "",
          img: "",
          desc: "",
        },        
        {
          name: "",
          img: "",
          desc: "",
        },
        {
          name: "",
          img: "",
          desc: "",
        },
        {
          name: "",
          img: "",
          desc: "",
        }
      ]
    }
  }

  renderProjects = () => {
    if(this.state.projects !== null) {
      let projectList = this.state.projects.map((project) => {
        return <Project selectedProj={this.state.selectedProj} selectProject={this.selectProject} key={project.name} project={project}/>
      });
      return projectList;
      
    } else {
      return null;
    }
  }

  renderModal = () => {
    if(this.state.selectedProj !== null) {
      return <Modal project={this.state.selectedProj} closeModal={this.closeModal} />;
    } else {
      return null;
    }

  }

  selectProject = (project) => {
    let selectedProj = this.state.selectedProj;
    selectedProj = project;

    this.setState({selectedProj});
  }

  closeModal = () => {
    this.setState({selectedProj: null});
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

        {this.renderModal()}

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
