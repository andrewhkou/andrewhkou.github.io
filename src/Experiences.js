import React, { Component } from 'react';
import './Experiences.css';
import codebase from './codebase.png';
import uma from './uma.jpg';
import ExpItem from './ExpItem.js';

class Experiences extends Component {
  render() {
    return (
      <div className="Experiences" id="experiences">

        <div className = "rectangle">
        <p className = "title">
          EXPERIENCES
        </p>
        <p className = "subtitle">
          what i've been involved with
        </p>
        </div>
        
        <div className = "items">
        <a
            href="https://codebase.berkeley.edu/#"
            >
            <ExpItem imgName={codebase} title="Codebase" description="Currently learning the fundamentals of JavaScript, React, CSS, and HTML to develop a judging portal for CalHacks."/>
          </a>

          <a
            href="https://www.umaucberkeley.com/"
            >
            <ExpItem imgName={uma} title="UMA" description="Developed designs and icons for use in promotional use for startup companies including Ten Thousand Clothing and GigCar."/>
            </a>
            <p className = "parthlovesmilfs">
              ... more to come! 
            </p>
        </div>
      </div>
    );
  }
}

export default Experiences;