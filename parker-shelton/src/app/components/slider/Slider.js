import React, { Component } from 'react';
// import {NavLink} from 'react-router-dom';
import './Slider.css';

class Slider extends Component {
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
    let leftArrow = '/img/projects/slider/leftArrow.png';
    let rightArrow = '/img/projects/slider/rightArrow.png';

    return (
      <div className="Slider">
        <h2>What my remake looks like</h2>

        <div className="sliderContainer">
          <img alt="Left Arrow" className="arrow leftArrow" src={leftArrow} onClick={(e) => this.handleArrows(e)}/>

          <img alt={this.props.project.name} src={this.state.slides[this.state.currentIndex]} />
          
          <img alt="Right Arrow" className="arrow rightArrow" src={rightArrow} onClick={(e) => this.handleArrows(e)}/>
        </div>

      </div>
    );
  }
}

export default Slider;
