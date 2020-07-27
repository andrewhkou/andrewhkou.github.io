import React, { Component } from 'react';
import logo from './logo.svg';
import './PersonalWebsite.css';
import Home from './Home.js';
import About from './About';
import Experiences from './Experiences';
import Projects from './Projects';
import Contact from './Contact'

class PersonalWebsite extends Component {

  render() {
    return (
        <div className = "content-container">
          <div className = "content"> 
            <div className = "greeting-header">
              👋 Hey! I'm Andrew.
            </div>
            <div className = "greeting-text">
              This website's gonna look awesome real soon, but in the meantime here's a bit about me. 
            </div>
            <ul className = "about-points">
              <li>Second year CS student at <span class="school"><a class="about-links" href="https://www.youtube.com/watch?v=5srhwqzBQE8" target="_blank">UC Berkeley</a></span></li>
              <li>SWE intern at <span class = "intern"><a class="about-links" href="https://www.aboutamazon.com/" target="_blank">Amazon</a></span></li>
              <li>Developer at <span class="codebase"><a class="about-links" href="https://codebase.berkeley.edu/about/" target="_blank">CodeBase</a></span></li>
              <li>Former design consultant at <span class="uma"><a class="about-links" href="https://www.umaucberkeley.com/" target="_blank">UMA</a></span></li>
              <li>Amateur music producer</li>
            </ul>
            <div className = "links-container">
              <div className = "links"> 
                <a class="link-text" href="https://drive.google.com/file/d/1r6ypijhuY4Yzyr4w5m7FxwBMgWxkS3kN/view?usp=sharing" target="_blank">resume</a>
                <a class="link-text" href="https://www.linkedin.com/in/andrew-kou-6071b8137/" target="_blank">linkedin</a>
                <a class="link-text" href="https://github.com/andrewhkou" target="_blank">github</a>
              </div> 
            </div>
          </div>
        </div>
    );
  }
}

export default PersonalWebsite;
