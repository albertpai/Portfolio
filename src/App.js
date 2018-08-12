import React, { Component } from 'react';
import './App.css';
import ContainerHeader from './container1Header.js';
import ContainerBio from './container2Bio.js';
import ContainerWeb from './container3Web.js';
import ContainerIT from './container4IT.js';
import ContainerMore from './container5More.js';
import ContainerProject from './container6Project.js';
import ContainerContact from './container7Contact.js';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <ContainerHeader />
        <ContainerBio />
        <ContainerWeb />
        <ContainerIT />
        <ContainerMore />
        <ContainerProject />
        <ContainerContact />
      </div>
    )
  }
}

// export default App;
