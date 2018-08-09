import React, { Component } from 'react';
import { Navbar, Jumbotron, Button } from 'react-bootstrap';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Albert Pai</h1>
        </header>
        <div className="App-intro">
          <h1>About Life of Pai</h1>
          <p>
            As a junior developer, I am an avid learner of JavaScript and React. I believe that programming can help make a better world, and technology should be shared with the society.
            </p>
          <h1>Frontend Web Development Skills</h1>
          <p>JavaScript</p>
          <p>HTML5</p>
          <p>CSS3</p>
          <p>Bootstrap</p>
          <p>React</p>
          <p>Ruby</p>
          <p>More Skills</p>
          <p>Statistical software: SPSS</p>
          <p>Qualitative analysis software: NVivo</p>
          <p>Office software: Word, Excel and PowerPoint.</p>
          <p>Desktop publishing software: Adobe Acrobat Pro.</p>
          <p>Computer‐assisted translation tools: SDL Trados Studio and memoQ.</p>
          <p>Cloud-based translation tools: MateCat, XTM Cloud, Memsource Cloud.</p>
          <h1>Hobbies</h1>
          <p>
            My hobbies include coding and web design. I also love exploring nature and listening to music.
            </p>
          <h1>Contact Me</h1>
          <p>
            Email
            LinkedIn
            Facebook
            Twitter
            </p>
        </div>
      </div>
    );
  }
}

export default App;
