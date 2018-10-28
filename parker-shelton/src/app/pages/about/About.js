import React, { Component } from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import './About.css';

class About extends Component {
  render() {
    return (
      <div className="About">
        <Header />
        
      {/*#########################################*/}
      {/*               TOP SECTION               */}
      {/*#########################################*/}
        <section className="hero">
          <div className="heroMargin">
            <div className="heroPic">Img of me</div>

            <div className="heroTxtContainer">
              <h1>About Me!</h1>
              <p>I am a young computer engineer who is currently in the Road to Hire program. I love creating art, music, and being the best dad and husband I can be. Here's a little more about me and who I am.</p>
            </div>
          </div>
        </section>  


      {/*#########################################*/}
      {/*             MIDDLE SECTION              */}
      {/*#########################################*/}
        <section className="middleContainer">
          <div className="topHalf">
            
            <div className="childhoodContainer">
              <h2>Childhood Hobbies</h2>
              <p>As a kid, I was very active. I played baseball, football, soccer, swam on a swim team, played water polo, skateboarded, and I'm sure I did a lot more that I just can't remember. My favorite sport I played was baseball, by far. I played shortstop, third base, pitcher, and catcher. I never really got into watching sports on tv or anything but I couldn't imagine who I'd be if I didn't play them. All my friends as a kid were people I played sports with and that is true all the way up to highschool.</p>
            </div>

            <div className="hobbiesContainer">
              <h2>Current Hobbies</h2>
              <p>My current hobbies are more based on creativity than athleticism. Besides pursuing a career in computer engineering, I love to make music and art. I play many instruments including: guitar, piano, drums, bass, and a few smaller ones that I'm not as good at YET. Along with playing music, I mix and produce my music too. I also make electronic music mixed with real instruments to make really nice songs on the computer. Art is something I have a huge passion for aswell. I mainly make traditional art, using pens and pencils on paper, but I make digital art more and more often now. Creativity plays a huge role in my day to day life and it always will. </p>
            </div>

          </div>

          <div className="bottomHalf">
            <p>Description of my family</p>
            <div className="familyImg">Img of family</div>
          </div>            
        </section>

        <section className="commentContainer">
          <div className="comment">
            <img src="/img/about/startQuote.png" alt="Start Quote"/>
          
            <p>I know that this is a portfolio site and I'm supposed to show off all the things I've done and my talents or whatever, but one thing I really want to do is help others. Road to Hire has given me an opportunity that most people aren't lucky enough to have. I feel that just because I was fortunate enough to get the tools and support I have, that doesn't mean that others can't benefit from it aswell. I encourage anyone that feels like they can't do something, for whatever reason, to contact me and let me see what I can do. To help out as much as I can, I plan on creating a blog that will teach people how to accomplish some of the things I've done. There will be comments so people can ask questions, step by step instructions, and every mistake I made to show others that everyone makes mistakes. I may not be the most qualified person in the world but I will try my hardest and that's the first step to success.
            </p>

            <img src="/img/about/endQuote.png" alt="End Quote"/>
          </div>
        </section>

      {/*#########################################*/}
      {/*             BOTTOM SECTION              */}
      {/*#########################################*/}
        <section className="bottomContainer">
          <div className="margin">
            <div className="map">
              <img alt="Map" src="/img/about/map.jpg" />
            </div>

            <ul className="locationList">
              <li className="location">
                <img src="/img/about/greenPin.png" alt="Arkansas"/>
                <p>I was born in Arkansas. I consider my home to be where my fiance and daughter are but if I had to give a specific location, it would be Arkansas. I lived there longer than any of the other states I've lived. My family and I stayed there until I was around 12, then we moved to Kansas.</p>
              </li>

              <li className="location">
                <img src="/img/about/bluePin.png" alt="Kansas"/>
                <p>I only lived in Kansas for a year. Even with how short of a time my family and I lived there, I still loved it. I met my favorite teacher of all time there, even played a cheerleader in a school play. After about a year, we moved back to Arkansas.</p>
              </li>

              <li className="location">
                <img src="/img/about/yellowPin.png" alt="Florida"/>
                <p>We moved back to Arkansas for a year, then moved to Florida. I was in 7th grade at the time. I really didn't like Florida, really didn't like it. I stayed at the same school for 7th and 8th grade, then changed schools. We stayed in Florida, but we moved to a different city. In our new house, I went to 9th grade. Before I could even finish 9th grade, we moved to North Carolina.</p>
              </li>

              <li className="location">
                <img src="/img/about/redPin.png" alt="North Carolina"/>
                <p>I finished the rest of my 9th grade online and started 10th grade in North Carolina. I spent 10th through 12th grades in the same school. It felt like the longest time I stayed in the same place so I liked it. Where I live reminds me a lot of where I lived in Arkansas so its really nice not feeling so out of place like I did in Florida.</p>
              </li>                        
            </ul>
          </div>
        </section>
      
        <section className="resumeContainer">
          <h2>Resume</h2>
          <img alt="Resume" src={"/img/about/my_resume2.jpg"} ></img>
        </section>

        <Footer />
      </div>
    );
  }
}

export default About;
