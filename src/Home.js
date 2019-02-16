import React, { Component } from 'react';
import profpic from './profpic.jpg';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div className = "Home" id = "home-fade">

        <div className = "nav-bar">
        <a href="#about">
          <p className="about-home-text">
            ABOUT
          </p>
        </a>

        <a href="#experiences">
          <p className="experiences-home-text">
            EXPERIENCES
          </p>
        </a>

        <a href="#projects">
          <p className="projects-home-text">
            PROJECTS
          </p>
        </a>

        <a href="#contact">
          <p className="contacts-home-text">
            CONTACT
          </p>
        </a>

        </div>
      
        <div className = "home-stuff">
          {/* <header className="home-text"> */}
            <img src={profpic} className="profpic" alt="profpic" />
            <h1 className = "name">
                ANDREW KOU
              </h1>
              <p className = "name-subtext"> 
                student // engineer // designer
              </p>
            {/* </header> */}
        </div>
      </div>
    )
  }
}

export default Home;