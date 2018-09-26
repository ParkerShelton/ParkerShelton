import React, { Component } from 'react';
import Recaptcha from 'react-recaptcha';
import Button from '../../components/button/Button';
import './Contact.css';

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isVerified: false,
      message: {
        name: "",
        business: "",
        email: "",
        phone: "",
        subject: "",
        noSpam: "",
        message: ""
      }
    };
  }

  recaptchaLoaded = () => {
    console.log("Captcha has loaded successfully");
  }

  handleChange = (e,input) => {
    let message = this.state.message;

    if(input === "name") {
      message.name = e.target.value;

    } else if(input === "business") {
      message.business = e.target.value;

    } else if(input === "email") {
      message.email = e.target.value;

    } else if(input === "phone") {
      if(isNaN(e.target.value)) {
        e.target.value = "";
      } else if(e.target.value.length > 7) {
        e.target.value = e.target.value;
      } else {
        message.phone = e.target.value;
      }

    } else if(input === "subject") {
      message.subject = e.target.value;

    } else if(input === "noSpam") {
      message.noSpam = e.target.value;

    } else if(input === "message") {
      message.message = e.target.value;
    }

    this.setState({message});
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if(this.state.isVerified) {
      console.log(this.state.message);
    } else {
      alert("Please verify you are human!");
    }
  }

  verifyCallback = (res) => {
    if(res) {
      this.setState({isVerified: true});
    }
  }


  render() {
    return (
      <div className="Contact">
        <div className="hero">
          <h1>Leave me a message!</h1>
          <div className="hl"></div>
          <p>I can't wait to hear from you!</p>
        </div>
        
        <form onSubmit={(e) => this.handleSubmit(e)}>
          {/* TOP HALF */}
          <div className="inputs">
            <div className="row">
              <div className="nameContain">
                <label htmlFor="name">Name *</label>
                <input value={this.state.message.name} onChange={(e) => this.handleChange(e, "name")} name="name" className="name customInput" required/>
              </div>

              <div className="businessContain">
                <label htmlFor="business">Business Name</label>
                <input value={this.state.message.business} onChange={(e) => this.handleChange(e, "business")} name="business" className="business customInput" />
              </div>
            </div>

            <div className="row">
              <div className="messageContain">
                <label htmlFor="message">message *</label>
                <input type="message" value={this.state.message.email} onChange={(e) => this.handleChange(e, "email")} name="message" className="message customInput" required/>
              </div>

              <div className="phoneContain">
                <label htmlFor="phone">Phone Number</label>
                <input type="tel" value={this.state.message.phone} onChange={(e) => this.handleChange(e, "phone")} name="phone" className="phone customInput" />
              </div>
            </div>

            <div className="row">
              <div className="subjectContain">
                <label htmlFor="subject">Subject *</label>
                <input value={this.state.message.subject} onChange={(e) => this.handleChange(e, "subject")} name="subject" className="subject customInput" required/>
              </div>
            </div>
          </div>

          {/* BOTTOM HALF */}
          <div className="outputs">
            <div className="verifyContain">
              <div className="noSpamContain">
                <label htmlFor="noSpam">(2 + 6 = ?) *</label>
                <input value={this.state.message.noSpam} onChange={(e) => this.handleChange(e, "noSpam")} name="noSpam" className="noSpam customInput" required/>
              </div>

              <div className="captcha">
                <Recaptcha
                  sitekey="6LdqGnIUAAAAAN9aMUNSC6B0RNmUN0tWmLNX3hnP"
                  render="explicit"
                  onloadCallback={this.recaptchaLoaded}
                  verifyCallback={this.verifyCallback}
                  // theme="dark"
                />             
              </div>
            </div>

            <div className="messageContain">
              <label htmlFor="message">Message *</label>
              <textarea value={this.state.message.message} onChange={(e) => this.handleChange(e, "message")} name="message" className="message customInput" required/>
            </div>

            <div className="buttonContain">
              <Button type="submit" text="Send Message"/>
            </div>
          </div>
        </form>        

      </div>
    );
  }
}

export default Contact;
