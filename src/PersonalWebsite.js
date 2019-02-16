import React, { Component } from 'react';
import logo from './logo.svg';
import './PersonalWebsite.css';
import Home from './Home.js';
import About from './About';
import Experiences from './Experiences';
import Projects from './Projects';
import Contact from './Contact'

class PersonalWebsite extends Component {

  // constructor(props){
  //   super(props);
  //   this.myRef = React.createRef();
  //   this.About = React.createRef();
  //   this.Experiences = React.createRef();
  //   this.Projects = React.createRef();
  //   this.Contact = React.createRef();
  // }

  render() {
    return (
      <div className="stuff-lmao" data-scroll-speed="0.2">
      {/* <ScrollView decelerationRate={0.5}>
      </ScrollView>  */}
        {/* <header className="Website-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
        <section>
          <Home/>
        </section>
        <section>
          <About/>
        </section>
        <section>
          <Experiences/>
        </section>
        <section>
          <Projects/>
        </section>
        <section>
          <Contact/>
        </section>

        
        {/* <About/>
        <Experiences/>
        <Projects/>
        <Contact/> */}
      </div>
    );
  }
}

export default PersonalWebsite;
