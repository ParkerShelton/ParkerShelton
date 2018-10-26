import React, { Component } from 'react';
import './ProjectPage.css';

class ProjectPage extends Component {

  componentDidMount = () => {
    this.reloadPage()
  }

  reloadPage = () => {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="ProjectPage">
        <section className="hero">
          <div className="leftHalf">
            <img src={this.props.project.img[0]}/>

            <div className="heroContent">
              <h1>{this.props.project.name}</h1>
              <p>{this.props.project.desc}</p>
            </div>
          </div>

          <div className="rightHalf">
            <div className="socialContainer">

            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default ProjectPage;
