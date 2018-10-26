import React, { Component } from 'react';
// import {NavLink} from 'react-router-dom';
import './Modal.css';

class Modal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentIndex: 0,
      slides: []
    }
  }

  componentDidMount = () => {
    this.setSlides();
  }

  setSlides = () => {
    let slides = this.state.slides;
    let images = this.props.project.img;

    images.forEach(img => {
      slides.push(img);
    });
    this.setState({currentIndex: 0});
  }

  handleArrows = (event) => {
    let currentIndex = this.state.currentIndex;
    let slides = this.state.slides;

    if(event.target.className === "arrow rightArrow") {
      if(currentIndex === (slides.length - 1)) {
        currentIndex = 0;
      } else {
        currentIndex = currentIndex + 1;
      }

    } else if(event.target.className === "arrow leftArrow") {
      if(currentIndex === 0) {
        currentIndex = (slides.length - 1);
      } else {
        currentIndex = currentIndex - 1;
      }      
    }

    this.setState({currentIndex});
  }

  render() {
    let leftArrow = '/img/home/leftArrow.png';
    let rightArrow = '/img/home/rightArrow.png';

    return (
      <div className="Modal">

        <div className="modalContainer">
          <img alt="Close Button" src="/img/modal/closeBtn.png" className="closeBtn" onClick={() => this.props.closeModal()}></img>

          <div className="title">
            <h1>{this.props.project.name}</h1>
          </div>

          <div className="body">
            <div className="slider">
              <img alt="Left Arrow" className="arrow leftArrow" src={leftArrow} onClick={(e) => this.handleArrows(e)}/>
              
              <img alt={this.props.project.name} src={this.state.slides[this.state.currentIndex]} />
              {console.log(this.state.currentIndex)}

              <img alt="Right Arrow" className="arrow rightArrow" src={rightArrow} onClick={(e) => this.handleArrows(e)}/>
            </div>

            <div className="desc">
              <p>{this.props.project.desc}</p>
              {/* <button>{this.props.project.siteLink}</button> */}
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default Modal;
