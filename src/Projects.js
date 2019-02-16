import React, { Component } from 'react';
import './Projects.css';
import sort from './sort.jpg';
import ProjItem from './ProjItem.js';
import ExpItem from './ExpItem.js';

class Projects extends Component {
  render() {
    return (
      <div className="Projects" id="projects">


        <div className = "fukin-items">
        <a
            href="https://andrewhkou.github.io/p5project/empty-example/"
            >
          <ExpItem imgName={sort} title="P5 Project" description="Developed a visual JavaScript program to sort a set of 6 randomly generated numbers through the selection sort algorithm."/>
         </a> 
          <p className = "parthlovesmoms">
              ... more to come! 
            </p>
        </div>

          <div className = "rectangle2">
            <header className = "projects-title">
                  PROJECTS
              </header>
              
              <p className = "projects-subtext">
                what i've been working on
              </p>
            </div>
        </div>
    );
  }
}

export default Projects;