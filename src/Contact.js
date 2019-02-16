import React, { Component } from 'react';
import linkedin from './linkedin.png';
import github from './github.png';
import portfolio from './portfolio.png';
import './Contact.css';

class Contact extends Component {
  render() {
    return (
      <div className="Contact" id="contact">

        <div className="rectangle-contact">
          <header className="contact-title">
              CONTACT
          </header>
          <p className="contact-subtext">
          let's link up
          </p>
        </div>

        <div className="contact-stuff">
          
          <div className="contact-text">
            <p className="contact-name">
              Andrew Kou
            </p>

            <p className="email">
              andrewhkou@gmail.com
            </p>
          </div> 
          
          <div className="contact-pics">
          <a
            href="https://www.linkedin.com/in/andrew-k-6071b8137/"
            >
            <img src={linkedin} className="linkedin" alt="linkedin" />
          </a>
          <a
            href="https://github.com/andrewhkou"
            >
            <img src={github} className="github" alt="github" />
          </a>

          <a
            href="https://andrewkou.myportfolio.com/"
            >
            <img src={portfolio} className="portfolio" alt="portfolio" />
            </a>
          </div>
        
        </div>

      </div>
    );
  }
}

export default Contact;