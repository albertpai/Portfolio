import React, { Component } from 'react';
import './App.less';
import ContainerHeader from './components/container1Header.js';
import ContainerBio from './components/container2Bio.js';
import ContainerProject from './components/container3Project.js';
import ContainerWeb from './components/container4Web.js';
import ContainerMore from './components/container6More.js';
import ContainerContact from './components/container7Contact.js';
export default class App extends Component {
  render() {
    return (
      <div className="App">
        <ContainerHeader />
        <ContainerBio />
        <ContainerProject />
        <ContainerWeb />
        <ContainerMore />
        <ContainerContact />
      </div>
    )
  }
}