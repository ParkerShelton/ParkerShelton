import React, { Component } from 'react';
import Slider from '../slider/Slider';
import Compare from '../compare/Compare';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import './ProjectPage.css';


class ProjectPage extends Component {

  componentDidMount = () => {
    this.reloadPage();
  }

  reloadPage = () => {
    window.scrollTo(0, 0);
  }

  renderCompare = () => {
    if(this.props.project.compare == true) {
      return <Compare name={this.props.project.name} />
    } else {
      return null;
    }
  }

  render() {

    return (
      <div className="ProjectPage">

        <section className="heroContainer">
          <img alt="Hero" src={this.props.project.img[0]}/>

          <div className="heroContent">
            <h1>{this.props.project.name}</h1>
            <p>{this.props.project.shortDesc}</p>
          </div>
        </section>

        <Slider project={this.props.project}/>

        <section className="infoContainer">
          <div className="leftHalf">
            <h2>{this.props.project.title}</h2>
            <p>{this.props.project.desc}</p>
          </div>

          <div className="rightHalf">
            <div className="mediaContainer">

              <div className="contactInfo">
                <img className="ciImg" alt="Contact Info" src={"/img/footer/info.png"} />
                <p className="ciTxt">Contact Info</p>
              </div>

              <ul className="contactList">
                <li>
                  <CopyToClipboard text="7542655665" onCopy={(text) => this.clipboard(text)}>
                    <img src={"/img/footer/phone.png"} alt="Phone" />
                  </CopyToClipboard>
                </li>

                <li>
                  <CopyToClipboard text="parkerkshelton@gmail.com" onCopy={(text) => this.clipboard(text)}>
                    <img src={"/img/footer/email.png"} alt="Email" />
                  </CopyToClipboard>              
                </li>

                <li><a href="https://plus.google.com/107301490763509617943" target="_blank" rel="noopener noreferrer"> <img src={"/img/footer/google.png"} alt="Google" /> </a></li>
                <li><a href="https://www.linkedin.com/in/parker-shelton-296179168/" target="_blank" rel="noopener noreferrer"> <img src={"/img/footer/linkedIn.png"} alt="LinkedIn" /> </a></li>
              </ul>

            </div>
          </div>
        </section>

        {this.renderCompare()}

      </div>
    );
  }
}

export default ProjectPage;
