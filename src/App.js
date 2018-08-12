import React, { Component } from 'react';
import './App.css';
import Portrait from './img/portrait.jpg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Albert Pai</h1>
        </header>
        <div className="container">
            <div className="row App-intro">
              <div className="item">
                <img src={Portrait} alt='' className='avatar' />
              </div>
              <div className="item">
              <h1>About Pai</h1>
                <p>
                I am a junior developer in the kodiri bootcamp, and I am an avid learner of JavaScript and React. I believe programming can help make a better world, and benefits of technology should be shared with the society.
                </p>
              </div>
            </div>
            <br />
            <br />
            <br />
            <div className="row">
              <h1>Web Development Skills</h1>
              <div className="item">
                <p>JavaScript</p><i className="devicon-javascript-plain colored icon-medium"></i>
              </div>
              <div className="item">
                <p>React</p><i className="devicon-react-original colored icon-medium"></i>
              </div>
              <div className="item">
                <p>HTML5</p><i className="devicon-html5-plain colored icon-medium"></i>
              </div>
              <div className="item">
                <p>CSS3</p><i className="devicon-css3-plain colored icon-medium"></i>
              </div>
              <div className="item">
                <p>Bootstrap</p><i className="devicon-bootstrap-plain colored icon-medium"></i>
              </div>
              <div className="item">
                <p>Github</p><i className="devicon-github-plain colored icon-medium"></i>
              </div>
              <div className="item">
                <p>Git</p><i className="devicon-git-plain-wordmark colored icon-medium"></i>
              </div>
              <div className="item">
                <p>Heroku</p><i className="devicon-heroku-plain colored icon-medium"></i>
              </div>
              <div className="item">
                <p>Node.js</p><i className="devicon-nodejs-plain-wordmark colored icon-medium"></i>
              </div>
              <div className="item">
                <p>Express.js</p><i className="devicon-express-original colored icon-medium"></i>
              </div>
              <div className="item">
                <p>MongoDB</p><i className="devicon-mongodb-plain-wordmark colored icon-medium"></i>
              </div>
              <div className="item">
                <p>Ruby</p><i className="devicon-ruby-plain colored icon-medium"></i>
              </div>
            </div>
            <br />
            <br />
            <br />
            <div className="row">
              <h1>IT Skills</h1>
              <div className="item">
                <p>Visual Studio</p><i className="devicon-visualstudio-plain colored colored icon-medium"></i>
              </div>
              <div className="item">
                <p>Slack</p><i className="devicon-slack-plain colored icon-medium"></i>
              </div>
              <div className="item">
                <p>Trello</p><i className="devicon-trello-plain colored icon-medium"></i>
              </div>
            </div>
            <div className="row">              
              <div className="item">
                <h1>More Skills</h1>
                <p>Statistical software: SPSS</p>
                <p>Qualitative analysis software: NVivo</p>
                <p>Office software: Word, Excel and PowerPoint.</p>
                <p>Desktop publishing software: Adobe Acrobat Pro.</p>
                <p>Computer‐assisted translation tools: SDL Trados Studio and memoQ.</p>
                <p>Cloud-based translation tools: MateCat, XTM Cloud, Memsource Cloud.</p>
              </div>
              <div className="item">
               <h1>Hobbies</h1>
                <p>
                My hobbies include coding and web design. I also love exploring nature and listening to music.
                </p>
              </div>
              <div className="item">
              <h1>Contact Me</h1>
                <p>
                Email
                LinkedIn<i class="fab fa-linkedin"></i>
                Facebook<i className="devicon-facebook-plain"></i>
                Twitter<i className="devicon-twitter-plain"></i>
                </p>
              </div>
            </div>
        </div>
      </div>
    );
  }
}

export default App;
