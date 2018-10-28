import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import projects from "../projects.json";
import './App.css';

import Intro from './pages/intro/Intro';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import StudentWork from './pages/studentWork/StudentWork';
import Error from './pages/error/Error';

import Project from './pages/project/Project';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedProject: {
        id: null,
        // name: null,
        // img: [],
        // desc: null
      },
      projectList: projects
    }
  }

  selectProject = (project) => {
    this.setState({
      selectedProject: {
        id: project.id,
        // name: project.name,
        // img: project.img,
        // desc: project.desc
      }
    });
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">

          <Route exact path="/" component={Intro}/>
          <Route exact path="/home" render={() => <Home selectProject={this.selectProject} projects={this.state.projectList}/>}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/contact" component={Contact}/>
          <Route exact path="/studentwork" render={() => <StudentWork selectProject={this.selectProject} projects={this.state.projectList}/>}/>
          <Route exact path="/projects/:projName" render={props => <Project {...props} selectedProject={this.state.selectedProject} projects={this.state.projectList}/>}/>
          <Route path="/error" component={Error} />

        </div>
      </BrowserRouter>
    );
  }
}

export default App;
