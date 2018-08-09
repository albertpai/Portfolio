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
          <h1>Life of Pai</h1>
          <h1>Tech interests and skills</h1>
          <h1>Hobbies</h1>
        </div>
      </div>
    );
  }
}

export default App;
