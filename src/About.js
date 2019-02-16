import React, { Component } from 'react';
import logo from './logo.svg';
import './About.css';

class About extends Component {
  render() {
    return (
      <div className="About" id="about">
        <header className = "hey-there">
            Hey there!
        </header>
        <p className = "about-text">
            My name is Andrew Kou, and I'm currently a freshman studying computer science at UC Berkeley. 
        </p>
      </div>
    );
  }
}

export default About;