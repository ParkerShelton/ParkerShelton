import React, { Component } from 'react';
import Recaptcha from 'react-recaptcha';
import Button from '../../components/button/Button';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import './Contact.css';

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isVerified: false,
      // showModal: false,
      email: {
        name: "",
        business: "",
        emailAdd: "",
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
    let email = this.state.email;

    if(input === "name") {
      email.name = e.target.value;

    } else if(input === "business") {
      email.business = e.target.value;

    } else if(input === "emailAdd") {
      email.emailAdd = e.target.value;

    } else if(input === "phone") {
      if(isNaN(e.target.value)) {
        e.target.value = "";
      } else if(e.target.value.length > 7) {
        e.target.value = e.target.value;
      } else {
        email.phone = e.target.value;
      }

    } else if(input === "subject") {
      email.subject = e.target.value;

    } else if(input === "noSpam") {
      email.noSpam = e.target.value;

    } else if(input === "message") {
      email.message = e.target.value;
    }

    this.setState({email});
  }

  handleSubmit = (e) => {

    e.preventDefault();

    // eslint-disable-next-line
    if((this.state.isVerified) && (this.state.email.noSpam == 8)) {
      console.log("Loading Modal");
      this.setState({showModal: true});
      this.emailOutline();
      
    } else {
      if(!this.state.isVerified) {
        alert("Please verify you are human!");

      } else {
        alert(`2 + 6 is not equal to ${this.state.email.noSpam}. Try again please!`);

      }
    }
  }


  emailOutline = () => {
    let address = "parkerkshelton@gmail.com";
    let subject = this.state.email.subject;
    var ending;

    if(this.state.email.business === "" && this.state.email.phone !== "") {
      ending = `- ${this.state.email.name}, you can email me at ${this.state.email.emailAdd} or call me at ${this.state.email.phone}.`;

    } else if (this.state.email.business !== "" && this.state.email.phone === "") {
      ending = `- ${this.state.email.name} from ${this.state.email.business}, you can email me at ${this.state.email.emailAdd}.`;
      
    } else if(this.state.email.business === "" && this.state.email.phone === "") {
      ending = `- ${this.state.email.name} from ${this.state.email.business}.`;

    } else if (this.state.email.business !== "" && this.state.email.phone !== "") {
      ending = `- ${this.state.email.name} from ${this.state.email.business}, you can email me at ${this.state.email.emailAdd} or call me at ${this.state.email.phone}.`;

    }

    let body = `Dear Parker, \r\n ${this.state.email.message} \r\n ${ending}`;
    body = encodeURIComponent(body);

    let emailLink = `<a 
      style="color: #000; text-decoration: none; font-size: 300%; margin-right: auto; background-color: red;" 
      
      href="mailto:${address}?subject=${subject}&body=${body}">Send Email<a>`;

    let emailPage = `
      <div style="width: 100%; height: 100%; background-color: #999; box-shadow: 0px 0px 50px 50px #999;">
        <h1 style="width: 80%; margin: auto; font-size: 60px; text-align: center;">Thank you for getting in touch! I will respond as soon as humanly possible.</h1>

        <div style="width: 25%; margin: auto; margin-top: 30px; background-color: yellow;">
          <a style="color: #000; text-decoration: none; font-size: 300%; background-color: red;">Back</a>        

          ${emailLink}
        </div>
      </div>
    `;

    document.write(emailPage);
  }



  verifyCallback = (res) => {
    if(res) {
      this.setState({isVerified: true});
    }
  }


  render() {

    return (
      <div className="Contact">
        <Header />

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
                <input value={this.state.email.name} onChange={(e) => this.handleChange(e, "name")} name="name" className="name customInput" required/>
              </div>

              <div className="businessContain">
                <label htmlFor="business">Business Name</label>
                <input value={this.state.email.business} onChange={(e) => this.handleChange(e, "business")} name="business" className="business customInput" />
              </div>
            </div>

            <div className="row">
              <div className="emailContain">
                <label htmlFor="email">Email *</label>
                <input type="email" value={this.state.email.emailAdd} onChange={(e) => this.handleChange(e, "emailAdd")} name="email" className="email customInput" required/>
              </div>

              <div className="phoneContain">
                <label htmlFor="phone">Phone Number</label>
                <input type="tel" value={this.state.email.phone} onChange={(e) => this.handleChange(e, "phone")} name="phone" className="phone customInput" />
              </div>
            </div>

            <div className="row">
              <div className="subjectContain">
                <label htmlFor="subject">Subject *</label>
                <input value={this.state.email.subject} onChange={(e) => this.handleChange(e, "subject")} name="subject" className="subject customInput" required/>
              </div>
            </div>
          </div>

          {/* BOTTOM HALF */}
          <div className="outputs">
            <div className="verifyContain">
              <div className="noSpamContain">
                <label htmlFor="noSpam">(2 + 6 = ?) *</label>
                <input value={this.state.email.noSpam} onChange={(e) => this.handleChange(e, "noSpam")} name="noSpam" className="noSpam customInput" required/>
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
              <textarea value={this.state.email.message} onChange={(e) => this.handleChange(e, "message")} name="message" className="message customInput" required/>
            </div>

            <div className="buttonContain">
              <Button type="submit" text="Create Email"/>
            </div>
          </div>
        </form>        

        <Footer />
      </div>
    );
  }
}

export default Contact;
